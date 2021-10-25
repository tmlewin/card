// Build your stack class here.
class Stack {
    constructor(){
        this.array = []
        this.size = 0
        
    }
    push(val){
        this.array[this.size] = val
        this.size = this.size + 1
    }
    pop(){
        if(this.isEmpty()){
            return  true
        }
        let last = this.array[this.size -1]
        this.array.splice(-1,[0])
        this.size = this.size - 1
        return last

    }
    peek() {
        return this.array[this.size - 1]
      }

    clear(){
        return this.array = []
    }
    isEmpty(){
        if(this.size == 0){
            return true

        }
        return false
    }
}

export default Stack;
