function extraRunConcededByTeam2016(matchData, deliveryData) {
  if (matchData === undefined || deliveryData === undefined || !Array.isArray(matchData) || !Array.isArray(deliveryData)) {
    return {};
  }
  const idOf2016 = [];
  matchData.filter((match) => {
    const { id, season } = match;
    if (season === "2016") {
      idOf2016.push(id);
      return match;
    }
  });

  const totalExtraRunByTeam = deliveryData.reduce(
    (extraRunPerTeam, delivery) => {
      const { match_id, bowling_team, extra_runs } = delivery;
      const extraRuns = parseInt(extra_runs);
      if (idOf2016.includes(match_id)) {
        if (extraRunPerTeam[bowling_team]) {
          extraRunPerTeam[bowling_team] += extraRuns;
        } else {
          extraRunPerTeam[bowling_team] = extraRuns;
        }
      }
      return extraRunPerTeam;
    },
    {}
  );

  return totalExtraRunByTeam;
}
module.exports = extraRunConcededByTeam2016;
