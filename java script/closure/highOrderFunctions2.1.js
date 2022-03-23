//function returning function

function createGreeter(name){
    let firstname = name.split(" ")[0]
    function greeter(){
        console.log("Hello "+ firstname)
    }
    return greeter
}

let deepakGreeter = createGreeter("Deepak vohra")
let khopaGreeter = createGreeter("Khopa sharma")

deepakGreeter()
khopaGreeter()

//closure