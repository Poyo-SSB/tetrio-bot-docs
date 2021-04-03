# `resume` message (client)

A message sent to a newly resumed connection to reestablish the same Ribbon session.

## Format

* (object):
    * (string) `command`: Always `"resume"`.
    * (string) `socketid`: The id of the socket as provided in the [`hello` message](server_hello.md).
    * (string) `resumetoken`: The resume token as provided in the [`hello` message](server_hello.md).
