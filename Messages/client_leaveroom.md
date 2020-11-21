# `leaveroom` message (client)

A message sent to the Ribbon when leaving the current room.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"leaveroom"`.
    * (boolean) `data`: Unknown? Seems safe to leave it as `false`.