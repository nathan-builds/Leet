##Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed
##Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first 
##part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of 
##nums should hold the final result. It does not matter what you leave beyond the first k elements.
##Return k after placing the final result in the first k slots of nums.
##Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        num_of_elements = 0
        for i in range(0, len(nums)):
            num = nums[i]
            if num == val:
                nums[i] = 101
                num_of_elements += 1
                print (nums)
        nums.sort()
        return len(nums)-num_of_elements
