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
// tree.remove(2)
// tree.remove(5)
// console.log(JSON.stringify(tree));

console.log(tree)
console.log(tree.root)
