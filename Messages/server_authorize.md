# `authorize` message (server)

A message sent by a Ribbon to the client to accept or reject an [`authorize` message](client_authorize.md).

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"authorize"`.
    * (object) `data`:
        * (boolean) `success`: Whether the authorization request was successful.
        * (boolean) `maintenance`: Probably whether the server is undergoing maintenance right now.
        * ([Worker](../Data/Worker.md)) `worker`: The worker the client is communicating with.
        * (object) `social`:
            * (integer) `total_online`: The number of people online.
            * (object[]) `relationships`:
                * (string) `_id`: The id of the relationship?
                * (object) `from`:
                    * (string) `_id`: The id of the user who started the relationship? (This is probably the id of the user recieving this packet)
                    * (string) `username`: The username of the user.
                    * (number) `avatar_revision`: The revision of the avatar.
                * (object) `to`: Exactly the same with from, except for the user who recieved the relationship.
                * (string) `type`: The type of the relationship. Ex. "friend", "pending", or "block". There might be some other types.
                * (number) `unread`: Unread messages?
                * (string) `updated`: When the relationship was established? (This is an ISO-8601 time string)
            * (object) `presences`: An object where the key is a userID and the value is a presence
                * ([Presence](../Data/Presence.md)) [userID]

TODO: This document is incomplete.
