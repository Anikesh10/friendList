import RegexUtils from './RegexUtil';

/**
 * Validation util to all all common user input validations
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
}

export default ValidationUtils;
