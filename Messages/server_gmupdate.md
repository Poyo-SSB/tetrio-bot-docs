# `gmupdate` message (server)

A message representing an update to room settings, sent as confirmation of the room host's [`updateconfig` message](client_updateconfig.md). 

## Format

* (object):
    * (integer) `id`: [The id of this message.](../Ribbon.md#id-messages)
    * (string) `command`: Always `"gmupdate"`.
    * (object) `data`:
        * (string) `id`: The id of the room.
        * (string) `type`: Always either `"public"` or `"private"`.
        * (object) `auto`: Data on the room auto-start settings. Unused, probably.
            * (string) `status`: Always `"off"`.
            * (integer) `time`: Always `30`.
            * (integer) `maxtime`: Always `30`.
        * ([Player](../Data/Player.md)[]) `players`: The players in the room. 
        * (object) `game`: Game data. Contains many properties not listed here, see below.
            * (string) `state`: Room state. Always either `"lobby"` or `"ingame"`.
            * (object) `options`: `game.options` and unmodifiable config section in [Room Config](../Room_Config.md)
            * (object) `match`: Unknown. Display data?
                * (string) `type`: Mission type? 
                * (integer) `ft`: First to. 
                * (integer) `wb`: Win by. 
                * (boolean) `record_replays`: Whether or not to record replays. Seems to be `true` on 1v1s and `false` everywhere else?
                * (string) `gamemode`: Also mission type? 
                * (string) `winningKey`: Win condition? 
                * (object) `keys`: Stats display data.
                    * (string) `primary`: First statistic type.
                    * (string) `primaryLabel`: First statistic singular text.
                    * (string) `primaryLabelSingle`: First statistic plural text.
                    * (boolean) `primaryIsAvg`: Whether the first statistic is an average of the value across the game.
                    * (string) `secondary`: Second statistic type.
                    * (string) `secondaryLabel`: Second statistic singular text.
                    * (string) `secondaryLabelSingle`: Second statistic plural text.
                    * (boolean) `secondaryIsAvg`: Whether the second statistic is an average of the value across the game.
                    * (string) `tertiary`: Third statistic type.
                    * (string) `tertiaryLabel`: Third statistic singular text.
                    * (string) `tertiaryLabelSingle`: Third statistic plural text.
                    * (boolean) `tertiaryIsAvg`: Whether the third statistic is an average of the value across the game.
                * (object) `extra`: Unknown.
            * (integer) `statelocked_until`: A Unix timestamp. Meaning unknown.
        * (string) `owner`: The id of the user who is currently the host of the room.
        * (object) `meta`: Room data. Contains many properties not listed here, see below.
            * (boolean) `allowBots`: Whether to allow bots in the room. Currently unused (?)—`meta.allowAnonymous` serves this purpose.
            * (string) `bgm`: The background music to play during the game. See [below](#bgm) for possible values.
            * (string) `type`: Also also mission type? 

`data.meta` contain several properties pertaining to the settings of a room in addition to the ones listed above. See [Room Config](../Room_Config.md) for these. The properties listed above and not on the aforementioned page are generally not modifiable by a user in-game.
