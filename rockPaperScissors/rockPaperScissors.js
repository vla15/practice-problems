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
  var outcomes = [];
  var plays = ["rock", "paper", "scissors"];

  // can add rounds later, get 3 working. 
  // for a three round game, it would be 3^3 = 27.
  // for any number of rounds it would be 3^numrounds. 

  function findOutCome(roundsLeft, result){
  // when you cover all the rounds
  // push to the outcomes
  if (roundsLeft === 0) {
    outcomes.push(result);
    return;
  }

  plays.forEach(function(play) {
    //result.push(play);
    //concat returns the entire array
    findOutCome(roundsLeft-1, result.concat(play))
  });
};

findOutCome(numRounds, []); // give it a starting point

return outcomes;
}

console.log(rockPaperScissors(2));
