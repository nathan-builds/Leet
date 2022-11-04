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

// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var romanToInt = function (s) {
//     const vals = new Map();
//     vals.set("I", 1);
//     vals.set("V", 5);
//     vals.set("X", 10);
//     vals.set("L", 50);
//     vals.set("C", 100);
//     vals.set("D", 500);
//     vals.set("M", 1000);
//     vals.set("IV", 4);
//     vals.set("IX", 9);
//     vals.set("XL", 40);
//     vals.set("XC", 90);
//     vals.set("CD", 400);
//     vals.set("CM", 900);

//     let sum = 0;
//     let i = 0;

//     while (i < s.length) {
//       let currentChar = s.charAt(i);
//       let nextChar = i + 1 < s.length ? s.charAt(i + 1) : undefined; // edge case
//       if (nextChar) {
//         let potentialVal = vals.get(currentChar + nextChar);
//         if (potentialVal) {
//           sum += potentialVal;
//           i += 2;
//         } else {
//           sum += vals.get(currentChar);
//           i++;
//         }
//       } else {
//         sum += vals.get(currentChar);
//         i++;
//       }
//     }
//     return sum;
//   };

console.log(romanToInt("MCMXCIV"));
