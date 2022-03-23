// in javascript let has block scope whereas var has function scope only
function varTest() {
    var x = 1;
    {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}
// similarly, const also has block scope


// Just for sake ;)
// let myPromise = new Promise(function (myResolve, myReject) {
//     let x = 90;

//     // some code (try to change x to 5)

//     if (x == 0) {
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function () {console.log("good") },
//     function () {console.log("not good")}
// );
