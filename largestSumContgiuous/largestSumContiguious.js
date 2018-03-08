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

var threeSumClosest = function(nums, target) {
  //have to use three integers
  //naive solution is to loop through all combinations
  let closest = undefined;
  for (var i = 0; i < nums.length; i++) {
    var runningTotal = nums[i];
    for (var j = i + 1; j < i + 3; j++) {
      runningTotal += nums[j];
    }
    console.log('what are we at?', runningTotal);
    if ( closest && Math.abs(runningTotal - target) < Math.abs(closest - target)) {
      closest = runningTotal;
    } else if (closest === undefined) {
      closest = runningTotal;
    }
  }
  return closest;
};
console.log(threeSumClosest([1, 1, -1, -1, 3], 3));