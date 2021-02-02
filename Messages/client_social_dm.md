# `social.dm` message (client)

A message sent to the Ribbon indicating that the client wishes to send a message to someone.

## Format

* (object):
  * (string) `command`: Always `"social.dm"`.
  * (object) `data`:
    * (string) `recipient`: The UUID of the user that the client wants to message.
    * (string) `msg`: The message to send.
