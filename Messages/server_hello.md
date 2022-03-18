# `hello` message (server)

A message sent to a client after connecting.

## Format

* (object):
    * (string) `command`: Always `"hello"`.
    * (string) `id`: The id of the socket connection.
    * (string) `resume`: The resume token.
    * (Message[]) `packets`: Previous messages sent by the Ribbon to the client. This includes messages which the client may not have received, if it was disconnected at the time.

Yes, the property is called `packets` but it actually represents messages, not packets.