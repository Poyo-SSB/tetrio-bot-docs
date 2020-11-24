# Scripts

This folder contains [Node.js](https://nodejs.org/) scripts that a TETR.IO bot developer may find useful.

# Installation

<!--
i think i'd like to use deno... but i doubt most people would be willing to install a new runtime just for this. maybe in a couple of years.
-->

1. Install Node (version ≥ 14.8.0).
1. Restore packages: `npm install`
1. Run script: `node <script>`

# Notes

All of the scripts here process `.har` websocket data. As mentioned in [Observing Ribbon](../Observing_Ribbon.md), the data is stored in an object containing the key `_webSocketMessages` in the `log.entries` array. There may be multiple of these, so when recording the index, make sure to select the correct one.

# `dump-har-bin.js`

This script dumps websocket packets in binary format to individual `.bin` files for inspection (via a hex editor). Change the constants for the `.har` websocket index, the input file, and the output folder.

# `log-har-websocket.js`

This script logs individual Ribbon messages to a log file. Change the constants for the `.har` websocket index, the input file, and the output file.

Note that this script does not give special treatment to [Buffer messages](../Messages/server_Buffer.md), but the script can be trivially modified to do so.