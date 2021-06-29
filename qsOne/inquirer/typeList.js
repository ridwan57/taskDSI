const inquirer = require("inquirer");
const types = ["Gfdg", "gdfg"];
function typeList(next) {
  inquirer
    .prompt([
      {
        type: "number",
        message: "Choose a type ",
        name: "Type selected: ",
        //   choices: types,
      },
      {
        type: "number",
        message: "Choose a type ",
        name: "Type selecteds: ",
        //   choices: types,
      },
    ])
    .then((answers) => {
      console.log("answers:", answers);
      next();

      // Use user feedback for... whatever!!
    })
    .then()
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function anotherList() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose a types ",
        name: "Type selected: ",
        choices: types,
      },
    ])
    .then((answers) => {
      console.log("answers:", answers);
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

function home() {
  const types = ["create", "remove", "view"];
  inquirer
    .prompt([
      {
        type: "list",
        message: "Go to ",
        name: "Type selected: ",
        choices: types,
      },
    ])
    .then((answers) => {
      console.log("answers:", answers);
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

function createPromt() {
  const types = ["create", "remove", "view"];
  inquirer
    .prompt([
      {
        type: "list",
        message: "Go to ",
        name: "Type selected: ",
        choices: types,
      },
    ])
    .then((answers) => {
      console.log("answers:", answers);
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

module.exports = {
  typeList,
  anotherList,
  home,
};
