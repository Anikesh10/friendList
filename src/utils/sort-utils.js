class ArrayUtils {
  sortArray(origArray, parameter, order = 'desc') {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      var left = [];
      var right = [];
      var newArray = [];
      var pivot = origArray.pop();
      var length = origArray.length;

      for (var i = 0; i < length; i++) {
        const condition =
          order === 'asc'
            ? origArray[i][parameter] <= pivot[parameter]
            : origArray[i][parameter] >= pivot[parameter];
        if (condition) {
          left.push(origArray[i]);
        } else {
          right.push(origArray[i]);
        }
      }

      return newArray.concat(
        this.sortArray(left),
        pivot,
        this.sortArray(right)
      );
    }
  }

  searchArray(list = [], key, searchValue) {
    let results = [];
    for (var i = 0; i <= list.length; i++) {
      if (list[i][key].includes(searchValue)) {
        results = [...results, list[i]];
      }
    }
    return results;
  }
}

export default new ArrayUtils();
