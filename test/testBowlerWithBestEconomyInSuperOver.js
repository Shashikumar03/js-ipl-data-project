const fs = require("fs");
const path = require("path");
const deliveryData = require("../deliveries.json");
const bowlerWithBestEconomyInSuperOver = require("../src/server/9-bowler-with-best-economy-in-super-overs");

const bolwersSuperOversEconomy = bowlerWithBestEconomyInSuperOver(deliveryData);
console.log(bolwersSuperOversEconomy);

const filePath = path.resolve(
  __dirname,
  "../src/public/output/bowlerWithBestEconomyInSuperOver.json"
);
const jsonString = JSON.stringify(bolwersSuperOversEconomy, null, 2);
fs.writeFileSync(filePath, jsonString, "utf-8");
