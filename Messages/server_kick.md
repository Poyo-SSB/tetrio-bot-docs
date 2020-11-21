# `kick` message (server)

A message sent by a Ribbon to the client when it detects that the client is acting strangely (e.g. being awfully quiet or sending weird packets).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"kick"`.
    * (string) `data`: Reason for kick.