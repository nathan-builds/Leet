##Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
##An input string is valid if:
##Open brackets must be closed by the same type of brackets.
##Open brackets must be closed in the correct order.
##Every close bracket has a corresponding open bracket of the same type.


class Solution:
    def isValid(self, s: str) -> bool:
        queue = []
        try:
            for character in s:
                if character == '[' or character == '(' or character == '{':
                    queue.append(character)
                else:
                    last = queue.pop()
                    if last == '[' and character != ']':
                        return False
                    if last == '(' and character != ')':
                        return False
                    if last == '{' and character != '}':
                        return False;
            if len(queue) != 0:
                return False
            return True
        except:
            return False
