# Given an m x n binary matrix mat, return the number of special positions in mat.
##A position (i, j) is called special if mat[i][j] ==
# 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).


class Solution:
    def numSpecial(self, mat: list[list[int]]) -> int:
        row_count = len(mat)
        column_count = len(mat[0]);
        special_nums = 0
        column_num = -1
        for i in range(0, row_count):
            row_sum = 0
            for j in range(0, column_count):
                if mat[i][j]:
                    row_sum += 1
                    column_num = j
            if row_sum == 1:
                column_sum = 0
                ##check column
                for k in range(0, row_count):
                    if mat[k][column_num]:
                        column_sum += 1
                if column_sum == 1:
                    special_nums += 1
        return special_nums
