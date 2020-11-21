# `migrate` message (server)

A message sent from the Ribbon to indicate that a client should migrate to another websocket endpoint.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"migrate"`.
    * (object) `data`:
        * (string) `endpoint`: The websocket endpoint to reconnect to.
        * (string) `name`: The name of the worker.
        * (string) `flag`: The ISO 3166-1 country code of the worker (presumably its location).

I don't know why the worker data isn't its own object.