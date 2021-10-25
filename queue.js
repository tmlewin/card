
class Queue {
    constructor() {
      this.array = [];
      this.size = 0;
      this.rear = 0;
    }
  
    enqueue(num) {
      this.array.push(num);
      this.size++;
    }
  
    dequeue() {
      this.array.shift();
      this.size--;
    }
    length() {
      return this.size
    }
    isEmpty() {
       return  this.size == 0
    }
    getFront() {
     return this.array[0];
    }
    getLast() {
      let end = this.array.length - 1
      return this.array[end]
      
    }
    print() {
      console.log(this.array);
    }
  }

  let q = new Queue()
 
  q.enqueue(10)
  q.enqueue(12)
  q.enqueue(14)
  q.enqueue(13)
  q.enqueue(9)
  console.log(q.getLast())
  q.print()