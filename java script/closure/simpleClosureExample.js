function fun () {
    let a = 10
    console.log("Hii I am Fun!!!!!!!!!!")
    return function fun2 () {
        console.log("Hii I am Fun2!!!!!!!!!!!", a)
    }
}

let f1 = fun()
f1()
// console.log(a)