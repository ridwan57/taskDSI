/* eslint-disable  */
module.exports = {};
module.exports.viewScreen = viewScreen;

const chalk = require("chalk");
const { readDataFromJson } = require("../../data/index");
const { homeScreen } = require("./homeScreen");

function viewScreen() {
  const data = readDataFromJson();

  console.log(chalk.red("Current Available Vehicles: "));
  data.vehicles?.forEach((element) => {
    console.table(element);
  });
  console.log(chalk.green("visitor count: "));
  console.table({ visitorCount: data.visitorCount });
  // console.table(JSON.stringify(data));
  // console.log(JSON.stringify(data));
  homeScreen();
}
