// let a = [3, 5, 9, 10, 9, 5, 2, 1, 12]
let a = [10, 9, 6, 4, 8, 10, 12, 10, 13, 14]
let round = 1, i

if (a[0] < a[1]) {
    for (i = 0; i < a.length - 1; i++) {

        if (a[i] < a[i + 1] && round == 1) {
            if (i + 2 == a.length) {
                console.log("THIS IS SEQUENCE")
                break
            }
            continue
        } else {
            round = 2
        }
        if (a[i] > a[i + 1] && round == 2) {
            if (i + 2 == a.length) {
                console.log("THIS IS SEQUENCE")
                break
            }
            continue
        } else {
            console.log("THIS IS NOT A SEQUENCE")
            break
        }

    }
} else {
    let a = [10, 9, 6, 4, 8, 10, 12, 10, 13, 14]
    for (i = 0; i < a.length - 1; i++) {

        if (a[i] > a[i + 1] && round == 1) {
            if (i + 2 == a.length) {
                console.log("THIS IS SEQUENCE")
                break
            }
            continue
        } else {
            round = 2
        }
        if (a[i] < a[i + 1] && round == 2) {
            if (i + 2 == a.length) {
                console.log("THIS IS SEQUENCE")
                break
            }
            continue
        } else {
            console.log("THIS IS NOT A SEQUENCE")
            break
        }

    }
}

