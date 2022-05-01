// You will be given an array of objects representing data about developers who have signed up to
// attend the next coding meetup that you are organizing.
// Given the following input array:
// var list1 = [
// { firstName: 'Aba', lastName: 'N.', country: 'Ghana', age: 21 },
// { firstName: 'Abb', lastName: 'O.', country: 'Israel', age: 39 }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers
// where if you add the ASCII representation of all characters in their first names, the result will
// be an odd number:
// [
// { firstName: 'Abb', lastName: 'O.', country: 'Israel', age: 39 }
// ]
// Explanation of the above:
//  Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
//  Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
// Notes:
//  Preserve the order of the original list.
//  Return an empty array [] if there is no developer with an "odd" name.
//  The input array and first names will always be valid and formatted as in the example above.
//  Help: str.charCodeAt(index)


 function findOddNames(list) {
    let oddNames = [];
    list.map(developer => {
        let sum = 0;
        developer.firstName.split('').map(letter => {
            sum += letter.charCodeAt(0);
        });
        if (sum % 2 !== 0) {
            oddNames.push(developer);
        }
    });
    return oddNames;
}

console.log(findOddNames([{ firstName: 'Aba', lastName: 'N.', country: 'Ghana', age: 21 }, { firstName: 'Abb', lastName: 'O.', country: 'nigeria', age: 39 }]));  



//create a test for findOddNames  function


// function testFindOddNames() {
//     var list1 = [
//         { firstName: 'Aba', lastName: 'N.', country: 'Ghana', age: 21 },
//         { firstName: 'Abb', lastName: 'O.', country: 'Niagara', age: 39 }
//     ];
//     var list2 = [
//         { firstName: 'Aba', lastName: 'N.', country: 'Ghana', age: 21 },
//         { firstName: 'Aba', lastName: 'P.', country: 'Nigeria', age: 27 }
//     ];

//     if (findOddNames(list1).length === 1 && findOddNames(list1)[0].firstName === 'Abb') {
//         console.log('Test 1 passed');
//     } else {
//         console.log('Test 1 failed');
//     }

//     if (findOddNames(list2).length === 0) {
//         console.log('Test 2 passed');
//     } else {
//         console.log('Test 2 failed');
//     }
// }


// testFindOddNames();










