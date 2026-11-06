// Builds dist/lilypichu.theme.css: the user file with the hosted main.css and
// overlay.css imports replaced by the local build, for installing offline.
import { readFileSync, writeFileSync } from "node:fs";

const inline = {
  "release/main.css": "dist/main.css",
  "release/stuff/overlay.css": "dist/overlay.css",
};

const src = readFileSync("lilypichu.theme.css", "utf8");
const header = src.match(/^\/\*\*[\s\S]*?\*\//)[0];
const imports = [];
const bodies = [];

let rest = src.slice(header.length).replace(/^\/\*[^*]*\*\/\n(?=@import)/gm, "");
rest = rest.replace(/^@import url\("([^"]+)"\);\n?/gm, (_, url) => {
  const key = Object.keys(inline).find(k => url.endsWith(k));
  if (key) bodies.push(readFileSync(inline[key], "utf8"));
  else imports.push(`@import url("${url}");`);
  return "";
});

// @import must come before every other rule, so remote imports go first.
const out = [header, ...imports, ...bodies, rest.trim(), ""].join("\n\n");
writeFileSync("dist/lilypichu.theme.css", out);
console.log(`dist/lilypichu.theme.css ${out.length} bytes`);
