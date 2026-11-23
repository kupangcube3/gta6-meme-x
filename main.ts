// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads the
// post's address. The entry is the post itself: the meme is posted on X from
// a public account, POST.json names its address, and the house reads the
// post (its first picture and its text) from X and hands it to the judge.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${msg}`);
  process.exit(1);
}

// Fail loudly when POST.json is not a JSON object naming a post address,
// instead of handing the gate a file it would refuse.
try {
  const post = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8'));
  if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
    throw new Error('POST.json must be a JSON object with a string "url" field');
  }
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`POST.json is not usable: ${msg}`);
  process.exit(1);
}
