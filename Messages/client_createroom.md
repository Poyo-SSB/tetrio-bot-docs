# `createroom` message (client)

A message sent to the Ribbon to create a custom room.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"createroom"`.
    * (string) `data`: Always either `"private"` or `"public"`.

Server responds with a [`joinroom` message](./server_joinroom.md) confirming that the room has been created and the bot is now inside it.
