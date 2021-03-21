/*
 * Regex util, containing all the necessary regular expressions.
 */
class RegexUtils {
  specialChar = /[\\/=?`<>,[\]]/;
  emptyField = /^$/;
  whiteSpace = /^\s/;
  regexNumber = /\d/;
}

export default new RegexUtils();
