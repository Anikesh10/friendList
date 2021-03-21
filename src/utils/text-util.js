/**
 * Transform the specifed transform value
 *
 * @param transformValue  transform type of a string.
 * @param str string to be transformed.
 * @returns transformed string.
 */

const textUtil = (transformValue, str) => {
  let transformedString = '';

  switch (transformValue) {
    case 'capitalize':
    case 'camelCase':
      const strArray = str.split(' ');

      for (let i = 0, x = strArray.length; i < x; i++) {
        if (transformValue === 'camelCase' && strArray[i + 1]) {
          strArray[i + 1] =
            strArray[i + 1][0].toUpperCase() + strArray[i + 1].substr(1);
        } else if (transformValue === 'camelCase') {
          break;
        } else {
          strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
        }
      }
      if (transformValue === 'camelCase') {
        transformedString = strArray.join('');
      } else {
        transformedString = strArray.join(' ');
      }
      break;
    default:
      transformedString = str.toLowerCase();
      break;
  }

  return transformedString;
};

export { textUtil };
