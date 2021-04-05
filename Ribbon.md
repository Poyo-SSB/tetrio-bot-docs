# Ribbon

**Ribbon** is the name for the websocket networking system used by TETR.IO since version 4.2.0. The base websocket URI is `wss://tetr.io/ribbon`.

When this documentation is unclear, incomplete, or out of date, reference [tetrio.js](https://tetr.io/js/tetrio.js). Most of it is obfuscated and/or minified, but the Ribbon code is not, even including comments.

To collect data exchanged between an official TETR.IO client and a Ribbon, see [Observing Ribbon](Observing_Ribbon.md).

## Terminology

Within the context of this documentation:
* A **packet** is a binary blob sent over the websocket connection.
* A **message** is a data object. **Packets** may contain one or more **messages**, and certain types of **messages** may contain nested **messages** within them.

This is NOT the terminology that TETR.IO uses in its message format and code—it uses these two terms interchangeably.

## Diagram notation

one byte:

```
+------+
|      |
+------+
```

a variable number of bytes:

```
+======+
|      |
+======+
```

## MessagePack

Packets contain a header followed by one or more messages in [MessagePack format](https://msgpack.org/). MessagePack has [numerous implementations](https://msgpack.org/index.html#languages) covering every language under the sun. The MessagePack implementation used by both TETR.IO's client and server is [msgpack-lite](https://github.com/kawanet/msgpack-lite) ([npm](https://www.npmjs.com/package/msgpack-lite)). If you wish to reinvent the wheel or need to inspect binary data for debugging purposes, the binary specification can be found [here](https://github.com/msgpack/msgpack/blob/master/spec.md).

All top-level MessagePack objects contained within a packet are maps (i.e. `fixmap`, `map 16`, or `map 32`).

## Packet format

Packets will always begin with one of three bytes, signifying the header type. Both a Ribbon and a client may send any of these three packet types, but the client can probably get away with only sending `0x45`.

### `0x45` Standard id tag

A packet beginning with `0x45` is a standard packet and everything after the first byte can be unpacked and processed.

```
+------+==============+
| 0x45 | msgpack blob |
+------+==============+
```

### `0xAE` Extracted id tag

A packet beginning with `0xAE` is an extracted-id packet, containing a big-endian 32-bit unsigned integer message id to be injected into the unpacked object before processing.

```
+------+-----+-----+-----+-----+==============+
| 0x45 | extracted id (uint32) | msgpack blob |
+------+-----+-----+-----+-----+==============+
```

**Note:** The unpacked object might not contain an `id` key, so don't rely on its presence.

I don't know why this packet type exists.

### `0x58` Batch tag

A packet beginning with `0x58` is a batch packet, containing a zero-terminated array of big-endian `uint32`s. These values represent the length of the following packets.

```
+------+------+------+------+------+------+------+------+------+===================+
| 0x45 |   N lengths (uint32)...   | 0x00   0x00   0x00   0x00 | N packet blobs... |
+------+------+------+------+------+------+------+------+------+===================+
```

The blobs stored in this packet format are **packets**, not **messages**, meaning that they themselves contain one of these three headers (though probably always the first two).

This packet type was added in TETR.IO 5.1.3.

### `0xB0` Extension tag

A packet beginning with `0xB0` is an extension packet, used to relay terse messages via the second byte. It's currently only used for pings and pongs.

```
+------+------+
| 0xB0 | type |
+------+------+
```

The current possible values for the second byte include:

* `0x0B` ping (client)
* `0x0C` pong (server)

The `0x0B` ping and `0x0C` pong packets replace the [`ping` message](Messages/client_ping.md) and [`pong` message](Messages/server_pong.md) used prior to TETR.IO 6.0.3.

## Message protocol

If this protocol is violated, the server will usually send either a [`nope` message](Messages/server_nope.md) or [`kick` message](Messages/server_kick.md) and end the connection.

As a given, to keep the connection alive, the client should periodically send a `0x0B` ping extension packet, which will be responded to with a `0x0C` pong extension packet. The official TETR.IO client sends a ping every 5000ms.

Upon connecting to a Ribbon, the client must send a [`new` message](Messages/client_new.md). The server will respond with a [`hello` message](Messages/server_hello.md). The client must then send an [`authorize` message](Messages/client_authorize.md), which will be responded to with an [`authorize` message](Messages/server_authorize.md). At this point, the client is free to do whatever.

When the client is done, it should send the Ribbon a [`die` message](Messages/client_die.md) to indicate a graceful closure. Poetic.

## Id messages

Most Ribbon messages have an integer `id` property. For gameplay especially, it is crucial to process these messages in order, so both client and server messages may have this property, incrementing the value every time a message is sent. For a possible implementation, see [tetrio.js](https://tetr.io/js/tetrio.js). Note that the ids of client messages and the ids of server messages will fall out of alignment because not every message from one side will result in a response from the other.

If too many messages are out of order, it's advisable to close the connection. The official TETR.IO client will close the connection if more than 5200 packets are out of order.

## Buffer messages

Sometimes, the server will send [Buffer messages](Messages/server_Buffer.md). It's very important that any client handle these properly.

## List of messages

**Note:** There are several messages not documented because they are only relevant to non-bot users (e.g. Tetra League/Quick Play).

### Client

* [authorize](Messages/client_authorize.md)
* [chat](Messages/client_chat.md)
* [createroom](Messages/client_createroom.md)
* [die](Messages/client_die.md)
* [hello](Messages/client_hello.md)
* [joinroom](Messages/client_joinroom.md)
* [leaveroom](Messages/client_leaveroom.md)
* [new](Messages/client_new.md)
* [ping](Messages/client_ping.md)
* [resume](Messages/client_resume.md)
* [social.dm](Messages/client_social_dm.md)
* [social.invite](Messages/client_social_invite.md)
* [social.notifications.ack](Messages/client_social_notifications_ack.md)
* [social.presence](Messages/client_social_presence.md)
* [social.relationships.ack](Messages/client_social_relationships_ack.md)
* [switchbracket](Messages/client_switchbracket.md)
* [switchbrackethost](Messages/client_switchbrackethost.md)
* [updateconfig](Messages/client_updateconfig.md)

### Server


* [Buffer](Messages/server_Buffer.md)
* [authorize](Messages/server_authorize.md)
* [chat](Messages/server_chat.md)
* [error](Messages/server_error.md)
* [gmupdate](Messages/server_gmupdate.md)
* [hello](Messages/server_hello.md)
* [ige](Messages/server_ige.md)
* [joinroom](Messages/server_joinroom.md)
* [kick](Messages/server_kick.md)
* [leaveroom](Messages/server_leaveroom.md)
* [migrate](Messages/server_migrate.md)
* [migrated](Messages/server_migrated.md)
* [nope](Messages/server_nope.md)
* [ok](Messages/server_ok.md)
* [pong](Messages/server_pong.md)
* [readymulti](Messages/server_readymulti.md)
* [refereeboard](Messages/server_refereeboard.md)
* [replay](Messages/server_replay.md)
* [social.dm](Messages/server_social_dm.md)
* [social.invite](Messages/server_social_invite.md)
* [social.notification](Messages/server_social_notification.md)
* [social.online](Messages/server_social_online.md)
* [social.presence](Messages/server_social_presence.md)
* [startmulti](Messages/server_startmulti.md)