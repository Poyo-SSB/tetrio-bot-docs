# Frame

Represents gameplay data that has occured.

## Format

* (object):
    * (string) `type`: Always one of `"keydown"`, `"keyup"`, `"full"`, `"start"`.
    * (object) `data`:
       * (boolean) `successful`?: Available only on type `"full"`. Unknown.
       * (string) `gameoverreason`?: Available only on type `"full"`. Unknown.
       * (string) `replay`?: Available only on type `"full"`. Unknown.
       * (string) `source`?: Available only on type `"full"`. Unknown.
       * (object[]) `options`: Available only on type `"full"`. Refer to [Room Config](../Room_Config.md).
       * (string) `key`: Not available on type `"full"`. The action the client is performing.
       * (number) `subframe`?: Not available on type `"full"`. Unknown.

TODO: This document is incomplete.
