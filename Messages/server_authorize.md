# `authorize` message (server)

A message sent by a Ribbon to the client to accept or reject an [`authorize` message](client_authorize.md).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"authorize"`.
    * (object) `data`:
        * (boolean) `success`: Whether the authorization request was successful.
        * (boolean) `maintenance`: Unknown. Whether the server is undergoing maintenance right now? Maybe?
        * ([Worker](../Data/Worker.md)) `worker`: The worker we're communicating with.