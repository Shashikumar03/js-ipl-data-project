function top10EconomicalBowler2015(matchData, deliveryData) {
  if (
    matchData === undefined ||
    deliveryData === undefined ||
    !Array.isArray(matchData) ||
    !Array.isArray(deliveryData)
  ) {
    return {};
  }

  //finding ids of matches played in 2015;
  const idOf2015 = matchData
    .filter((match) => parseInt(match.season) === 2015)
    .map((match) => match.id);

  //find total balls and total runs given by bowler;
  const totalBallBowlByBowler = {};
  const totalRunsByBower = deliveryData.reduce((runsByBowler, delivery) => {
    const { match_id, total_runs, bowler } = delivery;
    const totalRuns = parseInt(total_runs);
    if (idOf2015.includes(match_id)) {
      if (runsByBowler[bowler]) {
        runsByBowler[bowler] += totalRuns;
        totalBallBowlByBowler[bowler] += 1;
      } else {
        totalBallBowlByBowler[bowler] = 1;
        runsByBowler[bowler] = totalRuns;
      }
    }
    return runsByBowler;
  }, {});

  // calculating economy of bowlers;
  let economy = [];
  for (let key in totalRunsByBower) {
    let totalBall = totalBallBowlByBowler[key];
    let totalRuns = totalRunsByBower[key];
    let netEconomy = ((totalRuns * 6) / totalBall).toFixed(2);
    economy.push({ [key]: netEconomy });
  }
  // finding top 10 blower eith best economy
  const top10EconomicalBowlers = economy
    .sort((a, b) => Object.values(a) - Object.values(b))
    .slice(0, 10);
  return top10EconomicalBowlers;
}
module.exports = top10EconomicalBowler2015;
