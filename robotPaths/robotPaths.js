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
    if (pos < 0) {
      return true;
    }
    if (pos === n) {
      return true;
    }
    return false;
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  // n = size of board,
  // board = board itself
  var BoardRight = board(n);
  BoardRight.togglePiece(0, 1);
  BoardRight.togglePiece(0, 0);
  var BoardDown = board(n);
  BoardDown.togglePiece(1, 0);
  BoardDown.togglePiece(0, 0);
  var count = 0;
  console.log(BoardRight);


  var traverse = function(n, board, row, col) {
  // traverse function
    if (row === n - 1 && col === n - 1) {
      count++;
      return;
    }

    //go up
    debugger;
    row--;
    if (!board.outOfBounds(row, n) && !board.hasBeenVisited(row, col)) {
      board.togglePiece(row, col);
      traverse(n, board, row, col);
      board.togglePiece(row, col);
    }
    row++;
    //go right
    col++;
    if (!board.outOfBounds(col, n) && !board.hasBeenVisited(row, col)) {
      board.togglePiece(row, col);
      traverse(n, board, row, col);
      board.togglePiece(row, col);
    }
    col--;
    //go down
    row++;
    if (!board.outOfBounds(row, n) && !board.hasBeenVisited(row, col)) {
      board.togglePiece(row, col);
      traverse(n, board, row, col);
      board.togglePiece(row, col);
    }
    row--;    
    //go left
    col--;
    if (!board.outOfBounds(col, n) && !board.hasBeenVisited(row, col)) {
      board.togglePiece(row, col);
      traverse(n, board, row, col);
      board.togglePiece(row, col);
    }
    col++;
    return;
  }
  traverse(n, BoardRight, 0, 1)
  traverse(n, BoardDown, 1, 0)
  return count;
};


// console.log(robotPaths(3, makeBoard, 0, 0))
