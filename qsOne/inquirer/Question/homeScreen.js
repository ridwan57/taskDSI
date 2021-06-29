module.exports = {};
module.exports.homeScreen = homeScreen;
const inquirer = require("inquirer");
const { home } = require("../typeList");
const { createScreen } = require("./createScreen");

function homeScreen() {
  console.log("homeScreen called:");
  const types = ["create", "remove", "view"];
  inquirer
    .prompt([
      {
        type: "list",
        message: "Go to ",
        name: "type",
        choices: types,
      },
    ])
    .then((answers) => {
      console.log("answers:", answers);
      switch (answers.type) {
        case "create":
          console.log("created");
          createScreen();
          break;
        case "remove":
          console.log("created");
          break;
        case "view":
          console.log("created");
          break;

        default:
          break;
      }
      console.log("ok");

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
