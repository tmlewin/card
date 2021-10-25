let val = [1,2,3,4,5,6]
function sumArray(arr){
    
    if(arr.length == 0){
        return 0
    }else{
       
        return  arr.shift() +  sumArray(arr)
    }

}
console.log(sumArray(val))






// let val = [1,2,3,4,5,6]
// let vale = val.slice(1)
// console.log(vale, 'sliced')
// console.log(val , 'Vanilla')


//Example of string literals with embedded expression
// let searchItem = 0
// let output = `${searchItem > 0 ? `${searchItem}` : `No Results`}`
// console.log(output)

//Es6 style using embedded expression
  
// var sum = (array) =>{
//     return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
// }
// console.log(sum(val))
