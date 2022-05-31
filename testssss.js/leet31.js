// Write function for bubblesort and how to identify a palindrome?


 function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function isPalindrome(str) {
    let arr = str.split('');
    arr = bubbleSort(arr);
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result === str;
}






// test
console.log(isPalindrome('racecar'));
console.log(isPalindrome('racecars'));
console.log(isPalindrome('racecarss'));
console.log(isPalindrome('race'));
