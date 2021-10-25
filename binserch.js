let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]
value1 = 145
value2 = 77

const srch = (val,arr) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.round((start + end) /2)
        if(val === arr[middle]){
            return `The matching value of ${arr[middle]} is at index of ${middle}`
        }else if(val > arr[middle]){
            start = middle + 1
        }else {
            end = middle - 1
        }
    }
    return false
}

console.log(srch(value1,arrs))
console.log(srch(value2,arrs))