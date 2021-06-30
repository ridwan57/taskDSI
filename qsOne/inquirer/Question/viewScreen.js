module.exports = {};
module.exports.viewScreen = viewScreen;
const inquirer = require("inquirer");
const { data } = require("../../data/index");
const { homeScreen } = require("./homeScreen");

function viewScreen() {
  console.log(data);
  homeScreen();
}
