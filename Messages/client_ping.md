# ~~`ping` message (client)~~

**The networked form of this message was removed in version 6.0.3 and has been replaced by [`0x0B` ping extension packets](../Ribbon.md#0xb0-extension-tag).**

A message sent to a Ribbon periodically to remind it that we're alive. \o/

## Format

* (object):
    * (string) `command`: Always `"ping"`.