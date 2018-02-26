//binary search
const binarySearch = function(array, target, left = 0, right = array.length) {
  //termination case left boundary greater than right boundary
  if (left > right) {
    return null;
  }
  let mid = Math.floor((right + left) / 2);
  if (target === array[mid]) {
    return mid;
  } else if (target > array[mid]) {
    return binarySearch(array, target, mid + 1, right);
  } else {
    return binarySearch(array, target, left, mid - 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
//2 and 3
  //takes an array as input
  //checks if mid is target
    //if mid greater than target
      //search right half of array
    //if mid less than target
      //search left half of array
  //return
//breath first search
//depth first search
Object.prototype.depthFirstSearch = function(target) {
  //takes a tree
  let idx;
  if (this.value === target) {
    return this.index;
  }
  //checks if value is at tree
    //return index/id
  if (this.left) {
    idx = idx || this.depthFirstSearch.call(this.left, target);
  }
  if (this.right) {
    idx = idx || this.depthFirstSearch.call(this.right, target);
  }
  return idx;
  //takes left leaf
    //recurse down leaf
  //takes right leaf
    //recurse down leaf
  //return null
}

let binaryTree = {
  value: 5,
  index: 0,
  left: {
    value: 2,
    index: 1,
    left: {
      value: 3,
      index: 3,
      left: null,
      right: null
    },
    right: {
      value: 7,
      index: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 6,
    index: 2,
    left: {
      value: 4,
      index: 5,
      left: null,
      right: null
    },
    right: {
      value: 10,
      index: 6,
      left: null,
      right: null
    }
  }
}

console.log(binaryTree.depthFirstSearch(15))