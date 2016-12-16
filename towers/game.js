
// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

class Game {
  constructor(reader) {
    this.stacks = [[1, 2, 3], [], []];
    this.reader = reader;
  }

  promptMove(callback, completionCallback) {
    this.printStack();
    this.reader.question("Pick a stack to move from, 0, 1, or 2:\n", res => {
      this.reader.question("Pick a stack to move to, 0, 1, or 2:\n", res2 => {
        const fromPeg = parseInt(res);
        const toPeg = parseInt(res2);
        callback(fromPeg, toPeg, completionCallback);
      });
    });
  }

  isValidMove(start, end) {
    let smallerToPeg = false;
    let emptyToPeg = (this.stacks[end].length === 0);
    if (!emptyToPeg) {
      smallerToPeg = (this.stacks[start][0] < this.stacks[end][0]);
    }
    return (this.stacks[start].length > 0 && (emptyToPeg || smallerToPeg));
  }

  move(start, end, callback, completionCallback) {
    let madeMove = false;
    if (callback(start, end)) {
      this.stacks[end].unshift(this.stacks[start].shift());
      madeMove = true;
    }
    this.run(completionCallback);
    return madeMove;
  }

  printStack() {
    this.stacks.forEach( el => console.log(el));
  }

  isWon() {
    if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
      return true;
    } else {
      return false;
    }
  }

  run(completionCallback) {
    if (!this.isWon()) {
      this.promptMove((from, to, callback, compCallback) => this.move(from, to, () => this.isValidMove(from, to), completionCallback));
    }
    else {
      completionCallback();
    }
  }

}

module.exports = Game;
// const game = new Game();
//
// game.run( () => console.log("You win"));
