// Seventeen Syllables of Debugging — haiku entry.
// Writes one 5-7-5 haiku about debugging to <output>/entry.txt.
// Deterministic: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft v2 — stronger opening image (the breakpoint itself, not just its dot):
//   "Breakpoint holds the night"    -> break-point(2) holds(1) the(1) night(1) = 5
//   "cursor blinks at three a.m."   -> cur-sor(2) blinks(1) at(1) three(1) a.m.(2) = 7
//   "the fault was all mine"        -> the(1) fault(1) was(1) all(1) mine(1) = 5
const HAIKU = [
  "Breakpoint holds the night",
  "cursor blinks at three a.m.",
  "the fault was all mine",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Self-check: exactly three lines, within the 200-character gate.
const lines = HAIKU.split("\n");
if (lines.length !== 3 || HAIKU.length > 200 || HAIKU.trim().length === 0) {
  throw new Error("haiku failed the entry shape check");
}
writeFileSync(join(outDir, "entry.txt"), HAIKU + "\n", "utf8");
