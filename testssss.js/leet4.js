// create a function that Sort an array with the failing grades at the beginning in ascending order, followed by the passing grades(order doesn't matter in passing grades) 


function sortArray(array) {
    let passing = [];
    let failing = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 50) {
            passing.push(array[i]);
        } else {
            failing.push(array[i]);
        }
    }
    return [failing.sort(( a ,b)=>{ return a - b}), ...passing];
}


console.log(sortArray([37, 65, 97, 86, 68, 62, 70, 92, 83, 72, 51, 44, 55, 76, 81, 64, 53, 58, 87, 73, 89, 95, 75, 48, 94, 98, 93, 88, 84, 79, 96, 100, 74, 59, 66, 54, 90, 82, 69, 56, 60, 52, 49, 63, 71, 78, 85, 91, 99, 57, 61, 77, 80, 67, 46, 45, 43, 42, 41, 40, 39, 38, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));


