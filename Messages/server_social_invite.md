# `social.invite` message (server)

A message sent representing a room invite received by a client.

## Format

* (object):
    * (string) `command`: Always `"social.invite"`.
    * (object) `data`:
      * (string) `sender`: The ID of the player who invited the client
      * (string) `roomid`: The room ID to join
      * (string) `roomname`: The name of the room (used for the notification popup)
  