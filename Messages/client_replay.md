# `replay` message (client)

A message sent to the Ribbon of the current gameplay state of the client.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"replay"`.
    * (object) `data`:
        * (string) `listenID`: The id of the user to switch the bracket of.
        * ([Frame](../Data/Frame.md)[]) `frames`: The gameplay events that the client has emitted.
        * (string): `provisioned`?: Unknown. Doesn't seem to have any value.
