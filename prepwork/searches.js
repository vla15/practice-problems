//binarySearch
const binarySearch = function(arr, target, left = 0, right = arr.length) {
  //terminating case, when left boundary is greater than right
  if (left > right) {
    return null;
  }
  //takes mid point
  let mid = Math.floor((left + right) / 2);
  //sees if mid point equals target
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  } else if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right);
  }
  //then checks if target is less than midpoint
    //recurse with right boundary as midpoint -1
  //checks if target is greater than midpoint
    //recurse with left boundary as midpoint + 1
}
console.log(binarySearch([2, 3, 4, 5, 6, 7], 5));
//depthFirstSearch
const dfs = function(tree, target) {
  let left = null;
  let right = null;
  if (tree.value === target) {
    return tree.index;
  }
  if (tree.left) {
    left = dfs(tree.left, target);
  }
  if (tree.right) {
    right = dfs(tree.right, target);
  }
  return left || right;
}

let testTree = {
  value: 0,
  index: 0,
  left: {
    value: 1,
    index: 1,
    left: {
      value: 6,
      index: 3,
      left: {},
      right: {}
    },
    right: {
      value: 4,
      index: 4,
      left: {},
      right: {}
    }
  },
  right: {
    value: 2,
    index: 2,
    left: {
      value: 8,
      index: 5,
      left: {},
      right: {}
    },
    right: {
      value: 8,
      index: 6,
      left: {},
      right: {}
    }
  }
}
console.log(dfs(testTree, 6))
//depth first iterative
const dfsIterative = function (root, target) {
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.value === target) {
      return node.index;
    }
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

console.log('dfs iterative', dfsIterative(testTree, 6))
//iterate would be greating a stack
//set root to first value in stack
//continue to iterate through stack while values in stack
//pop off stack
//add right leaf if it exists
//add left leaf if it exists
//breathFirstSearch
//creates a queueing system for breathfirst searches
const bfs = function(root, target) {
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === target) {
      return node.index;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

console.log(bfs(testTree, 8));






















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