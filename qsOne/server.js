const types = ["normal", "sports", "heavy"];
var inquirer = require("inquirer");
const { homeScreen } = require("./inquirer/Question/homeScreen");
const { typeList, anotherList, home } = require("./inquirer/typeList");
const chalk = require("chalk");

var figlet = require("figlet");

figlet("Showroom System!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
homeScreen();
// console.log(chalk.blue("Hello world!"));
