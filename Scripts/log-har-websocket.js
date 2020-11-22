import { promises as fs } from "fs";
import fsSync from "fs";
import path from "path";
import Base64ArrayBuffer from "base64-arraybuffer";
import msgpack from "msgpack-lite";

// CONSTANTS

// input .har file
const har_file = "./ribbon.har";
// output folder
const output_file = "./ribbon.log";
// har websocket index
const index = 0;

function formatTime(date) {
    // what? you want me to install luxon for *this*?
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

async function appendLog(timestamp, type, message) {
    const date = new Date(timestamp * 1000);

    await fs.appendFile(output_file, `[${formatTime(date)} ${type == "send" ? "O" : "I"}] ${JSON.stringify(message)}\n`);
}

// SCRIPT

const data = JSON.parse(await fs.readFile(har_file, "utf-8"));

const folder = path.parse(output_file).dir;

if (!fsSync.existsSync(folder)) {
    await fs.mkdir(folder);
}

await fs.writeFile(output_file, "");

for (const socketMessage of data.log.entries[index]._webSocketMessages) {
    const arrayBuffer = Base64ArrayBuffer.decode(socketMessage.data);
    const buffer = Buffer.from(arrayBuffer);

    // see Ribbon.md for more information on these headers.
    
    if (buffer[0] == 0x45) {
        const message = msgpack.decode(buffer.slice(1));
        await appendLog(socketMessage.time, socketMessage.type, message);
    } else if (buffer[0] == 0xAE) {
        const message = msgpack.decode(buffer.slice(5));
        const view = new DataView(arrayBuffer);
        const id = view.getUint32(1, false);
        message.id = id;
        await appendLog(socketMessage.time, socketMessage.type, message);
    } else if (buffer[0] === 0x58) {
        const items = [];
        const lengths = [];
        const view = new DataView(arrayBuffer);

        for (let i = 0; true; i++) {
            const length = view.getUint32(1 + (i * 4), false);
            if (length === 0) {
                break;
            }
            lengths.push(length);
        }

        let pointer = 0;
        for (let i = 0; i < lengths.length; i++) {
            items.push(buffer.slice(1 + (lengths.length * 4) + 4 + pointer, 1 + (lengths.length * 4) + 4 + pointer + lengths[i]));
            pointer += lengths[i];
        }

        for (const message of items) {
            await appendLog(socketMessage.time, socketMessage.type, message);
        }
    }
}