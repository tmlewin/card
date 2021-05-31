let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]
value1 = 145
value2 = 77

const binarySearch = (arr,val)=>{
    let start = 0
    let end = arr.length - 1

    while (start <= end){
        let middle = Math.round((start + end) /2)
        if(arr[middle] == val){
            return middle

            

        }else if(arr[middle] < val){
            start = middle + 1
        }else{
            end = middle - 1
        }
        

    }
    return false
    

}
console.log(binarySearch(arrs,value1))
console.log(binarySearch(arrs,value2))