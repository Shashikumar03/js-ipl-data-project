function matchWonPerTeamPerYear(matchData) {
  if (!matchData) {
    return;
  }

  const matchWon = matchData.reduce((accumulator, match) => {
    const { season, winner } = match;
    if (accumulator[season]) {
      if (accumulator[season][winner]) {
        accumulator[season][winner]++;
      } else {
        accumulator[season][winner] = 1;
      }
    } else {
      accumulator[season] = {};
      accumulator[season][winner] = 1;
    }
    return accumulator;
  }, {});
  return matchWon;
}

module.exports = matchWonPerTeamPerYear;
