// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head){
      this.head = node
      this.tail = node

    }else{
      this.tail.next = node;
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
    
  }
  print() {
    let current = this.head
    while(current != null){
      console.log(current.value)
      current = current.next
     

    }
  }
  pop() {
    // if empty: return null
    if (!this.length) {
      return null;
    } else {
      // save current tail (to return it later)
      const nodeToRemove = this.tail;
    

      if (this.length === 1) {
        // after removing the only node, there will be no head and tail
        this.head = null;
        this.tail = null;
      } else {
        // set the node before the current tail as the new tail
        this.tail = this.tail.prev;
        // remove the connection from the new tail to the old tail
        this.tail.next = null;
        // remove the connection from the old tail to the new tail
        nodeToRemove.prev = null;
      }

      // decrease length by 1
      this.length -= 1;

      // return old tail
      return nodeToRemove;
    }
  }



  
  shift(){
    // if empty: return null
    if (!this.length) {
      return null;
    } else {
      // save current tail (to return it later)
      const nodeToRemove = this.head;
    

      if (this.length === 1) {
        // after removing the only node, there will be no head and tail
        this.head = null;
        this.tail = null;
      } else {
        // set the node before the current tail as the new tail
        this.head = this.head.next;
        // remove the connection from the new tail to the old tail
        this.head.previous = null;
        // remove the connection from the old tail to the new tail
        nodeToRemove.next = null;
      }

      // decrease length by 1
      this.length -= 1;

      // return old tail
      return nodeToRemove;
    }
  }


  // opposite  of push. it adds to the front
  unshift(value) {
    let node = new Node(value)
    if(!this.head){
      this.head = node
      this.tail = node
    }else{
      this.head.previous = node
      node.next = this.head
      this.head = node
    }
    this.lenght++
    return this

  }


  getNodeAtIndex(index) {
    if(index < 0 || index >= this.length){
      return null
    }
    if(index < Math.floor(this.lenght /2)){
      let current = this.head
      let counter = 0
      while(counter < index){
        current = current.next
        counter++
      }
      return current
    }else {
      let current = this.tail
      let counter = this.lenght -1 
      while(index > counter){
        current = current.prev
        counter--
      }
    
      return current
    }
  }
  setNodeAtIndex(index, value){
    if(!this.getNodeAtIndex(index)){
      return false
    }else{
      this.getNodeAtIndex(index).value = value
      return true
    }
  }
insertAtIndex(index,value){
  let node = new Node(val)
  if(index < 0 || index > this.length )
  return null
  if(index === 0)
  return this.unshift(val)
  if(index === this.length)
  return this.push(val)
  let previousNode = this.getNodeAtIndex(index - 1)
  let currentNode = previousNode.next
  node.next = currentNode
  currentNode.prev = node
  previousNode.next  = node
  node.prev = previousNode
  this.length++
  return this
}
removeAtIndex(index){
  if(index < 0 || index > this.length )
  return null
  if(index === 0)
  return this.shift(val)
  if(index === this.length - 1)
  return this.pop(val)
  let currentNode = this.getNodeAtIndex(index)
  currentNode.prev.next = currentNode.next
  currentNode.next.prev = currentNode.prev
  currentNode.next = null
  currentNode.prev  = null
 
  this.length--
  return this



}

}

// Tests
const list = new DoubleLinkedList();
list.push("Huskies");
list.push("are");
list.push("the");
list.push("best!");
list.unshift("The")
list.pop()


//list.shift();
//list.pop();
list.print()
