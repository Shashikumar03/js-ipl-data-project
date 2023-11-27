function highestNumberOfTimesOnePlayerDismissedByAnotherPlayer(deliveryData) {
  if (deliveryData === undefined || !Array.isArray(deliveryData)) {
    return;
  }
  const answer = deliveryData.reduce((wicketByBowler, delivery) => {
    const { bowler, batsman, player_dismissed } = delivery;

    if (player_dismissed !== undefined && player_dismissed !== "") {
      if (wicketByBowler[bowler]) {
        if (wicketByBowler[bowler][player_dismissed]) {
          wicketByBowler[bowler][player_dismissed] += 1;
        } else {
          wicketByBowler[bowler][player_dismissed] = 1;
        }
      } else {
        wicketByBowler[bowler] = {};
        wicketByBowler[bowler][player_dismissed] = 1;
      }
    }
    return wicketByBowler;
  }, {});
    
  let maxValue = 0;
  let batsmanName = "";
    let bowlerName = "";
    
  for (let key in answer) {
    let a = answer[key];
    for (let keyA in a) {
      if (a[keyA] > maxValue) {
        maxValue = a[keyA];
        batsmanName = keyA;
        bowlerName = key;
      }
    }
  }

  const bowlerAndNumberOfTimes = {
    [bowlerName]: maxValue,
  };
  const numberOfTimesAPlayerDismissesByAnother = {
    [batsmanName]: bowlerAndNumberOfTimes,
  };
    return numberOfTimesAPlayerDismissesByAnother;
}
module.exports = highestNumberOfTimesOnePlayerDismissedByAnotherPlayer;
