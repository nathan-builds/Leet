# Definition for singly-linked list.
#
# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order, and each of their nodes contains a single
# digit. Add the two numbers and return the sum as a linked list.
# You may assume the two numbers do not contain any leading zero, except the number 0 itself.


from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        num_1_str = ''
        num_2_str = ''

        while True:
            num_1_str = str(l1.val) + num_1_str
            l1 = l1.next
            if not l1:
                break

        while True:
            num_2_str = str(l2.val) + num_2_str
            l2 = l2.next
            if not l2:
                break

        num_sum = int(num_1_str) + int(num_2_str)
        val_reversed = str(num_sum)[::-1]
        head = ListNode(int(val_reversed[0]))
        tail = head

        for c in val_reversed[1:]:
            tail.next = ListNode(int(c))
            tail = tail.next

        return head
