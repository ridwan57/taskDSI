/* eslint-disable */
module.exports = {};
// eslint-disable-next-line no-use-before-define
module.exports.removeScreen = removeScreen;
const inquirer = require("inquirer");
const { removeVehicle } = require("../../data/functions");
// const { home } = require("../../types/typeList");
// const { createScreen } = require("./createScreen");
const { homeScreen } = require("./homeScreen");
const chalk = require("chalk");

function removeScreen() {
  // console.log("removeScreen called:");

  inquirer
    .prompt([
      {
        type: "number",
        message: "model Id:  ",
        name: "type",
        // choices: types,
      },
    ])
    .then((answers) => {
      // console.log("answers:", answers);
      const deletedData = removeVehicle(answers.type);
      if (deletedData) {
        console.log(chalk.red("data deleted: "));
        console.table(deletedData);
      } else {
        console.log(chalk.red("data not found: "));
      }
      homeScreen();

      //   console.log("ok");

      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
