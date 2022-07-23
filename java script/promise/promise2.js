const promise = new Promise((res, rej) => res(6))

promise
    .then(res => {
        console.log(res)
        console.log("first then block")
    })
    .catch(err => {
        console.log(err)
        console.log("first catch block")
        return 7
    })
    .then(res => {
        console.log(res)
        console.log("second then block")
        return 7
    })
    .catch(err => {
        console.log(err)
        console.log("second catch block")
        return 7
    })

// Only one catch block gets executed for a promise it takes all the errors,
// it doesn't execute squentially like then block