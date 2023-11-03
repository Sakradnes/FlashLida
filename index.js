const Load = require("./load");
const inquirer = require("inquirer");
const fs = require("fs");
const NewClass = require("./NewClass");

class Game {
  constructor() {}

  static helloUser() {
    Load.startLoad();
    Load.textInfo();
    Load.registration();
  }
}
Game.helloUser();
