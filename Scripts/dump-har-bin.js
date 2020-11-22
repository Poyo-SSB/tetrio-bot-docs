import { promises as fs } from "fs";
import fsSync from "fs";
import path from "path";
import Base64ArrayBuffer from "base64-arraybuffer";

// CONSTANTS

// input .har file
const har_file = "./ribbon.har";
// output folder
const output_folder = "./ribbon-bin";
// har websocket index
const index = 0;

// SCRIPT

const data = JSON.parse(await fs.readFile(har_file, "utf-8"));

if (!fsSync.existsSync(output_folder)) {
    await fs.mkdir(output_folder);
}

for (const socketMessage of data.log.entries[index]._webSocketMessages) {
    const time = Math.round(socketMessage.time * 1000000) // shhh
    const filename = time + "-" + socketMessage.type + ".bin";

    const buffer = Base64ArrayBuffer.decode(socketMessage.data);

    await fs.writeFile(path.join(output_folder, filename), Buffer.from(buffer));
}