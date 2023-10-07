let arr = [1, 2, 3]

function request(arr) {
    return new Promise((resolve, reject) => {
        let i = 0, n = arr.length, result = []
        next(i)
        function next(i) {
            arr[i].then((res) => {
                i += 1
                result.push(res)
                if (i < n) {
                    next(i)
                } else {
                    resolve(result)
                }
            }).catch(error => {
                reject(error)
            })
        }
    })
}

