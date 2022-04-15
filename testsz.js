// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.


// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]


// Example 2:


// Input: root = [4,2,7,1,3,6,9], val = 6
// Output: [6,null,9]






// Constraints:


// The number of nodes in the tree is in the range [1, 105].
// -105 <= Node.val <= 105
// All Node.val are unique.
// root is a valid binary search tree.


// Solution 1:
// Time: O(n)
// Space: O(n)


var searchBST = function(root, val) {
    if(!root) {
        return null;
    }
    if(root.val === val) {
        return root;
    }
    if(root.val > val) {
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
};







