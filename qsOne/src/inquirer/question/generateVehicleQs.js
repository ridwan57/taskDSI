/* eslint-disable */
module.exports = { createVehicleQs };

const chalk = require("chalk");
const inquirer = require("inquirer");
const { createVehicle } = require("../../data/functions");
const { getVehicleByType } = require("../../types/showRoomTypes");
const { homeScreen } = require("../screen/homeScreen");

//inquirer validator
const validateNumbers = () => ({
  validate: (input) => {
    if (input === "") {
      return "Please provide a valid number greater then 0";
    }
    return true;
  },
  filter: (input) =>
    // clear the invalid input
    Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input),
});

//questionsCreatedByTypes
const qsObjByTypes = (vehicleType) => {
  const vehicleDataType = getVehicleByType(vehicleType);
  return vehicleDataType.data.map(({ name, type, defaultValues = null }) => {
    //number type
    if (type === "number") {
      const qsObj = {
        name,
        type,
        message: `add ${name}`,
        choices: defaultValues,
        ...validateNumbers(),
      };
      return qsObj;
    } else if (type === "list") {
      //list type
      const qsObj = {
        name,
        type,
        message: `add ${name}`,
        choices: defaultValues,
      };
      return qsObj;
    } else {
      throw new Error(`this type: ${type} is unexpected,exiting..`);
    }
  });
};

//main inquirer function
function createVehicleQs(type) {
  inquirer
    .prompt(qsObjByTypes(type))
    .then((answers) => {
      const newData = createVehicle({
        ...answers,
        type,
      });
      if (newData) {
        console.log(chalk.green("data created: "));
        console.table(newData);
      } else {
        console.log(chalk.red("Data creation failed: "));
        console.log(chalk.red(`Id: ${answers.modelNumber} not unique `));
      }
      return homeScreen();
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
