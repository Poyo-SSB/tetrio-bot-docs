# `social.dm` message (sever)

A message sent from a Ribbon indicating that the client has received a social message, including messages that the client sends.

## Format

* (object):
    * (string) `command`: Always `"social.dm"`.
    * (object) `data`:
        * (string) `stream`: The id of the chat stream. In practice, this is always the id of the client and the id of the other user joined by a colon, e.g. `"abcdef:012345"`.
        * (object) `data`:
            * (string) `content`: Contents of the message.
            * (string) `content_safe`: Contents of the message after being passed through TETR.IO's profanity filter.
            * (string) `user`: The id of the sender.
            * (object) `userdata`:
                * (string) `role`: The role of the user. One of [`"anon"`, `"user"`, `"bot"`, `"mod"`, `"admin"`], though `anon` and `bot` will never be seen in-practice as these users cannot use the social system.
                * (boolean) `supporter`: Whether the user is a supporter.
                * (boolean) `verified`: Whether the user is verified.
            * (boolean) `system`: Whether this is a system message.
        * (string) `ts`: The ISO 8601-formatted timestamp of the message.
        * (string) `_id`: The id of the message.

`data.data.user` and `data.data.userdata` may not be present if `data.data.system` is `true`, though this has yet to be observed.