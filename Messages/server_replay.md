# `replay` message (server)

A message containing replay input data for the players currently playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"replay"`.
    * (object) `data`: 
        * (string) `listenID`: The event stream this data belongs to. This is the id of the user which sent the data concatenated with the id of the current game.
        * (object[]) `frames`:
            * (integer) `frame`: The frame the event occurred on.
            * (string) `type`: Possible values are `"keydown"` and `"keyup"`.
            * (object) `data`: 
                * (string) `key`: Possible values are `"hardDrop"`, `"softDrop"`, `"moveLeft"`, `"moveRight"`, `"rotateCW"`, `"rotateCCW"`, `"rotate180"` and `"hold"`.
                * (float) `subframe`: The subframe the action was done on.
                * (integer) `provisioned`: The current frame.
