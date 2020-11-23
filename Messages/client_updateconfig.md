# `updateconfig` message (client)

A message sent by the host of the room to update the room settings.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"updateconfig"`.
    * (object[]) `data`: The id of the socket as provided in the [`hello` message](server_hello.md).
        * (string) `index`: The key of the setting to update.
        * (any) `value`: The value of the setting to update.

Possible values of `data.index` (and their respective `value`s) can be found in [Room Config](../Room_Config.md).