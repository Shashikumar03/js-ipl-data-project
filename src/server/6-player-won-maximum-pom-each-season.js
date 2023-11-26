function playerWonMaximumPomEachSeason(matchData) {
  if (matchData === undefined || !Array.isArray(matchData)) {
    return;
  }
    //making  group of season and all the Pom in that respective year
  const playerOfMatchEachSeason = matchData.reduce((playerOfMatch, match) => {
    const { season, player_of_match } = match;
    if (playerOfMatch[season]) {
      if (playerOfMatch[season][player_of_match]) {
        playerOfMatch[season][player_of_match] += 1;
      } else {
        playerOfMatch[season][player_of_match] = 1;
      }
    } else {
      playerOfMatch[season] = {};
      playerOfMatch[season][player_of_match] = 1;
    }
    return playerOfMatch;
  }, {});
  const years = Object.keys(playerOfMatchEachSeason).map((a) => a);
  const plaerWithPom = {};
   //find player of maximum pom 
  const aa = Object.values(playerOfMatchEachSeason).forEach((a) => {
    let max = 0;
    let nameOfPlayer;
    for (const [key, value] of Object.entries(a)) {
      if (max < value) {
        max = value;
        nameOfPlayer = key;
      }
    }

    plaerWithPom[nameOfPlayer] = max;
  });
// here finding and matchinh highest pom per season
  const playerMom = Object.entries(plaerWithPom);
  const playerWonHighestPomEachSeason = {};
  for (let index = 0; index < playerMom.length; index++) {
    playerWonHighestPomEachSeason[years[index]] = playerMom[index];

  }
  return playerWonHighestPomEachSeason;
}
module.exports = playerWonMaximumPomEachSeason;
