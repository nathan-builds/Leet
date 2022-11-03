/**
 * @param {string} s
 * @return {string}
 * 
 * 
 * Given a string s, return the longest 
palindromic
 
substring
 in s
 * 
 * 
 * 
 */

var isPalindrome = (string) => {
  let i = 0;
  let j = string.length - 1;

  for (i; i < string.length; i++) {
    if (j <= i) {
      return true;
    } else if (string.charAt(i) != string.charAt(j)) {
      return false;
    }
    j--;
  }
};

var longestPalindrome = function (s) {
  let longestP = s.charAt(0);

  for (var i = 0; i < s.length; i++) {
    let start = s.charAt(i);
    let currentSubstring = s.charAt(i);
    for (var j = i + 1; j <= s.length - 1; j++) {
      if (s.charAt(j) === start) {
        // check for palindrome
        currentSubstring += s.charAt(j);

        if (
          isPalindrome(currentSubstring) &&
          currentSubstring.length > longestP.length
        ) {
          longestP = currentSubstring;
        }
      } else {
        currentSubstring += s.charAt(j);
      }
    }
  }
  return longestP;
};

console.log(longestPalindrome("ccc"));
