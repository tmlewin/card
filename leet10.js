// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.


function solution(A) {
    let set = new Set();
    for (let i = 0; i < A.length; i++) {
        set.add(A[i]);
    }
    for (let i = 1; i < A.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return A.length + 1;
}


 console.log(solution([1, 2,3]));
   

