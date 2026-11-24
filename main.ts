import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "fix: prod is down because I deployed at 3 AM with 98% confidence and 0% tests";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
