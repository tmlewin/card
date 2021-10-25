let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]

value1 = 14
value2 = 66

const recursiveSearcher =(val,arr) =>{
    let middle = Math.round((arr.length) /2)
    //console.log(arr.slice(0,middle))
    if(arr.length === 1 && arr[0] !== val){
        return false

    }
    if(val === arr[middle]){
        return `${arr[middle]} is the matching number at index ${middle}`

    }
    
    else if(val < arr[middle]){
        return recursiveSearcher(val, arr.slice(0, middle))

    }else if(val > arr[middle]){
        return recursiveSearcher(val, arr.slice(middle))

    }
}
console.log(recursiveSearcher(value1, arrs))
console.log(recursiveSearcher(value2, arrs))