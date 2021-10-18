# `readymulti` message (server)

A message indicating that the custom room is about to start playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"readymulti"`.
    * (object) `data`:
        * (object) `options`: 
            * Options includes all the data in `game.options` and unmodifiable config section in [Room Config](../Room_Config.md)
            * (string) `latencypreference`: Unknown, only has been observed to be `"high"`, but might be different for people with less ping.
        * (object[]) `contexts`: 
            * (string) `listenID`: The event stream this data belongs to. This is the id of the user which sent the data concatenated with `gameID`.
            * (object) `user`:
                * (string) `_id`: The id of the user.
                * (string) `username`: The username of the user.
            * (object) `handling`: [Handling of the user](../Handling.md)
            * (object) `opts`:
                * (integer) `fulloffset`: Unknown.
                * (integer) `fullinterval`: Unknown.
            * (boolean) `alive`: Always `"true"`.
        * (string) `gameID`: The id of the current game.
        * (boolean) `first`: If the game is the first in the set or not.
        * (boolean) `started`: Always `"false"`.
        * (integer) `lastKickRun`: A Unix timestamp. Meaning is unknowned. Observed as 0 when not spectating?
        * (unknown?) `board`: Only currently observed to be null. Only appears when spectating.
        * (boolean?) `midgamespectate`: If you started spectating midgame? Only appears when spectating.

TODO: Needs more testing
