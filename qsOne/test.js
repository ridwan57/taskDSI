const { data } = require("./data/index");
const { home } = require("./inquirer/typeList");

function createVehicle(newData) {
  data.push(newData);
  console.log("data:", data);
  return newData;
}
function removeVehicle(modelId) {
  const filteredData = data.filter((vehicle) => vehicle.model !== modelId);
  console.log("filteredData:", filteredData);
}

module.exports = {
  createVehicle,
  removeVehicle,
};
