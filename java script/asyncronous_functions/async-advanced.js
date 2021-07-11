let a = false

setTimeout(function(){
    a = true
}, 1000)

while(!a){
    console.log(1)
}

// this will become an infinite loop because we are saying that the function will 
// execute after 1 sec but the interpreter is not free it is running the while loop 
// so the function will never get chance to execute