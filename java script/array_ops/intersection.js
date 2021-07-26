let a = [1, 2, 3, 4]
let b = [4, 5, 6, 1, 2]

let d = a.filter(x => !b.includes(x))
let e = b.filter(x => !a.includes(x))

console.log(d)
console.log(e)

// Array.prototype.intersection = function (a) {
//     return this.filter(function (i) {
//         return a.indexOf(i)<0
//     })
// }
// console.log(a.intersection(b))