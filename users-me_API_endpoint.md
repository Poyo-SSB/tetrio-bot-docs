# `users/me` API endpoint

**Note:** The main TETR.IO API is not for general use and should only be used as part of a genuine client.

This endpoint gets data on the user sending the request.

To use this endpoint, provide a bearer token as authorization. For those unfamiliar with OAuth, that's a header that looks like this: 

```http
authorization: Bearer <token>
```

...where `<token>` is the user's super-duper secret user token. The endpoint will return a lot of neat data in JSON format, but the important data is as follows:

## Format

* (object):
    * (boolean) `success`: Whether the request succeeded.
    * (object[]) `errors`?: The resulting errors, if any.
        * (string) `msg`: A single error message.
    * (object) `user`: The user to whom the token belongs.
        * (string) `id`: The id of the user.
        * (string) `username`: The username of the user.
        * (string ([Role](Data/Role.md))) `role`: The role of the user.