class Node {
    constructor(element) {
        this.element = element
        this.next = null
        
    }
    // Create helper functions for fetching next node reference, fetch data and set next node in the node
// fetch next node reference
getNext() {
    return this.next

}

// set nextnode in the node reference where = node

setNext(n) {
    this.next = n

}

// fetch Data

getData() {
    return this.element
}


}








class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(element){
        let node = new Node(element)
        if(!this.head || !this.tail){
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
        if(!this.head || !this.tail){
            this.head = node
            this.tail = node
            this.size += 1
        }else{
            node.next = this.head
            this.head = node
            this.size += 1
        }

    }
    find(value){
        let current = 0;
        current = this.head
        while(current != null){
            if(current.element === value){
                return true
            }else{
                current = current.next
            }
        }
        return false

    }

  
    // solving Algo O(n)

    reverse(){
        let prev  = null
        let next = null
        let current = this.head
        while(current  !== null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev

    }
    print(){
        let current = this.head
        while(current !== null){
            console.log(current.element)
            current = current.next
        }
    }



   remove(element) {
        let temp;
        let previousNode;
        if (!this.head) {
            return;
        }
        if (this.head.getData() === element) {
            this.head = this.head.getNext();
            return;
        }
        previousNode = this.head;
        temp = this.head.getNext();
        while(temp) {
            if (temp.getData() !== element) {
                previousNode = temp;
                temp = temp.getNext();
            } else {
                previousNode.setNext(temp.getNext());
                break;
            }
        }
    }
    
    //Split the  linked list given a pivot value
    split(pivot) {
        let current = this.head;
        let beforePivot = new LinkedList();
        let afterPivot = new LinkedList();
        while(current) {
            if(current.element < pivot) {
                beforePivot.append(current.element);
            } else {
                afterPivot.append(current.element);
            }
            current = current.next;
        }
        return [beforePivot, afterPivot];
    }

    //Find the middle of a linked list. Now do it while only going through the list once.
    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    
    

}
let move  = new LinkedList()
move.append('how')
move.append('are')
move.append('you')
move.append('today')

// move.append('today')
// move.append('Daniel')
//move.remove('today')

move.print()

//console.log(move)
//console.log(move.remove('you'))


move.reverse()

// console.log(move.find('are'))



