let array = [3,43,42,1,4,5,2,57]

// const burbleSort = (arr)=>{
    
//     for(let j = 0; j < arr.length - 1 ; j++){

    
//     let minimum = arr[j]
//     let max_loc = j
//     for (let i=j; i<arr.length; i++){
//         if (arr[i] < minimum){
//             minimum = arr[i]
//             max_loc = i
//         }
//     }
//     // swap first with last ones
//     arr[max_loc] = arr[j]
//     arr[j] = minimum
// }
// return arr

// }
// console.log(burbleSort(array))

// second method

// const burbleSort = (arr)=>{
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }

//         }
//     }
//     return arr
// }
// console.log(burbleSort(array))