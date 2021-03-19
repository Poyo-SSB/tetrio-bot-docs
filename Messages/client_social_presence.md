# `social.presence` message (client)

A message sent to Ribbon representing a social system presence update.

## Format

* (object):
    * (string) `command`: Always `"social.presence"`.
    * (Presence) `data`: The user's [Presence](../Data/Presence.md).
