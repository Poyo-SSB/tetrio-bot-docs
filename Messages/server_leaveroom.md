# `leaveroom` message (client)

A message sent by a Ribbon to the client to confirm having left a room.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"leaveroom"`.
    * (string) `data`: The room id.