// function Person(name,age){
//     this.firstName = name.split(" ")[0]
//     this.lastName = name.split(" ")[1]
//     this.age = age
//     this.isAdult = function () {return age>18}
// }

function Person(name,age){
    this.firstName = name.split(" ")[0]
    this.lastName = name.split(" ")[1]
    // now 'age' is like a private variable
    this.isAdult = function () {return age>18}
}

let p = new Person("John Smith", 30)
console.log(p)
console.log(p.isAdult())

// anything put into this is public and anything which is not put into this is private