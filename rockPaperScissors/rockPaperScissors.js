/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function(numRounds) {
  //create array with all possiblilities
  var possible = ['rock', 'paper', 'scissors'];
  //iterate through all possible moves
  var result = [];

  if (numRounds === 0) {
    return result;
  }
  //recurse through
  var throws = function(turn) {
    if (turn.length === numRounds) {
      result.push(turn);
      return;
    }

    for (var index = 0; index < possible.length; index++) {
      var toss = turn.concat([possible[index]])
      throws(toss);
    }
  }
  for (var index = 0; index < possible.length; index++) {
    throws([possible[index]]);
  }
  return result;
}