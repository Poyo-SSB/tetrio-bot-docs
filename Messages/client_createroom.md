# `createroom` message (client)

A message sent to the Ribbon to create a custom room.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"createroom"`.
    * (string) `data`: Always either `"private"` or `"public"`.

The latest `signature` data can be found at the top of [tetrio.js](https://tetr.io/js/tetrio.js).
