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
  numRounds = numRounds || 3;
  var possible = ['rock', 'paper', 'scissors'];
  var result = [];

  var newThrows = function(turn) {
    if (turn.length === numRounds) {
      result.push(turn);
      return;
    }
    for (var index = 0; index < possible.length; index++) {
      var toss = turn.concat([possible[index]])
      newThrows(toss);
    }
  }

  if (numRounds > 0) {
    for (var index = 0; index < possible.length; index++) {
      newThrows([possible[index]]);
    }
  } else {
    result.push([]);
  }
  return result;
}