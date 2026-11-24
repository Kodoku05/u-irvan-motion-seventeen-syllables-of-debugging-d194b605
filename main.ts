// Seventeen Syllables of Debugging — make.fun entry (Node 22, standard library only).
// Writes one haiku about debugging to /output/entry.txt. Three lines in the
// 5-7-5 syllable shape: a cursor blinking at three in the morning, a breakpoint
// waiting, a son asleep upstairs — and the turn: the bug was mine all along.
// No trailing newline: the judge reads exactly the bytes written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// 5-7-5, counted: "Cursor blinks at three" (5) / "breakpoint waits; my son
// sleeps on" (7) / "and the bug was mine" (5). Seventeen syllables, 78 chars.
const HAIKU = [
  'Cursor blinks at three',
  'breakpoint waits; my son sleeps on',
  'and the bug was mine',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), HAIKU);
