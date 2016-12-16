class Board {
  constructor() {
    this.board = [["","",""],["","",""],["","",""]];
  }

  placeMark(pos, mark) {
    this.board[pos[0]][pos[1]] = mark;
  }

  empty(pos) {
    return this.board[pos[0]][pos[1]] === "";
  }

  winner() {
    return (this.rows() || this.cols() || this.diags());
  }

  won() {
    if (this.winner()) {
      return true;
    }
    return false;
  }

  rows() {
    for (let i =0; i < 3; i++) {
      if (this.board[i][0] === "") {
        continue;
      }
      if (this.board[i][0] === this.board[i][1] && this.board[i][2] === this.board[i][1]) {
        return this.board[i][0];
      }
    }
    return false;
  }

  cols() {
    for (let i =0; i < 3; i++) {
      if (this.board[0][i] === "") {
        continue;
      }
      if (this.board[0][i] === this.board[1][i] && this.board[2][i] === this.board[1][i]) {
        return this.board[0][i];
      }
    }
    return false;
  }

  diags() {
    if (this.board[1][1] === "") {
      return false;
    }
    if (this.board[0][0] === this.board[1][1] && this.board[2][2] === this.board[1][1]) {
      return this.board[0][0];
    }
    if (this.board[2][0] === this.board[1][1] && this.board[0][2] === this.board[1][1]) {
      return this.board[2][0];
    }
    return false;
  }

  renderBoard() {
    for (let i = 0; i < 3; i++) {
      console.log(this.board[i]);
    }
  }
}

module.exports = Board;

let board = new Board();
board.board[0][0] = "x";
board.board[0][1] = "x";
board.board[0][2] = "x";
board.renderBoard();
console.log(board.won());
console.log(board.winner());
