let arr = [4,100,73,25,16,234]

let arr2=arr.map(function (item){
    item=item+2
    return item 
})
console.log(arr)
console.log(arr2)

// PS C:\vsCode> node
// Welcome to Node.js v16.1.0.       
// Type ".help" for more information.
// > Math.sqrt(4)
// 2
// > Math.sqrt(10)
// 3.1622776601683795

let arr3= arr.map(Math.sqrt)
console.log(arr3)
