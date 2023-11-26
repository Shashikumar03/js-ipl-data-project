const matchData = require("../matches.json");
const fs = require("fs");
const path = require("path");
const filePath = path.resolve(
  __dirname,
  "../src/public/output/playerWonMaximumPomEachSeason.json"
);
const playerWonMaximumPomEachSeason = require("../src/server/6-player-won-maximum-pom-each-season");

const playersWithMaximumPomEachSeason =
  playerWonMaximumPomEachSeason(matchData);

//write in json file
const jsonString = JSON.stringify(playersWithMaximumPomEachSeason, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
console.log(playersWithMaximumPomEachSeason);
//Find the strike rate of a batsman for each season