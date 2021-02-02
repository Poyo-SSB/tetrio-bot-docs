# `joinroom` message (client)

A message sent to the Ribbon to join a custom room. If the room is being hosted by another worker, then the Ribbon will send a [`migrate` message](server_migrate.md).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"joinroom"`.
    * (string) `data`: The four-letter id of the room to join, case-insensitive.