const fs = require("fs");
let data = JSON.parse(fs.readFileSync("data.json"));
module.exports = {
  data,
};
