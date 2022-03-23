//function accepting function as an argument

function creategreeter(initial, delta){
    initial(delta)
}
function greeter(delta){
    delta = delta + 5
    console.log(delta)
}

creategreeter(greeter , 10)
