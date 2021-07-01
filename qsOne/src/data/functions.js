/* eslint-disable */
const fs = require("fs");
const { vehicleTypes } = require("../types/showRoomTypes");
const { readDataFromJson, writeDataInJson } = require("./readWriteData");

function checkUniqueModelNumber(modelNumber) {
  const data = readDataFromJson();
  const allModel = data.vehicles.map(({ modelNumber }) => modelNumber);
  return !allModel.includes(modelNumber);
}

function checkSportsVehicle(vehicle) {
  return vehicle?.type === vehicleTypes.sportsVehicle;
}

//create
function createVehicle(newVehicleData) {
  const currentVehicleData = readDataFromJson();

  if (!checkUniqueModelNumber(newVehicleData.modelNumber)) {
    return false;
  }
  if (checkSportsVehicle(newVehicleData)) {
    currentVehicleData.visitorCount += 20;
  }
  currentVehicleData.vehicles.push(newVehicleData);
  writeDataInJson(currentVehicleData);
  return newVehicleData;
}

//remove
function removeVehicle(removeModelNumber) {
  const currentVehicleData = readDataFromJson();

  let removedData = null;
  const filteredVehicleData = currentVehicleData.vehicles.filter((vehicle) => {
    if (vehicle.modelNumber === removeModelNumber) {
      if (checkSportsVehicle(vehicle)) {
        currentVehicleData.visitorCount -= 20;
      }
      removedData = { ...vehicle };
      return false;
    }
    return true;
  });
  writeDataInJson({ ...currentVehicleData, vehicles: filteredVehicleData });
  return removedData;
}

module.exports = {
  createVehicle,
  removeVehicle,
};
