


// class NewSet {
//   constructor(data) {
//     //accepts array or single value
//     var _contents = [];
//     this.set = (data) => {
//       if (typeof data === 'number') {
//         _contents.push(data);
//       } else {
//         let dict = {}
//         for (var i = 0; i < data.length; i++) {
//           if (dict[data[i]]) {
//             return null;
//           } else {
//             dict[data[i]] = true;
//             _contents.push(data[i]);
//           }
//         }
//       }
//     }
//     this.get = () => {
//       return _contents;
//     }
//     this.set(data);
//   }
//   //values in a set have to all be unique values;
//   has(target) {
//     let content = this.get()
//     for (var i = 0; i < content; i++) {
//       if (content[i] === target) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// let small = new NewSet(5)
// let arr = new NewSet([2,3,4])
// let notUnique = new NewSet([2,2,2])
// console.log('test', small.get(), small.has(5))
// console.log('arr', arr.get());


// function maxAreaInContainer(heights) {
//   //two for loops
//   //set right to next value
//   //make sure right is less than first value
//   //check area
//   let maxArea = 0;
//   let rightMax = 0;
//   for (var i = 0; i < heights.length; i++) {
//     let left = heights[i];
//     for (var j = 1; j < heights.length; j++) {
//       let right = heights[j];
//       let height = Math.min(left, right);
//       let width = j - i;
//       console.log(height, width, width * height);
//       maxArea = Math.max(maxArea, width * height);
//     }
//   }
//   return maxArea;
// }

// console.log(maxAreaInContainer([1,5,4,3]));


// function generateSpiralMatrix(n) {
//   // Start your code here
//   let size = n * n
//   console.log(size);
//   let counter = 1;
//   let matrix = new Array(n);
//   let right = n - 1;
//   let left = 0;
//   let top = 0;
//   let bot = n - 1;
//   for (var e = 0; e < n; e++) {
//     matrix[e] = [];
//   }
//   while (counter <= size) {
//     for (var i = top; i <= bot; i++) {
//       matrix[top][i] = counter;
//       counter++;
//     }
//     top++;

//     for (var j = top; j < bot; j++) {
//       matrix[j][right] = counter;
//       counter++;
//     }
//     right--;

//     for (var x = bot; x >= left; x--) {
//       matrix[bot][x] = counter;
//       counter++;
//     }
//     bot--;

//     for (var y = bot; y >= top; y--) {
//       matrix[y][left] = counter;
//       counter++;
//     }
//     left++;
//   }
//   return matrix;
// }


function countSubarray(numbers, k) {
  // Start your code here
  //brute force method
  //two for loops
  let first = 0;
  if (numbers.length < 2 && numbers[first] < k) {
    return 1;
  }
  let end = 1;
  let total = null;
  let count = 0;

  while (first < numbers.length) {
    if (total === null && numbers[first] < k) {
      count++;
      total = numbers[first];
    }
    if (numbers[end] && total + numbers[end] < k) {
      console.log(total, end);
      total += numbers[end];
      count++;
      end++;
    } else {
      total = null;
      first++;
      end++;
    }
  }
  return count;
}

console.log(countSubarray([1,2,3],6));