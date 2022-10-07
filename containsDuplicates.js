/**
 * @param {number[]} nums
 * @return {boolean}
 *Given an integer array nums, return true if any value appears 
 *at least twice in the array, and return false if every element is distinct.
 */
var containsDuplicate = function (nums) {
  let seen = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < nums.length; i++) {
    if (seen[nums[i] - 1]) return true;
    else seen[nums[i] - 1] = 1;
  }
  return false;
};
