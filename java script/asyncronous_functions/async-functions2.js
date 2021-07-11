function done (){
    console.log("task was done")
}

setTimeout(done, 1000) // this delay is asyncronous in nature and setTimeout function automatically calls the done function after given amount of time
// time is in milli sec
console.log("we did a task")
