const inquirer = require('inquirer');
const { EOL } = require('os');
const fs = require('fs').promises;
// class Subject {
//   constructor(subj) {
//     this.subj = subj;
//   }

//   static readOneTeam() {
//     inquirer;
//   }
// }

class Question {
  constructor(patch) {
    this.patch = patch;
  }

  async getQuestion() {
    const text = (await fs.readFile(this.patch, 'utf-8'))
      .split(`${EOL}${EOL}`)
      .map((el) => el.split(EOL));
    let arr1 = text.map((el) => ({
      name: 'type',
      type: 'input',
      message: el[0],
      answer: el[1],
    }));
    console.log(arr1);
  }
}
let a = new Question(`${__dirname}/topics/nighthawk_flashcard_data.txt`);
console.log(a.getQuestion());
module.exports = Question;
