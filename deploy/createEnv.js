const fs = require('fs');

fs.writeFileSync(
  "./.env",
  Object.entries(process.env)
    .map(([key, value]) => `${key}=${value}\n`)
    .join("")
);