function task (done){
    console.log('we are doing a task')
    setTimeout(done, 1000) // this function will make done to be call after 1 sec, but our program will not wait here for 1 sec it will execute the rest of the statements and when 1 sec will over control will directly come to this statement
}

task(function(){
    console.log('task was done')
})

console.log('we did a task')

// so setTimeout makes the asyncronous delay of 1 sec