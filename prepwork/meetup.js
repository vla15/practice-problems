


// 2. What is the output of the code? 

// var test='outside';
// function te(){
//        console.log(test);
//        var test='inside';
// }
// te();
// Is this output 'outside'?

// var nodes = document.getElementsByTagName("button");
// for (var i = 0; i < nodes.length; i++) {
//   (function(i) {nodes[i].addEventListener("click", function() {
//     console.log("You clicked element #" + i);
//   })})(i);
// }

// var nodes = document.getElementsByTagName("button");
// for (let i = 0; i < nodes.length; i++) {
//     nodes[i].addEventListener("click", function() {
//       console.log("You clicked element #" + i);
//     });;
// }

// function printing() {
//   console.log(1);
//   setTimeout(function() {
//     console.log(2);
//   }, 20);
//   setTimeout(function() {
//     console.log(3);
//   }, 10);

//   let i = 1000000;
//   while (i-- > 0) {
//     // suppose it taks more than 2000 ms to excute the while loop.
//   }
//   console.log(4);
// }
// printing();

// const isPrime = function(n) {
//   if (n < 2) {
//     return false;
//   }
//   if (n === 2) {
//     return true;
//   }
//   for (var i = 2; i < Math.floor(Math.sqrt(n)); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(20));


// 3. Format date from mm/dd/yyyy to yyyymmdd
// let date = new Date();
// console.log(date.getMonth());
// console.log(date.getDay())
// console.log(date.getFullYear());



// 4. Delete a property of an object if it matches the given argument
// function delProp(obj,prop){

// }


// 5. what will be the output?

// (function() {
//    var a = 5
//    b = a;
// })();
 
// console.log(b);



// 6. what will be the output?

// var fullname = "John Doe";
// var obj = {
//   fullname: "Colin Ihrig",
//   prop: {
//     fullname: 'Aurelio De Rosa',
//     getFullname: () => {
//       console.log(this)
//       return this.fullname;
//     }
//   }
// };

// fullname = 'test';
// var obj = {
//   fullname: 'hello',
//   getFullname: function() {
//     return () => {
//       return this.fullname;
//     }
//   }
// }

// console.log(obj.getFullname()());



// 7. how to modify the codes in Q6, let it output   "Aurelio De Rosa"


// 8. what will be the ouput when you click the 1st and 4th button?
// var nodes = document.getElementsByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//    nodes[i].addEventListener('click', function() {
//       console.log('You clicked element #' + i);
//    });
// }



// 9. what is the result ?  explain why?

// function printing() {
//    console.log(1);
//    setTimeout(function() { console.log(2); }, 1000);
//    setTimeout(function() { console.log(3); }, 0);
//    console.log(4);
// }
// printing();

// 11.write a function isPrime to determine whether a input num is a prime number?
// https://en.wikipedia.org/wiki/Prime_(disambiguation)
// isPrime(num) {
// }


// 10.
// https://leetcode.com/problems/convert-bst-to-greater-tree/description/
// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13

// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13



// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13
//                  /  \
//                 12   16         

// Output: The root of a Greater Tree like this:
//              46
//             /   \
//           48     29
//                  / \
//                 41 16


//traverse to end of right
//no children;
//return with value + sum;
//add the right value to parent
//take sum of right value and parent and add to left
//recurse

// const greaterTree = function(tree, sum) {
//   sum = sum || 0;
//   if (!tree.left && !tree.right) {
//     tree.value = tree.value + sum;
//     return tree.value;
//   }
//   tree.value = sum + tree.value + greaterTree(tree.right, sum);
//   sum = tree.value;
//   sum = greaterTree(tree.left, sum);
//   return sum;
// }

// const greaterTree = function(tree) {
//   let runningTotal = 0;
//   const traverse = tree => {
//     if (!tree) {
//       return;
//     }
//     traverse(tree.right);
//     runningTotal += tree.value
//     tree.value = runningTotal;
//     traverse(tree.left);
//   }
//   traverse(tree);
//   return tree;
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// let nodeA = new Node(5);
// let nodeB = new Node(2);
// let nodeC = new Node(13);
// let nodeD = new Node(12);
// let nodeE = new Node(16);
// nodeA.left = nodeB;
// nodeA.right = nodeC;
// nodeC.left = nodeD;
// nodeC.right = nodeE;

// greaterTree(nodeA);
// console.log(nodeA);

// Date.prototype.formatDate = function() {
//   let years = this.getFullYear().toString();
//   let day = this.getDay()
//   let month = this.getMonth();
//   day = day < 10 ? '0' + day.toString() : day.toString();
//   month = month < 10 ? '0' + month.toString() : month.toString();
//   return years + month + day;
// }

// let date = new Date();
// console.log(date.formatDate());

// (function foo(i) {
//   console.log(i);
//   if (i === 3) {
//     return;
//   } else {
//     foo(++i);
//   }
// })(0);

