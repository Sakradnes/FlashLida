const fs = require("fs");
const inquirer = require("inquirer");
const { EOL } = require("os");

class NewClass {
  static readFile() {
    const path = fs.readFileSync(`${__dirname}/theme.txt`, "utf-8");
    const a = fs
      .readFileSync(`${__dirname}/topics/${path}`, "utf-8")
      .split(`${EOL}${EOL}`)
      .map((el) => el.split(EOL));

    let arr1 = a.map((el) => ({
      name: "type",
      type: "input",
      message: el[0],
      answer: el[1],
    }));
    console.log(arr1);
    return arr1;
  }
}

module.exports = NewClass;
