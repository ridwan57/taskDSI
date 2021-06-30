const fs = require("fs");
const { showRoom, vehicleTypes } = require("../inquirer/utils/rootFile");
const { data } = require("./index");

function createVehicle(newData) {
  data.push(newData);
  fs.writeFileSync("data.json", JSON.stringify(data, null, 4));
  console.log("data:", data);
  // return newData;
}
function removeVehicle(id) {
  let removedData = null;
  let newData = data.filter((vehicle) => {
    if (vehicle.model === id) {
      console.log("vehicle.model:", vehicle.model);
      removed = true;
      removedData = { ...vehicle };
      return false;
    } else {
      return true;
    }
  });
  fs.writeFileSync("data.json", JSON.stringify(newData, null, 4));
  return [...newData];
}

// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
console.log("data:", data);

console.log(removeVehicle(1));
console.log(JSON.parse(fs.readFileSync("data.json")));
module.exports = {
  createVehicle,
  removeVehicle,
};
