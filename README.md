### This version of the documentation is currently up-to-date for version **5.1.3** of TETR.IO (commit id `0060f6a`, November 19, 2020, 4:07 PM UTC).

<!--
the above date string is given by the following:
luxon.DateTime.fromMillis(timestamp).setZone("utc").toLocaleString(luxon.DateTime.DATETIME_FULL);
hi, by the way ❤
-->

# TETR.IO bot documentation

This repository is dedicated to documenting the network protocol used by TETR.IO, as well as any other information that may be useful when developing a bot for TETR.IO.

## Bot application process

Running a bot on a user account is a violation of TETR.IO's [community rules](https://tetr.io/about/rules/) and may result in your account being terminated. To run a bot, **you must acquire a bot account** ([e.g.](https://ch.tetr.io/u/5f9751f462f608df7f976f9e)). To get one, message osk on Discord with a short outline of your bot's intended functionality (or email them, but they do not check emails as frequently). osk's contact info can be found [here](https://osk.sh/).

## What can bots do?

Bots **can**:
* Join public custom games.
* Join private custom games, given the room id.
* Create their own custom games.

Bots **cannot**:
* Play singleplayer modes.
* Join Quick Play.
* Play in Tetra League.

## Getting started

When venturing to create a bot, I highly recommend using a language which is either dynamic/duck typed (e.g. JavaScript/TypeScript or Python) or one which supports dynamic/duck typing in some form (e.g. C# via `dynamic`). Do *not* use a single monolith class to represent every message type. This will cause only pain and suffering. Trust me on this one.

The core of a TETR.IO bot is interfacing with the [Ribbon](Ribbon.md) system.

## Pages

* Misc
    * [Breaking changes](Breaking_changes.md)
* Network fundamentals
    * [Ribbon](Ribbon.md)
    * [Observing Ribbon](Observing_Ribbon.md)
    * [Resuming a connection](Resuming_a_connection.md) TODO
* Guides
    * TODO
* Ribbon messages
    * Client
        * [authorize](client_authorize.md)
        * [chat](client_chat.md)
        * [die](client_die.md)
        * [hello](client_hello.md)
        * [joinroom](client_joinroom.md)
        * [leaveroom](client_leaveroom.md)
        * [new](client_new.md)
        * [ping](client_ping.md)
        * [resume](client_resume.md)
    * Server
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

## Disclaimer

I, Poyo, the author of this documentation, am not associated with TETR.IO or osk. All data here has been gathered via analyzing code and testing responsibly. Use this documentation at your own risk. Please enjoy! ❤