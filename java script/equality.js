// non-strict equality == will type cast
// whereas strict equality === will not type cast
// 1=="1"
// true
// 1==="1"
// false


// uniary operator"+" tries to type cast RHS to LHS 

// "1"+1
// "11"

// []==""
// true

// []==0
// true

// ""==0
// true

// let o={}
// undefined
// o.toString()
// "[object Object]"

// []+{}
// "[object Object]" this means 'object' is an object of class 'Object'

// {}+[]
// 0

// +[] array is typecasted to string and empty string is 0 (i.e. number)
// 0


/* now how compiler make the diff between an obj and block as both has {}
so there are two thing LHS and RHS so if {} is LHS then obviously it is a block 
but if it is RHS then obviously it is an object as {} in defination of an 
object is always in RHS as: o={} */