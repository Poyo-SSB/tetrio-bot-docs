# `authorize` message (client)

The client should send an `authorize` message upon first connecting to a Ribbon and recieving a [`hello` message](server_hello.md). The Ribbon will respond with an [`authorize` message](server_authorize.md).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"authorize"`.
    * (object) `data`:
        * (string) `token`: The authentication token of the bot user. **This is sensitive information and should never be shared with anyone, no exceptions. Do not store it in your code.**
        * ([Handling](../Data/Handling.md)) `handling`: The bot user's handling.
        * (object) `signature`:
            * (string) `mode`?: Always `"production"` in practice but could probably be `"debug"` or something.
            * (string) `version`?: The human-readable version of TETR.IO being targeted (e.g. `"1.0.0"`).
            * (boolean) `countdown`?: Always `false`. Was used to signify the countdown to the launch of TETR.IO. 
            * (object) `commit`: Information regarding the commit of TETR.IO being targeted. This is the only required property of `signature`.
                * (string) `id`: Commit id.
                * (integer) `time`?: The Unix timestamp of the commit in milliseconds.
            * (string) `serverCycle`?: Unknown. 
            * (object) `build`?:
                * (string) `id`?: Build id.
                * (integer) `time`?: The Unix timestamp of the build in milliseconds.
        * (string) `i`?: Unknown. Some sort of hash or other such hexadecimal string.

The latest `signature` data can be found at the top of [tetrio.js](https://tetr.io/js/tetrio.js).