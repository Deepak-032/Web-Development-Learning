let arr = [1,2,3,4,5]

let arr2 = arr.reduce(function(accum , item){
    return accum + item
})

console.log(arr2)
// similarly we can find factorial using this