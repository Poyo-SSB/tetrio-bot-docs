# Handling

Represents TETR.IO handling settings.

## Format

* (object):
    * (float) `arr`: A float value in the range [0, 5]. Represents automatic repeat rate.
    * (float) `das`: A float value in the range [1, 8]. Represents delayed auto-shift.
    * (integer) `sdf`: An integer value in the range [5, 41]. Represents soft-drop factor, where 41 represents infinity.
    * (boolean) `safelock`: Represents the "prevent accidental hard drops" setting.
    * (boolean) `cancel`: Represents the "cancel DAS when changing directions" setting.
    * (float) `dcd`: A float value in the range [0, 20]. Represents DAS cut delay.
