function strikeRateOfBatsmanEachSeason(matchData, deliveryData) {
  const idAndSeasons = matchData.reduce((matchIdAndSeason, match) => {
    const { id, season } = match;
    matchIdAndSeason[id] = season;
    return matchIdAndSeason;
  }, {});
  
  const ballFacedPerSeasonByBatsman = {};
  const batsmanRunSeasonWise = deliveryData.reduce((batsManRun, delivery) => {
    const { match_id, batsman, batsman_runs, wide_runs } = delivery;
    for (let key in idAndSeasons) {
      const season = parseInt(idAndSeasons[key]);
      if (match_id === key) {
        const batsmanRun = parseInt(batsman_runs);
        if (batsManRun[batsman]) {
          if (batsManRun[batsman][season]) {
            batsManRun[batsman][season] += batsmanRun;
          } else {
            batsManRun[batsman][season] = batsmanRun;
          }
        } else {
          batsManRun[batsman] = {};
          batsManRun[batsman][season] = batsmanRun;
        }
        // finding ball played by a batsman;
        if (wide_runs === "0") {
          if (ballFacedPerSeasonByBatsman[batsman]) {
            if (ballFacedPerSeasonByBatsman[batsman][season]) {
              ballFacedPerSeasonByBatsman[batsman][season] += 1;
            } else {
              ballFacedPerSeasonByBatsman[batsman][season] = 1;
            }
          } else {
            ballFacedPerSeasonByBatsman[batsman] = {};
            ballFacedPerSeasonByBatsman[batsman][season] = 1;
          }
        }
      }
    }
    return batsManRun;
  }, {});
  // calculating strike rate
  for (let keyA in batsmanRunSeasonWise) {
    let seasonRuns = batsmanRunSeasonWise[keyA];
    let ballfaced = ballFacedPerSeasonByBatsman[keyA];
    for (keyB in seasonRuns) {
      seasonRuns[keyB] = ((seasonRuns[keyB] * 100) / ballfaced[keyB]).toFixed(
        2
      );
    }
  }
  return batsmanRunSeasonWise;
}

module.exports = strikeRateOfBatsmanEachSeason;
