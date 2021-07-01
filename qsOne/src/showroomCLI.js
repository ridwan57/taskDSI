/* eslint-disable  */
const figlet = require("figlet");
const { homeScreen } = require("./inquirer/screen/homeScreen");

//figlet =>  cli FIGfont generator
//chalk => cli colored text generator
//inquirer => cli prompt generator

figlet("Showroom System!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//started here
homeScreen();
