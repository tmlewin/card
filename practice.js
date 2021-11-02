// let countDown = (num)=>{
//     console.log(num);
//     let count = num - 1
//     if(count > 0) {
//         countDown(count)

//     }
// }
//  countDown(10)

// Method 2

// let countDown = (num)=>{
//         console.log(num);
        
//         if(num < 1) {
//             return 0
// }else{
//     return setTimeout(()=>{
//         countDown(num - 1)

//     }, 1000) 
// }
// }
// countDown(10)


//  function fizzBuzz(num) {
//    for(let i = 0; i <= num; i++){
//        if(i % 3 == 0 && i % 5 == 0){
//            console.log('fizzbuzz')
//        }else if(i % 3 == 0){
//            console.log('fizz')
//        }else if(i % 5 == 0){
//            console.log('buzz')
//        }else{
//            console.log(i)
//        }
//    }
//     }

//     fizzBuzz(15)