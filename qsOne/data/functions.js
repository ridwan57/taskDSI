const fs = require("fs");
const { showRoom, vehicleTypes } = require("../inquirer/utils/rootFile");
const { data } = require("./index");

function createVehicle(newData) {
  fs.writeFileSync("data.json", JSON.stringify(newData, null, 4));

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
