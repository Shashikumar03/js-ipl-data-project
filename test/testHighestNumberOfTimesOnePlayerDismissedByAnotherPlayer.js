const fs = require("fs");
const path = require("path");
const deliveryData = require("../deliveries.json");
const highestNumberOfTimesOnePlayerDismissedByAnotherPlayer = require("../src/server/8-highest-number-of-times-one-player-dismissed-by-another-palyer");
const filePath = path.resolve(
  __dirname,
  "../src/public/output/highestNumberOfTimesOnePlayerDismissedByANotherPlayer.json"
);

const highestDismissal =
  highestNumberOfTimesOnePlayerDismissedByAnotherPlayer(deliveryData);
console.log(highestDismissal);
const jsonString = JSON.stringify(highestDismissal, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
