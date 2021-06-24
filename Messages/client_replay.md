# `replay` message (client)

A message containing replay input data or sent lines for the players currently playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"replay"`.
    * (object) `data`: 
        * (string) `listenID`: The gameID (as found in the [`readymulti` message](server_readymulti.md)).
        * (object[]) `frames`:
            * (integer) `frame`: The frame the event occurred on.
            * (string) `type`: Possible values are `"keydown"`, `"keyup"`, `"ige"`, `"start"`, `"targets"`, `"full"` and `"end"'`.
            * (object) `data`:  (for type keydown and keyup)
                * (string) `key`: Possible values are `"hardDrop"`, `"softDrop"`, `"moveLeft"`, `"moveRight"`, `"rotateCW"`, `"rotateCCW"`, `"rotate180"` and `"hold"`.
                * (float) `subframe`: The subframe the action was done on.
                * (integer) `provisioned`: The current frame.
            * (object) `data`: (for type ige)
                * (integer) `id`: Integer that increments every time type ige replay gets sent.
                * (integer) `frame`: The frame the event occurred on.
                * (string) `type`: Possible values are `"ige"`.
                * (object) `data`:
                    * (string) `type`: Always `"attack"`.
                    * (integer) `lines`: Amount of lines sent.
                    * (integer) `column`: The column where the lines were sent to.
                    * (string) `sender`: The username of the user who sent the attack
                    * (integer) `sent_frame`: The frame the event occurred on (for some reason this is always slightly different than any other frame integer).
            * (object) `data`: Always `{}` (for type start)
            * (object) `data`: (for type targets)
                * (string) `id`: Always `"diyusi"`.
                * (integer) `frame`: The frame the event occurred on.
                * (string) `type`: Always `"targets"`.
                * (string[]) `data`: The event streams to target. This is the id of the user which sent the data concatenated with the id of the current game (as found in the [`readymulti` message](server_readymulti.md)). The official TETR.IO client seems to only ever send one event stream at a time.

TODO: This document is incomplete.
