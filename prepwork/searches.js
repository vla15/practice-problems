//binarySearch
//depthFirstSearch
//breathFirstSearch






















// //binary search
// const binarySearch = function(arr, target, left = 0, right = arr.length) {
//   //create mid from left and right values
//   if (left > right) {
//     return null;
//   }
//   let mid = Math.floor((left + right) / 2);
//   if (target === arr[mid]) {
//     return mid;
//   }
//   if (target > arr[mid]) {
//     //target is greater than midpoint, go right
//     return binarySearch(arr, target, mid + 1, right);
//     //target is less than midpoint, go left
//   } else if (target < arr[mid]) {
//     return binarySearch(arr, target, left, mid - 1);
//   }
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));

// //depth first search

// const depthFirstSearch = function(node, target) {
//   let left = null;
//   let right = null;
//   if (node.value === target) {
//     return node.index;
//   }
//   if (node.left) {
//     left = depthFirstSearch(node.left, target);
//   }
//   if (node.right) {
//     right = depthFirstSearch(node.right, target);
//   }
//   return left || right;
// }
// const tree = {
//   value: 0,
//   index: 0,
//   left: {
//     value: 1,
//     index: 1,
//     left: {
//       value: 3,
//       index: 3,
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 4,
//       index: 4,
//       left: {},
//       right: {}
//     }
//   },
//   right: {
//     value: 2,
//     index: 2,
//     left: {
//       value: 5,
//       index: 5,
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 6,
//       index: 6,
//       left: {},
//       right: {}
//     }
//   }
// }
// console.log(depthFirstSearch(tree, 5));

// const dfsIterative = function(tree, target) {
//   let stack = [tree]
//   while (stack.length > 0) {
//     let node = stack.pop();

//     if (node.value === target) {
//       return node.index;
//     }
//     if (node.right) {
//       stack.push(node.right)
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }
//   return null;
// }

// console.log(dfsIterative(tree, 5));
// //breath first search

// const bfs = function(root, target) {
//   let queue = [root];
//   while (queue.length > 0) {
//     let node = queue.shift();
//     if (node.value === target) {
//       return node.index;
//     }
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//   }
//   return null;
// }

// console.log(bfs(tree, 3));

// //preorder traversal
// //postorder traversal
// //inorder traversal