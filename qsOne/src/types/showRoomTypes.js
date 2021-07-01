/* eslint-disable */
const showRoomTypes = [];

// three types
const vehicleTypes = {
  normalVehicle: "normalVehicle",
  sportsVehicle: "sportsVehicle",
  heavyVehicle: "heavyVehicle",
};
//vehicle attributes
const vehicleAttributes = {
  modelNumber: "modelNumber",
  enginePower: "enginePower",
  tireSize: "tireSize",
  engineType: "engineType",
  turbo: "turbo",
  weight: "weight",
};
//data types
const dataType = {
  number: "number",
  list: "list",
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
  { name: vehicleAttributes.modelNumber, type: dataType.number },
  { name: vehicleAttributes.enginePower, type: dataType.number },
  { name: vehicleAttributes.tireSize, type: dataType.number },
  {
    name: vehicleAttributes.engineType,
    type: dataType.list,
    defaultValues: ["oil", "gas", "diesel"],
  },
];
showRoomTypes.push({ type: vehicleTypes.normalVehicle, data: normalVehicle });

//sports
const sportsUpdate = {
  name: vehicleAttributes.engineType,
  type: dataType.list,
  defaultValues: ["oil"],
};

const sportsVehicle = [
  ...modify(normalVehicle, sportsUpdate),
  { name: vehicleAttributes.turbo, type: dataType.number },
];

showRoomTypes.push({ type: vehicleTypes.sportsVehicle, data: sportsVehicle });

//heavy
const heavyUpdate = {
  name: vehicleAttributes.engineType,
  type: dataType.list,
  defaultValues: ["diesel"],
};

const heavyVehicle = [
  ...modify(normalVehicle, heavyUpdate),
  { name: vehicleAttributes.weight, type: dataType.number },
];

showRoomTypes.push({ type: vehicleTypes.heavyVehicle, data: heavyVehicle });

function getVehicleByType(vehicleType) {
  return showRoomTypes.find(({ type }) => type === vehicleType);
}

module.exports = {
  vehicleTypes,
  getVehicleByType,
};
