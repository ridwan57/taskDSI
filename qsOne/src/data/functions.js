/* eslint-disable */
const fs = require("fs");
const { vehicleTypes } = require("../types/showRoom");
const { readDataFromJson } = require("./index");

const dataPath = "src/data/data.json";
function checkUniqueId(id) {
  // console.log("id", typeof id);
  const data = readDataFromJson();
  const allModel = data.vehicles.map(({ model }) => model);
  // console.log(`${id}: included:`, allModel.includes(id));
  return !allModel.includes(id);
}

function writeData(dataPathToWrite, data) {
  fs.writeFileSync(dataPathToWrite, JSON.stringify(data, null, 4));
}
function checkSportsVehicle(vehicle) {
  return vehicle?.type === vehicleTypes.sportsVehicle;
}
function createVehicle(newData) {
  const data = readDataFromJson();

  if (!checkUniqueId(newData.model)) {
    return false;
  }
  if (checkSportsVehicle(newData)) {
    data.visitorCount += 20;
  }
  data.vehicles.push(newData);
  // fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));
  writeData(dataPath, data);
  // console.log("data:", data);
  return newData;
}
function removeVehicle(id) {
  const data = readDataFromJson();

  let removedData = null;
  const newData = data.vehicles.filter((vehicle) => {
    if (vehicle.model === id) {
      // console.log("vehicle.model:", vehicle.model);
      if (checkSportsVehicle(vehicle)) {
        data.visitorCount -= 20;
      }
      // console.log("power");
      removedData = { ...vehicle };
      return false;
    }
    return true;
  });
  // fs.writeFileSync(dataPath, JSON.stringify(newData, null, 4));
  writeData(dataPath, { ...data, vehicles: newData });
  return removedData;
}

// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// createVehicle({ name: "ridwan" });
// console.log("data:", data);

// console.log(removeVehicle(1));
// console.log(JSON.parse(fs.readFileSync("data.json")));
checkUniqueId(3);
checkUniqueId(9);
module.exports = {
  createVehicle,
  removeVehicle,
};
