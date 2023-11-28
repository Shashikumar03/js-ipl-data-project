const fs = require("fs");
const path = require("path");

const matchData = require("../matches.json");
const { matchPerYear } = require("../src/server/1-matches-per-year");
const filePath = path.resolve(
  __dirname,
  "../src/public/output/matchesPerYear.json"
);

const matchPlayedPerYear = matchPerYear(matchData);
console.log(matchPlayedPerYear);
const jsonString = JSON.stringify(matchPlayedPerYear, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
