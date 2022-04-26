// create a merge sorting function without extra space.


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
   
    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
        
    }
    return result.concat(left, right);
}


console.log(mergeSort([989, 612, 589,
    856, 56, 945, 243]));















