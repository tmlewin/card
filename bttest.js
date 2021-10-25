class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
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
    found(value){
        if(!this.root) return undefined
        let found = false
        let current = this.root
        while(current && !found){
            if (value < current.value) {
                current = current.left
                
            }else if(value > current.value){
                current = current.right
            }else{
                found = current
            }
        }
        if(!found)return undefined

        return true
    }
    remove(value){
        const deleteNode = (node,value) => {
            if(!node){
                return null
            }
            if(value == node.value){
                if(!node.left && !node.right){
                    return null
                }
                if(!node.left){
                    return node.right
                }
                if (!node.right) {
                    return node.left
                    
                }
                let temp = node.right
                while (!temp.left) {
                    temp = node.left
                    
                    
                }
                node.value = temp.value
                node.right = deleteNode(node.right,temp.value)
            }
            else if(node < node.value ){
                node.left = deleteNode(node.right,value)
                return node
            }else{
                node.right = deleteNode(node.right, value)
                return node

            }
        }
        this.root = deleteNode(this.root, value)
    }
}
let tree = new BinaryTree()

tree.insert(4);
  
tree.insert(6);
tree.insert(3);
tree.insert(2);
tree.insert(5);
tree.insert(9);
tree.remove(9)
console.log(tree)
console.log(tree.root)
//console.log(tree)