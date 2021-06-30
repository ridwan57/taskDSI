/* eslint-disable */

const showRoom = [];


const vehicle = {
  normalVehicle: "normalVehicle",
  sportsVehicle: "sportsVehicle",
  heavyVehicle: "heavyVehicle",
};

//modify keys
function modify(initial, update) {
  const newData = initial.filter(
    ({ name: objName }) => objName !== update.name
  );

  return [...newData, update];
}

//as per requirement

const normalVehicle = [
  { name: "model", type: "number" },
  { name: "enginePower", type: "number" },
  { name: "tireSize", type: "number" },
  { name: "engineType", type: "list", defaultValues: ["oil", "gas", "diesel"] },
];
showRoom.push({ type: vehicle.normalVehicle, data: normalVehicle });


const sportsUpdate = {
  name: "engineType",
  type: "list",
  defaultValues: ["oil"],
};

const sportsVehicle = [
  ...modify(normalVehicle, sportsUpdate),
  { name: "turbo", type: "number" },
];

showRoom.push({ type: vehicle.sportsVehicle, data: sportsVehicle });

const heavyUpdate = {
  name: "engineType",
  type: "list",
  defaultValues: ["diesel"],
};

const heavyVehicle = [
  ...modify(normalVehicle, heavyUpdate),
  { name: "weight", type: "number" },
];

showRoom.push({ type: vehicle.heavyVehicle, data: heavyVehicle });

// console.log(JSON.stringify(showRoom));

// const showRoom = [{ type: "normalVehicle", data: normalVehicle }];
// module.exports = {
//   showRoom,
//   vehicleTypes: vehicle,
// };
