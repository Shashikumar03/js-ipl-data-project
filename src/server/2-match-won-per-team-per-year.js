function matchWonPerTeamPerYear(matchData) {
  if (matchData === undefined ||!Array.isArray(matchData)) {
    return {};
  }

  const matchWon = matchData.reduce((matchWonPerSeason, match) => {
    const { season, winner } = match;
    if (matchWonPerSeason[season]) {
      if (matchWonPerSeason[season][winner]) {
        matchWonPerSeason[season][winner]++;
      } else {
        matchWonPerSeason[season][winner] = 1;
      }
    } else {
      matchWonPerSeason[season] = {};
      matchWonPerSeason[season][winner] = 1;
    }
    return matchWonPerSeason;
  }, {});
  return matchWon;
}

module.exports = matchWonPerTeamPerYear;
