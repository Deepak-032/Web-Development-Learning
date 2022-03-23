// let a = [20, 22, 4, 6, 7, 20, 4, 81, 0, 33, 4, 22, 20]
// let b = []
// for (let i = 0; i < a.length; i++) {
//     if(b.includes(a[i])){
//     } else {
//         b[i] = a[i]
//     }
// }
// console.log(b)

let product = {
    reviews: [
        { rating: 2 },
        { rating: 3 },
        { rating: 4 },
        { rating: 1 },
        { rating: 0 },
        { rating: 3.5 },
        { rating: 2.5 },
        { rating: 5 },
    ],
    ratings: 0
}

// let avg = 0
// product.reviews.forEach(rev => avg += rev.rating)
// product.ratings = avg / product.reviews.length

product.ratings = product.reviews.reduce((ratings, rev) => ratings + rev.rating, 0) / product.reviews.length

console.log(product.ratings)
