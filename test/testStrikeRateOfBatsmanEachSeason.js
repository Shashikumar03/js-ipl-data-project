const fs = require("fs");
const path = require("path");
const deliveryData = require("../deliveries.json");
const matchData = require("../matches.json");

const strikeRateOfBatsmanEachSeason = require("../src/server/7-strike-rate-of-batsman-each-season");
const filePath = path.resolve(
  __dirname,
  "../src/public/output/strikeRateOfEachBatsmanSeasonWise.json"
);

const strikeRateOfEachBatmansSeasonWise = strikeRateOfBatsmanEachSeason(
  matchData,
  deliveryData
);
console.log(strikeRateOfEachBatmansSeasonWise);
const jsonString = JSON.stringify(strikeRateOfEachBatmansSeasonWise, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
