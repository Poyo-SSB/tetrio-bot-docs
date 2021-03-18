# `social.presence` message (server)

A message sent by a Ribbon to the client to indicate that a friend has changed their presence.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"social.presence"`.
    * (Presence) `data`: The friend's [Presence](../Data/Presence.md).