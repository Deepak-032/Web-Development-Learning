function downloadFile(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("url does not starts with 'http'"))
        }
        else {
            console.log("Start download: " + url)
            setTimeout(function () {
                let fileName = url.split('/').pop()
                resolve(fileName)
            }, 3000)
        }
    })
}
function downloadFile2(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("url does not starts with 'http'"))
        }
        else {
            console.log("Start download: " + url)
            setTimeout(function () {
                let fileName = url.split('/').pop()
                resolve(fileName)
            }, 10000)
        }
    })
}

function resize(fileName) {
    return new Promise(function (resolve, reject) {
        if (!fileName.endsWith(".png")) {
            reject(new Error(fileName + " is not a png file"))
        }
        else {
            console.log("Start resize: " + fileName)
            setTimeout(function () {
                let resizedFile = fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            }, 3000)
        }
    })
}

function upload(resizedFile) {
    return new Promise(function (resolve, reject) {
        console.log("Start upload: " + resizedFile)
        setTimeout(function () {
            let uploadingUrl = "http://imgur.com/" + resizedFile
            resolve(uploadingUrl)
        }, 3000)
    })
}
// this runs parallelly, means we can download 3 files parallelly using promise.all and
// if in any case out of 3 some are not working the rest will gets downloaded. it will not affects the other.
// but the only condition is that the then function will not work if any of the given is not resolved!
Promise.all([
    downloadFile("http://cb.lk/logo.png"),
    downloadFile2("http://cb.lk/banner.png"),
    downloadFile("http://cb.lk/promo.jpg")
]).then(function (values) {
    console.log("values :", values)
    // return values.map(function(item){
    //     return resize(item)
    // })
    // return values.map(resize) //this creates array of promises
    return Promise.all(values.map(resize))
}).then(function (values) {
    // console.log(values)
    return Promise.all(values.map(upload))
}).then(function (values) {
    console.log(values)
}).catch(function (err) {
    console.error("error occurred :", err)
})

// nd catch runs if any one of them rejects