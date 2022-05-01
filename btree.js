class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
    this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(this.root === null){
            this.root = node
            return this

        }else{
            let current = this.root
            while(current){
                if(value === current.value)return undefined
                if(value < current.value){
                    if(current.left === null){
                        current.left = node
                        return this
                    }else{
                        current = current.left
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = node
                        return this
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }
printInOrder(){
    let result = []
    let current = this.root
    function traverse(node){
        if(node.left)traverse(node.left)
        result.push(node.value)
        if(node.right)traverse(node.right)
    }
    traverse(current)
    return result
}

printPreOrder(){
    let result = []
    let current = this.root
    function traverse(node){
        result.push(node.value)
        if(node.left)traverse(node.left)
        if(node.right)traverse(node.right)
    }
    traverse(current)
    return result
}


printPostOrder(){
    let result = []
    let current = this.root
    function traverse(node){
        if(node.left)traverse(node.left)
        if(node.right)traverse(node.right)
        result.push(node.value)
    }
    traverse(current)
    return result
}

//Implement a non-recursive PrintInOrder function
printInOrderNR(){
    let result = []
    let stack = []
    let current = this.root
    while(current || stack.length){
        while(current){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.value)
        current = current.right
    }
    return result
}



   find(value){
        let found = false
        let current = this.root
        while( current && !found){
            if (value <   current) {
                current = current.left
                
            }else if(value > current.right){
                current = current.left
            }else{
                found = current
            }
        }
        if(!found)return undefined
        return true 
    }
    }
    

let tree = new BinaryTree()
tree.insert(4);
  
tree.insert(6);
tree.insert(3);
tree.insert(2);
tree.insert(5);
tree.insert(9);
tree.printInOrder()
// tree.remove(2)
// tree.remove(5)
// console.log(JSON.stringify(tree));

console.log(tree)
console.log(tree.root)
