const csvtojson = require("csvtojson");
const fs = require("fs");
const path = require("path");

const csvMatchPath = path.resolve(__dirname, "./src/data/matches.csv");
const csvDeliveriesPath = path.resolve(__dirname, "./src/data/deliveries.csv");
const jsonMatchPath = path.resolve(__dirname, "matches.json");
const jsonDeliveriesPath = path.resolve(__dirname, "deliveries.json");

function convertCsvToJson(csvFilePath, jsonFilePath) {
  return new Promise((resolve, reject) => {
    csvtojson()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        const jsonString = JSON.stringify(jsonObj, null, 2);
        fs.writeFile(jsonFilePath, jsonString, (err) => {
          if (err) {
            reject(err);
          } else {
            console.log(
              `JSON data has been written to the file: ${jsonFilePath}`
            );
            resolve();
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function convertAndWrite() {
  try {
    await convertCsvToJson(csvMatchPath, jsonMatchPath);
    await convertCsvToJson(csvDeliveriesPath, jsonDeliveriesPath);
  } catch (error) {
    console.error(
      "Error converting CSV to JSON and writing to file:",
      error.message
    );
  }
}

convertAndWrite();
