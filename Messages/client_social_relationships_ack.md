# `social.relationships.ack` message (client)

A message sent to Ribbon acknowledging the receipt of a DM by the client, thereby clearing the incoming DM notification.

## Format

* (object):

    * (string) `command`: Always `"social.relationships.ack"`.
    * (string) `data`: The id of the user whose DM's the client wishes to acknowledge.