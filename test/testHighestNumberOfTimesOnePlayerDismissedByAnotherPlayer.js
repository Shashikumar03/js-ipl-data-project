const deliveryData = require("../deliveries.json");
const highestNumberOfTimesOnePlayerDismissedByAnotherPlayer = require("../src/server/8-highest-number-of-times-one-player-dismissed-by-another-palyer");

const highestDismissal = highestNumberOfTimesOnePlayerDismissedByAnotherPlayer(deliveryData);
console.log(highestDismissal);