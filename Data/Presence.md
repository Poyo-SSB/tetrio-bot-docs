# Presence

Represents the description of a user's social status. Depending on the user's privacy settings, some or all of this information may be shown differently to other users.

## Format

* (object):
    * (string) `status`: Always one of `"online"`, `"away"`, `"busy"` or `"offline"`.
    * (string ([Detail](#Detail))): `detail`: Details of the user's current status.
    * (string) `user`?: The id of the user whose presence was changed. Only present on server [`social.presence` messages](../Messages/server_social_presence.md). 
    * (boolean) `invitable`?: Whether the user can be invited to a lobby. Only present on server [`social.presence` messages](../Messages/server_social_presence.md).

## Detail

Valid values of `detail` include the following:

* `""` - No detail; the client cannot see the user's detail due to the user's privacy settings.
* `"menus"` - "In Menus"
* `"40l"` - "Playing 40 LINES"
* `"blitz"` - "Playing BLITZ"
* `"zen"` - "Playing ZEN"
* `"custom"` - "Playing a custom game"
* `"lobby_end:X-QP"` - "Ending a QUICK PLAY game"
* `"lobby_spec:X-QP"` - "Spectating a QUICK PLAY game"
* `"lobby_ig:X-QP"` - "In a QUICK PLAY game"
* `"lobby:X-QP"` - "In a QUICK PLAY lobby"
* `"lobby_end:X-PRIV"` - "Ending a private custom room game"
* `"lobby_spec:X-PRIV"` - "Spectating a private custom room game"
* `"lobby_ig:X-PRIV"` - "In a private custom room game"
* `"lobby:X-PRIV"` - "In a private custom room lobby"
* `"lobby_end:[ROOMCODE]"` - "Ending a public custom room game"
* `"lobby_spec:[ROOMCODE]"` - "Spectating a public custom room game"
* `"lobby_ig:[ROOMCODE]"` - "In a public custom room game"
* `"lobby:[ROOMCODE]"` - "In a public custom room lobby"
* `"tl_mm"` - In TETRA LEAGUE queue
* `"tl"` - In a TETRA LEAGUE game
* `"tl_end"` - Ending a TETRA LEAGUE game
* `"tl_mm_complete"` - Found a TETRA LEAGUE match

When the user is in a public room, `[ROOMCODE]` is the room's code. By default, friends of the user will be able to click
the snipe button in the social panel to join this room.