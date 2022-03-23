function downloadFile(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("url does not starts with 'http'"))
        }
        else {
            setTimeout(function () {
                let fileName = url.split('/').pop()
                resolve(fileName)
            }, 3000)
        }
    })
}

function resize(fileName){
    return new Promise(function(resolve, reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("This file is not a png file"))
        }
        else{
            setTimeout(function(){
                let resizedFile = fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}

function upload(resizedFile){
    return new Promise(function(resolve, reject){
        console.log("Uploading started, file name: "+resizedFile)
        setTimeout(function(){
            let uploadingUrl = "http://imgur.com/"+ resizedFile
            resolve(uploadingUrl)
        },3000)
    })
}

downloadFile("http://google.com/tiger.png")
.then(resize)
// .then(function(resizedFile){
//     console.log("Resized file is: "+resizedFile)
// })
.then(upload)
.then(function(uploadingUrl){
    console.log("File was uploaded to: "+uploadingUrl)
})
.catch(function(err){
    console.error(err)
})

// single catch function catches all errors in the chain