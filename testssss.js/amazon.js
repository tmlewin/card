// function maxProducts(numProducts) {
//     let max = 0;
//     let sum = 0;
//     for (let i = 0; i < numProducts.length; i++) {
//         sum += numProducts[i];
//     }
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < numProducts.length; i++) {
//         right += numProducts[i];
//         max = Math.max(max, right);
//         if (right > sum - right) {
//             right = 0;
//         }
//     }
//     return max + 1;
// }