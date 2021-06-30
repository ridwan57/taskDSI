const fs = require("fs");
const { showRoom, vehicleTypes } = require("../utils/rootFile");
const { readDataFromJson } = require("./index");
const dataPath = "src/data/data.json";

function writeData(dataPath, data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));
}
function checkSportsVehicle(vehicle) {
  return vehicle?.type === vehicleTypes.sportsVehicle;
}
function createVehicle(newData) {
  const data = readDataFromJson();
  if (checkSportsVehicle(newData)) {
    data.visitorCount = data.visitorCount + 20;
  }
  data.vehicles.push(newData);
  // fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));
  writeData(dataPath, data);
  // console.log("data:", data);
  // return newData;
}
function removeVehicle(id) {
  const data = readDataFromJson();

  let removedData = null;
  let newData = data.vehicles.filter((vehicle) => {
    if (vehicle.model === id) {
      console.log("vehicle.model:", vehicle.model);
      if (checkSportsVehicle(vehicle)) {
        data.visitorCount = data.visitorCount - 20;
      }
      removed = true;
      removedData = { ...vehicle };
      return false;
    } else {
      return true;
    }
  });
  // fs.writeFileSync(dataPath, JSON.stringify(newData, null, 4));
  writeData(dataPath, { ...data, vehicles: newData });
  return [...newData];
}

// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// console.log("data:", data);

// console.log(removeVehicle(1));
// console.log(JSON.parse(fs.readFileSync("data.json")));
module.exports = {
  createVehicle,
  removeVehicle,
};
