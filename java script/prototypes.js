// prototype is a way in which we can do inheritance in js
let p = {
    a:10
}

let q = Object.create(p)
q.b = 20

let r = Object.create(q)
r.c = 30

console.log(p)
console.log(q)
console.log(r)
console.log(r.a)
console.log(r.b)
console.log(r.c)
console.log(r.__proto__===q)
console.log(r.__proto__.__proto__===p)

// if we increase the value of q.a++ then value of a inside q and r will only change and remains same for the p

q.a++
console.log(p.a)
console.log(q.a)
console.log(r.a)
// when we add new value to 'a' in 'q' i.e. q.a=q.a+1, then the new 'a' for 'q' is created
// and in inheritance we can just read the data of the parent and when we try to change the inherited value the value get copied to itself. this is called COW copy on write. otherwise we are just refering the parent value
console.log(q)