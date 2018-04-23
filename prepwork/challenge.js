// * get a page of data from server, page size is fixed and always = 25

// * @param {number} pageIndex

//  * @return Promise, resolved with page data when the data arrive from server

// *   e.g. when called with pageIndex=0 will return records [0, 1, 2, ... 24] - 1st page of data set

// *        when called with pageIndex=1 will return records [25, 26, 7, ... 49] - 2nd page of data set

// * consider this function implemented and working

// *

//faking data

let data = {};
let key = 0;
let count = 25;
let result = [];
for (var i = 0; i < count; i++) {
  result.push(i);
  if (i === count - 1) {
    data[key] = result;
    result = [];
    key++;
    count += 25
  }
  if (i === 99) {
    count = 0;
  }
}


const getPageFromServer = (pageIndex) => {

    return new Promise(function(resolve){

        //...

        resolve(data[pageIndex]);

    });

}



/**

* fetch any range of data from server using function getPageFromServer()

* @param {number} startIndex of data

* @param {number} endIndex of data

* @returns Promise resolved when all data arrive from server

 */

const getDataRangeFromServer = (startIndex, endIndex) => {
  let results = [];
  let pageSize = 25
  //identify bucket
  let startIdx = Math.floor(startIndex / pageSize);
  let endIdx = Math.floor(endIndex / pageSize);
  return new Promise((resolve, reject) => {
    //recursively call getPageFromServer until data is presented
    let promises = [];
    for (var i = startIdx; i <= endIdx; i++) {
      promises.push(new Promise((resolve, reject) => {
        resolve(getPageFromServer(i))
      }));
    }
    Promise.all(promises)
      .then(vals => {
        let answer = vals.reduce(function(arr, values) {
          return arr.concat(values);
        }, [])
        let len = answer.length;
        if (startIdx > 0) {
          resolve(answer.slice(startIndex - len, endIndex + 1 - len));
        }
        resolve (answer.slice(startIndex, endIndex + 1));
      })

  })
  .catch(() => console.error("data not available"));
}



//for testing

const range = (start, end) => {
  return Array(end - start + 1).fill().map((_, idx) => idx + start)
}
const isEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// sample cases:



// 1) getDataRangeFromServer(0, 1) -> returns [0, 1], calls getPageFromServer 1 time with pageIndex 0
getDataRangeFromServer(0, 10).then(answer => console.log(isEqual(answer, range(0, 10))))

// 2) getDataRangeFromServer(0, 49) -> returns [0..49], calls getPageFromServer 2 times  with pageIndex 0, 1
getDataRangeFromServer(0, 49).then(answer => console.log(isEqual(answer, range(0, 49))))

// 3) getDataRangeFromServer(5, 51) -> returns [5..51], calls getPageFromServer 3 times  with pageIndex 0, 1, 2
getDataRangeFromServer(5, 51).then(answer => console.log(isEqual(answer, range(5, 51))))

// 4) getDataRangeFromServer(50, 99) -> returns [50..99], calls getPageFromServer 2 times with pageIndex 2, 3
getDataRangeFromServer(50, 99).then(answer => console.log(isEqual(answer, range(50, 99))))

// 5) getDataRangeFromServer(55, 99) -> returns [55..99], calls getPageFromServer 2 times with pageIndex 2, 3
getDataRangeFromServer(55, 99).then(answer => console.log(isEqual(answer, range(55, 99))))


