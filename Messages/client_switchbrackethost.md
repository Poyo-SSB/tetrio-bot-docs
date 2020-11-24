# `switchbrackethost` message (client)

A message sent to the Ribbon from the host of a room to indicate switching a player's bracket.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"switchbrackethost"`.
    * (object) `data`:
        * (string) `uid`: The id of the user to switch the bracket of.
        * (string) `bracket`: Always either `"player"` or `"spectator"`.