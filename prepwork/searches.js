//bfs
const bfs = function(tree, target) {
  //breath first is implemented througha  queue
  let queue = [tree];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === target) {
      return node.id
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return null;
}
//dfs - recursive
const dfs = function (tree, target) {
  let left = null;
  let right = null;
  if (tree.value === target) {
    return tree.id
  }
  if (tree.left) {
    left = dfs(tree.left, target);
  }
  if (tree.right) {
    right = dfs(tree.right, target);
  }
  return left || right;
}
class Node {
  constructor(value, id) {
    this.value = value;
    this.id = id;
    this.left = null;
    this.right = null;
  }
}
let a = new Node(0, 0);
let b = new Node(1, 1);
let c = new Node(3, 2);
let d = new Node(4, 3);
let e = new Node(4, 4);
let f = new Node(5, 5);
let g = new Node(6, 6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
console.log(dfs(a, 3));
console.log(bfs(a, 4));
//fisheryates
const fisherYates = function(arr) {
  //sorts array in place
  //take array
  let length = arr.length;
  while (length > 0) {
    let rnd = Math.floor(Math.random() * length--);
    let tmpValue = arr[rnd];
    arr[rnd] = arr[length];
    arr[length] = tmpValue;
  }
  return arr;
  //randomize number from 0 to length of array
  //replace that random number with last value in array
  //reduce boundary by 1 and repeat
}
console.log(fisherYates([2, 5, 7, 10]));
//binary search
const binarySearch = function (arr, target, left = 0, right = arr.length) {
  //get mid point
  if (left > right) {
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right);
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return null;
  //compare against target to see which side of array to check
  //call binarySearch on side
}
console.log(binarySearch([1,2,3,4,5,6,7], 3))
//heap
class Heap {
  constructor() {
    this.contents = [];
  }

  add(node) {
    //for heaps you add to the end then bubble up
    this.contents.push(node);
    this.bubbleUp(this.contents.length - 1);
  }

  bubbleUp(childIndex) {
    //check parent index
    if (childIndex > 0) {
      let heapChildIndex = childIndex + 1;
      let heapParentIndex = Math.floor(heapChildIndex / 2);

      let parentIndex = heapParentIndex - 1;
      if (this.contents[childIndex] < this.contents[parentIndex]) {
        let tmp = this.contents[childIndex];
        this.contents[childIndex] = this.contents[parentIndex];
        this.contents[parentIndex] = tmp;
        this.bubbleUp(parentIndex);
      }
    }
    //if child value is less than parent
      //swap
      //call bubble up on parentIdx

  }

  remove() {
    //replaces top value with bottom value
    if (this.heapSize > 0) {
      let rootValue = this.contents[0]
      this.contents[0] = this.contents[this.heapSize() - 1]
      this.bubbleDown(0)
      return rootValue;
    } else {
      return this.contents.pop();
    }
    //bubbles down
  }

  heapSize() {
    return this.contents.length;
  }

  bubbleDown(parentIndex) {
    //checks left and right children
    //swaps with the lesser of the two
    //bubbles down until no children are present
  }
}

let heap = new Heap();
console.log(heap);




















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