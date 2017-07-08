/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  board.outOfBounds = function(pos, n) {
    return pos === n;
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  // n = size of board,
  // board = board itself
  var Board = board(n);
  // i = row
  // j = col
  // goal is when i === n - 1 && j === n - 1
  var count = 0;

  var traverse = function(n, board, row, col) {
  // traverse function
    if (row === n - 1 && col === n - 1) {
      count++;
      return;
    }
    for (var rowIndex = row; rowIndex < n; rowIndex++) {
      if (board.hasBeenVisited(row, col)) {
        for (var colIndex = col; colIndex < n; colIndex++) {
          if (board.hasBeenVisited(row, col)) {
            return;
          } else {
            board.toggle(row, col);
            col++
            traverse(n, board, row, col);
          }
        }
      } else {
        board.togglePiece(row, col);
        row++;
        traverse(n, board, row, col);
      }
    }
    return;
    // if i === n - 1 && j === n - 1
      // count +1
      // board resets
    // adds one to row
      // check if it has been visited
        // if it has
          // check if col has been visited
            // if it has return
          // else add has been visited
          // recurse
      // if hasn't add has been visisted
      // recurse
    
  }
  traverse(n, Board, i, j);
  return count;

};


console.log(robotPaths(3, makeBoard, 0, 0))
