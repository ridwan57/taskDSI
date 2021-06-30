/* eslint-disable */
module.exports = {};
module.exports.createVehicleQs = createVehicleQs;
const chalk = require("chalk");
const inquirer = require("inquirer");
const { createVehicle } = require("../../data/functions");

const { showRoom } = require("../../types/showRoom");
const { homeScreen } = require("../screen/homeScreen");

function getVehicle(vehicleType) {
  return showRoom.find(({ type }) => type === vehicleType);
}

const validateNumbers = (moreValidationChecks) => ({
  validate: (input) => {
    if (input === "") {
      return "Please provide a valid number greater then 0";
    }
    return moreValidationChecks ? moreValidationChecks(input) : true;
  },
  filter: (input) =>
    // clear the invalid input
    Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input),
});
const qsObjByTypes = (vehicleType) => {
  const vehicleData = getVehicle(vehicleType);
  return vehicleData.data.map(({ name, type, defaultValues = null }) => {
    if (type === "number") {
      const qsObj = {
        name,
        type,
        message: `add ${name}`,
        choices: defaultValues,
        ...validateNumbers(),
      };
      return qsObj;
    }
    const qsObj = {
      name,
      type,
      message: `add ${name}`,
      choices: defaultValues,
    };
    return qsObj;

    // return qsObj;
    // console.log(name, type, defaultValues);
  });
};

function createVehicleQs(type) {
  inquirer
    .prompt(qsObjByTypes(type))
    .then((answers) => {
      // console.log("answers really:", answers);
      // console.log("ok");
      const newData = createVehicle({
        ...answers,
        type,
      });
      // console.log(newData);
      if (newData) {
        console.log(chalk.green("data created: "));
        console.table(answers);
      } else {
        console.log(chalk.red("Data creation failed: "));
        console.log(chalk.red("Id must be unique : ", answers.model));
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
// createVehicleQs();
