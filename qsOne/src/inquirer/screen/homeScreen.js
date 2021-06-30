/* eslint-disable */
module.exports = {};
module.exports.homeScreen = homeScreen;
const inquirer = require("inquirer");
// const { home } = require("../../types/typeList");
const { createScreen } = require("./createScreen");
const { removeScreen } = require("./removeScreen");
const { viewScreen } = require("./viewScreen");

function homeScreen() {
  // console.log("homeScreen called:");
  const types = ["create", "remove", "view", "exit"];
  
  inquirer
    .prompt([
      {
        type: "list",
        message: "Go to menu: ",
        name: "type",
        choices: types,
      },
    ])
    .then((answers) => {
      switch (answers.type) {
        case "create":
          createScreen();
          break;
        case "remove":
          removeScreen();
          break;
        case "view":
          viewScreen();
          break;

        default:
          break;
      }
      // console.log("ok");

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
// homeScreen();
