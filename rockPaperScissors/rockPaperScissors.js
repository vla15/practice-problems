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

var rockPaperScissors = function (rounds) {
  // create a results array
  var allRounds = [];
  // track number of rounds
  // track permutations of throws in object
  // store round results in array
  // track throws
  var results = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
  }
  for (let i = 0; i < rounds; i++) {
    for (let x = 0; x < rounds; x++) {
      for (let y = 0; y < rounds; y++) {
        allRounds.push([results[i], results[x], results[y]]);
      }
    }
  }
  return allRounds
};

