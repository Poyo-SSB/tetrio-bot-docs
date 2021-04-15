# `replay` message (server)

A message containing replay input data for the players currently playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"replay"`.
    * (object) `data`: 
        * (string) `listenID`: The id of the user which the replay is from + gameID. Example: `"5e9fcb8583e2a23fbb017cbf152218"` where `"5e9fcb8583e2a23fbb017cbf"` is the userID and `"152218"` is the gameID
        * (object[]) `frames`:
           * (integer) `frame`: The frame the action was done on
           * (string) `type`: Possible values are `"keydown"` or `"keyup"` 
           * (object) `data`: 
              * (string) `key`: Possible values are `"hardDrop"`, `"softDrop"`, `"moveLeft"`, `"moveRight"`, `"rotateCW"`, `"rotateCCW"`, `"rotate180"` and `"hold"`  
              * (float) `subframe`: The subframe the action was done on
              * (integer) `provisioned`: Current frame
