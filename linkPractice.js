class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
    getNext(){ 
        return this.next
    }
    setNext(n){
        this.next = n
    }
    getData(){
        return this.element
    }
}

// Declare the LinkedList Class

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    print(){
        let current = this.head
        while(current != null){
            console.log(current.element)
            current = current.next
        }
    }
    reverse(){
        let prev = null
        let next = null
        let current = this.head
        while(current !== null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev 
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
            this.size+=1

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
    find(val){
        let current = 0
        current = this.head
        
        
        while(current !== null){
            
            
           if (current.element === val) {
               return true
               
           }else{
           current = current.next
           }
          
        }
        return  false
        
    }
    remove(element){
        let temp;
        let previousNode
        if(!this.head){
            return;
        }
        if(this.head.getData() === element){
            this.head = this.head.getNext()
            return;
        }
        previousNode = this.head
        temp = this.head.getNext()
        while (temp) {
            if(temp.getData() !==  element){
                previousNode = temp
                temp = temp.getNext()
            }else {
                return previousNode.setNext(temp.getNext())
                break;
            }
            
        }
    }
  
    

}

   
  
    


let dt = new LinkedList()

dt.append('How')
dt.append('are')
dt.append('you')
dt.append('today')
dt.remove('today')
//console.log(dt.reverse())
//console.log(JSON.stringify(dt.reverse()))

dt.print()

