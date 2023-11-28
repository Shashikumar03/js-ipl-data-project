const deliveryData = require("../deliveries.json");
const matchData = require("../matches.json");
const fs = require("fs");
const path = require("path");

const filePath = path.resolve(
  __dirname,
  "../src/public/output/top10EconomicalBowler2015.json"
);

const top10EconomicalBowler2015 = require("../src/server/4-top-10-economical-bowler2015");

const economicalBolwer2015 = top10EconomicalBowler2015(matchData, deliveryData);
console.log(economicalBolwer2015);
// giving command to print in respected file;
const jsonString = JSON.stringify(economicalBolwer2015, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
