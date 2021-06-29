const { showRoom, vehicleTypes } = require("../inquirer/utils/rootFile");
const { data } = require("./index");

function createVehicle(newData) {
  data.push(newData);
  console.log("data:", data);
  // return newData;
}

// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// console.log("data:", data);
module.exports = {
  createVehicle,
};
