const matchData = require("./matches.json");
const deliveryData = require("./deliveries.json");
const { matchPerYear } = require("./src/server/1-matches-per-year");
const matchWonPerTeamPerYear = require("./src/server/2-match-won-per-team-per-year");
const extraRunConcededByTeam2016 = require("./src/server/3-extra-run-per-team-in-year-2016");
const top10EconomicalBowler2015 = require("./src/server/4-top-10-economical-bowler2015");
const teamWonTossAndMatch = require("./src/server/5-team-won-toss-and-match");
const playerWonMaximumPomEachSeason = require("./src/server/6-player-won-maximum-pom-each-season");
const strikeRateOfBatsmanEachSeason = require("./src/server/7-strike-rate-of-batsman-each-season");
const highestNumberOfTimesOnePlayerDismissedByAnotherPlayer = require("./src/server/8-highest-number-of-times-one-player-dismissed-by-another-palyer");
const bowlerWithBestEconomyInSuperOver = require("./src/server/9-bowler-with-best-economy-in-super-overs");

//1-matches per year;
const matchesPerSeason = matchPerYear(matchData);
console.log(matchesPerSeason);

//2-match won per team per year;
const matchesWonPerTeamEachSeason = matchWonPerTeamPerYear(matchData);
console.log(matchesWonPerTeamEachSeason);

//3-extra run per team in 2016;
const extraRun2016 = extraRunConcededByTeam2016(matchData, deliveryData);
console.log(extraRun2016);

//4-top 10 economical bowler in 2015;
const top10BestBowlerIn2015 = top10EconomicalBowler2015(
  matchData,
  deliveryData
);
console.log(top10BestBowlerIn2015);

//5-team won  toss and matches;
const wonTossAndMatch = teamWonTossAndMatch(matchData);
console.log(wonTossAndMatch);

//6-player who become maximum time player of match in each season;
const playerWonMaxEachSeason = playerWonMaximumPomEachSeason(matchData);
console.log(playerWonMaxEachSeason);

//7-strike rate of batsman each season
const strikeRateOfBatsman = strikeRateOfBatsmanEachSeason(
  matchData,
  deliveryData
);
console.log(strikeRateOfBatsman);

//8-highest number of times one player dismissed by another player
const highestNumberOfTimesOnePlayerDismiss =
  highestNumberOfTimesOnePlayerDismissedByAnotherPlayer(deliveryData);
console.log(highestNumberOfTimesOnePlayerDismiss);

//9-blowler with best economy in super over
const bestBowlerInSuperOver = bowlerWithBestEconomyInSuperOver(deliveryData);
console.log(bestBowlerInSuperOver);
