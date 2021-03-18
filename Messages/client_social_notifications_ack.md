# `social.notifications.ack` message (client)

A message sent to Ribbon acknowledging the receipt of a notification by the client, thereby clearing the notification
from the social panel.

## Format

* (object):

    * (string) `command`: Always `"social.notifications.ack"`.
    * (string) `data`?: Presumably the id to acknowledge. The official client doesn't appear to set this - leaving it unset will acknowledge all notifications.  