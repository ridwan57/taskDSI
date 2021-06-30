/* eslint-disable  */
const figlet = require("figlet");
const { homeScreen } = require("./inquirer/screen/homeScreen");
// const { typeList, anotherList, home } = require("./inquirer/typeList");

figlet("Vehicle Showroom System!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
homeScreen();

