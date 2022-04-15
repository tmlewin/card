// Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

// Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.


// Example 1:


// Input:   root = [1,0,2], low = 1, high = 2
// Output: [1,null,2]
// Explanation: The original root node is [1,0,2], the output root node is [1,null,2]
// which represents the same tree.


// Example 2:




// Input:   root = [3,0,4,null,2,null,null,1], low = 1, high = 3
// Output: [3,2,null,1]
// Explanation: The original root node is [3,0,4,null,2,null,null,1], the output root node is [3,2,null,1]
// which represents the same tree.


var trimBST = function(root, low, high) {
    if(!root) {
        return null;
    }
    if(root.val < low) {
        return trimBST(root.right, low, high);
    }
    if(root.val > high) {
        return trimBST(root.left, low, high);
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};












