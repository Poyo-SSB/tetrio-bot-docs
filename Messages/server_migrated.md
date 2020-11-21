# `migrated` message (server)

A message sent from the Ribbon to indicate that a client has successfully migrated to a new websocket.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"migrated"`.
    * (object) `data`:
        * (boolean) `success`: Whether the migration was successful, probably?
        * (boolean) `maintenance`: Unknown. Whether the server is undergoing maintenance right now? Maybe?
        * ([Worker](../Data/Worker.md)) `worker`: The worker we're communicating with.

I don't know why the worker data isn't its own object.