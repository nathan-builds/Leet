/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given an integer array nums of length n and an integer target,
 * find three integers in nums such that the sum is closest to target.Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 *
 *
 *
 *
 */
var threeSumClosest = function (nums, target) {
  let closest = 1000000;
  let returnVal = 0;

  for (var i = 0; i <= nums.length - 3; i++) {
    for (var j = i + 1; j <= nums.length - 2; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(target - sum) < closest) {
          closest = Math.abs(target - sum);
          returnVal = sum;
        }
      }
    }
  }
  return returnVal;
};
