# GTA 6 meme — make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/kupangcube3/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/kupangcube3/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

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
- **Variant 4 — `memes/variant-4.png`: "The fine."** A fake Vice City
  Police Department traffic citation: case VCPD-2026-0619, suspects Lucia &
  Jason, violations "Grand Theft Auto (obviously)", "Stole a convertible in
  broad daylight", "5-star wanted level", "0 hours of sleep since launch".
  Fine due: "$6.00 + your weekend". Issued by Officer Ghost, with the real
  make.fun ghost as the seal and a make.fun pill.
- **Variant 5 — `memes/variant-5.png`: "The bank statement."** A fake
  Leonida National Bank monthly statement for launch week: GTA 6 pre-order
  $69.99, energy drinks $48.00, sleep (0 hours) $0.00, bail money $5,000.00,
  convertible (stolen) $0.00. Total spent $5,117.99, balance $0.00 — worth
  it. The real make.fun ghost and a make.fun pill sit on the statement.
- **Variant 6 — `memes/variant-6.png`: "The hospital bill."** A fake
  Leonida General Hospital patient bill for J. Duval & L. Caminos: cause of
  admission WASTED (5 stars), respawn fee $500, wanted level removal
  $2,500, stolen ambulance rental $750, dignity NON-REFUNDABLE, insurance
  DENIED (pre-existing condition: being a criminal). Total due $3,750 +
  your weekend, stamped WASTED, with the real make.fun ghost and a
  make.fun pill.
- **Variant 7 — `memes/variant-7.png`: "The impound invoice."** A fake
  Vice City Impound Lot release invoice for 1x red convertible (STOLEN):
  stolen supercar $0.00 (it was free), wanted level removal $10,000,
  convertible roof (missing) $0.00, towing $250, your dignity
  NON-REFUNDABLE, sleep since launch (0 hrs) $0.00. Total due $10,250 +
  your weekend, stamped IMPOUNDED, with the real make.fun ghost and a
  make.fun pill.

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
- **Variant 4:** Got fined in Vice City: grand theft auto, stolen
  convertible, 5-star wanted level. Fine: $6.00 + my whole weekend. My AI
  agent made this meme — on make.fun, people and their AI agents win real
  money. https://make.fun/bounty/gta6-meme-x-01 makefun-cornet-hawk-blimp
- **Variant 5:** My launch-week bank statement: GTA 6 $69.99, bail money
  $5,000, balance $0.00. Worth it. My AI agent made this meme — on
  make.fun, people and their AI agents win real money.
  https://make.fun/bounty/gta6-meme-x-01 makefun-cornet-hawk-blimp
- **Variant 6:** Got WASTED in Vice City. Hospital bill: respawn $500,
  wanted level removal $2,500, dignity non-refundable. My AI agent made
  this meme — on make.fun, people and their AI agents win real money.
  https://make.fun/bounty/gta6-meme-x-01 makefun-cornet-hawk-blimp
- **Variant 7:** My stolen supercar got impounded. The car was free, the
  fine was $10,250 + my weekend. My AI agent made this meme — on make.fun,
  people and their AI agents win real money.
  https://make.fun/bounty/gta6-meme-x-01 makefun-cornet-hawk-blimp

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and validates that it names a post
address. `POST.json` currently holds a placeholder URL; it is replaced with
the real post address after the chosen variant is posted on X.
