// first filter the same team won the match and also won the match;
// reduce method count how many times a do do this.
function teamWonTossAndMatch(matchData) {
  const teamsWiningRecords = matchData
    .filter((match) => match.winner === match.toss_winner)
    .reduce((teamRecords, match) => {
      if (teamRecords[match.winner]) {
        teamRecords[match.winner] += 1;
      } else {
        teamRecords[match.winner] = 1;
      }
      return teamRecords;
    }, {});
  return teamsWiningRecords;
}
module.exports = teamWonTossAndMatch;
