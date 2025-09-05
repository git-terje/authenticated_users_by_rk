const fs = require("fs");

function readJSON(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

const manifest = readJSON("custom_components/authenticated_users_by_rk/manifest.json");
const hacs = readJSON("hacs.json");

if (manifest.version !== hacs.version) {
  console.error(`❌ Version mismatch detected:
  manifest.json = ${manifest.version}
  hacs.json     = ${hacs.version}`);
  process.exit(1);
} else {
  console.log(`✅ Versions match: ${manifest.version}`);
}
