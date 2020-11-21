# `kick` message (server)

A message sent by a Ribbon to the client when the client violates protocol and the Ribbon feels unsafe.

## Format

* (object):
    * (string) `command`: Always `"nope"`.
    * (string) `reason`: Reason for "noping out".