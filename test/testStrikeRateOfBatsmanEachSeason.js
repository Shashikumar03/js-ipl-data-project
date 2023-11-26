const deliveryData = require("../deliveries.json");
const matchData = require("../matches.json");

const strikeRateOfBatsmanEachSeason = require("../src/server/7-strike-rate-of-batsman-each-season");

const strikeRate = strikeRateOfBatsmanEachSeason(matchData, deliveryData);
console.log(strikeRate);
