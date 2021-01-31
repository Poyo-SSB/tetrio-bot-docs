# Breaking changes

This page lists breaking changes since version **5.1.3** of TETR.IO (commit id `0060f6a`, November 19, 2020, 4:07 PM UTC).

## 6.0.0 (`3a422fb`, January 31, 2021, 4:20 PM UTC)

* Friend system added, which means that the official TETR.IO client will try to establish a Ribbon on startup instead of when entering the multiplayer screen.
* The official TETR.IO client will now only close a Ribbon after losing 5200 packets (up from 600).
* The official TETR.IO client will send 30 seconds worth of previous packets in a [`hello` message](Messages/client_hello.md) (changed from 200). See [Resuming a connection](Resuming_a_connection.md) for the code that calculates how many packets to send.