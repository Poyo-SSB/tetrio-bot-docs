# `hello` message (client)

A `hello` message should be sent to a Ribbon after resuming a connection (after a disconnection or when migrating) and after a [`resume` message](client_resume.md) has been sent.

## Format

* (object):
    * (string) `command`: Always `"hello"`.
    * (Message[]) `packets`: Previous messages sent by the client to the Ribbon. The official TETR.IO client sends the last 200 outgoing messages. This includes messages which the Ribbon may not have received, if it was disconnected at the time.

Yes, the property is called `packets` but it actually represents messages, not packets.