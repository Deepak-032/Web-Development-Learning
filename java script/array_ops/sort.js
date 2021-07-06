let arr = [1,2,9,4,3,7,2]
// console.log(arr.sort())

let arr1 = [1,9,3,7,2,20,15,12,66]
// console.log(arr1.sort())
// js by default doea a lexicographical sort
// this is the way in which distionaries are sort in which first digit is compared with first of all are so on.
// sort function is a higher order function if we don't give it any argument it sort lexicographically

function compare(a,b){
    return a-b;
}
// console.log(arr1.sort(compare))
// in js objects and array with sort are mutable unlike strings. so we dont have to aasign the value of sorted array in another array after sorting the sorted values will get stored in the same array

// console.log(arr1)


// console.log(arr1.sort(function (a,b){
//     console.log(arr1)
//     console.log(a + " " + b)
//     return a - b;
// })) //this is not working

function compareByUnit(a,b){
    return a%10-b%10;
}

console.log(arr1.sort(compareByUnit));

//this is the benefit of having higher order function in js without this we cannot sort