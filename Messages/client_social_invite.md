# `social.invite` message (client)

A message sent representing a room invite sent by a client.

## Format

* (object):
    * (string) `command`: Always `"social.invite"`.
    * (string) `data`: The id of the user that the client intends to invite.
  