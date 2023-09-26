s = 'get-element-by-id'
t = ""
for (let i = 0; i < s.length; i++) {
    if (s[i] === "-") {
        t += s[i+1].toUpperCase()
        i += 1
    } else {
        t += s[i]
    }
}
console.log(t)