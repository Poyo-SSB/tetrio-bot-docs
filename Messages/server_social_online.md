# `social.online` message (server)

A message sent by a Ribbon to the client containing the total number of players currently online.

## Format

* (object):
  
    * (string) `command`: Always `"social.online"`.
    * (integer) `data`: The number of players currently online.