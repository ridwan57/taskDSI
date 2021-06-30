module.exports = {};
module.exports.createVehicleQs = createVehicleQs;
const inquirer = require("inquirer");
const { createVehicle } = require("../../data/functions");
const { home } = require("../typeList");
const { showRoom, vehicleTypes } = require("../utils/rootFile");
const { homeScreen } = require("./homeScreen");
console.log("--------------------");
// console.log('showRoom:', showRoom)
function getVehicle(vehicleType) {
  return showRoom.find(({ type }) => type === vehicleType);
}
// const normal = showRoom.find(({ type }) => type === vehicleTypes.heavyVehicle);
// console.log('normal:', normal)
const types = ["gfg", "fgdf"];
const qsObjByTypes = (vehicleType) => {
  const vehicleData = getVehicle(vehicleType);
  return vehicleData.data.map(({ name, type, defaultValues = null }) => {
    const qsObj = {
      name,
      type,
      message: `add ${name}`,
      choices: defaultValues,
      validate: (input) => {
        // console.log("input:", input);
        if (typeof input === "number") return true;
        return "Enter valid input";
      },
    };
    return qsObj;
    // console.log(name, type, defaultValues);
  });
};
// qsObjByTypes(vehicleTypes.sportsVehicle);
const qs = [
  {
    type: "list",
    message: "Go to ",
    name: "Type selected: ",
    choices: types,
  },
  {
    type: "number",
    message: "Go to ",
    name: "ss ",
    // choices: types,
  },
];
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
