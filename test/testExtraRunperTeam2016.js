const deliveryData = require("../deliveries.json");
const matchData = require("../matches.json");
const extraRunConcededByTeam2016 = require("../src/server/3-extra-run-per-team-per-year-2016");

const extraRunByteam2016 = extraRunConcededByTeam2016(matchData, deliveryData);
console.log(extraRunByteam2016);
