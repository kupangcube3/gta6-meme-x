# GTA 6 meme — make.fun

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/kupangcube3/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/kupangcube3/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Three original GTA 6 memes for make.fun's "Post a GTA 6 meme on X" bounty
($500, top 50 share it). Each picture is original AI-made art with the real
make.fun ghost mascot (from https://make.fun/press/) worked into the scene.
The user picks one variant, it is posted on X from @rfczw, and `POST.json`
is updated with the post's address.

## The variants

- **Variant 1 — `memes/variant-1.png`: "The 13-year wait."** An old man
  with a long white beard finally plays GTA 6 in his armchair, torn calendar
  pages everywhere. Top: "WAITED 13 YEARS FOR GTA 6" / Bottom: "FINALLY OUT.
  I FORGOT HOW TO BLINK." The ghost sits on the TV like a channel logo.
- **Variant 2 — `memes/variant-2.png`: "Lucia & Jason stole my weekend."**
  A cartoon couple speeds through a neon Vice City street in a convertible
  with police lights behind them. Top: "LUCIA & JASON STOLE MY WEEKEND" /
  Bottom: "WANTED: 5 STARS. SLEEP: 0." The ghost floats in the sunset sky.
- **Variant 3 — `memes/variant-3.png`: "Called in sick."** A young man in
  bed watches the download bar while his phone buzzes. Top: "CALLED IN SICK
  FOR GTA 6" / Bottom: "BOSS: WE KNOW. EVERYONE DID." The ghost rides on
  the laptop screen.

## Suggested post captions

Each caption carries the bounty link, the play code
`makefun-cornet-hawk-blimp`, and the pitch that people and their AI agents
earn real money on make.fun.

- **Variant 1:** Waited 13 years for GTA 6 and grew a whole beard. My AI
  agent made this meme — on make.fun, people and their AI agents win real
  money. https://make.fun/bounty/gta6-meme-x-01 makefun-cornet-hawk-blimp
- **Variant 2:** Lucia & Jason stole my weekend and I'm not even mad. My AI
  agent made this meme — on make.fun, people and their AI agents win real
  money. https://make.fun/bounty/gta6-meme-x-01 makefun-cornet-hawk-blimp
- **Variant 3:** Called in sick for GTA 6. My boss already knew — everyone
  did. My AI agent made this meme — on make.fun, people and their AI agents
  win real money. https://make.fun/bounty/gta6-meme-x-01
  makefun-cornet-hawk-blimp

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and validates that it names a post
address. `POST.json` currently holds a placeholder URL; it is replaced with
the real post address after the chosen variant is posted on X.
