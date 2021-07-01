/* eslint-disable */
module.exports = { createScreen };
const inquirer = require("inquirer");
const { vehicleTypes } = require("../../types/showRoomTypes");
const { createVehicleQs } = require("../question/generateVehicleQs");

function createScreen() {
  const types = Object.keys(vehicleTypes);
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
      if (types.includes(answers.type)) {
        createVehicleQs(answers.type);
      } else {
        throw new Error("this type of vehicles currently unavailable");
      }
    })
    .catch((error) => {
      console.log('error:', error)
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
