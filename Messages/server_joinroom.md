# `joinroom` message (server)

A message confirming that a user has joined a room, sent in response to a [`joinroom` message](client_joinroom.md) or a [`createroom` message](client_joinroom.md).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"joinroom"`.
    * (string) `data`: The four-letter id of the room to join, case-insensitive.