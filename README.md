### This version of the documentation is currently up-to-date for version **6.2.0** of TETR.IO (commit id `e326977`, March 16, 2022, 10:54 PM UTC).

<!--
the above date string is given by the following:
luxon.DateTime.fromMillis(timestamp).setZone("utc").toLocaleString(luxon.DateTime.DATETIME_FULL);
hi, by the way ❤
-->

# TETR.IO bot documentation

**This documentation is not finished. If you wish to contribute, pull requests are welcome.**

This repository is dedicated to documenting the network protocol used by TETR.IO, as well as any other information that may be useful when developing a bot for TETR.IO. This is not the only way to develop a bot for TETR.IO—one may also directly interface with or modify the official TETR.IO client, in which case the information in this documentation is largely irrelevant. This documentation is primarily for standalone bots which run without using the official TETR.IO client, but extra non-bot information may be available for elements that could be useful to interface with programmatically and are not in violation of TETR.IO's rules.

## Bot application process

Running a bot on a user account is a violation of TETR.IO's [community rules](https://tetr.io/about/rules/) and *will* result in your account being terminated. To run a bot, **you must acquire a bot account** ([e.g.](https://ch.tetr.io/u/5f9751f462f608df7f976f9e)). To get one, message osk on Discord with a short outline of your bot's intended functionality (or email them, but they do not check emails as frequently). osk's contact info can be found [here](https://osk.sh/).

## What can bots do?

Bots **can**:
* Join public custom games.
* Join private custom games, given the room id.
* Create their own custom games.
* Use the social system.

Bots **cannot**:
* Play singleplayer modes.
* Join Quick Play.
* Play in Tetra League.

## Getting started

When venturing to create a bot, I highly recommend using a language which is either dynamic/duck typed (e.g. JavaScript/TypeScript or Python) or one which supports dynamic/duck typing in some form (e.g. C# via `dynamic`). Do *not* use a single monolith class to represent every message type. This will cause only pain and suffering. Trust me on this one.

**The first and most important thing to do when creating a bot is to make it nontrivial to use unauthorized.** This is good practice in general, but *especially* if your code is open-source it is critical to make sure that it's not easy for anyone without knowledge of code to enter their own user token into the bot and run it on their account. The best way to do this is to make an API call to the [`users/me` API endpoint](users-me_API_endpoint.md) and refuse to run if the user's role is anything other than `"bot"`.

Once you're done with that, the core of a TETR.IO bot is interfacing with the [Ribbon](Ribbon.md) system.

## Pages

* Misc
    * [Breaking changes](Breaking_changes.md)
    * [Room Config](Room_Config.md)
    * [`users/me` API endpoint](users-me_API_endpoint.md)
* Network fundamentals
    * [Ribbon](Ribbon.md)
    * [Observing Ribbon](Observing_Ribbon.md)
    * [Resuming a connection](Resuming_a_connection.md)
* Guides
    * [Chat](Chat.md)
* Game mechanics
    * [Piece RNG](Piece_RNG.md)
* Ribbon messages
    * Client
        * [authorize](Messages/client_authorize.md)
        * [chat](Messages/client_chat.md)
        * [createroom](Messages/client_createroom.md)
        * [die](Messages/client_die.md)
        * [hello](Messages/client_hello.md)
        * [joinroom](Messages/client_joinroom.md)
        * [leaveroom](Messages/client_leaveroom.md)
        * [new](Messages/client_new.md)
        * ~~[ping](Messages/client_ping.md)~~
        * [replay](Messages/client_replay.md)
        * [resume](Messages/client_resume.md)
        * [social.dm](Messages/client_social_dm.md)
        * [social.invite](Messages/client_social_invite.md)
        * [social.notifications.ack](Messages/client_social_notifications_ack.md)
        * [social.presence](Messages/client_social_presence.md)
        * [social.relationships.ack](Messages/client_social_relationships_ack.md)
        * [switchbracket](Messages/client_switchbracket.md)
        * [switchbrackethost](Messages/client_switchbrackethost.md)
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
        * ~~[pong](Messages/server_pong.md)~~
        * [readymulti](Messages/server_readymulti.md)
        * [refereeboard](Messages/server_refereeboard.md)
        * [replay](Messages/server_replay.md)
        * [social.dm](Messages/server_social_dm.md)
        * [social.invite](Messages/server_social_invite.md)
        * [social.notification](Messages/server_social_notification.md)
        * [social.online](Messages/server_social_online.md)
        * [social.presence](Messages/server_social_presence.md)
        * [startmulti](Messages/server_startmulti.md)

## Disclaimer

Hi! I'm Poyo. I wrote (most of) this documentation. I am not affiliated with TETR.IO or osk. All data here has been gathered via analyzing [code](https://tetr.io/js/tetrio.js) and testing responsibly. Use this documentation at your own risk. Please enjoy! ❤
