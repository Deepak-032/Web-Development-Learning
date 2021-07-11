function downloadFile(url, downloaded){
    // we are downloading the file here
    // let's assume it takes 3 sec to download
    // we use setTimeout to generate fake delay

    console.log("Downloading file from: " +url)

    setTimeout(function(){
        let filePath = "C:\\windows\\xyz.txt"
        console.log("File was downloaded to: " + filePath)
        downloaded(filePath)
        resizeFile(filePath , function(path){
            console.log("Resized file: " + path)
        })
    },3000)
}

function resizeFile(filePath, resized){
    // we are resizing the file. It takes 2 sec

    console.log("Resizing the file: " + filePath)
    setTimeout(function(){
        let newPath = filePath.split(".")[0] + "-resized." + filePath.split(".")[1]
        console.log()
        resized(newPath)
    }, 2000)
} 

downloadFile("http://google.com/logo", function(path){
    console.log("We got the file at: " + path)
})

// resizeFile("C:\\windows\\xysz.txt", function(path){
//     console.log("Resized file: " + path)
// })