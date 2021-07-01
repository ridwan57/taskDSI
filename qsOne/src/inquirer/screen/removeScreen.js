/* eslint-disable */
module.exports = { removeScreen };

const inquirer = require("inquirer");
const { removeVehicle } = require("../../data/functions");
const { homeScreen } = require("./homeScreen");
const chalk = require("chalk");

function removeScreen() {
  inquirer
    .prompt([
      {
        type: "number",
        message: "model Number:  ",
        name: "type",
      },
    ])
    .then((answers) => {
      const deletedData = removeVehicle(answers.type);
      if (deletedData) {
        console.log(chalk.red("data deleted: "));
        console.table(deletedData);
      } else {
        console.log(chalk.red("data not found: "));
      }
      homeScreen();
    })
    .catch((error) => {
      console.log("error:", error);
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
