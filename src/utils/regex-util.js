/*
 * Regex util, containing all the necessary regular expressions.
 */
class RegexUtils {
  specialChar = /[\\/=?`<>,]/;
  emptyField = /^$/;
  whiteSpace = /^\s/;
}

export default new RegexUtils();
