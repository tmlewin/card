let array1 = [1,2,3,4,5,6]
let array2 = [5,6,7,8,9,10]




    
        for (var i = array1.length - 1; i >= 0; i--) {
            for (var j = 0; j < array2.length; j++) {
              if (array1[i] === array2[j]) {
                array1.splice(i, 1)
                array2.splice(j, 1)
                
                
                
                }
                
              }
            }

            console.log(array1.concat(array2))
          

           




            




















 // var array1 = [1,2,3,4,5,6]
// var array2 = [5,6,7,8,9,10]
// var index;
// for (var i=0; i<array2.length; i++) {
//     index = array1.indexOf(array2[i]);
//     //console.log(index)
//     if (index > -1) {
//         array1.splice(index, 1);
       
//     }
    
// }

//  console.log( array1.concat(array2))









// function checkDuplicate(value) {
//     for (let i = 0; i < array1.length; i++){
//         for (let j = 0; j < array2.length; j++){
//             if (array1[i] == array2[j]){
//                 return false

//             }
//         }
//         return true
//     }

// }

// function getDuplicate(arr){
//     if(!checkDuplicate(arr)){
//         empArray.push(arr)
//     }
//     return empArray

// }


// console.log(getDuplicate())