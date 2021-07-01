/* eslint-disable  */
module.exports = { viewScreen };

const chalk = require("chalk");
const { readDataFromJson } = require("../../data/readWriteData");
const { homeScreen } = require("./homeScreen");

function viewScreen() {
  const showroomData = readDataFromJson();

  if (showroomData.vehicles.length > 0) {
    console.log(chalk.red("Currently Available Vehicles: "));
    showroomData.vehicles?.forEach((element) => {
      console.table(element);
    });
    console.log(chalk.green("Visitor count: "));
    console.table({ visitorCount: showroomData.visitorCount });
  } else {
    console.log(chalk.red("Showroom is empty "));
  }

  homeScreen();
}
