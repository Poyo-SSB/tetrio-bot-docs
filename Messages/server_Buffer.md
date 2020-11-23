# Buffer message (server)

Unlike every other message, Buffer messages are not messages which contain commands. They instead contain a byte array which itself represents a Ribbon packet. These messages can then be extracted and processed as normal as detailed in [Ribbon](../Ribbon.md). Every packet contained in a Buffer message is an extracted-id packet (`0xAE`).

## Format

* (object):
    * (string) `type`: Always `"Buffer"`.
    * (integer[]) `data`: An array of bytes.