function bowlerWithBestEconomyInSuperOver(deliveryData) {
  const totalBallsByBowler = {};
  const runsGivenByBowler = deliveryData.reduce((runsByBowler, delivery) => {
    const { is_super_over, bowler, total_runs } = delivery;

    const totatRuns = parseInt(total_runs);
    if (is_super_over === "1") {
      if (runsByBowler[bowler]) {
        runsByBowler[bowler] += totatRuns;
      } else {
        runsByBowler[bowler] = totatRuns;
      }
      if (totalBallsByBowler[bowler]) {
        totalBallsByBowler[bowler] += 1;
      } else {
        totalBallsByBowler[bowler] = 1;
      }
    }
    return runsByBowler;
  }, {});
  const economyOfBowler = {};
  for (let key in runsGivenByBowler) {
    const calculateEconomy = (
      (runsGivenByBowler[key] * 6) /
      totalBallsByBowler[key]
    ).toFixed(3);
    economyOfBowler[key] = calculateEconomy;
  }
  let bowlerName = Object.keys(economyOfBowler);
  let bowlerEconomy = Object.values(economyOfBowler);
  let bowlerEconomyCopy = [...bowlerEconomy];

  let bestEconomy = bowlerEconomyCopy
    .sort((a, b) => {
      return a - b;
    })
    .slice(0, 1);

  const indexOfBestBowler = bowlerEconomy.indexOf(bestEconomy[0]);
  const bestBowlerWithBestEconomyInSuperOver = {
    [bowlerName[indexOfBestBowler]]: bestEconomy[0],
  };
  return bestBowlerWithBestEconomyInSuperOver;
}
module.exports = bowlerWithBestEconomyInSuperOver;
