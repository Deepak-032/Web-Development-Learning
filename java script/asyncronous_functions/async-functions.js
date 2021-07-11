function task (done){
    console.log('we are doing a task')
    done()
}

task(function(){
    console.log('task was done')
})

console.log('we did a task')

// In async functions we generally pass a function and this function is called when the task is done


// another example
function fun(){
    console.log("Hello Im fun function")
}
function async(fun) {
    console.log("async function")
    return fun
}
let callback = async(fun)
callback()