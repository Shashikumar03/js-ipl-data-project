const fs = require("fs");
const path = require("path");
const deliveryData = require("../deliveries.json");
const matchData = require("../matches.json");
const extraRunConcededByTeam2016 = require("../src/server/3-extra-run-per-team-per-year-2016");

const extraRunByteam2016 = extraRunConcededByTeam2016(matchData, deliveryData);
console.log(extraRunByteam2016);

const filePath = path.resolve(
  __dirname,
  "../src/public/output/extraRunsConcededByTeam2016.json"
);
const jsonString = JSON.stringify(extraRunByteam2016, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
    