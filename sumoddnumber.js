let arrs = [1,4,2,5,3];


// formula for calculating sub arrays i + 1 * len - i /2 

const subArrays = (arr) => {
    let sum = 0;
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let subArrayLenghTotals = Math.round(((i + 1) * (len - i))/ 2)
        sum += arr[i] * subArrayLenghTotals

    }
    return sum
}
console.log(subArrays(arrs))