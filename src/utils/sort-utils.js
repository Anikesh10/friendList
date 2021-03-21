import { textUtil } from './text-util';
class ArrayUtils {
  sortStringAsc(origArray, parameter) {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      origArray.sort((currentItem, nextItem) => {
        const uppercaseCurrent = textUtil('uppercase', currentItem[parameter]);
        const uppercaseNext = textUtil('uppercase', nextItem[parameter]);
        let comparison = 0;
        if (uppercaseCurrent > uppercaseNext) {
          comparison = 1;
        } else if (uppercaseCurrent < uppercaseNext) {
          comparison = -1;
        }
        return comparison;
      });
    }
    return origArray;
  }

  sortFavDesc(origArray) {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      origArray.sort((currentItem, nextItem) => {
        return nextItem.favourite - currentItem.favourite;
      });
    }
    return origArray;
  }

  searchArray(list = [], key, searchValue) {
    let results = [];
    for (var i = 0; i < list.length; i++) {
      const lowerCaseName = textUtil('lowercase', list[i][key]);
      const lowercaseSearchValue = textUtil('lowercase', searchValue);
      if (lowerCaseName.includes(lowercaseSearchValue)) {
        results = [...results, list[i]];
      }
    }
    return results;
  }
}

export default new ArrayUtils();
