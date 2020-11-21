# Chat

A bot may want to hook into chat for a number of reasons (e.g. as a command interface, performing mischief). A common pitfall when making a bot which automatically responds to messages in a chat room is that it will try to respond to itself, getting into an infinite loop and spamming chat. Funny the first time and then very unfunny after that.

To avoid this, it is necessary for the bot to know who it is. This is trivially done by providing it with its own username or (better) its id, but the cleanest method of doing this (especially if the bot is intended to be used by an arbitrary account) is to use its token to ask the TETR.IO api who it is. The appropriate API call in this case is to `https://tetr.io/api/users/me`. It is sufficient to query this once and store the value, as the user's id will probably not change.

**Note:** The main TETR.IO api is not for general use and should only be used as part of a genuine client.

To use this endpoint, provide a bearer token as authorization. For those unfamiliar with OAuth, that's a header that looks like this: 

```http
authorization: Bearer <token>
```

...where `<token>` is the user's super-duper secret user token. The endpoint will return a lot of neat data in JSON format, but the important data is as follows:

* (object):
    * (boolean) `success`: Whether the request succeeded.
    * (object[]?) `errors`: The resulting errors, if any.
        * (string) `msg`: A single error message.
    * (object) `user`: The user to whom the token belongs.
        * (string) `id`: The id of the user.
        * (string) `username`: The username of the user.
        * (string) `role`: The role of the user. (I use this to yell at anyone who tries to use a non-bot account).