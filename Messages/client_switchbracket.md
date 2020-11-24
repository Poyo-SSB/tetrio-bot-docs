# `switchbracket` message (client)

A message sent to the Ribbon indicating the user's intent to switch their bracket.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"switchbracket"`.
    * (string) `data`: Always either `"player"` or `"spectator"`.