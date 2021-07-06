let Food = [
    "Panner Tikka", 
    "Garlic Mushroom", 
    "Cheese Chilly", 
    "Onion Burger", 
    "Tandoori Chicken", 
    "Roasted Egg"
]

function isVeg(Food){
    if(Food.indexOf("Chicken")!=-1) return false
    if(Food.indexOf("Egg")!=-1) return false
    return true
}

function onionGarlicFree(Food){
    if(Food.indexOf("Onion")!=-1) return false
    if(Food.indexOf("Garlic")!=-1) return false
    return true
}

let vegFood = Food.filter(isVeg)
let jainFood = Food.filter(isVeg).filter(onionGarlicFree)

console.log("Menu: "+Food)
console.log("Veg Menu: "+vegFood)
console.log("Jain Menu: "+jainFood)
