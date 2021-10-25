class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      var newNode = new Node(value);
  
      if (this.root === null) {
        // assign root
        this.root = newNode;
        return this;
      } else {
        var current = this.root;
  
        while (current) {
          // Mathing values 
          if (value === current.value) return undefined;
          if (value < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  
    find(value) {
      if (!this.root) return undefined;
      let found;
      let current;
      current = this.root;
  while (current && !found) {
        if(value < current.value)
        {
          current = current.left;
        }else 
        if(value > current.value)
        {
          current = current.right;
        }else
        {
         found = current;
        }
    }
   if (!found) return undefined;
  
      return true;
    }
    remove(value) {
      const deleteNode = (node, value) => {
        if (!node) {
          return null;
        }
    
        if(value == node.value) {
          if (!node.left && !node.right) {
            return null;
          }
    
          if (!node.left) {
            return node.right;
          }
    
          if (!node.right) {
            return node.left;
          }
    
          let temp = node.right;
    
          while(!temp.left) {
            temp = temp.left;
          }
    
          node.value = temp.value;
    
          node.right = deleteNode(node.right, temp.value);  
    
        } else if (value < node.value) {
          node.left = deleteNode(node.left, value);
          return node;
    
        } else {
          node.right = deleteNode(node.right, value);
          return node;
        }
      }
      this.root = deleteNode(this.root, value) 
    }
   
  }
  
  
  
  let tree = new BinarySearchTree();
  //console.log(JSON.stringify(tree));
  
  tree.insert(4);
  
  tree.insert(6);
  tree.insert(3);
  tree.insert(2);
  tree.insert(5);
  tree.insert(9);
  tree.remove(2)
  tree.remove(5)
 // console.log(JSON.stringify(tree));
  console.log(tree);
  console.log(tree.root);
  //console.log(tree.find(6));
  