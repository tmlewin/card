//append,prepend,find,print,remove,revers

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
    getNext(){
        return this.next
    }
    setNext(n){
        this.next = n;
    }
    getData(){
        return this.element
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(element){
        let node = new Node(element);
        if(!this.head  || !this.tail){
            this.head = node
            this.tail = node
            this.size += 1
        }else{
            this.tail.next = node
            this.tail = node
            this.size += 1
        }
    }
    prepend(element){
        let node = new Node(element)
        if(!this.head  || !this.tail){
            this.head = node
            this.tail = node
            this.size += 1
        }else{
            node.next = this.head
            this.head = node
            this.size += 1
        }
    }
    reverse(){
        let next = null 
        let prev = null
        let current = this.head
        while(current !== null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev 
        
    }

    
    print(){
        let current = 0
        current = this.head
        while(current != null){
            console.log(current.element)
            current = current.next
        }
    }
    find(element){
        let current = this.head
        while(current != null){
            if(current.element === element){
               return true
            }else{
                current = current.getNext()
            }
        }
        return false
    }
    remove(value){
        let temp
        let previousNode
        if(!this.head){
            return;
        }
        if(this.head.getData() === value){
            this.head = this.head.getNext()
            return


        }
        previousNode = this.head
        temp = this.head.getNext()
        while(temp){
            if(temp.getData() != value){
                previousNode = temp
                temp = temp.getNext()
            }else {
                previousNode.setNext(temp.getNext())
                break
            }
        }

    }
}

let move  = new LinkedList()
move.append('how')
move.append('are')
move.append('you')
move.append('today')
move.find('you')
//move.remove('today')
//console.log(move.reverse())


move.print()
//console.log(move.find('are'))



