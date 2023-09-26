
# 获取 1 - n 之间的质数
def eratosthenes(n):
    IsPrime = [True] * (n + 1)
    for i in range(2, int(n ** 0.5) + 1):
        if IsPrime[i]:
            for j in range(i * i, n + 1, i):
                IsPrime[j] = False
    return [x for x in range(2, n + 1) if IsPrime[x]]


# 二分法判断大于等于当前数字的最小数字
def first_prime(target):
    # nums是一个数组，表示1到n之间的质数
    # target是要查找的数字x
    # 返回第一个大于等于target的质数的下标，如果不存在则返回-1
    left = 0 # 左指针
    right = len(nums) - 1 # 右指针
    ans = -1 # 记录答案
    while left <= right: # 循环直到左右指针相交或者找到答案
        mid = (left + right) // 2 # 计算中间位置
        if nums[mid] >= target: # 如果中间位置的数大于等于target
            ans = mid # 更新答案
            right = mid - 1 # 把右指针移动到中间位置左边
        else: # 如果中间位置的数小于target
            left = mid + 1 # 把左指针移动到中间位置右边
    return nums[ans] # 返回答案



a = 10**7
n, m = 2, 2
matrix = [
    [1, 2],
    [3, 4]
]
nums = eratosthenes(100)
arrs = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]

for i,x in enumerate(nums):
    if (arrs[i] != x):
        print(False, i)
# row_min_ops = [0] * n
# col_min_ops = [0] * m

# for i in range(n): 
#     for j in range(m): 
#         op = first_prime(matrix[i][j]) - matrix[i][j]
#         row_min_ops[i] += op
#         col_min_ops[j] += op

# print(min(min(row_min_ops), min(col_min_ops)))