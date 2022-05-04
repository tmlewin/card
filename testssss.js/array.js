// create a function that finds repeative integers in an array

const findRepeating = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       
        
        if (arr.indexOf(arr[i]) !== i) {

            result.push(arr[i]);
        }
    }
    return result;
}


 console.log(findRepeating([1, 5, 8, 2, 5, 4]))


//  Find the Missing Number in an Array of Integers
// You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write an efficient code to find the missing integer.

// /Modification for Overflow  

// Approach: The approach remains the same but there can be overflow if n is large. In order to avoid integer overflow, pick one number from known numbers and subtract one number from given numbers. This way there won’t have Integer Overflow ever.
// Algorithm: 
// Create a variable sum = 1 which will store the missing number and a counter variable c = 2.
// Traverse the array from start to end.
// Update the value of sum as sum = sum – array[i] + c and update c as c++.
// Print the missing number as a sum.


// a represents the array
// n : Number of elements in array a
function getMissingNo(a)
{
    let n = a.length;
    let i, total=1;
     
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total;
}
 
//Driver Program
    let x = [ 1, 2, 4, 5, 6 ];
    console.log(getMissingNo(x));


    //Returns the largest sum of contiguous integers in the array
// Example: if the input is (-10, 2, 3, -2, 0, 5, -15), the largest sum is 8


// Approach:
// 1. Find the maximum element in the array.
// 2. Find the maximum sum of a subarray with a given size.


// Algorithm:
// 1. Find the maximum element in the array.
// 2. Find the maximum sum of a subarray with a given size.


// a represents the array
// n : Number of elements in array a

// Explanation: 
// The simple idea of Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this). And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this). Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far 

//     Lets take the example:
//     {-2, -3, 4, -1, -2, 1, 5, -3}

function maxSubArraySum(a, size)
{
    let max_so_far = -Infinity;
    let max_ending_here = 0;
    let start = 0;
    let end = 0;
    let s = 0;
  
    let n = a.length;
    for (let i = 0; i < n; i++)
    {
        max_ending_here = max_ending_here + a[i];
        if (max_ending_here < 0)
        {
            max_ending_here = 0;
            s = i + 1;
        }
        if (max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }
    }
    return max_so_far;
}


// Driver Program
let a = [-10, 2, 3, -2, 0, 5, -15];
let n = a.length;

// let size = -3;
console.log(maxSubArraySum(a, n));


//time complexity O(n)
//space complexity O(1)

// Implement Shuffle given an array containing a deck of cards and the number of cards. Now make it O(n).


// Approach:
// 1. Create a new array of size n.
// 2. Traverse the given array and copy each element to the new array.
// 3. Shuffle the new array.
// 4. Copy the shuffled array to the given array.


// Algorithm:
// 1. Create a new array of size n.
// 2. Traverse the given array and copy each element to the new array.
// 3. Shuffle the new array.
// 4. Copy the shuffled array to the given array.


// arr represents the array
// num : Number of elements in array arr

function shuffle(arr, num)
{
    let newArr = [];
    for (let i = 0; i < num; i++)
    {
        newArr[i] = arr[i];
    }
    let n = arr.length;
    for (let i = 0; i < n; i++)
    {
        let r = Math.floor(Math.random() * n);
        let temp = newArr[i];
        newArr[i] = newArr[r];
        newArr[r] = temp;
    }
    for (let i = 0; i < num; i++)
    {
        arr[i] = newArr[i];
    }
}



// Driver Program
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 
    23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 
    44, 45, 46, 47, 48, 49, 50,
    51];
let num = arr.length;
shuffle(arr, num);
console.log(arr);


// Timecomplexity: O(n)
// Spacecomplexity: O(1)

// solution 2

// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}


// time complexity O(n)
// space complexity O(1)


// create a function that returns  the sum two largest integers in an array

function sumTwoLargest(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max1 + max2;
}

console.log(sumTwoLargest([12, 34, 10, 6, 40]));

// time complexity O(n)
// space complexity O(1)


// create a function that Sum n largest integers in an array of integers where every integer is between 0 and 9


function sumNlargest(arr, n) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let sum = 0;
    while (max > 0) {
        sum += max % 10;
        max = Math.floor(max / 10);
    }
    return sum;
}


console.log(sumNlargest([0,1,2,3,4,5,6,7,8,9,10], 2));


