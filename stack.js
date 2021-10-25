// class Stack {
//     constructor(){
//         this.item = []
        
//         this.size = 0
//     }
//     push(element){
        
//         this.item[this.size] = element
//         this.size = this.size + 1
//     }


//     unShift(element){
//         //this.item.unshift(element)
//         //this.item[this.size] = element
//         //this.size = this.size + 1
//         for(let i = this.item.length - 1; i >= 0; i--){
//             // so index + 1 create a ndew index and shift the latest index to the new position
//             this.item[i + 1] = this.item[i]
            

//         }
//         this.item[0] = element
//         this.size += 1
       
//     }



//     // unShift(element){
//     //     this.item.unshift(element)
//     //     this.size += 1

//     // }
//     peek(){
//         return this.item[0]
//     }
//     pop(){
//         if(this.item.lenght == 0){
//             return 'empty'

//         }
        
//        this.item.pop()
//        this.size--
        
//     }
//     lenght(){
//         return this.size
//     }
//     isEmpty(){
//        if(this.size == 0){
//            return 'empty'
//        }else{
//         return 'Note empty size is :' + this.item.length 
//        }
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// let l = new Stack()
// l.push(1)
// l.push(2)
// l.push('hello')
// l.print()
// console.log(l.peek())

//const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;


// let arr = [1,2,3,4,5];
// let emp = []
// const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length
 
// let output = average(arr)

// for(let i = 0; i < arr.length; i++){
//     if(output < arr[i]){
//         emp.push(arr[i])
//     }
// }

// console.log(emp)


// let arr = [1,2,4,5,8,9,10]

// let average = arr=>arr.reduce((a,b)=>a + b , 0) / arr.length

// console.log(average(arr))

// let arr = [1,2,4,5,8,9,10]
// let emp = []
// let n = arr.length

// const average = arr=>arr.reduce((a,b)=> a + b, 0)/n

// let output = average(arr)

// for (let i = 0; i < arr.length; i++){
//     if(output <  arr[i]){
//         emp.push(arr[i])
       

//     }
    
// }

// console.log(emp)

// class Stack {
//     constructor(){
//         this.item = []
//         this.size = 0
//     }
//     push(element){
//         this.item[this.size]= element
//         this.size += 1
//     }
//     unshift(element){
//         for(let i = this.item.length - 1; i >= 0; i--){
//             this.item[i + 1] = this.item[i]

            
//         }
//         this.item[0] = element
//         this.size = this.size + 1

//     }
//     peek() {
//         return this.item[0]
//     }

//     length(){
//         if(this.size == 0){
//             return 'empty'
//         }else{
//             return this.size
//         }
//     }

//     pop(){
//         if(this.item.length == 0){
//             return 'empty'

//         }else{
//             this.item.pop()
//             this.size = this.size - 1

//         }


//     }

//     print(){
//         console.log(this.item)
//     }
   

// }

// let  stck = new Stack()
// stck.push("orange")
// stck.push("mango")
// stck.push("apple")

// // stck.pop()

// stck.print()

// console.log(stck.peek())

// solve the stair case issue with

