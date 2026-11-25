import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = 'I transcribed the whole meeting — slides, tangents, screen-share — and my summary fits in one subject line: "Nothing changed."';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
