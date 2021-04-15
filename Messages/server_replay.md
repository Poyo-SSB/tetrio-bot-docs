# `replay` message (server)

A message containing replay input data for the players currently playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"replay"`.
    * (object) `data`: 
      * (string) `listenID`: The id of the user which the replay is from + gameID
      * (array) `frames`:
         * (integer) `frame`: The frame the action was done on
         * (string) `type`: Possible values are `"keydown"` or `"keyup"` 
         * (object) `data`: 
            * (string) `key`: Possible values are `"hardDrop"`, `"softDrop"`, `"moveLeft"`, `"moveRight"`, `"rotateCW"`, `"rotateCCW"`, `"rotate180"` and `"hold"`  
            * (number) `subframe`: The subframe the action was done on
         * (integer) `provisioned`: Value is unknown. Seems like a value that goes up by a random amount every time

TODO: This document is incomplete.
