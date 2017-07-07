/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

var shuffleDeck = function(deck) {
  // Your code here
  //input: ordered deck
  //output shuffled
  //counter 0
  var middle = Math.floor(deck.length / 2);
  //split deck
  var left = deck.slice(0, middle);
  var right = deck.slice(middle);

  var shuffle = function(deck) {
  //shuffle
  //recombine
    var counter = 0;
    //var current set random number generator from 0 - 51
    var current = deck[Math.floor(Math.random() * deck.length)];
    var replace;
    //var replace
    while (counter < deck.length + 1) {
    // while counter less than deck length
      var newPosition = Math.floor(Math.random() * deck.length);
      // random number generator from 0 - 51
      replace = deck[newPosition];
      // set replace to value of array at random number
      deck[newPosition] = current;
      // replace current value at array at number generated
      current = replace;
      // current value set to replace value
      counter++
      // increment counter
    }
    return deck;
  }
  return shuffle(left).concat(shuffle(right));
};

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};