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