let a = {
    a: 23,
    b: [
        { a: 9, c: 89 },
        { a: 23, c: 9 },
    ]
}

const r = a.b.find(x => a.a === x.a)

// console.log(r)

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let c = b.find(a => { console.log("first"); return a > 5 })
// console.log(c)

function fun (x) {
    console.log(x)
    return function (y) {
        console.log(y)
    }
}

fun("Hello")("Deepak")