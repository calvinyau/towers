const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Game = require('./game.js');

let game = new Game(reader);

game.run(completion);

function completion() {
  reader.question("Do you want to play again?\n", (res) => {
    if (res === "yes") {
      let newGame = new Game(reader);
      newGame.run(completion);
    } else {
      reader.close();
    }
  });
}
