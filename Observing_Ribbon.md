# Observing Ribbon

In attempting to act as a client for a Ribbon, it may be necessary to study the data exchanged by the official client and a Ribbon. The below instructions detailing how to obtain that information apply to Google Chrome (version ≥76) or the TETR.IO desktop app. There may be ways to retrieve this data using other browsers.

1. With TETR.IO open, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> or <kbd>F12</kbd> to open the Chromium DevTools.
1. Navigate to the `Network` tab.
1. Filter network activity to only websocket activity by clicking on the `WS` text in the filter list.
1. In TETR.IO, navigate to the multiplayer menu and do something (ideally join a private custom room, play a game, and leave). When you're done, leave the multiplayer menu.
1. In the DevTools, there will be one or more items with names beginning with `ribbon`. Right-click each one and select `Save all as HAR with content` and save the files.
1. The resulting `.har` files contain all the data relating to the websocket, including the messages transmitted to and from the Ribbon server.

`.har` files are JSON objects. The websocket messages are stored in an item in `log.entries` containing an array named `_webSocketMessages`. `log.entries` may contain multiple such items, so be careful to get the right one. `_webSocketMessages` is an array of the following data structure:

* (object): A websocket message.
    * (string) `type`: Either `"send"` or `"receive"`.
    * (float) `time`: The Unix timestamp of this message in seconds.
    * (integer) `opcode`: Websocket opcode, or something.
    * (string) `data`: The binary data of this messge encoded in Base64.

If you're writing a bot, it shouldn't be difficult to write a script to dump the binary data into files for inspection via a hex editor or to convert the contained messages into JSON for human readibility.