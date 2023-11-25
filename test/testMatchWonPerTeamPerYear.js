const matchData = require("../matches.json");
const matchWonPerTeamPerYear = require("../src/server/2-match-won-per-team-per-year");
const path = require("path");
const fs = require("fs");
const filePath = path.resolve( __dirname,"../src/public/output/matchesWonPerTeamPerYear.json");

const wonMatchPerYear = matchWonPerTeamPerYear(matchData);
console.log(wonMatchPerYear);
 
//write in json file
const jsonString = JSON.stringify(wonMatchPerYear, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
