// in promises we have .then which will execute after the task has done if we call resolve function

// function downloadPromise() {
    new Promise(function (resolve, reject) {
        console.log("Downloading has started")
        setTimeout(function () {
            console.log("Downloading is finished")
            resolve()
        }, 3000)
    })
// }

// downloadPromise()
    .then(function () {
        console.log("Hey! After downloading")
    })