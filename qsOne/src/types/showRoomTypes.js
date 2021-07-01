/* eslint-disable */
const showRoomTypes = [];

// three types
const vehicleTypes = {
  normalVehicle: "normalVehicle",
  sportsVehicle: "sportsVehicle",
  heavyVehicle: "heavyVehicle",
};

// modify keys
function modify(initial, update) {
  const newData = initial.filter(
    ({ name: objName }) => objName !== update.name
  );

  return [...newData, update];
}

// as per requirement

//normal
const normalVehicle = [
  { name: "modelNumber", type: "number" },
  { name: "enginePower", type: "number" },
  { name: "tireSize", type: "number" },
  { name: "engineType", type: "list", defaultValues: ["oil", "gas", "diesel"] },
];
showRoomTypes.push({ type: vehicleTypes.normalVehicle, data: normalVehicle });

//sports
const sportsUpdate = {
  name: "engineType",
  type: "list",
  defaultValues: ["oil"],
};

const sportsVehicle = [
  ...modify(normalVehicle, sportsUpdate),
  { name: "turbo", type: "number" },
];

showRoomTypes.push({ type: vehicleTypes.sportsVehicle, data: sportsVehicle });

//heavy
const heavyUpdate = {
  name: "engineType",
  type: "list",
  defaultValues: ["diesel"],
};

const heavyVehicle = [
  ...modify(normalVehicle, heavyUpdate),
  { name: "weight", type: "number" },
];

showRoomTypes.push({ type: vehicleTypes.heavyVehicle, data: heavyVehicle });

function getVehicleByType(vehicleType) {
  return showRoomTypes.find(({ type }) => type === vehicleType);
}

module.exports = {
  vehicleTypes,
  getVehicleByType,
};
