const waitSync = require("wait-sync");
const { EOL } = require("os");
const fs = require("fs");
const inquirer = require("inquirer");

class Load {
  constructor() {}

  static drawProgressBar(percentage) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const width = process.stdout.columns - 7;
    const completed = Math.round(width * (percentage / 100));
    const remaining = width - completed;
    const bar = "█".repeat(completed) + "-".repeat(remaining);
    process.stdout.write(`[${bar}] ${percentage}%`);
  }

  static startLoad() {
    waitSync(0.5);
    Load.drawProgressBar(6);
    waitSync(0.5);
    Load.drawProgressBar(15);
    waitSync(0.5);
    Load.drawProgressBar(35);
    waitSync(0.5);
    Load.drawProgressBar(50);
    waitSync(0.5);
    Load.drawProgressBar(65);
    waitSync(0.5);
    Load.drawProgressBar(80);
    waitSync(0.5);
    Load.drawProgressBar(100);
    waitSync(0.5);
  }

  //   static registration()
  static printFullWidthText(text) {
    const terminalWidth = process.stdout.columns;
    const padding = Math.floor((terminalWidth - text.length) / 2);

    const fullWidthText = "█".repeat(padding) + text + "█".repeat(padding);
    console.log(`${fullWidthText}`);
  }

  static textInfo() {
    const arr = fs
      .readFileSync(`${__dirname}/topics/loadText.txt`, "utf-8")
      .split("\n");

    waitSync(0.5);
    Load.printFullWidthText(arr[0]);
    waitSync(0.5);
    Load.printFullWidthText(arr[1]);
    waitSync(0.5);
    Load.printFullWidthText(arr[2]);
    waitSync(0.5);
    Load.printFullWidthText(arr[3]);
    waitSync(0.5);
    Load.printFullWidthText(arr[4]);
    waitSync(0.1);
    Load.printFullWidthText("");
    waitSync(0.1);
  }

  static registration() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "username",
          message: "Введи имя:",
        },
        {
          type: "password",
          message: "Enter a masked password",
          name: "password2",
          mask: "*",
        },
      ])
      .then((answers) => {
        const jsonData = JSON.stringify(answers);
        fs.appendFileSync(`${__dirname}/RegUser.txt`, jsonData + "\n");
      });
  }
}
module.exports = Load;
