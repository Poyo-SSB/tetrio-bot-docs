# `chat` message (server)

A message representing a chat message.

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"chat"`.
    * (object) `data`:
        * (string) `content`: The content of the chat message.
        * (string) `content_safe`: The content of the chat message filtered for babies.
        * (object) `user`: The user who prompted the message.
            * (string) `username`: The username of the user.
            * (string) `_id`: The id of the user.
            * (string ([Role](../Data/Role.md))) `role`?: The role of the user.
            * (boolean) `supporter`?: Whether the user is a supporter.
            * (boolean) `verified`?: Whether the user is verified.
        * (boolean) `system`: Whether this is a system message.

`data.user.role`, `data.user.supporter`, and `data.user.verified` will not be present if `data.system` is `true`.