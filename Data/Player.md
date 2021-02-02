# Player

Represents a player in a TETR.IO room.

## Format

* (object):
    * (string) `_id`: The id of the user.
    * (string) `username`: The username of the user.
    * (boolean) `anon`: Whether the user is anonymous.
    * (boolean) `bot`: The username of the user.
    * ([Role](../Data/Role.md)) `role`: The role of the user.
    * (integer) `xp`: The amount of experience points the user has.
    * (object) `record`: Player scoreboard data.
        * (integer) `games`: Total games played.
        * (integer) `wins`: Total games won.
        * (integer) `streak`: Number of games won in row.
    * (string) `bracket`: Always either `"player"` or `"spectator"`.
    * (boolean) `supporter`: Whether the user is a supporter.
    * (boolean) `verified`: Whether the user is verified.