module.exports = {};
module.exports.viewScreen = viewScreen;
const inquirer = require("inquirer");
const { readDataFromJson } = require("../../data/index");
const { homeScreen } = require("./homeScreen");
const chalk = require("chalk");
function viewScreen() {
  const data = readDataFromJson();

  console.log(chalk.red("Current Available Vehicles: "));
  data.vehicles?.forEach((element) => {
    console.table(element);
  });
  console.table({ visitorCount: data.visitorCount });
  // console.table(JSON.stringify(data));
  // console.log(JSON.stringify(data));
  homeScreen();
}
