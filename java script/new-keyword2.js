function fun(){
    this.p = "something"
    return 10
}
let o1 = fun()
let o2 = new fun()

console.log(o1)
console.log(o2)     //the box that we have created it is returning that
console.log(o1.p)
console.log(o2.p)

// in REPL this refers to the script itself and in terminal this refers to the global