// class Stack{
//     constructor(){
//         this.item = []
//         this.size = 0
//     }
//     push(element) {
//         this.item[this.size] = element
//         this.size = this.size + 1
//     }
//     unShift(element){
//         for(let i = this.item.length - 1; i >= 0; i--){
//             this.item[i + 1] = this.item[i]
//         }
//         this.item[0] = element
//         this.size +=1
//     }

//     pop(){
//         this.item.pop()
//         this.size = this.size - 1
//     }
//     isEmpty(){
//         if(this.size == 0){ 
//             return 'Empty'
//         }else{
//             return this.item.length
//         }

//     }
//     peek(){
//         return this.item[0]
//     }
//     length(){
//         return this.size
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// let l = new Stack()
// l.push(1)
// l.push(2)
// l.push('hello')
// l.unShift('hi')
// l.print()
// console.log(l.peek())

// solve the stair case issue with


// const stairCase = (n)=> {
//     for (let i=0; i < n; i++){
//         let stair = ' '
//         for (let j = 0; j < n; j++){
//             if(j <= i){
//                 stair+= "#"
//             }else{
//                 stair+= ' '
//             }
            
//         }
        
//         console.log(stair)
//     }
    
// }
// stairCase(9)

// queues


// class Queue {
//     constructor(){
//         this.item = []
//         this.size = 0

        
//     }

//     enqueue(item){
//         this.item.push(item);
//         this.size++
//     }

//     dequeue(){
//         this.item.shift()
//         this.size--
//     }

//     length(){
//         return this.size
//     }
//     getLast() {
//       let end = this.item.length - 1
//       return this.item[end]
        
//       }

//     print(){
//         console.log(this.item)
//     }

    

   
// }

// let l = new Queue()
// l.enqueue(10)
// l.enqueue(20)
// l.enqueue(30)
// console.log(l.getLast())

// l.print()






//repeaqt name 10 timestamp


// function repeat(str,num) {
//     if(num == 0){
//         return str
//     }else{
//         return str + '\n'+ repeat(str,num - 1) 
//     }
// }

// console.log(repeat('John Wick ', 10))


// linked list

// class Node{
//     constructor(element){
//         this.element = element
//         this.next = null
//     }
//     // build helper functions

//     getNext(){
//         return this.next
//     }
//     setNext(n){
//         return this.next = n
//     }

//     getData(){
//         return this.element
//     }


// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     append(element){
//         let node = new Node(element)

//         if(!this.head  || !this.tail){
//             this.head = node
//             this.tail = node
//             this.size += 1
//         }else{
//             this.tail.next = node
//             this.tail = node
//             this.size += 1
//         }


//     }

//     prepend(element){
//         let node = new Node(element)
//         if(!this.head || !this.tail){
//             this.head = node
//             this.tail = node
//             this.size += 1
//         }else{
//             node.next = this.head
//             this.head = node
//             this.size += 1
//         }
//     }

//     find(value){
//         let current = 0
//         current = this.head

//         while(current != null){
//             if(current.element === value){
//                 return true
//             }else{
//                 current = current.next
//             }
//         }
//         return false

//     }

//     reverse(){
//         let next = null
//         let prev = null

//         let current = this.head
//         while(current != null){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next

//         }

//         return prev

//     }

//     print(){
//         let current = this.head
//         while(current != null){
//             console.log(current.element)
//             current = current.next
//         }

//     }

//    remove(element){
//        let temp 
//        let previousNode
//        if(!this.head){
//            return
//        }
//        if(this.head.getData() === element){
//            this.head = this.head.getNext()
//            return


//        }
//        previousNode = this.head
//        temp = this.head.getNext()
//        while(temp){
//            if(temp.getData() !==  element){
//                previousNode = temp
//                temp = temp.getNext()
//            }else{
//                previousNode.setNext(temp.getNext())
//                break
//            }
//        }
//    }



// }

// let lk = new LinkedList()
// lk.append("how")
// lk.append("are")
// lk.append("you")
// lk.prepend("hi")
// lk.remove("hi")

// lk.print()
// console.log(JSON.stringify(lk.reverse()))



// double linked list

class Node{
    constructor(element){
        this.element = element
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(element){
        let node = new Node(element)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length += 1
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
        this.length += 1
        return this


    }
    pop(){
        if(!this.length){
            return null
        }else{
            const  nodeToRemove = this.tail
            if(this.length === 1){
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
            let nodeToRemove = this.tail
            if(this.length === 1){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
                nodeToRemove.prev = null
            }
        }
        this.length -= 1
        return nodeToRemove

    }

    print(){
        let current = this.head
        while(current != null){
            console.log(current.element)
            current = current.next
        }
    }
}


let dbl = new DoubleLinkedList()
dbl.push("how")
dbl.push("are")
dbl.push("you")
dbl.unShift("hi")
dbl.pop()
dbl.print()


