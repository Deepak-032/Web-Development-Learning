function Animal (nlegs){
    this.nlegs = nlegs
}

Animal.prototype.behaviour = function(action){
    console.log(action)
}
const animal = new Animal(4)
// console.log(animal)

if("behaviour" in animal){
    animal.behaviour("sleep")
}

if(animal.behaviour){
    animal.behaviour("run")
}

if(animal.hasOwnProperty("behaviour")){
    animal.behaviour("bark")
}