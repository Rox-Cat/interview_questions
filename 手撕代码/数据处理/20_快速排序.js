function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}


function partition(nums, left, right) {
    let i = left, j = right
    while (i < j) {
        // 从右开始找到第一个小于nums[left]的值
        while (i < j && nums[j] >= nums[left]) j--
        while (i < j && nums[i] <= nums[left]) i++
        swap(nums, i, j)
    }
    swap(nums, left, i)
    // 返回分割点
    return i
}

function quickSort(nums, left, right) {
    if (left >= right) return
    const mid = partition(nums, left, right) // 分割点
    quickSort(nums, left, mid - 1)
    quickSort(nums, mid + 1, right)
}
arr = [4, 5, 6, 2, 1, 1, 8]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
