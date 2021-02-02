# `social.dm` message (sever)

A message sent from a Ribbon indicating that the client has received a message. This should always be received after sendin a message.

## Format

* (object):
  * (string) `command`: Always `"social.dm"`.
  * (object) `data`:
    * (string) `stream`: The IDs of the sender and recipient joined by colons. e.g `"abcdefghij:1234567890"`.
    * (object) `data`:
      * (string) `content`: Contents of the message.
      * (string) `content_safe`: Contents of the message after being passed though TETR.IO's profanity filter.
      * (string) `user`: The UUID of the sender.
      * (object) `userdata`:
        * (string) `role`: Currently, only `"user"` has been seen in practice.
        * (boolean) `supporter`: Whether the user is a TETR.IO supporter.
        * (boolean) `verified`: Whether the user is verified.
      * (boolean) `system`: Currently `false` in practice. System messages may be responses that the user has blocked them, or something along those lines.
    * (string) `ts`: An ISO 8601 formatted timestamp of the message.
    * (string) `_id`: The ID of the message.
