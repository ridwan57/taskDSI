/* eslint-disable*/
const fs = require("fs");

function readDataFromJson() {
  return JSON.parse(fs.readFileSync("src/data/data.json"));
}
module.exports = {
  readDataFromJson,
};
