let a = "deepak"
let b = "dddddd"
let flag = 0

if(a.length !== b.length){
    console.log("It is not an Anagram")
    flag == 1
}

let c = a.split("").sort()
let d = b.split("").sort()

if(flag == 0){
    for(i=0; i<c.length; i++){
        if(c[i] !== d[i]){
            flag = 1
        }
    }
    flag == 1 && console.log("It is not an Anagram")
    flag == 0 && console.log("It is an Anagram")
}
