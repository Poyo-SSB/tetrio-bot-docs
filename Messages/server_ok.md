# `ok` message (server)

A message sent by a Ribbon to the client to tell the client to display a message in the corner of the screen. Sent on confirmation of changing settings, etc.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"ok"`.
    * (string) `data`: String to display in the UI message.