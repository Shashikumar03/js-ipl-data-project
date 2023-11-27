function matchPerYear(matchData) {
  if (matchData === undefined || !Array.isArray(matchData)) {
    return {};
  } else {
    const matchPlayedPerYear = matchData.reduce((totalMatchPerYear, match) => {
      const { season } = match;
      if (totalMatchPerYear[season]) {
        totalMatchPerYear[season] += 1;
      } else {
        totalMatchPerYear[season] = 1;
      }
      return totalMatchPerYear;
    }, {});
    return matchPlayedPerYear;
  }
}
module.exports = { matchPerYear };
