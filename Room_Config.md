# Room config

This page lists every room config setting. These settings can be changed with the `/set` command and are also used in the [`updateconfig` message](Messages/client_updateconfig.md) (as a string representation of the key) and [`gmupdate` message](Messages/server_gmupdate.md) (as direct objects).

<!--
[].map(x => "| `" + x.id + "` | TODO | " + x.label + " | " + x.title + " |").join("\n");
hi!
-->

| Key | Type | TETR.IO setting name | TETR.IO setting description |
|---|---|---|---|
| `meta.name` | string | room name | Name this room will display in the listing as |
| `meta.userlimit` | integer (string) | player limit | Maximum players in this room. 0 = no limit. Does not apply retroactively. |
| `meta.allowAnonymous` | boolean | allow anonymous users to join | Whether to allow anonymous users to enter this room. Does not apply retroactively. |
| `meta.bgm` | string ([BGM](#bgm)) | music | Background song to play. If random, not everyone will hear the same song. |
| `meta.match.ft` | integer | first to (FT) | Amount of rounds one must win to win the game. |
| `meta.match.wb` | integer | win by (WB) | Amount of points one must have over the second place to secure the win. |
| `game.options.stock` | integer | stock | Amount of extra lives one has. |
| `game.options.bagtype` | string ([Bag type](#bag-type)) | random bag type | The type of system used to generate random pieces. |
| `game.options.spinbonuses` | string ([Spin bonuses](#spin-bonuses)) | allowed spins | The type of pieces allowed to do spins. |
| `game.options.allow180` | boolean | allow 180 spins | Whether to allow the 180 rotation key to be used. |
| `game.options.kickset` | string ([Kickset](#kickset)) | kick table | The type of kicks that pieces can do. |
| `game.options.allow_harddrop` | boolean | use hard drop | Whether to allow use of the Hard Drop button. |
| `game.options.display_next` | boolean | use NEXT queue | Whether to show the NEXT queue. |
| `game.options.display_hold` | boolean | use HOLD queue | Whether to use the HOLD queue. |
| `game.options.nextcount` | integer | next pieces | Amount of pieces shown in the NEXT queue, if said queue is enabled. |
| `game.options.display_shadow` | boolean | show shadow piece | Whether to show the shadow piece. |
| `game.options.are` | integer | ARE | Amount of time in frames in between a piece being placed and the next one spawning. |
| `game.options.lineclear_are` | integer | line clear ARE | Amount of time in frames in between a piece being placed and the next one spawning, if a line was cleared. |
| `game.options.room_handling` | boolean | enforce below handling settings | Whether to enforce the handling settings below. |
| `game.options.room_handling_arr` | float | enforced ARR | Auto Repeat Rate, enforced if "enforce below handling settings" is enabled. |
| `game.options.room_handling_das` | float | enforced DAS | Delayed Auto Shift, enforced if "enforce below handling settings" is enabled. |
| `game.options.room_handling_sdf` | integer | enforced SDF | Soft Drop Factor, enforced if "enforce below handling settings" is enabled. Use 21 for MAX. |
| `game.options.g` | float | gravity | Starting gravity (how fast blocks drop). Higher is faster. |
| `game.options.gincrease` | float | gravity increase | The amount of gravity increase per second. |
| `game.options.gmargin` | integer | gravity margin time | Amount of time in frames until the gravity starts to increase. |
| `game.options.garbagemultiplier` | float | garbage multiplier | Starting garbage multiplier. 1 means normal amount of garbage, 2 means double. |
| `game.options.garbagemargin` | integer | garbage margin time | Amount of time in frames until the garbage multiplier starts to increase. |
| `game.options.garbageincrease` | float | garbage increase | The amount of garbage multiplier increase per second. |
| `game.options.locktime` | integer | lock delay | If not using master levels, the amount of frames until a piece locks down. |
| `game.options.garbagespeed` | integer | garbage travel speed | The time it takes in frames for garbage to travel. |
| `game.options.garbagecap` | integer | garbage cap | Amount of garbage that may enter the screen at once. |
| `game.options.garbagecapincrease` | float | garbage cap increase | The amount of garbage cap increase per second. |
| `game.options.garbagecapmax` | integer | garbage cap max | Maximum amount the garbage cap may reach. |
| `game.options.manual_allowed` | boolean | allow manual targeting | Whether to allow users to click boards to manually target them. |
| `game.options.b2bchaining` | boolean | enable back-to-back chaining | Whether to make long Back-to-Back chains become more powerful. |
| `game.options.clutch` | boolean | enable clutch clears | Whether to allow out-of-bound placements when they clear a line. |

## Hidden and Unmodifiable config

These are some values that are not modifiable normally but are sent from some events. They are usually sent in an options object.

* (integer) `version`: Protocol version, maybe? Always `15`.
* (boolean) `seed_random`: Whether the game's RNG seed is random?
* (integer) `seed`: The RNG seed of the game?
* (boolean) `countdown`: Whether the game has a countdown.
* (integer) `countdown_count`: The number from which to countdown.
* (integer) `countdown_interval`: The time in milliseconds between each count.
* (integer) `precountdown`: The time in milliseconds before the countdown begins.
* (integer) `prestart`: The time in milliseconds before the time before the countdown begins?
* (string) `mission`: Unused. Would otherwise be the text that displays before the game starts.
* (string) `mission_type`: Unused. Always `"mission_versus"`.
* (string) `zoominto`: Unknown. Always `"slow"`?
* (boolean) `display_lines`: Whether to display the number of lines cleared.
* (boolean) `display_attack`: Whether to display the APM.
* (boolean) `display_pieces`: Whether to display the number of pieces placed.
* (boolean) `display_impending`: Whether to display the attack bar?
* (boolean) `display_kills`: Whether to display the number of KOs.
* (boolean) `display_placement`: Whether to display the current placement.
* (boolean) `display_fire`: Whether to display fire, obvs.
* (boolean) `hasgarbage`: Whether the game has garbage?
* (boolean) `neverstopbgm`: Whether to keep the BGM playing between games.
* (integer) `forfeit_time`: Time in frames that a player needs to hold the quit button to forfeit.
* (boolean) `infinitemovement`: Whether to enable infinite movement (disable lock resets).
* (integer) `lockresets`: How many times to enable resetting the lock delay (by rotating or moving a piece).
* (object) `objective`: Unknown.
    * (string) `type`: Unknown. Always `"none"`. 

## BGM

The valid values of `data.meta.bgm` are any of the following:

* `"RANDOM"`
* `"RANDOMcalm"`
* `"RANDOMbattle"`
* `"kuchu-toshi"`
* `"shikiichi-made-mousukoshi"`
* `"touhoudaiensei"`
* `"asayake-no-taiyou"`
* `"in-sorrow-and-pains"`
* `"honemi-ni-shimiiru-karasukaze"`
* `"inorimichite"`
* `"kaze-no-sanpomichi"`
* `"muscat-to-shiroi-osara"`
* `"natsuzora-to-syukudai"`
* `"success-story"`
* `"kaiser-hige-na-neko"`
* `"akindo"`
* `"philosophy"`
* `"yoru-no-niji"`
* `"shiroi-hyoutan"`
* `"smoke"`
* `"aijin-sanka"`
* `"akai-tsuchi-wo-funde"`
* `"burari-tokyo"`
* `"back-water"`
* `"burning-heart"`
* `"hayate-no-sei"`
* `"ice-eyes"`
* `"ima-koso"`
* `"prism"`
* `"risky-area"`
* `"fuyu-no-jinkoueisei"`
* `"hatsuyuki"`
* `"kansen-gairo"`
* `"chiheisen-wo-koete"`
* `"moyase-toushi-yobisamase-tamashii"`
* `"naraku-heno-abyssmaze"`
* `"samurai-sword"`
* `"super-machine-soul"`
* `"uchuu-5239"`
* `"ultra-super-heros"`
* `"21seiki-no-hitobito"`
* `"haru-wo-machinagara"`
* `"go-go-go-summer"`
* `"sasurai-no-hitoritabi"`
* `"wakana"`
* `"zange-no-ma"`
* `"subarashii-nichijou"`
* `"asphalt"`
* `"madobe-no-hidamari"`
* `"minamoto"`
* `"sora-no-sakura"`
* `"suiu"`
* `"freshherb-wreath-wo-genkan-ni"`

## Bag type

The valid values of `game.options.bagtype` are any of the following:

* `"7-bag"`
* `"14-bag"`
* `"classic"`
* `"pairs"`
* `"total mayhem"`

## Spin bonuses

The valid values of `game.options.spinbonuses` are any of the following:

* `"T-spins"`
* `"all"`
* `"stupid"`
* `"none"`

## Kickset

The valid values of `game.options.kickset` are any of the following:

* `"SRS+"`
* `"SRS"`
* `"SRS-X"`
* `"TETRA-X"`
* `"NRS"`
* `"ARS"`
* `"ASC"`
* `"none"`
