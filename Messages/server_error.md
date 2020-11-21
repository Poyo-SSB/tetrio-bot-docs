# `error` message (server)

A message sent by a Ribbon to the client when the client does something wrong.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"error"`.
    * (string) `data`: Description of the error.