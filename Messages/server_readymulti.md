# `readymulti` message (server)

A message indicating that the custom room is about to start playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"readymulti"`.
    * (object) `data`:
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
        * (boolean) `started`: Always `"false"`.
    * (string) `gameID`: The id of the game.

TODO: This document is incomplete.
