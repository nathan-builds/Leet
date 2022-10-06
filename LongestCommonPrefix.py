##Write a function to find the longest common prefix string amongst an array of strings.
##If there is no common prefix, return an empty string "".

 

class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        first_word = strs[0]
        slice_index = len(first_word)
        while len(first_word) > 0:
            found = True
            for word in strs[1:]:
                if not word.startswith(first_word):
                    slice_index -= 1
                    first_word = first_word[0:slice_index]
                    found = False
                    break
            if found:
                return first_word

        return first_word
