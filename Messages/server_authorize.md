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
            * (integer) `total_online`: The number of users online.
            * (object[]) `relationships`:
                * (string) `_id`: The id of the relationship?
                * (object) `from`:
                    * (string) `_id`: The initiating user's id.
                    * (string) `username`: The initiating user's name.
                    * (string) `avatar_revision`: The initiating user's avatar revision.
                * (object) `to`:
                    * (string) `_id`: The receiving user's id.
                    * (string) `username`: The receiving user's name.
                    * (string) `avatar_revision`: The receiving user's avatar revision.
                * ([RelationshipType](#Relationship-type)) `type`: The type of the relationship.
                * (integer) `unread`: Unread messages?
                * (string) `updated`: The ISO 8601-formatted timestamp of when the relationship was established?
            * (object) `presences`: An dictionary where keys are user ids and values is a ([Presence](../Data/Presence.md)).

## Relationship Type

The valid values of `data.social.relationships.type` are any of the following:

* `"friend"`
* `"pending"`
* `"block"`

TODO: This document is incomplete.
