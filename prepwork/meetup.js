


// // // 2. What is the output of the code? 

// // // var test='outside';
// // // function te(){
// // //        console.log(test);
// // //        var test='inside';
// // // }
// // // te();
// // // Is this output 'outside'?

// // // var nodes = document.getElementsByTagName("button");
// // // for (var i = 0; i < nodes.length; i++) {
// // //   (function(i) {nodes[i].addEventListener("click", function() {
// // //     console.log("You clicked element #" + i);
// // //   })})(i);
// // // }

// // // var nodes = document.getElementsByTagName("button");
// // // for (let i = 0; i < nodes.length; i++) {
// // //     nodes[i].addEventListener("click", function() {
// // //       console.log("You clicked element #" + i);
// // //     });;
// // // }

// // // function printing() {
// // //   console.log(1);
// // //   setTimeout(function() {
// // //     console.log(2);
// // //   }, 20);
// // //   setTimeout(function() {
// // //     console.log(3);
// // //   }, 10);

// // //   let i = 1000000;
// // //   while (i-- > 0) {
// // //     // suppose it taks more than 2000 ms to excute the while loop.
// // //   }
// // //   console.log(4);
// // // }
// // // printing();

// // // const isPrime = function(n) {
// // //   if (n < 2) {
// // //     return false;
// // //   }
// // //   if (n === 2) {
// // //     return true;
// // //   }
// // //   for (var i = 2; i < Math.floor(Math.sqrt(n)); i++) {
// // //     if (n % i === 0) {
// // //       return false;
// // //     }
// // //   }
// // //   return true;
// // // }

// // // console.log(isPrime(20));


// // // 3. Format date from mm/dd/yyyy to yyyymmdd
// // // let date = new Date();
// // // console.log(date.getMonth());
// // // console.log(date.getDay())
// // // console.log(date.getFullYear());



// // // 4. Delete a property of an object if it matches the given argument
// // // function delProp(obj,prop){

// // // }


// // // 5. what will be the output?

// // // (function() {
// // //    var a = 5
// // //    b = a;
// // // })();
 
// // // console.log(b);



// // // 6. what will be the output?

// // // var fullname = "John Doe";
// // // var obj = {
// // //   fullname: "Colin Ihrig",
// // //   prop: {
// // //     fullname: 'Aurelio De Rosa',
// // //     getFullname: () => {
// // //       console.log(this)
// // //       return this.fullname;
// // //     }
// // //   }
// // // };

// // // fullname = 'test';
// // // var obj = {
// // //   fullname: 'hello',
// // //   getFullname: function() {
// // //     return () => {
// // //       return this.fullname;
// // //     }
// // //   }
// // // }

// // // console.log(obj.getFullname()());



// // // 7. how to modify the codes in Q6, let it output   "Aurelio De Rosa"


// // // 8. what will be the ouput when you click the 1st and 4th button?
// // // var nodes = document.getElementsByTagName('button');
// // // for (var i = 0; i < nodes.length; i++) {
// // //    nodes[i].addEventListener('click', function() {
// // //       console.log('You clicked element #' + i);
// // //    });
// // // }



// // // 9. what is the result ?  explain why?

// // // function printing() {
// // //    console.log(1);
// // //    setTimeout(function() { console.log(2); }, 1000);
// // //    setTimeout(function() { console.log(3); }, 0);
// // //    console.log(4);
// // // }
// // // printing();

// // // 11.write a function isPrime to determine whether a input num is a prime number?
// // // https://en.wikipedia.org/wiki/Prime_(disambiguation)
// // // isPrime(num) {
// // // }


// // // 10.
// // // https://leetcode.com/problems/convert-bst-to-greater-tree/description/
// // // Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// // // Input: The root of a Binary Search Tree like this:
// // //               5
// // //             /   \
// // //            2     13

// // // Output: The root of a Greater Tree like this:
// // //              18
// // //             /   \
// // //           20     13



// // // Input: The root of a Binary Search Tree like this:
// // //               5
// // //             /   \
// // //            2     13
// // //                  /  \
// // //                 12   16         

// // // Output: The root of a Greater Tree like this:
// // //              46
// // //             /   \
// // //           48     29
// // //                  / \
// // //                 41 16


// // //traverse to end of right
// // //no children;
// // //return with value + sum;
// // //add the right value to parent
// // //take sum of right value and parent and add to left
// // //recurse

// // // const greaterTree = function(tree, sum) {
// // //   sum = sum || 0;
// // //   if (!tree.left && !tree.right) {
// // //     tree.value = tree.value + sum;
// // //     return tree.value;
// // //   }
// // //   tree.value = sum + tree.value + greaterTree(tree.right, sum);
// // //   sum = tree.value;
// // //   sum = greaterTree(tree.left, sum);
// // //   return sum;
// // // }

// // // const greaterTree = function(tree) {
// // //   let runningTotal = 0;
// // //   const traverse = tree => {
// // //     if (!tree) {
// // //       return;
// // //     }
// // //     traverse(tree.right);
// // //     runningTotal += tree.value
// // //     tree.value = runningTotal;
// // //     traverse(tree.left);
// // //   }
// // //   traverse(tree);
// // //   return tree;
// // // }
// // // class Node {
// // //   constructor(value) {
// // //     this.value = value;
// // //     this.left = null;
// // //     this.right = null;
// // //   }
// // // }

// // // let nodeA = new Node(5);
// // // let nodeB = new Node(2);
// // // let nodeC = new Node(13);
// // // let nodeD = new Node(12);
// // // let nodeE = new Node(16);
// // // nodeA.left = nodeB;
// // // nodeA.right = nodeC;
// // // nodeC.left = nodeD;
// // // nodeC.right = nodeE;

// // // greaterTree(nodeA);
// // // console.log(nodeA);

// // // Date.prototype.formatDate = function() {
// // //   let years = this.getFullYear().toString();
// // //   let day = this.getDay()
// // //   let month = this.getMonth();
// // //   day = day < 10 ? '0' + day.toString() : day.toString();
// // //   month = month < 10 ? '0' + month.toString() : month.toString();
// // //   return years + month + day;
// // // }

// // // let date = new Date();
// // // console.log(date.formatDate());

// // // (function foo(i) {
// // //   console.log(i);
// // //   if (i === 3) {
// // //     return;
// // //   } else {
// // //     foo(++i);
// // //   }
// // // })(0);





// // const colors = [
// //   "aliceblue",
// //   "antiquewhite",
// //   "aqua",
// //   "aquamarine",
// //   "azure",
// //   "beige",
// //   "bisque",
// //   "black",
// //   "blanchedalmond",
// //   "blue",
// //   "blueviolet",
// //   "brown",
// //   "burlywood",
// //   "cadetblue",
// //   "chartreuse",
// //   "chocolate",
// //   "coral",
// //   "cornflowerblue",
// //   "cornsilk",
// //   "crimson",
// //   "cyan",
// //   "darkblue",
// //   "darkcyan",
// //   "darkgoldenrod",
// //   "darkgray",
// //   "darkgreen",
// //   "darkgrey",
// //   "darkkhaki",
// //   "darkmagenta",
// //   "darkolivegreen",
// //   "darkorange",
// //   "darkorchid",
// //   "darkred",
// //   "darksalmon",
// //   "darkseagreen",
// //   "darkslateblue",
// //   "darkslategray",
// //   "darkslategrey",
// //   "darkturquoise",
// //   "darkviolet",
// //   "deeppink",
// //   "deepskyblue",
// //   "dimgray",
// //   "dimgrey",
// //   "dodgerblue",
// //   "firebrick",
// //   "floralwhite",
// //   "forestgreen",
// //   "fuchsia",
// //   "gainsboro",
// //   "ghostwhite",
// //   "gold",
// //   "goldenrod",
// //   "gray",
// //   "green",
// //   "greenyellow",
// //   "grey",
// //   "honeydew",
// //   "hotpink",
// //   "indianred",
// //   "indigo",
// //   "ivory",
// //   "khaki",
// //   "lavender",
// //   "lavenderblush",
// //   "lawngreen",
// //   "lemonchiffon",
// //   "lightblue",
// //   "lightcoral",
// //   "lightcyan",
// //   "lightgoldenrodyellow",
// //   "lightgray",
// //   "lightgreen",
// //   "lightgrey",
// //   "lightpink",
// //   "lightsalmon",
// //   "lightseagreen",
// //   "lightskyblue",
// //   "lightslategray",
// //   "lightslategrey",
// //   "lightsteelblue",
// //   "lightyellow",
// //   "lime",
// //   "limegreen",
// //   "linen",
// //   "magenta",
// //   "maroon",
// //   "mediumaquamarine",
// //   "mediumblue",
// //   "mediumorchid",
// //   "mediumpurple",
// //   "mediumseagreen",
// //   "mediumslateblue",
// //   "mediumspringgreen",
// //   "mediumturquoise",
// //   "mediumvioletred",
// //   "midnightblue",
// //   "mintcream",
// //   "mistyrose",
// //   "moccasin",
// //   "navajowhite",
// //   "navy",
// //   "oldlace",
// //   "olive",
// //   "olivedrab",
// //   "orange",
// //   "orangered",
// //   "orchid",
// //   "palegoldenrod",
// //   "palegreen",
// //   "paleturquoise",
// //   "palevioletred",
// //   "papayawhip",
// //   "peachpuff",
// //   "peru x",
// //   "pink",
// //   "plum",
// //   "powderblue",
// //   "purple",
// //   "red",
// //   "rosybrown",
// //   "royalblue",
// //   "saddlebrown",
// //   "salmon",
// //   "sandybrown",
// //   "seagreen",
// //   "seashell",
// //   "sienna",
// //   "silver",
// //   "skyblue",
// //   "slateblue",
// //   "slategray",
// //   "slategrey",
// //   "snow",
// //   "springgreen",
// //   "steelblue",
// //   "tan",
// //   "teal",
// //   "thistle",
// //   "tomato",
// //   "turquoise",
// //   "violet",
// //   "wheat",
// //   "white",
// //   "whitesmoke",
// //   "yellow",
// //   "yellowgreen"
// // ];

// // const findColor = function(str, colors) {
// //   //iterate through colors
// //   return colors.filter(color => isSubString(str, color));
// //   //check isSubstring

// //   //add to results

// // };

// // const isSubString = function(str, color) {
// //   //color has to have the letters in str
// //   let index = 0;
// //   for (var i = 0; i < str.length; i++) {
// //     if (color.indexOf(str[i], index) >= 0 && color.indexOf(str[i], index) >= index) {
// //       index = color.indexOf(str[i], index);
// //     } else {
// //       return false;
// //     }
// //   }
// //   return true;
// //   //iterate str
// //   //make sure str exists in color and its index is larger than previous
// //   //the order of the index matter though
// // }

// // // console.log(isSubString('uqi', 'darkturquoise'))
// // // please do not type your code in this editor, it is only for sharing, thank you, except for going over solution
// // // console.log(findColor('uqi', colors)); // [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ]
// // // console.log(findColor('zre', colors)); // [ 'azure' ]
// // // console.log(findColor('gold', colors)); // [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod']

// // const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
// // const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

// // //dependencies determine order.
// // //first item has to have been completed before second item in tuple can be done

// // //builds out the nodes
// // //when consuming the nodes delete the dependencies on existing nodes.
// // const extractKey = function(node) {
// //   for (var key in node) {
// //     if (Object.keys(node[key]).length === 0) {
// //       return key;
// //     }
// //   }
// //   return null;
// // }

// // const removeKey = function(node, key) {
// //   if (!node[key]) {
// //     return;
// //   }
// //   delete node[key];
// //   for (var x in node) {
// //     delete node[x][key]
// //   }
// //   return node;
// // }

// // const buildOrder = function(projects, dependencies) {
// //   let node = {};
// //   for (var i = 0; i < projects.length; i++) {
// //     node[projects[i]] = {};
// //   }
// //   for (var j = 0; j < dependencies.length; j++) {
// //     node[dependencies[j][1]][dependencies[j][0]] = true;
// //   }
// //   let results = [];
// //   let currentKey = extractKey(node);
// //   while(currentKey) {
// //     results.push(currentKey);
// //     node = removeKey(node, currentKey);
// //     currentKey = extractKey(node);
// //   }
// //   return results;
// // }


// // console.log(buildOrder(projects, dependencies)); // [ 'e', 'f', 'a', 'b', 'd', 'c' ]



// // const tree = {
// //   val: 4,
// //   left: {
// //     val: 3,
// //     left: { val: 4, left: null, right: null },
// //     right: { val: 1, left: null, right: null }
// //   },
// //   right: { val: 3, left: null, right: null }
// // };

// // function consecSequence(current, prev = 0) {
// //   //dfs
// //   let sum = 0;
// //   if (current.val - 1 === prev) {
// //     sum++;
// //   }
// //   if (current.left) {
// //     sum += consecSequence(current.left, current.val);
// //   }
// //   if (current.right) {
// //     sum += consecSequence(current.right, current.val);
// //   }
// //   return sum;
// // }

// // console.log(consecSequence(tree));


// // var moveZeroes = function(nums) {
// //   let end = nums.length - 1;
// //   for (var i = 0; i < end + 1; i++) {
// //     //only do the displacement if value is 0
// //     let currentNum = nums[i];
// //     if (currentNum === 0) {
// //       for (var j = i + 1; j < end + 1; j++) {
// //         nums[j - 1] = nums[j];
// //       }
// //       nums[end] = currentNum;
// //       console.log(nums, i, j);
// //       end--;
// //       i = i - 1;
// //     }
// //   }
// //   return nums;
// //   //like an insertion sort but zero values move to end of nums array
// //   //iterate through nums starting from beginning + 1 till end
// //   //end is dictated by a var;
// // };

// // console.log(moveZeroes([0,1,0,3,12,0,1]))


// // var twoSum = function(nums, target) {
// //   //create a new array with the values as indexes
// //   let indexes = [];
// //   for (var i = 0; i < nums.length; i++) {
// //     indexes[nums[i]] = [nums[i], i];
// //   }
// //   for (var j = 0; j < indexes.length; j++) {
// //     //check if it has a value at that index
// //     if (indexes[j]) {
// //       //use target and get difference of value at index
// //       //check if a value exists at index of indexes array
// //       let missingPair = target - indexes[j][0];
// //       if (indexes[missingPair]) {
// //         return [indexes[j][1], indexes[missingPair][1]];
// //       }
// //     }
// //   }
// //   return null;
// // };

// // // console.log(twoSum([230,863,916,585,981,404,316,336,221,847,427,583,368,375,173,809,896,370,789,5],235));


// // var isValidSudoku = function(board) {
// //     //rules of sudoku
// //     //row can't have repeated numbers.
// //     for (var row = 0; row < board.length; row++) {
// //         let currentRow = board[row];
// //         if (hasConflict(currentRow)) {
// //             return false;
// //         }
// //     }
// //     //col checker
// //     for (var col = 0; col < board.length; col++) {
// //         let currentCol = [];
// //         for (var i = 0; i < board.length; i++) {
// //             currentCol.push(board[col][i]);
// //         }
// //         if (hasConflict(currentCol)) {
// //             return false;
// //         }
// //     }

// //     var colStart = 0;
// //     var rowStart = 0;
// //     var colBoundary = 3;
// //     var rowBoundary = 3;

// //     for (var x = 0; x < board.length; x++) {
// //         if (x % 3 === 0) {
// //             colStart += 3;
// //             colBoundary += 3;
// //             rowBoundary = 3;
// //             rowStart = 0;
// //         }
// //         let matrix = [];
// //         for (var z = rowStart; z < rowBoundary; z++) {
// //             for (var b = colStart; b < colBoundary && colBoundary < board.length; b++) {
// //                 matrix.push(board[z][b]);
// //             }
// //         }
// //         if (hasConflict(matrix)) {
// //           console.log('fails here', matrix, colStart, colBoundary, x);
// //             return false;
// //         } else {
// //             rowBoundary += 3;
// //             rowStart += 3
// //         }
// //     }
// //     return true

// //     //matrix checker
// //         //essentially its an array with 9 inner arrays with 9 values each
// //         //every row is a value in the array;
// //         //9 of these exists
// //     //column can't have repeated numbers
// //         //9 of these exists
// //     //matrix can't have repeated numbers.
// //         //9 of these exists
// // };
// // console.log(isValidSudoku([
// //   [".", "8", "7", "6", "5", "4", "3", "2", "1"],
// //   ["2", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["3", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["4", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["5", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["6", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["7", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["8", ".", ".", ".", ".", ".", ".", ".", "."],
// //   ["9", ".", ".", ".", ".", ".", ".", ".", "."]
// // ]));

// // //validates whether the passed in section is a valid board or not
// // function hasConflict(board) {
// //     let counts = [];
// //     for (var i = 0; i < board.length; i++) {
// //         if (board[i] !== '.') {
// //             if (counts[board[i]]) {
// //                 return true;
// //             } else {
// //                 counts[board[i]] = true;
// //             }
// //         }
// //     }
// //     return false;
// // }


// // // [
// // //   [".", ".", "4", ".", ".", ".", "6", "3", "."],
// // //   [".", ".", ".", ".", ".", ".", ".", ".", "."],
// // //   ["5", ".", ".", ".", ".", ".", ".", "9", "."],
// // //   [".", ".", ".", "5", "6", ".", ".", ".", "."],
// // //   ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
// // //   [".", ".", ".", "7", ".", ".", ".", ".", "."],
// // //   [".", ".", ".", "5", ".", ".", ".", ".", "."],
// // //   [".", ".", ".", ".", ".", ".", ".", ".", "."],
// // //   [".", ".", ".", ".", ".", ".", ".", ".", "."]
// // // ];


// // function deleteDuplicate(integers) {
// //   // Start your code here
// //   let count = {};
// //   for (var i = 0; i < integers.length; i++) {
// //     if (!count[integers[i]]) {
// //       count[integers[i]] = true;
// //     }
// //   }
// //   return Object.keys(count);
// // }

// // deleteDuplicate([3, 6, 6, 6, 9, 10, 10, 15, 16, 16]);


// function jumpToEnd(integers, startIndex = 0) {
//   //tackle all the paths
//   if (startIndex === integers.length - 1) {
//     return true;
//   }
//   let moves = integers[startIndex];
//   console.log(moves);
//   while (moves > 0) {
//     if (jumpToEnd(integers, startIndex + moves)) {
//       return true;
//     }
//     moves--;
//   }
//   return false;
// }

// console.log(jumpToEnd([1, 3, 0, 0, 1, 0, 0]));



// function rearrangeNumber(numbers) {
//   // Start your code here
//   let counter = 0;
//   //use a counter to track where you're at
//   //even and zeroes <= the next number
//   //odds >= the next number
//   let size = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     let current = numbers[i];
//     if (i % 2 === 0) {
//       for (var j = i - 1; j >= size && numbers[j] > current; j--) {
//         numbers[j + 1] = numbers[j];
//       }
//       numbers[j + 1] = current;
//     } else if (i % 2 !== 0) {
//       for (var x = i - 1; x >= size && numbers[x] < current; x--) {
//         numbers[x + 1] = numbers[x];
//       }
//       numbers[x + 1] = current;
//     }
//     size++;
//   }
//   return numbers;
// }

// console.log(rearrangeNumber([2, 3, 4, 5, 6, 7]));


var data = [[1, 2, 3, [4, [5, 6, 14]]], [8, [9, 18, [11, [12]], 13]]];
console.log('length', data.length);
function test(data, elem) {
  if (typeof data == "number") {
    return !elem || data > elem ? data : elem;
  } else {
    for (var i = 0; i < data.length; i++) {
      elem = test(data[i], elem);
    }
    return elem;
  }
}
var result = test(data);

console.log(result)


var dt = new Date();
var hr = dt.getHours();
var min = dt.getMinutes();
var tm = hr.toString() + ':' + min.toString();
console.log(tm, tm > '9:00', tm + '9:00');


var gg = 1.5;
var hh = 0.2;
var x = Math.round((gg % hh) * 100) / 100;

console.log(x);



function isConsectiveSum(
  numbers,
  target,
  start = numbers.length - 1,
  total = 0
) {
  // Start your code here
  if (numbers.length === 0) {
    return false;
  }
  if (total === target) {
    return true;
  }
  if (start < 0) {
    return false;
  }
  let newTotal = total + numbers[start];
  return isConsectiveSum(numbers, target, start - 1, newTotal) ||
    isConsectiveSum(numbers, target, start - 1, total)
  //have to try all routes
  //include and not include the number;
}

isConsectiveSum([4, 2, 1, 300], 301);

console.log(isConsectiveSum([4, 2, 1, 300], 301));

function spiralTraversal(arr) {
  // Start your code here
  let top = 0;
  let bot = arr.length - 1;
  //iterate through until top boundary greater than bot
  //pop top off
  //iterate furthest right column and pop value off till last row
  //shift bottom row and reverse
  //shift col until hit top
  let spiraled = [];
  while (top < bot) {
    spiraled = spiraled.concat(arr.shift());
    for (var j = 0; j < bot - 1; j++) {
      spiraled = spiraled.concat(arr[j].pop());
    }
    let botRow = arr.pop();
    if (botRow) {
      spiraled = spiraled.concat(botRow.reverse())
    }
    for (var i = arr.length - 1; i > top; i--) {
      spiraled = spiraled.concat(arr[i].shift());
    }
    bot = arr.length;
  }
  return spiraled;
}

let spiral = [[10, 12, 14], [16, 18, 20], [22, 24, 26]];

console.log(spiralTraversal(spiral));


function isConsecutiveSum2(
  numbers,
  target,
  start = numbers.length - 1,
  total = 0
) {
  // Start your code here
  if (numbers.length === 0) {
    return false;
  }
  if (total === target) {
    return true;
  }
  if (start < 0) {
    return false;
  }
  let newTotal = total + numbers[start];
  return (
    isConsecutiveSum2(numbers, target, start - 1, newTotal) ||
    isConsecutiveSum2(numbers, target, start - 1, total)
  );
  //have to try all routes
  //include and not include the number;
}

console.log('ay', isConsecutiveSum2([],2));



function isConsecutiveSum(a, target) {
  const L = a.length;
  let memo = Array(L).fill(0);

  for (let l = 1; l <= L; l++) {
    // Increase length of subarray
    for (let i = 0; i < L - l + 1; i++) {
      // Traverse memo
      memo[i] += a[l + i - 1];
      if (memo[i] === target) {
        return true;
      }
    }
  }
  return false;
}


/**
 * @param {number[][]} meetingSeries
 * @return {number}
 */
function minNumberOfRoom(meetingSeries) {
  //sort rooms based on start time
	meetingSeries.sort(function(a, b) {
		return a[0] - b[0];
	});
	let meetingsRooms = [];
	for (var i = 0; i < meetingSeries.length; i++) {
    let currentRoom = meetingSeries[i];
    let roomAdded = false;
		if (!meetingsRooms.length) {
			//initializes 1 room if there were none
			meetingsRooms.push([currentRoom]);
		} else {
			for (var j = 0; j < meetingsRooms.length; j++) {
				let last = meetingsRooms[j].length - 1;
				if (meetingsRooms[j][last][1] <= currentRoom[0]) {
          meetingsRooms[j].push(currentRoom);
          roomAdded = true;
          j = meetingsRooms.length;
				}
      }
      if (!roomAdded) {
        meetingsRooms.push([currentRoom]);
      }
		}
  }
	return meetingsRooms.length;
}

console.log(minNumberOfRoom([[1,3],[6,8],[4,5],[3,6],[7,10],[7,9],[11,12],[8,10],[7,8]]));



function deleteDuplicate(integers) {
  let dupIndex = 1;
  for (var i = 1; i < integers.length; i++) {
    //scan array
    //if there's a dup, update dupIndex
    if (integers[i] !== integers[i - 1]) {
      integers[dupIndex] = integers[i];
      dupIndex++;
    }
  }
  return integers.slice(0, dupIndex);
}

console.log(deleteDuplicate([1, 1, 2, 2, 2, 5, 6, 7, 7, 8]));


function search2dMatrix(matrix, target, start = 0, end = matrix.length - 1) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  console.log(start, end, mid);
  if (matrix[mid][0] === target) {
    return true;
  }
  if (target > matrix[mid][0]) {
    //recurse lower
    if (binarySearch(matrix[mid], target)) {
      return true;
    } else {
      return search2dMatrix(matrix, target, mid + 1, end);
    }
  } else if (target < matrix[mid][0]) {
      return search2dMatrix(matrix, target, start, mid - 1);
    //check binary search of that arr
      //true then return true
  }
}

const binarySearch = function(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return true;
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, end);
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid -1);
  }
}

let inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(search2dMatrix(inputMatrix, 7));