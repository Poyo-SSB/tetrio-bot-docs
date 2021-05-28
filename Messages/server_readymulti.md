# `readymulti` message (server)

A message indicating that the custom room is about to start playing.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"readymulti"`.
    * (object) `data`:
        * (object) `options`:
            * (integer) `version`: Protocol version, maybe? Always `15`.
            * (boolean) `seed_random`: Whether the game's RNG seed is random?
            * (integer) `seed`: The RNG seed of the game.
            * (boolean) `countdown`: Whether the game has a countdown.
            * (integer) `countdown_count`: The number from which to countdown.
            * (integer) `countdown_interval`: The time in milliseconds between each count.
            * (integer) `precountdown`: The time in milliseconds before the countdown begins.
            * (integer) `prestart`: The time in milliseconds before the time before the countdown begins?
            * (string) `mission`: Seems to be room name.
            * (string) `mission_type`: Unused. Always `"mission_versus"`.
            * (string) `zoominto`: Unknown. Always `"slow"`?
            * (boolean) `display_lines`: Whether to display the number of lines cleared.
            * (boolean) `display_attack`: Whether to display the APM.
            * (boolean) `display_pieces`: Whether to display the number of pieces placed.
            * (boolean) `display_impending`: Whether to display the attack bar?
            * (boolean) `display_kills`: Whether to display the number of KOs.
            * (boolean) `display_placement`: Whether to display the current placement.
            * (boolean) `display_fire`: Whether to display fire, obvs.
            * (boolean) `display_username`: Unknown.
            * (boolean) `hasgarbage`: Whether the game has garbage?
            * (boolean) `neverstopbgm`: Whether to keep the BGM playing between games.
            * (integer) `forfeit_time`: Time in frames that a player needs to hold the quit button to forfeit.
            * (boolean) `infinitemovement`: Whether to enable infinite movement (disable lock resets).
            * (integer) `lockresets`: How many times to enable resetting the lock delay (by rotating or moving a piece).
            * (object) `objective`: Unknown.
                  * (string) `type`: Unknown. Always `"none"`. 
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
    * (string) `gameID`: The id of the game.

`data.options` contain several more properties pertaining to the settings of a room in addition to the ones listed above in the. See the keys that start with `game.options` in [Room Config](../Room_Config.md) for these. The properties listed above and not on the aforementioned page are generally not modifiable by a user in-game.

TODO: This document is incomplete.
