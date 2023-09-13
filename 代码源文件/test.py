import bisect

nums = [1, 2, 3, 4]
print(bisect.bisect_right(nums, 0))

arr = [23,2,4,6,6]
pre = [0]
for a in arr:
    pre.append(pre[-1] + a)
print([x % 7 for x in pre])

print(-1 % 2)