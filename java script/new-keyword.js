console.log(this)
function fun(){
    console.log(global==this)
}

fun()
new fun()