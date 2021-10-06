# Player

Represents a player in a TETR.IO room.

## Format

* (object):
    * (string) `_id`: The id of the user.
    * (string) `username`: The username of the user.
    * (boolean) `anon`: Whether the user is anonymous.
    * (boolean) `bot`: Whether the user is a bot.
    * (string ([Role](../Data/Role.md))) `role`: The role of the user.
    * (integer) `xp`: The amount of experience points the user has.
    * (object) `record`: Player scoreboard data.
        * (integer) `games`: Total games played.
        * (integer) `wins`: Total games won.
        * (integer) `streak`: Number of games won in row.
    * (string) `bracket`: Always either `"player"` or `"spectator"`.
    * (boolean) `supporter`: Whether the user is a TETR.IO Supporter.
    * (boolean) `verified`: Whether the user is verified.
    * (string | null) `country`: The two letter country code of a user (`null` if private or anon).
