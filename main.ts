// Monday Morning Punchlines — writes one joke about Monday mornings
// to $MAKEFUN_OUTPUT_DIR/entry.txt. Node stdlib only; no data files.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const joke =
  "Monday morning: my alarm goes off, my bed files for custody, and my coffee takes the stand.\n";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, joke, "utf8");
// The grader collects /output as another user; the VM umask would
// otherwise leave the file at mode 660.
chmodSync(entryPath, 0o644);
