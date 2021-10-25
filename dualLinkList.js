class Node {
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print(){
        let current = this.head;
        while (current != null) {
            console.log(current.element)
            current = current.next
            
        }
    }
    push(element){
        let node = new Node(element)
        if(!this.head){
            this.head = node;
            this.tail = node
        }else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }
    unShift(element){
        let node = new Node(element)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }
    pop(){
        //check if lenght is empty
        if(!this.length){
            return null
        }else {
            // Create A placeHolder variable to store the tail to be removed

            const nodeToRemove = this.tail
            if(this.length === 1){
                //  reset tail and head
                this.head = null
                this.tail = null
                
            }else{
                this.tail = this.tail.prev


                this.tail.next = null


                nodeToRemove.prev = null
            }
            this.length -= 1
            return nodeToRemove
        }
        
    }
    shift(){
        if(!this.length){
            return null
        }else{
            const nodeToRemove = this.head

            if(this.length === 1){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
                nodeToRemove.prev = null
            }
            this.length -=1
            return nodeToRemove
        }
    }
}

let dlls = new LinkedList()
dlls.push('How')
dlls.push('are')
dlls.push('you')
dlls.push('today')
dlls.unShift('Hi')
dlls.shift()
//dlls.pop()
dlls.print()