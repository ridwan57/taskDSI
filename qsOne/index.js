const showRoom = [];
const initialVehicle = {
  model: 123,
  engineType: ["oil", "gas", "diesel"],
  enginePower: 1,
  tireSize: 1,
};
const sportsVehicle = {
  ...initialVehicle,
  engineType: "oil",
  turbo: "yes",
};
const heavyVehicle = {
  ...initialVehicle,
  weight: 10,
  engineType: "diesel",
};
console.log("sportsVehicle:", sportsVehicle);
console.log("heavyVehicle:", heavyVehicle);
console.log("initialVehicle:", initialVehicle);
showRoom.push(initialVehicle);
console.log("showRoom:", showRoom);
function CreateNormalVehicle(obj) {}
