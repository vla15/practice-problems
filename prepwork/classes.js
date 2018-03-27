


class NewSet {
  constructor(data) {
    //accepts array or single value
    var _contents = [];
    this.set = (data) => {
      if (typeof data === 'number') {
        _contents.push(data);
      } else {
        let dict = {}
        for (var i = 0; i < data.length; i++) {
          if (dict[data[i]]) {
            return null;
          } else {
            dict[data[i]] = true;
            _contents.push(data[i]);
          }
        }
      }
    }
    this.get = () => {
      return _contents;
    }
    this.set(data);
  }
  //values in a set have to all be unique values;
  has(target) {
    let content = this.get()
    for (var i = 0; i < content; i++) {
      if (content[i] === target) {
        return true;
      }
    }
    return false;
  }
}

let small = new NewSet(5)
let arr = new NewSet([2,3,4])
let notUnique = new NewSet([2,2,2])
console.log('test', small.get(), small.has(5))
console.log('arr', arr.get());