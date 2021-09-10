# Piece RNG

Though TETR.IO has five different types of [randomizer](Room_Config.md#Bag-type), all of them are based upon the same pseudorandom number generator. This RNG is the [Lehmer random number generator](https://en.wikipedia.org/wiki/Lehmer_random_number_generator), specifically MINSTD (`a = 16807` and `m = 2147483647`). The `shuffleArray` function uses the [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

A JavaScript reference implementation closely matching that found in [tetrio.js](https://tetr.io/js/tetrio.js) follows:

```js
function rng(seed) {
    let t = seed % 2147483647;

    if (t <= 0) {
        t += 2147483646;
    }

    return {
        next: function () {
            return t = 16807 * t % 2147483647;
        },
        nextFloat: function () {
            return (this.next() - 1) / 2147483646;
        },
        shuffleArray: function (array) {
            if (array.length == 0) {
                return array;
            }

            for (let i = array.length - 1; i != 0; i--) {
                const r = Math.floor(this.nextFloat() * (i + 1));
                [array[i], array[r]] = [array[r], array[i]];
            }

            return array;
        }
    }
}
```

In singleplayer, replays with `no_szo` set to true (currently accessible via stride mode) will skip the first piece if it is any of S, Z, or O.

## `"7-bag"`

The 7-bag randomization system generates a set of the seven tetrominos and shuffles them before putting them into the queue. This guarantees that there will never be a gap of more than 12 tetrominos between any two tetrominos of the same type. As with any shuffling algorithm, the order of the input array matters. TETR.IO uses the ordering `ZLOSIJT` (a rainbow, how cute!) for all purposes.

```js
queue.push(...rng.shuffleArray(["Z", "L", "O", "S", "I", "J", "T"]));
```

## `"14-bag"`

The 14-bag randomization system is a variant of the 7-bag system with less of a guarantee against droughts. The input ordering is `ZLOSIJTZLOSIJT`.

```js
queue.push(...rng.shuffleArray(["Z", "L", "O", "S", "I", "J", "T", "Z", "L", "O", "S", "I", "J", "T"]));
```

## `"classic"`

This is the randomizer used in *Tetris* for the NES. For each piece, the randomizer rolls an eight-sided die, with seven sides representing seven tetrominos and the eighth side representing a reroll. If a reroll or the same tetromino that was previously generated is rolled, then the randomizer selects randomly from the tetrominos.

```js
const TETROMINOS = ["Z", "L", "O", "S", "I", "J", "T"];

let index = Math.floor(rng.nextFloat() * (TETROMINOS.length + 1));

if (index === lastGenerated || index >= TETROMINOS.length) {
    index = Math.floor(rng.nextFloat() * TETROMINOS.length);
}

lastGenerated = index;
queue.push(TETROMINOS[index]);
```

## `"pairs"`

This randomizer picks pairs of tetromino types and gives three of each in a random order.

```js
const s = rng.shuffleArray(["Z", "L", "O", "S", "I", "J", "T"]),
const pairs = [s[0], s[0], s[0], s[1], s[1], s[1]];
rng.shuffleArray(pairs);

queue.push(...pairs)
```

## `"total mayhem"`

This randomizer is entirely random. <!-- xD -->

```js
const TETROMINOS = ["Z", "L", "O", "S", "I", "J", "T"];
queue.push(TETROMINOS[Math.floor(rng.nextFloat() * TETROMINOS.length)]);
```