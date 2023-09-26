nums = [
    [2, 2],
    [1, 2],
    [3, 4]
]

# 

def is_prime(n): 
    if n == 1: 
        return False
    if n == 2: 
        return True
    if n % 2 == 0: 
        return False
    i = 3
    while i * i <= n: 
        if n % i == 0: 
            return False
        i += 2
    return True

def next_prime(n): 
    if n % 2 == 0: 
        n += 1
    else: 
        n += 2
    while not is_prime(n): 
        n += 2
    return n

def min_ops_to_prime(n): 
    if is_prime(n): 
        return 0
    return next_prime(n) - n

n, m = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(n)]
row_min_ops = [0] * n
col_min_ops = [0] * m

for i in range(n): 
    for j in range(m): 
        op = min_ops_to_prime(matrix[i][j])
        row_min_ops[i] += op
        col_min_ops[j] += op

print(min(min(row_min_ops), min(col_min_ops)))