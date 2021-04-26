# `replay` message (server)

A message containing replay input data or sent lines for the players currently playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"replay"`.
    * (object) `data`: 
        * (string) `listenID`: The event stream this data belongs to. This is the id of the user which sent the data concatenated with the id of the current game (as found in the [`readymulti` message](server_readymulti.md)).
        * (object[]) `frames`:
            * (integer) `frame`: The frame the event occurred on.
            * (string) `type`: Possible values are `"keydown"`, `"keyup"` and `"ige"`.
            * (object) `data`: 
                * (string) `key`: Possible values are `"hardDrop"`, `"softDrop"`, `"moveLeft"`, `"moveRight"`, `"rotateCW"`, `"rotateCCW"`, `"rotate180"` and `"hold"` (not available on type ige).
                * (float) `subframe`: The subframe the action was done on (not available on type ige).
                * (integer) `provisioned`: The current frame (not available on type ige).
                * (integer) `id`: Integer that increments every time type ige replay gets sent (only available on type ige).
                * (integer) `frame`: The frame the event occurred on (for some reason this is always slightly different than any other frame integer).
                * (string) `type`: Possible values are `"ige"` (only available on ige).
                * (object) `data`:
                    * (string) `type`: Always `"attack"`.
                    * (integer) `lines`: Amount of lines sent.
                    * (integer) `column`: The column where the lines were sent to.
                    * (string) `sender`: The username of the user who sent the attack
                    * (integer) `sent_frame`: The frame the event occurred on (for some reason this is always slightly different than any other frame integer).

