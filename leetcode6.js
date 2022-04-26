// Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
 

// Example 1:

// Input: 
// n = 4, arr1[] = [1 3 5 7] 
// m = 5, arr2[] = [0 2 6 8 9]
// Output: 
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]
// Explanation:
// After merging the two 
// non-decreasing arrays, we get, 
// 0 1 2 3 5 6 7 8 9.
// Example 2:

// Input: 
// n = 2, arr1[] = [10, 12] 
// m = 3, arr2[] = [5 18 20]
// Output: 
// arr1[] = [5 10]
// arr2[] = [12 18 20]
// Explanation:
// After merging two sorted arrays 
// we get 5 10 12 18 20.





const merge = (arr1, arr2, n,m) => {
    for(let i =0;i<n;i++){
        if(arr1[i]>arr2[0]){
            let temp = arr1[i];
             arr1[i] = arr2[0];
             arr2[0] = temp;
                for(let j = 1;j<m;j++){
                    if(arr2[j]<arr2[j-1]){
                        let temp = arr2[j];
                        arr2[j] = arr2[j-1];
                        arr2[j-1] = temp;
                    }






                }
        }
    }
    return arr1.concat(arr2);
}


//[arr1,arr2]


























         
  
        

console.log(merge([1,3,5,7], [0,2,6,8,9], 4,5));












