// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.


// Input: root = [4,2,5,1,3], k = 3
// Output: 3
// Explanation: The 3rd smallest value in the tree is 3.
//
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
// Explanation: The 3rd smallest value in the tree is 3.


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Explanation: The 1st smallest value in the tree is 1.




var kthSmallest = function(root, k) {
    let stack = [];
    let count = 0;
    let node = root;
    while(node || stack.length) {
        while(node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        count++;
        if(count === k) {
            return node.val;
        }
        node = node.right;
    }
};


