const fs = require("fs");
const matchData = require("../matches.json");
const path = require("path");
const teamWonTossAndMatch = require("../src/server/5-team-won-toss-and-match");
const filePath = path.resolve(__dirname,"../src/public/output/teamWonTossAndMatch.json");


const countOfWinningTossAndMatch = teamWonTossAndMatch(matchData);
console.log(countOfWinningTossAndMatch);

const jsonString = JSON.stringify(countOfWinningTossAndMatch, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");