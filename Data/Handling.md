# Handling

Represents TETR.IO handling settings.

## Format

* (object):
    * (string) `arr`: A float value in the range [0, 5] represented as a string. Represents automatic repeat rate.
    * (string) `das`: A float value in the range [1, 8] represented as a string. Represents delayed auto-shift.
    * (string) `sdf`: An integer value in the range [5, 41] represented as a string. Represents soft-drop factor, where 41 represents infinity.
    * (boolean) `safelock`: Represents the "prevent accidental hard drops" setting.
