// Given an array containing both negative and positive integers. Find the contiguous sub-array with maximum sum.
// ex: [-2, -3, 4, -1, -2, 1, 5, -3]
// answer: 4 + (-1) + (-2) + 1 + 5 = 7;

const largestContigiousSum = function(arr) {
  let maxSoFar = arr[0];
  let currentMax = arr[0];
  let start = 0;
  let end = 0;
  for (var i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i])
    if (currentMax === arr[i]) {
      start = i;
    }
    maxSoFar = Math.max(maxSoFar, currentMax);
    if (currentMax === maxSoFar) {
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}

console.log(largestContigiousSum([-2, -3, 4, -1, -2, 1, 5, -3]));


//get longest subpalindrome
const longestPalindrome = function(str) {
  let answer = str[0];
  //expand around the center
  for (var i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(str, i, i);
    let len2 = expandAroundCenter(str, i, i + 1);
    let max = len1[1] - len1[0] > len2[1] - len2[0] ? len1 : len2;
    let currentString = str.substring(max[0], max[1] + 1);
    answer = currentString.length > answer.length ? currentString : answer;
  }
  return answer;
}

const expandAroundCenter = function(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
}

console.log(longestPalindrome('badadac'));


//convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R
const zigZagWord = function(s, numOfRows) {
  //iterate through each letter in string
  //create results array
  let results = [];
  for (var i = 0; i < numOfRows; i++) {
    results[i] = [];
  }
  //iterates down num of rows
  //iterates back up numOfRows - 2 till 1
  var x = 0;
  while (x < s.length) {
    for (var j = 0; j < numOfRows; j++) {
      results[j].push(s[x++]);
    }
    for (var z = numOfRows - 2; z >= 1; z--)
    results[z].push(s[x++]);
  }
  return results.reduce(function(a, b) {
    return a.concat(b);
  }).join('')
}

console.log(zigZagWord("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
console.log(zigZagWord("ABCD", 2) === "ACBD");
// console.log(zigZagWord("AB", 1) === "AB");

var isMatch = function(s, p, previous) {
  //termination case
  if (p.length === 0) {
    return s.length === 0;
  }
  //check regular
  let firstMatch = s && p.charAt(0) === s.charAt(0) || p.charAt(0) === '.';
  if (p.length >= 2 && p.charAt(1) === '*') {
    return isMatch(s, p.substring(2)) || firstMatch && isMatch(s.substring(1), p)
  } else {
    return isMatch(s.substring(1), p.substring(1));
  }
};
console.log(isMatch("aaa", "ab*a*c*a"));


var threeSumClosest = function(
  nums,
  target,
  count = 0,
  total = 0,
  index = nums.length - 1
) {
  //start with one number
  if (count === 3) {
    return total;
  }
  if (index < 0 && count !== 3) {
    return Number.POSITIVE_INFINITY;
  }
  let included = threeSumClosest(nums, target, count + 1, total + nums[index], index - 1)
  let notIncluded = threeSumClosest(nums, target, count, total, index - 1);
  if (Math.abs(target - included) < Math.abs(target - notIncluded)) {
    return included;
  } else {
    return notIncluded;
  }
  //check results of including that number and not including that number
  //take the min abs diff between the two
};

console.log(threeSumClosest([1, 2, 3, 4], 12));


function maximamSwap(number, total, isSwapped, index) {
  // Start your code here
  //takes one number at a time and tests it
  if (index === 0) {
    return 0;
  }
  if (isSwapped) {
    return total;
  }
  var newTotal = number.toString().split('');
  index = index || newTotal.length - 1;
  if (newTotal[index - 1]) {
    var tmp = newTotal[index];
    newTotal[index] = newTotal[index - 1];
    newTotal[index - 1] = tmp;
    newTotal = parseInt(newTotal.join(''), 10);
  } else {
    return 0;
  }
  return Math.max(
    maximamSwap(number, newTotal, true, undefined),
    maximamSwap(number, undefined, false, index - 1)
  );
}
console.log(maximamSwap(9973));

function uniqueCharacter(string) {
  // Start your code here
  // sort string
  var sortedString = string.split('').sort().join('');
  console.log(sortedString);
  // iterate through string
  for (var i = 1; i < string.length; i++) {
    if (sortedString[i] === sortedString[i - 1]) {
      return false;
    }
  }
  return true;
  // start at 1 and check if previouss value is equal
  //if equal return false
  // not equal return true
}
console.log(uniqueCharacter('abcdefa'));


function maximumSwap(number) {
  var newNumber = number.toString().split("");
  var count = [];
  for (var i = 0; i < newNumber.length; i++) {
    if (count[newNumber[i]]) {
      count[newNumber[i]]++;
    } else {
      count[newNumber[i]] = 1;
    }
  }
  var answer = '';
  for (var j = count.length; j >= 0; j--) {
    for (var x = 0; x < count[j]; x++) {
      if (count[j]) {
        answer += j.toString();
      }
    }
  }
  return +answer;
}

console.log(maximumSwap(2736));


function replaceWithPlus(string, immuneLetters) {
  // Start your code here
  var answer = "";
  for (var i = 0; i < string.length; i++) {
    var isImmune = false;
    for (var j = 0; j < immuneLetters.length; j++) {
      if (string[i] === immuneLetters[j]) {
        isImmune = true;
      }
    }
    if (isImmune) {
      answer += string[i];
    } else {
      answer += "+";
    }
  }
  return answer;
}

console.log(replaceWithPlus("12xy34", "xy"));


// 5) Find all triplets with zero sum
// Given an array of distinct elements. The task is to find triplets in array whose sum is zero.

// Examples:

// Input : [0, -1, 2, -3, 1]
// Output : [[0, -1, 1], [2, -3, 1]]

// Input : [1, -2, 1, 0, 5]
// Output : [1, -2, 1]
const tripletsWithZeroSum = function(arr, index = arr.length - 1, current, answer = []) {
  current = current || [];
  if (current.length === 3) {
    if (current.reduce(function(a, b) {
      return a + b;
    }) === 0) {
      return answer.push(current);
    }
    return answer;
  }
  if (index < 0 || (index <= 0 && current.length <= 1)) {
    return answer;
  }
  let notIncluded = current.slice();
  current.push(arr[index]);
  let one = tripletsWithZeroSum(arr, index - 1, current, answer)
  if (one && one.length > 0) {
    answer = one;
  }
  let two = tripletsWithZeroSum(arr, index - 1, notIncluded, answer);
  return answer;
  // console.log('answer', answer);
}

//  || tripletsWithZeroSum(arr, index - 1, notIncluded, answer)
console.log('triple', tripletsWithZeroSum([0, -1, 2, -3, 1]));