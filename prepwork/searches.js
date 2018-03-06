class Node {
  constructor(value, id) {
    this.value = value;
    this.id = id;
    this.left = null;
    this.right = null;
  }
}
let tree = new Node(0, 0);
let b = new Node(1, 1);
let c = new Node(2, 2);
let d = new Node(12, 3);
let e = new Node(12, 4);
let f = new Node(5, 5);
let g = new Node(6, 6);
tree.left = b;
tree.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
//bfs
const dfs = function(tree, target) {
  let left = null;
  let right = null;
  if (tree.value === target) {
    return tree;
  }
  if (tree.left) {
    left = dfs(tree.left, target);
  }
  if (tree.right) {
    right = dfs(tree.right, target);
  }
  return left || right;
}
console.log('dfs', dfs(tree, 12))

//dfs iterative
const dfsIterative = function(arr, target) {
  let stack = [arr];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.value === target) {
      return node;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return null;
}

console.log('dfs iterative', dfsIterative(tree, 12))
//bfs
//is a queue system
const bfs = function(tree, target) {
  let queue = [tree];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === target) {
      return node;
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
console.log('bfsbfs', bfs(tree, 5));

//fisherYates
const fisherYates = function(arr) {
  //takes the array
  let length = arr.length;

  while(length > 0) {
    let rnd = Math.floor(Math.random() * length--);
    let tmp = arr[rnd];
    arr[rnd] = arr[length];
    arr[length] = tmp;
  }
  return arr;
  //shuffles in place
  //takes a random item in arr and replaces it with last item
  //shift boundary up from last item to last item - 1
}
console.log('fisher yates', fisherYates([4, 12, 3, 5]))

//binarySearch
const binarySearch = function(arr, target, left = 0, right = arr.length) {
  if (left > right) {
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right);
  }
  return null;
}

console.log(binarySearch('binary search', [2,3,4,5,6,7,8,9], 6))
//heap


class MinHeap {
  constructor() {
    this.contents = [];
  }
  add(value) {
    this.contents.push(value);
    this.bubbleUp(this.contents.length - 1);
  }

  pop() {
    //takes last value
    let last = this.contents.pop();
    let top = this.contents[0];
    this.contents[0] = last;
    this.bubbleDown(0);
    return top;
    //replaces with first value
    //bubbles that value downwards
  }

  bubbleUp(childIdx) {
    //child to parent
    //Math.floor(parentIdx * 2 + 1)
    if (childIdx > 0) {
      let heapAdjustChildIdx = childIdx + 1;
      let parentIdx = Math.floor(heapAdjustChildIdx / 2) - 1;
      if (this.contents[childIdx] < this.contents[parentIdx]) {
        let tmp = this.contents[parentIdx];
        this.contents[parentIdx] = this.contents[childIdx];
        this.contents[childIdx] = tmp;
        this.bubbleUp(parentIdx);
      }
    }
  }

  bubbleDown(index) {
    let heapAdjustIdx = index + 1;
    let firstChildIdx = (heapAdjustIdx * 2) - 1;
    let secondChildIdx = (heapAdjustIdx * 2 + 1) - 1;
    if (this.contents[firstChildIdx] < this.contents[secondChildIdx] && this.contents[index] > this.contents[firstChildIdx]) {
      let tmp = this.contents[firstChildIdx];
      this.contents[firstChildIdx] = this.contents[index];
      this.contents[index] = tmp;
      this.bubbleDown(firstChildIdx);
    } else if (this.contents[secondChildIdx] < this.contents[firstChildIdx] && this.contents[index] > this.contents[secondChildIdx]) {
      let tmp = this.contents[index];
      this.contents[index] = this.contents[secondChildIdx];
      this.contents[secondChildIdx] = tmp;
      this.bubbleDown(secondChildIdx);
    }
  }
}

let heap = new MinHeap();
heap.add(12);
heap.add(9);
heap.add(4);
console.log(heap.contents);
heap.add(3);
heap.add(1);
console.log(heap.contents);
console.log(heap.pop(), heap.contents);













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