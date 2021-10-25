let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]

value1 = 75
value2 = 66

const binsearch = (arr,val) =>{
    let min = 0
    let max = arr.length -1
    while (min <= max){
        let middle = Math.round((min + max) / 2)
        if(arr[middle] === val){
            return middle
        }else if(arr[middle] < val){
            min = middle + 1
        }else{
            max = middle - 1
        }
    }
    return false
}

console.log(binsearch(arrs,value1))
console.log(binsearch(arrs,value2))