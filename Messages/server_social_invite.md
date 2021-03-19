# `social.invite` message (server)

A message sent representing a room invite received by a client.

## Format

* (object):
    * (string) `command`: Always `"social.invite"`.
    * (object) `data`:
      * (string) `sender`: The id of the player who invited the client.
      * (string) `roomid`: The room id to join.
      * (string) `roomname`: The name of the room.
  