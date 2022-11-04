/**
 * @param {string} s
 * @return {number}
 * 
 * 
 * 
 * 
 */

const vals = new Map();
vals.set("I", 1);
vals.set("V", 5);
vals.set("X", 10);
vals.set("L", 50);
vals.set("C", 100);
vals.set("D", 500);
vals.set("M", 1000);

var romanToInt = function (s) {
  let sum = 0;
  let lastNum = 10000;

  for (var i = 0; i < s.length; i++) {
    let currentNum = vals.get(s.charAt(i));
    if (currentNum <= lastNum) {
      sum += currentNum;
    } else {
      sum -= lastNum;
      let newSum = currentNum - lastNum;
      sum += newSum;
    }
    lastNum = currentNum;
  }
  return sum;
};

