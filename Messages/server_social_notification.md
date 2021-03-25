# `social.notification` message (server)

A message sent to a client indicating the presence of a new social notification.

## Format

* (object):
    * (string) `command`: Always `"social.notification"`.
    * (object) `data`:
        * (string) `stream`: The notification stream. Currently only observed to be `"user_[USERID]"`, where `[USERID]`
          is the user who initiated the notification (by adding a friend, for example).
        * (string) `type`: One of `"test"`, `"announcement"`, `"supporter_new"`, `"supporter_gift"`, `"supporter_specialthanks"`, `"supporter_expiring"`, `"supporter_expired"` or `"friend"`.
        * (object) `data`: Type-specific notification data. See below for the format of this object.
        * (string) `ts`: The ISO 8601-formatted timestamp of the notification.
        * (boolean) `seen`: Whether the notification has been [acknowledged](client_social_notifications_ack.md) yet.
        * (string) `_id`: The notification id, presumably used to acknowledge the notification.
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    
## `test` notification format

A test notification. Shown in the client as an "admin green" notification popup, alongside a
[picture of Kagari](https://tetr.io/user-content/avatars/5e331c3ce24a5a3e258f7a1b.jpg?rv=1601325213424).

* (string) `message`: A message to show alongside the notification.

## `announcement` notification format.

An arbitrary notification type with several parameters, that is often used to promote in-game events.

* (string) `pri`?: The primary hex colour of the notification.
* (string) `sec`?: The secondary hex colour of the notification.
* (string) `img_main`?: URL to the primary image of the notification. 
* (string) `img_sub?`: URL to the secondary image of the notification.
* (string) `header`: The header of the notification.
* (string) `content`: The content of the notification.
* (string) `action`?: The action taken when the notification is clicked.

If set, the `action` parameter has one the following effects in the client:

* `"user:[USERID]"` - opens the specified user's profile card.
* `"support"` - opens the supporter purchase dialog.
* `"url:[URL]"` - opens the specified URL in another tab.
* `"room:[ROOMID]"`- joins the specified room.

## `supporter_new` notification format

Sent when you become a TETR.IO supporter as a result of purchasing months for yourself. No specific data is included.

## `supporter_gift` notification format

Sent when another user gifts you TETR.IO supporter.

<!-- see https://kagar.in/disappointment.png for context -->

* (string) `userid`: The id of the user who sent the gift.
* (string) `username`: The name of the user who sent the gift.
* (string) `avatar_revision`: The avatar revision of the user who sent the gift.
* (integer) `months`: The number of months gifted.

## `supporter_specialthanks` notification format

Sent when you become listed in the Special Thanks section of the in-game About page. No specific data is included.

## `supporter_expiring` notification format

Sent when your TETR.IO supporter status is going to expire soon.

* (string) `expires`: When your supporter status will expire, as an ISO 8601-formatted timestamp.

## `supporter_expired` notification format

Sent when your TETR.IO supporter status has expired. No specific data is included.

## `friend` notification format

Sent when another user adds you as a friend.

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