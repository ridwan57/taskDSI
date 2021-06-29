const types = ["normal", "sports", "heavy"];
var inquirer = require("inquirer");
const { homeScreen } = require("./inquirer/Question/homeScreen");
const { typeList, anotherList, home } = require("./inquirer/typeList");
homeScreen();
