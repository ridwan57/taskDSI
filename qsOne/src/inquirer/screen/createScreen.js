module.exports = {};
module.exports.createScreen = createScreen;
const inquirer = require("inquirer");
const { vehicleTypes } = require("../../utils/rootFile");
const { createVehicleQs } = require("../Question/createVehicleQs");
const { homeScreen } = require("./homeScreen");

function qsSetter() {}
function createScreen() {
  const types = Object.keys(vehicleTypes);
  console.log("types:", types);
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
        case vehicleTypes.normalVehicle:
          console.log("normalVehicle");
          createVehicleQs(vehicleTypes.normalVehicle);
          break;
        case vehicleTypes.sportsVehicle:
          console.log("sportsVehicle");
          createVehicleQs(vehicleTypes.sportsVehicle);
          break;
        case vehicleTypes.heavyVehicle:
          console.log("heavyVehicle");
          createVehicleQs(vehicleTypes.heavyVehicle);
          break;

        default:
          break;
      }
      //   homeScreen();

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
// createScreen();
// module.exports = {
//   createScreen,
// };
