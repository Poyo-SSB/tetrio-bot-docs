# `chat` message (client)

A message representing a chat message sent by the client.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"chat"`.
    * (string) `data`: The chat message. Whitespace-only messages are allowed.