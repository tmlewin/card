class Node {
    constructor(element,next) {
        this.element = element
        this.next = next || null
        //this.prev = null;

    }
}


let node2 = new Node(2)
let node1  = new Node(1)
let node3 = new Node(3)

node1.next = node2
node2.next = node3
console.log(node1)