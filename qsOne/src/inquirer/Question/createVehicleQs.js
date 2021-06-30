module.exports = {};
module.exports.createVehicleQs = createVehicleQs;
const inquirer = require("inquirer");
const { createVehicle } = require("../../data/functions");
// const { home } = require("../typeList");
const { showRoom, vehicleTypes } = require("../../types/typeList");
const { homeScreen } = require("../screen/homeScreen");
console.log("--------------------");
// console.log('showRoom:', showRoom)
function getVehicle(vehicleType) {
  return showRoom.find(({ type }) => type === vehicleType);
}
// const normal = showRoom.find(({ type }) => type === vehicleTypes.heavyVehicle);
// console.log('normal:', normal)
// const types = ["gfg", "fgdf"];

const validateNumbers = (moreValidationChecks, check = true) => ({
  validate: (input) => {
    if (input === "") {
      return "Please provide a valid number greater then 0";
    }
    return moreValidationChecks ? moreValidationChecks(input) : true;
  },
  filter: (input) => {
    // clear the invalid input
    return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
  },
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
    } else {
      const qsObj = {
        name,
        type,
        message: `add ${name}`,
        choices: defaultValues,
      };
      return qsObj;
    }
    // return qsObj;
    // console.log(name, type, defaultValues);
  });
};
// qsObjByTypes(vehicleTypes.sportsVehicle);
// const qs = [
//   {
//     type: "list",
//     message: "Go to ",
//     name: "Type selected: ",
//     choices: types,
//   },
//   {
//     type: "number",
//     message: "Go to ",
//     name: "ss ",
//     // choices: types,
//   },
// ];
function createVehicleQs(type) {
  const types = ["create", "remove", "view"];
  inquirer
    .prompt(qsObjByTypes(type))
    .then((answers) => {
      console.log("answers really:", answers);
      console.log("ok");
      createVehicle({
        ...answers,
        type,
      });
      return homeScreen();
      console.log("ok");
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
