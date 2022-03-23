let num = 10; //semicolons are optionals we can omit these
let str = "Hello world"
let bool = true

console.log(num)
console.log(typeof num) //typeof describes the type of the data stored in the variables
//and not the variable type because variable do not have any type in java script
//so this is called as this is not a type safe language because js don't take garauntee that it willhave this type of data
num = "deepak"

console.log(num)
console.log(typeof num) //the return type of typeof is a string so it will be in " " in REPL
//typeof null is "object" and of array is "object"
//and of undefined is "undefined"
// console is called REPL : Read Execute Print Loop
// typeof null
// "object"
// typeof 10
// "number"
// Number.MAX_VALUE
// 1.7976931348623157e+308
// Number.MAX_SAFE_INTEGER
// 9007199254740991

/* one thing always keep in mind string are immutable means we can only change the string value
by assign it a new value i.e. unless we point str to a new string.
so all the operations available in the string like replace, substring, substr they all create the new strings and
not change the existing value of str */

// str.substr(starting index, no of elements to transverse)
// str.substring(starting index, ending index)
// str.subslice(starting index, ending index)
/* the only diff between slice and substring is that slice can also work from right to left by accepting negative values
which is not so in substring it will give empty string "" */


// let url = 'https://youtube.com/watch?v=evuebdi678f'
// undefined
// url.split('?')
// (2) ["https://youtube.com/watch", "v=evuebdi678f"]

// url.split('=')
// (2) ["https://youtube.com/watch?v", "evuebdi678f"]
// url.split('=')[1]
// "evuebdi678f"


// str="one thing always keep in mind string are immutable"
// "one thing always keep in mind string are immutable"
// let a = str.split(' ')
// undefined
// a[5]
// "mind"

// in arrays splice changes the array vs slice does not do so