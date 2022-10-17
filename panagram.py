class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        if len(sentence) < 26:
            return False
        alpha = {c for c in sentence}
        return len(alpha) == 26

