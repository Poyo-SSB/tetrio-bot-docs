# `joinroom` message (server)

A message confirming that a user has joined a room, sent in response to a [`joinroom` message](client_joinroom.md) or a [`createroom` message](client_joinroom.md).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"joinroom"`.
    * (object) `data`: 
        * (string) `id`: The id of the room that was joined.
        * (boolean) `silent`: Whether or not the join was silent (when the room is in superlobby mode)?
