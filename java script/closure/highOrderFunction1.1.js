//function accepting function as an argument

function getFirstName(fullName) {
    return fullName.split(" ")[0]
}

function greeter(findname, fullName) {
    let firstname = findname(fullName)
    console.log("Hello "+firstname)
}

greeter(getFirstName,"Deepak vohra")