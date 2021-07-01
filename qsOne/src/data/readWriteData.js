/* eslint-disable*/
const fs = require("fs");
const jsonDataPath = "src/data/data.json";

function readDataFromJson() {
  return JSON.parse(fs.readFileSync(jsonDataPath));
}
function writeDataInJson(data) {
  fs.writeFileSync(jsonDataPath, JSON.stringify(data, null, 4));
}
module.exports = {
  readDataFromJson,
  writeDataInJson,
};
