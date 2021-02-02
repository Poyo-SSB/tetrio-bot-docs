# `social.dm` message (client)

A message sent to the Ribbon indicating that the client wishes to send a message to someone.

## Format

* (object):
  * (string) `command`: Always `"social.dm"`.
  * (object) `data`:
    * (string) `recipient`: The UUID of the user that the client wants to message.
    * (string) `msg`: The message to send.

Note: When implementing chat, you shouldn't fully render the message once this has been sent, as the server will respond with a corresponding [social.dm message](server_social_dm.md) with the same data.
