# CHARACTERS VOICE TTS 
 A TTS with characters voice, using a technology from 15.ai : Natural TTS with minimal viable data

All credits from this is going to https://15.ai/

this have unique porpouse to facility use of tool.

Support they on https://patreon.com/15ai

## Installation

The first thing that you had to do is install the `npm package` :

```bash
npm i --save characters-voice-TTS
```

## USAGE

```javascript
const CharacterTTS = require('./index.js');


async function getVoice() {
    
    // YOU CAN TYPE ANY TEXT IN ENGLISH 
    var text = 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.';

    // SEE CHARACTERS ABOVE 
    var character = 'SpongeBob SquarePants';

    //SET A FILENAME TO YOU ARCHIVE
    var filename = 'bobsponja';

    await CharacterTTS.getAudio(text, character, filename);
}
```


# AVAIBLE CHARACTERS 

## -> MY LITTLE PONEY
 ```

Twilight Sparkle
Fluttershy
Rarity
Rainbow Dash
Pinkie Pie
Applejack
Princess Celestia
Princess Luna
Spike
Starlight Glimmer
Trixie
Apple Bloom
Sweetie Belle
Scootaloo
Zecora
Derpy Hooves
Lyra
Bon Bon
Princess Cadance
Cozy Glow
Queen Chrysalis
Spitfire
Big Mac
Sunburst
Minuette
Cheerilee
Coco Pommel
Maud Pie
Shining Armor
Sugar Belle
Vapor Trail
Moondancer
Lightning Dust
Discord
Soarin'
Diamond Tiara
Silver Spoon
Octavia
Gilda
Gabby
Limestone Pie
Braeburn
Daring Do
Snips
Snails
```

## -> EQUESTRIA GIRLS
```
Sunset Shimmer
Adagio Dazzle
Aria Blaze
Sonata Dusk
```
## -> 2001: A space Odyssey
```
HAL 9000
```
## -> Portal
```
GLaDOS
Wheatley
Sentry Turret
Chell
```

## -> TEAM FORTRESS 2
```
Miss Pauling
Scout
Soldier
Demoman
Heavy
Engineer
Medic
Sniper
Spy
```
## -> PERSONA 4
```
Rise Kujikawa
```
## -> SPONGE BOB
```
SpongeBob SquarePants
```

## -> SUPER SMASH BROS
```
Announcer
```

## -> STEVEN UNIVERSE
```
Steven Universe
```

## -> STANLEY PARABLE
```
The Narrator
Stanley
```

## -> OTHERS
```
Yes Man

Carl Brutananadilewski

Dan

Daria Morgendorffer
Jane Lane

Black Mesa Announcer
Overwatch
Gordon Freeman

Kyu Sugardust

Tenth Doctor

Sans
Papyrus
Flowey
Toriel
Asgore
Asriel
Alphys
Undyne
Mettaton
Temmie
Susie
Noelle
Berdly
Rudolph
Ralsei
Lancer
King
Queen
Jevil
Spamton
Gaster

Madeline
Theo
Badeline
Oshiro
Granny

```