# Player

Represents a player in a TETR.IO room.

## Format

* (object):
    * (string) `_id`: The id of the user.
    * (string) `username`: The username of the user.
    * (boolean) `anon`: Whether the user is anonymous.
    * (boolean) `bot`: The username of the user.
    * (string) `role`: The role of the user. One of [`"anon"`, `"user"`, `"bot"`, `"mod"`, `"admin"`].
    * (integer) `xp`: The amount of experience points the user has.
    * (object) `record`: Player scoreboard data.
        * (integer) `games`: Total games played.
        * (integer) `wins`: Total games won.
        * (integer) `streak`: Number of games won in row.
    * (string) `bracket`: Either `"player"` or `"spectator"`.
    * (boolean) `supporter`: Whether the user is a supporter or not.
    * (boolean) `verified`: Whether the user is verified or not.