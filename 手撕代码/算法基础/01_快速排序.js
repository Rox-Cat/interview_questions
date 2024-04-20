function partition(arr, l, r) {
    let i = l, j = r
    while (i < j) {
        while (i < j && arr[j] >= arr[l]) {
            j--
        }
        while (i < j && arr[i] <= arr[l]) {
            i++
        }
        ; [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    ; [arr[i], arr[l]] = [arr[l], arr[i]]
    return i
}

function quickSort(arr, l, r) {
    if (l >= r) return 
    const m = partition(arr, l, r)
    quickSort(arr, l, m - 1)
    quickSort(arr, m + 1, r)
}
const arr = [1, 3, 4, 2, 7, 6]
quickSort(arr, 0, arr.length - 1)
console.log(arr)