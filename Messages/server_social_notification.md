# `social.notification` message (server)

A message sent to a client indicating the presence of a new social notification.

## Format

* (object):
    * (string) `command`: Always `"social.notification"`.
    * (object) `data`:
        * (string) `stream`: The notification stream. Currently only observed to be `"user_[USERID]"`, where `[USERID]`
          is the user who initiated the notification (by adding a friend, for example).
        * (string) `type`: One of `"friend"` or `"supporter_gift"`.
        * (object) `data`: Type-specific notification data. See below for the format of this object.
        * (string) `ts`: The ISO 8601-formatted timestamp of the notification.
        * (boolean) `seen`: Whether the notification has been [acknowledged](client_social_notifications_ack.md) yet.
        * (string) `_id`: The notification ID, presumably used to acknowledge the notification.
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    
## `friend` notification format

* (object) `relationship`:
  * (object) `from`:
      * (string) `_id`: The initiating user's id.
      * (string) `username`: The initiating user's name.
      * (string) `avatar_revision`: The initiating user's avatar revision.
  * (object) `to`:
      * (string) `_id`: The receiving user's id.
      * (string) `username`: The receiving user's name.
      * (string) `avatar_revision`: The receiving user's avatar revision.
* (boolean) `ismutual`: Whether the two users are mutual friends.

## `supporter_gift` notification format

<!-- see https://kagar.in/disappointment.png for context -->

* (string) `userid`: The id of the user who sent the gift.
* (string) `username`: The name of the user who sent the gift.
* (string) `avatar_revision`: The avatar revision of the user who sent the gift.
* (integer) `months`: The number of months gifted.