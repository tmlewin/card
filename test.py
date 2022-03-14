# Story
# You work for a software company. You know that you will soon go on vacation, so you need to earn as much money as possible.

# Task
# You are given the number n - the number of working days before the holiday. You want to get as much money as possible by the nth day. You can make money by doing projects(or jobs). You can do one job a day. You can do every job only once. You are given two lists of equal length - a and b. You know that if you do some work on day j, on day j + ai you get bi money. How much money can you get by n-th day?

# You need to implement function jobs(n, a, b) which returns number - answer to the task.

# def jobs(n, a, b) -> int:
#   pass
# Constraints
# there are 100 random tests where:

# 1 ≤ n ≤ 10000

# 1 ≤ a1,2,3,...,k < n

# 1 ≤ b1,2,3,...,k ≤ 10000

# Example
# jobs(n=9, 
#      a=[3, 6, 8, 6, 5, 6], 
#      b=[5, 6, 2, 1, 7, 4]) == 24


def jobs(n, a, b):
    if n == 1:
        return b[0]
    else:
        return b[0] + jobs(n - 1, a[1:], b[1:])


print(jobs(9, [3, 6, 8, 6, 5, 6], [5, 6, 2, 1, 7, 4]))





