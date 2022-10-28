/**
 * @param {string[]} bank
 * @return {number}
 * 
 * Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank 
 * representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, 
 * consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.
There is one laser beam between any two security devices if both conditions are met:
The two devices are located on two different rows: r1 and r2, where r1 < r2.
For each row i where r1 < i < r2, there are no security devices in the ith row.
Laser beams are independent, i.e., one beam does not interfere nor join with another.
 * 
 * 
 * 
 */
var numberOfBeams = function (bank) {
  let row1 = 0;
  let laserCount = 0;
  for (let i = 0; i < bank.length; i++) {
    let currentRow = bank[i];
    let row2 = 0;
    for (let j = 0; j < currentRow.length; j++) {
      let val = parseInt(currentRow[j]);
      row2 += val;
    }
    if (i == 0) {
      row1 = row2;
    } else {
      if (row2 > 0) {
        laserCount += row1 * row2;
        row1 = row2;
      }
    }
  }
  return laserCount;
};

console.log(numberOfBeams(["000", "111", "000"]));
