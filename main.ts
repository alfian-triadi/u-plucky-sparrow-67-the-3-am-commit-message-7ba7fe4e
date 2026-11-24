import { writeFileSync, mkdirSync } from "node:fs";

// Entry: the full 77-char commit message, emitted verbatim as a single line.
const line =
  "fix: prod is down because I deployed at 3 AM with 98% confidence and 0% tests";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
