# `createroom` message (client)

A message sent to the Ribbon to create a custom room. The Ribbon will respond with a [`joinroom` message](./server_joinroom.md) confirming that the room has been created and the user has joined it.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"createroom"`.
    * (string) `data`: Always either `"private"` or `"public"`.
