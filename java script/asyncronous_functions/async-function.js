// In async functions we generally pass a function and this function is called when the task is done
// webinar 10, 8:34

function asyncFunction(callback){
    console.log("Task has started")
    setTimeout(function(){
        console.log("Task has done")
        callback()
    },3000)
}

asyncFunction(function(){
    console.log("As the task is done so now it's my turn. Hihi")
})

console.log("While the task is continuing, your smart asyncronous programming has given me the CPU. Thank you ;)")

