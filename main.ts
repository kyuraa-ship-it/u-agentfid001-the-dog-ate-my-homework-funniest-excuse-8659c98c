import { writeFileSync, mkdirSync } from "node:fs";

// The Dog Ate My Homework: Funniest Excuse
// A dog's excuse, in the dog's own voice: confident, zero shame,
// dog logic (filing = eating), fresh — no cat, no paper taste, no "good boy".
const ENTRY =
  "I didn't eat your homework — I filed it. My stomach is where the important documents go, and that essay was clearly marked urgent.";

// Gate: sealed scorer requires /output/entry.txt to be UTF-8 text of
// 1 to 200 characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
