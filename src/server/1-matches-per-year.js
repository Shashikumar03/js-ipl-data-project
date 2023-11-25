function matchPerYear(matchData) {
  if (matchData === undefined || !Array.isArray(matchData)) {
    return {};
  } else {
    const matchPlayed = matchData.reduce((accumudator, match) => {
      if (accumudator[match.season]) {
        accumudator[match.season] += 1;
      } else {
        accumudator[match.season] = 1;
      }
      return accumudator;
    }, {});
    return matchPlayed;
  }
}
module.exports = { matchPerYear };
