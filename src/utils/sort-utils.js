class SortUtils {
  sortArray(origArray, parameter) {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      var left = [];
      var right = [];
      var newArray = [];
      var pivot = origArray.pop();
      var length = origArray.length;

      for (var i = 0; i < length; i++) {
        if (origArray[i][parameter] >= pivot[parameter]) {
          left.push(origArray[i]);
        } else {
          right.push(origArray[i]);
        }
      }

      return newArray.concat(
        this.sortFavorites(left),
        pivot,
        this.sortFavorites(right)
      );
    }
  }
}

export default new SortUtils();
