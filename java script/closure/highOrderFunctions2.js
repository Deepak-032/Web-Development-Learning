//function returning function

function creategreeter(initial, delta){
    let val = initial
    function greeter(){
        val = val + delta
        return val;
    }
    return greeter; //here i am returning just the function, the function will not execute by this statement. if i write return greeter() the the function eill get executed and the value will be returned
}

let fiveCounter = creategreeter(5,5)
let anotherCounter = creategreeter(10,2)

console.log(fiveCounter());
console.log(fiveCounter());
console.log(fiveCounter());

console.log(anotherCounter())
console.log(anotherCounter())
console.log(anotherCounter())

//closure