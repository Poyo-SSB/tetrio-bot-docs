# Breaking changes

This page lists breaking changes since version **5.1.3** of TETR.IO (commit id `0060f6a`, November 19, 2020, 4:07 PM UTC).

## 6.0.0 (`3a422fb`, January 31, 2021, 4:20 PM UTC)

* Friend system added, which means that the official TETR.IO client will try to establish a Ribbon on startup instead of when entering the multiplayer screen.
* The official TETR.IO client will now only close a Ribbon after losing 5200 packets (up from 600).
* The official TETR.IO client will send 30 seconds worth of previous messages in a [`hello` message](Messages/client_hello.md) (changed from 200). See [Resuming a connection](Resuming_a_connection.md) for the code that calculates how many messages to send.

## 6.0.2 (`7df7eec`, March 11, 2021, 9:22 PM UTC)

* Bots can now use the social system (i.e. add friends, send DMs, etc.) and may be gifted TETR.IO Supporter.

## 6.0.3 (`d16ac3c`, March 16, 2021, 7:42 PM UTC)

* [`ping` messages](Messages/client_ping.md) and [`pong` messages](Messages/client_ping.md) have been removed in favor of their equivalent [`0x0B` ping and `0x0C` pong extension packets](../Ribbon.md#0xb0-extension-tag). This entails no functional difference, however. The official TETR.IO client, for example, simply translates extension packets into the corresponding messages (e.g. a packet containing `0xB0 0x0B` would be treated as if it contained the message `{"command":"ping"}`).
* The official TETR.IO client will now uncache messages older than 25 seconds (stored to send in a [`hello` message](Messages/client_hello.md) upon resumption of a Ribbon).