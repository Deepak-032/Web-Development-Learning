function downloadPromise() {
    return new Promise(function (resolve, reject) {
        console.log("Downloading has started")
        setTimeout(function () {
            console.log("Downloading is finished")
            resolve()
        }, 3000)
    })
}

let downloadedFile = downloadPromise()

setTimeout(function () {
    downloadedFile
        .then(function () {
            console.log("Hey! After downloading")
        })
}, 5000)

// Ideally when we call resolve  the then function should run, but what if the returned objet does not have a then
// then the js will wait untill you have a then of that object because the promise is already resolved. as in this case,
// after 2 sec the then will start as this promise was already resolved

// so promise run and then it resolve itself but we cannot know the promise untill we call the 'then' and it can be called 
// after any amount of time. this is called deferred resolve.

// advantage of promises over async functions is that in async functions we have to give the callback function at the same time
// once the function is over we cannot get the callback later on while promises store the result untill or unless you call them.
// thus, deferred resolve is not possible in async functions.