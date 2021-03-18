# Presence

A Presence represents the description of a player's social status. Depending on your bot account's privacy settings,
some or all of this information may be shown differently to other players.

## Format

* (object):
    * (string) `status`: Always one of `"online"`, `"away"`, `"busy"` or `"offline"`.
    * (string): `detail`: See below.
    * (string) `user`?: The id of the user whose presence was changed. Only present on [social.presence](../Messages/server_social_presence.md) (server) messages. 
    * (boolean) `invitable`?: Whether the user can be invited to a lobby. Only present on [social.presence](../Messages/server_social_presence.md) (server) messages.

## Possible values of `detail`

The possible values are listed below, alongside their in game description. If an invalid `detail` is sent to Ribbon, the
default status message is shown instead.

* `"""` - *No detail - the client cannot see this due to the user's privacy settings.* 

### Online

The following values are only valid when `status` is set to `"online"`.

#### Menus

* `"menus"` - In Menus

#### Singleplayer

* `"40l"` - Playing **40 LINES**
* `"blitz"` - Playing **BLITZ**
* `"zen"` - Playing **ZEN**
* `"custom"` - Playing a **custom game**

#### Quick Play

* `"lobby_end:X-QP"` - Ending a **QUICK PLAY** game
* `"lobby_spec:X-QP"` - Spectating a **QUICK PLAY** game
* `"lobby_ig:X-QP"` - In a **QUICK PLAY** game
* `"lobby:X-QP"` - In a **QUICK PLAY** lobby

#### Private Lobby

* `"lobby_end:X-PRIV"` - Ending a private **custom room** game
* `"lobby_spec:X-PRIV"` - Spectating a private **custom room** game
* `"lobby_ig:X-PRIV"` - In a private **custom room** game
* `"lobby:X-PRIV"` - In a private **custom room** lobby

#### Public Lobby

* `"lobby_end:[ROOMCODE]"` - Ending a public **custom room** game
* `"lobby_spec:[ROOMCODE]"` - Spectating a public **custom room** game
* `"lobby_ig:[ROOMCODE]"` - In a public **custom room** game
* `"lobby:[ROOMCODE]"` - In a public **custom room** lobby

Where `[ROOMCODE]` is the room's code, without the preceding `#`. By default, friends of the bot will be able to click
the snipe button in the social panel to join this room.

### Busy

The following values are only valid when `status` is set to `"busy"`.

* `"tl_mm"` - In **TETRA LEAGUE** queue
* `"tl"` - In a **TETRA LEAGUE** game
* `"tl_end"` - Ending a **TETRA LEAGUE** game
* `"tl_mm_complete"` - Found a **TETRA LEAGUE** match