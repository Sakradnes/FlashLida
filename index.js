const Load = require("./load");
const inquirer = require("inquirer");

class Game {
  constructor() {}

  static helloUser() {
    Load.startLoad();
    Load.textInfo();
    Load.registration();
  }
}
Game.helloUser();
