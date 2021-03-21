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
    case 'upperCase':
      transformedString = str.toUpperCase();
      break;

    case 'capitalize':
      const strArray = str.split(' ');
      for (let i = 0, x = strArray.length; i < x; i++) {
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
      }
      transformedString = strArray.join(' ');
      break;

    // Default for lower case
    default:
      transformedString = str.toLowerCase();
      break;
  }

  return transformedString;
};

export { textUtil };
