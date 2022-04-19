// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.


// @lc code=start
/**
 * Definition for a binary tree node.
    * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    if(!root) {
        return null;
    }
    let res = new TreeNode(0);
    let cur = res;
    function inorder(root) {
        if(!root) {
            return;
        }
        inorder(root.left);
        cur.right = new TreeNode(root.val);
        cur = cur.right;
        inorder(root.right);
    }
    inorder(root);
    return res.right;
};
// @lc code=end
 

