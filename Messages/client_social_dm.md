# `social.dm` message (client)

A message sent representing a social chat message sent by a client.

## Format

* (object):
    * (string) `command`: Always `"social.dm"`.
    * (object) `data`:
        * (string) `recipient`: The id of the user that the client intends to message.
        * (string) `msg`: The message to send.

When implementing chat, messages should not be processed when sent, as the server will respond with a corresponding [social.dm message](server_social_dm.md) to confirm that it has been received.
