// Given a deck of cards, the task is to shuffle them.

// 1. First, fill the array with the values in order.
// 2. Go through the array and exchange each element 
//    with the randomly chosen element in the range 
//    from itself to the end.

// It is possible that an element will be swap
// with itself, but there is no problem with that


// input :[0, 1, 2, 3, 4, 5, 6, 7, 8,
//     9, 10, 11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20, 21, 22, 
//     23, 24, 25, 26, 27, 28, 29,
//     30, 31, 32, 33, 34, 35, 36,
//     37, 38, 39, 40, 41, 42, 43, 
//     44, 45, 46, 47, 48, 49, 50,
//     51]


// Output:
// 29 27 20 23 26 21 35 51 15 18 46 32 33 19 
// 24 30 3 45 40 34 16 11 36 50 17 10 7 5 4 
// 39 6 47 38 28 13 44 49 1 8 42 43 48 0 12 
// 37 41 25 2 31 14 22

var shuffle = function(card, n) {
    let res = [];
    for(let i = 0; i < n; i++){
        res.push(card[i]);
    }
    for(let i = 0; i < n; i++){
        let j = Math.floor(Math.random() * (n - i));
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
    }
    return res;
}

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 
    23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 
    44, 45, 46, 47, 48, 49, 50,
    51]


console.log(shuffle(a, 52));




// public static void shuffle(int []card, 
//     int n)
// {

// Random rand = new Random();

// for (int i = 0; i < n; i++)
// {

// // Random for remaining positions.
// int r = i + rand.Next(52 - i);

// //swapping the elements
// int temp = card[r];
// card[r] = card[i];
// card[i] = temp;

// }
// }

   

    









    