### This version of the documentation is currently up-to-date for version **5.1.3** of TETR.IO (commit id `0060f6a`, November 19, 2020, 4:07 PM UTC).

<!--
the above date string is given by the following:
luxon.DateTime.fromMillis(timestamp).setZone("utc").toLocaleString(luxon.DateTime.DATETIME_FULL);
hi, by the way ❤
-->

# TETR.IO bot documentation

This repository is dedicated to documenting the network protocol used by TETR.IO, as well as any other information that may be useful when developing a bot for TETR.IO.

## Bot application process

Running a bot on a user account is a violation of TETR.IO's [community rules](https://tetr.io/about/rules/) and *will* result in your account being terminated. To run a bot, **you must acquire a bot account** ([e.g.](https://ch.tetr.io/u/5f9751f462f608df7f976f9e)). To get one, message osk on Discord with a short outline of your bot's intended functionality (or email them, but they do not check emails as frequently). osk's contact info can be found [here](https://osk.sh/).

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
    * [Room Config](Room_Config.md)
* Network fundamentals
    * [Ribbon](Ribbon.md)
    * [Observing Ribbon](Observing_Ribbon.md)
    * [Resuming a connection](Resuming_a_connection.md)
* Guides
    * [Chat](Chat.md)
* Ribbon messages
    * Client
        * [authorize](Messages/client_authorize.md)
        * [chat](Messages/client_chat.md)
        * [die](Messages/client_die.md)
        * [hello](Messages/client_hello.md)
        * [joinroom](Messages/client_joinroom.md)
        * [leaveroom](Messages/client_leaveroom.md)
        * [new](Messages/client_new.md)
        * [ping](Messages/client_ping.md)
        * [resume](Messages/client_resume.md)
        * [updateconfig](Messages/client_updateconfig.md)
    * Server
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
        * [startmulti](Messages/server_startmulti.md)

## Disclaimer

Hi! I'm Poyo. I wrote this documentation. I am not associated with TETR.IO or osk. All data here has been gathered via analyzing code and testing responsibly. Use this documentation at your own risk. Please enjoy! ❤