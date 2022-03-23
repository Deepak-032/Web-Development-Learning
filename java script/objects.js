// objects are first class variables in java script means we can make objects in js without creating class
let obj = {
    a: 10,
    b: "hello",
    c: true,
    d: { // objects can be nested as well
        p: 22,
        q: 33,
        r: {
            x: "value"
        }
    }
} // all are public and these are just a bag of data and are different from classes and objects of other languages
console.log(obj.d.r.x)
obj.l = 1111 // new properties added to the object
delete obj.b // delete/ remove property from the object