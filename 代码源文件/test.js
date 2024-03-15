function dfs(i, s) {
	let m = s.length
	if (i === m) {
		if (target === total) {
			console.log(s, total)
		}
		if (target === 36) {
			console.log(s, total)
		}
		return target === total
	}
	// 我们从可选值为[i, m - 1]的索引范围
	for (let j = i; j < m; j++) {
		// 如果选择当前值
		let curVal = Number(s.slice(i, j + 1))
		total += curVal
		// if (total > target) {
		// 	return false
		// }
		if (dfs(j + 1, s)) {
			return true
		}
		total -= curVal
	}
}
let total = 0, target = 36
dfs(0, "1296")