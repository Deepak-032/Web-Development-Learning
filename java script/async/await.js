// (async () => {
//     await setTimeout(()=>{
//         console.log("object")
//     }, 3000)
//     console.log('async/await');
// })();
function done() {
    setTimeout(() => {
        console.log("object")
        return "deepak"
    }, 3000)
}
async function hello() {
    let data = await done()
    console.log(" 1 2 3")
    return data
}

let a = hello()
a.then((data)=> console.log(data))