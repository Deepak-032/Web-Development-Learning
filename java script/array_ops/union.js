let a = [1, 2, 3, 4]
let b = [4, 5, 6, 1, 2]

c = [...a, ...b]
d = [...new Set(c)]

console.log(c)
console.log(d)
