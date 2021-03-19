# `social.relationships.ack` message (client)

A message sent to Ribbon acknowledging the receipt of a direct message by the client, thereby clearing the incoming direct message notification.

## Format

* (object):
    * (string) `command`: Always `"social.relationships.ack"`.
    * (string) `data`: The id of the user whose direct message the client wishes to acknowledge.