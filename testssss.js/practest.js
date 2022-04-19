// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:


// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]


// Constraints:


// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000
// All the values in the tree are unique.


//   3.
//   Time complexity: O(n)
//   Space complexity: O(n)

// create TreeNode class
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}






var convertBst = function(root) {
    let sum = 0;
    const helper = (node) => {
        if(!node) {
            return;
        }
        helper(node.right);
        sum += node.val;
        node.val = sum;
        helper(node.left);
    }
    helper(root);
    return root;
};


// create a test script for convertBst  function    

const testConvertBst = () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(1);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);
    root.left.left.left = new TreeNode(3);
    root.left.left.right = new TreeNode(null);
    root.left.right.left = new TreeNode(null);
    root.left.right.right = new TreeNode(8);
    root.right.left.left = new TreeNode(null);
    root.right.left.right = new TreeNode(null);
    root.right.right.left = new TreeNode(null);
    root.right.right.right = new TreeNode(null);
    const expected = [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8];
    const actual = convertBst(root);
    const actualArr = [];
    const expectedArr = [];
    const helper = (node) => {
        if(!node) {
            return;
        }
        actualArr.push(node.val);
        helper(node.right);
        helper(node.left);
    }
    helper(actual);
    const helper2 = (node) => {
        if(!node) {
            return;
        }
        expectedArr.push(node.val);
        helper2(node.right);
        helper2(node.left);
    }
    helper2(expected);
    console.log(actualArr);
    console.log(expectedArr);
    console.log(actualArr.toString() === expectedArr.toString());
    
}


testConvertBst();














































