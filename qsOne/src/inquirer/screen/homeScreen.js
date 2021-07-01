/* eslint-disable */
module.exports = { homeScreen };

const chalk = require("chalk");
const inquirer = require("inquirer");
const { createScreen } = require("./createScreen");
const { removeScreen } = require("./removeScreen");
const { viewScreen } = require("./viewScreen");

const homeScreenOptions = {
  Create: "Create",
  Remove: "Remove",
  View: "View",
  Exit: "Exit",
};

function homeScreen() {
  const types = Object.keys(homeScreenOptions);

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
        case homeScreenOptions.Create:
          createScreen();
          break;
        case homeScreenOptions.Remove:
          removeScreen();
          break;
        case homeScreenOptions.View:
          viewScreen();
          break;
        case homeScreenOptions.Exit:
          console.log(chalk.red("Exited...."));
          break;

        default:
          throw new Error("Unavailable Command,Exiting.....");
          break;
      }
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
