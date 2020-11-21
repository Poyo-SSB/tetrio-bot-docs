# Ribbon

**Ribbon** is the name for the websocket networking system used by TETR.IO since version 4.2.0. The base websocket URI is `wss://tetr.io/ribbon`.

When this documentation is unclear, incomplete, or out of date, reference [tetrio.js](https://tetr.io/js/tetrio.js). Most of it is obfuscated and/or minified, but the Ribbon code is not, even including comments.

To collect data exchanged between an official TETR.IO client and a Ribbon, see [Observing Ribbon](Observing_Ribbon.md).

## Terminology

Within the context of this documentation:
* A **packet** is a binary blob sent over the websocket connection.
* A **message** is a data object. **Packets** may contain one or more **messages**, and certain types of **messages** may contain nested **messages** within them.

This is NOT the terminology that TETR.IO uses in its message format.

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

Packets contain a header followed by one or more messages in [MessagePack format](https://msgpack.org/). [MessagePack](https://msgpack.org/index.html#languages) has numerous implementations, covering every language under the sun. The MessagePack implementation used by both TETR.IO's client and server is [msgpack-lite](https://github.com/kawanet/msgpack-lite) ([npm](https://www.npmjs.com/package/msgpack-lite)). If you wish to reinvent the wheel or need to inspect binary data for debugging purposes, the binary specification can be found [here](https://github.com/msgpack/msgpack/blob/master/spec.md).

All top-level MessagePack objects contained within a packet are of the type `fixmap`, `map 16`, or `map 32`.

## Packet format

Packets will always begin with one of three bytes, signifying the header type. Both a Ribbon and a client may send any of these three packet types, but you can probably get away with only using `0x45`.

### `0x45` Standard id tag

A packet beginning in `0x45` is a standard packet and everything after the first byte can be unpacked and processed.

```
+------+==============+
| 0x45 | msgpack blob |
+------+==============+
```

### `0xAE` Extracted id tag

A packet beginning in `0xAE` is an extracted-id packet, containing a big-endian `uint32` message id to be injected into the unpacked object before processing.

```
+------+-----+-----+-----+-----+==============+
| 0x45 | extracted id (uint32) | msgpack blob |
+------+-----+-----+-----+-----+==============+
```

**Note:** The unpacked object may not contain an `id` key, so don't rely on its presence.

I don't know why this packet type exists.

### `0x58` Batch tag

A packet beginning in `0x58` is a batch packet, containing a zero-terminated array of big-endian `uint32`s. These values represent the length of the following packets.

```
+------+------+------+------+------+------+------+------+------+====================+
| 0x45 |   N lengths (uint32)...   | 0x00   0x00   0x00   0x00 | N msgpack blobs... |
+------+------+------+------+------+------+------+------+------+====================+
```

The blobs stored in this packet format are **packets**, not **messages**, meaning that they themselves contain one of these three headers (though probably always the first two).

This packet type was added in TETR.IO 5.1.3.

## Message protocol

If this protocol is violated, the server will usually send either a [`nope` message](Messages/server_nope.md) or [`kick` message](Messages/server_kick.md) and end the connection.

As a given, to keep the connection alive, the client should periodically send a [`ping` message](Messages/client_ping.md), which will be responded to with a [`pong` message](Messages/server_pong.md). The official TETR.IO client sends a `ping` every 5000ms.

Upon connecting to a Ribbon, the client must send a [`new` message](Messages/client_new.md). The server will respond with a [`hello` message](Messages/server_hello.md). The client must then send an [`authorize` message](Messages/client_authorize.md), which will be responded to with an [`authorize` message](Messages/server_authorize.md). At this point, the client is free to do whatever.

When the client is done, it should send the Ribbon a [`die` message](Messages/client_die.md) to indicate a graceful closure.

## Id messages

Most Ribbon messages have an integer `id` property. For gameplay especially, it is crucial to process these messages in order, so both client and server messages may have this property, incrementing the value every time a message is sent. For a possible implementation, see [tetrio.js](https://tetr.io/js/tetrio.js). Note that the ids of client messages and the ids of server messages may fall out of alignment because not every message from one side will result in a response from the other.

If too many messages are out of order, it's advisable to close the connection. The official TETR.IO client will close the connection if more than 600 packets are out of order.

## List of messages

**Note:** There are several messages not documented because they are only relevant to non-bot users (e.g. Tetra League/Quick Play).

### Client

* [authorize](client_authorize.md)
* [chat](client_chat.md)
* [die](client_die.md)
* [hello](client_hello.md)
* [joinroom](client_joinroom.md)
* [leaveroom](client_leaveroom.md)
* [new](client_new.md)
* [ping](client_ping.md)
* [resume](client_resume.md)

### Server

* [authorize](server_authorize.md)
* [chat](server_chat.md)
* [error](server_error.md)
* [gmupdate](server_gmupdate.md)
* [hello](server_hello.md)
* [ige](server_ige.md)
* [joinroom](server_joinroom.md)
* [kick](server_kick.md)
* [leaveroom](server_leaveroom.md)
* [migrate](server_migrate.md)
* [migrated](server_migrated.md)
* [nope](server_nope.md)
* [pong](server_pong.md)
* [readymulti](server_readymulti.md)
* [refereeboard](server_refereeboard.md)
* [replay](server_replay.md)
* [startmulti](server_startmulti.md)