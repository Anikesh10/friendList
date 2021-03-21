import RegexUtils from './regex-util';

/**
 * Validation util for user input validations
 */
class ValidationUtils {
  checkIfspecialChar = (value) => {
    return RegexUtils.specialChar.test(value);
  };

  checkIfEmptyField = (value) => {
    return RegexUtils.emptyField.test(value);
  };

  checkIfWhiteSpace = (value) => {
    if (typeof value !== 'number' && value && value.trim().length === 0) {
      return RegexUtils.whiteSpace.test(value);
    }
  };

  validateNumber = (value) => {
    return RegexUtils.regexNumber.test(value);
  };
}

export default new ValidationUtils();
