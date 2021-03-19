# `social.presence` message (server)

A message sent by a Ribbon to the client to indicate that a friend has changed their presence.

## Format

* (object):
    * (string) `command`: Always `"social.presence"`.
    * ([Presence](../Data/Presence.md)) `data`: The friend's presence information.