function bowlerWithBestEconomyInSuperOver(deliveryData) {
  if (deliveryData === undefined || !Array.isArray(deliveryData)) {
    return {};
  }
  //Here finding total runs given by bowler and total ball bowled by bowler in super over;
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
  // here getting  economy of bowler;
  const economyOfBowler = {};
  for (let key in runsGivenByBowler) {
    const calculateEconomy = (
      (runsGivenByBowler[key] * 6) /
      totalBallsByBowler[key]
    ).toFixed(3);
    economyOfBowler[key] = calculateEconomy;
  }
  // Finding the bowler with the best economy
  let bowlerName = Object.keys(economyOfBowler);
  let bowlerEconomy = Object.values(economyOfBowler);
  let indexOfBestBowler = bowlerEconomy.indexOf(
    Math.min(...bowlerEconomy).toFixed(3)
  );

  // getting best economy of  best bowler;
  const bestBowlerWithBestEconomyInSuperOver = {
    [bowlerName[indexOfBestBowler]]: bowlerEconomy[indexOfBestBowler],
  };
  return bestBowlerWithBestEconomyInSuperOver;
}
module.exports = bowlerWithBestEconomyInSuperOver;
