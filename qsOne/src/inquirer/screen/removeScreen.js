module.exports = {};
module.exports.removeScreen = removeScreen;
const inquirer = require("inquirer");
const { removeVehicle } = require("../../data/functions");
const { home } = require("../../types/typeList");
const { createScreen } = require("./createScreen");
const { homeScreen } = require("./homeScreen");

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
      console.log("answers:", answers);
      removeVehicle(answers.type);
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
