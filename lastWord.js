/**
 * @param {string} s
 * @return {number}
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only
 *
 */

// TWO IMPLEMENTATIONS THAT WORK IN DIFERENT WAYS
var lengthOfLastWord = function (s) {
  s = s.trimStart();
  s = s.trimEnd();
  let sArr = s.split(" ");
  return sArr[sArr.length - 1].length;
};

var lengthOfLastWord = function (s) {
  if (s.length == 1) {
    return 1;
  }
  let count = 0;
  lastWordStart = false;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == " ") {
      if (lastWordStart) {
        return count;
      }
      continue;
    } else {
      if (!lastWordStart) {
        lastWordStart = true;
      }
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord("a "));
