function highestNumberOfTimesOnePlayerDismissedByAnotherPlayer(deliveryData) {
  if (deliveryData === undefined || !Array.isArray(deliveryData)) {
    return;
  }
  // finding object of bolwer with value, value is also a object of player name as key and number of times dismissed by same bowler;
  const numberOfTimesBowlerDismissedBatsman = deliveryData.reduce(
    (wicketByBowler, delivery) => {
      const { bowler, player_dismissed } = delivery;

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
    },
    {}
  );
//
  let maxValue = 0;
  let batsmanName = "";
  let bowlerName = "";

  for (let bowler in numberOfTimesBowlerDismissedBatsman) {
    let batsmanDissmissal = numberOfTimesBowlerDismissedBatsman[bowler];
    for (let batsman in batsmanDissmissal) {
      if (batsmanDissmissal[batsman] > maxValue) {
        maxValue = batsmanDissmissal[batsman];
        batsmanName = batsman;
        bowlerName = bowler;
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
