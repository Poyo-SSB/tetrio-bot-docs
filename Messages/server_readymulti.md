# `readymulti` message (server)

A message indicating that the custom room is about to start playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"readymulti"`.
    * (object) `data`:
         * (object[]) `contexts`: 
               * (string) `listenID`: The event stream this data belongs to. This is the id of the user which sent the data concatenated with the id of the current game.
               * (boolean) `alive`: Always `"true"`.
         * (string) `gameID`: The ID of the game.
         * (boolean) `started`: Always `"false"`.

TODO: This document is incomplete.
