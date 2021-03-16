# ~~`pong` message (server)~~

**The networked form of this message was removed in version 6.0.3 and has been replaced by [`0x0C` pong extension packets](../Ribbon.md#0xb0-extension-tag).**

A message sent by a Ribbon to the client in response to a [`ping` message](client_ping.md).

## Format

* (object):
    * (string) `command`: Always `"pong"`.