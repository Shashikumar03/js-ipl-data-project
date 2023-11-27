// first filter the same team won the match and also won the match;
// reduce method count how many times a do do this.
function teamWonTossAndMatch(matchData) {
  if (matchData === undefined || !Array.isArray(matchData)) {
    return {};
  }
  const teamsWiningRecords = matchData
    .filter((match) => match.winner === match.toss_winner)
    .reduce((teamRecords, match) => {
      const { winner } = match;
      if (teamRecords[winner]) {
        teamRecords[winner] += 1;
      } else {
        teamRecords[winner] = 1;
      }
      return teamRecords;
    }, {});

  return teamsWiningRecords;
}
module.exports = teamWonTossAndMatch;
