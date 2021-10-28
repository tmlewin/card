// function for balanced brackets and parenthesis in a string


// function balancedBrackets(str) {
//     var stack = [];
//     var brackets = {
//         '{': '}',
//         '[': ']',
//         '(': ')'
//     };
//     for (var i = 0; i < str.length; i++) {
//         var ch = str[i];
//         if (brackets[ch]) {
//             stack.push(ch);
//         } else if (brackets[stack.pop()] !== ch) {
//             return false;
//         }
//     }
//     return stack.length === 0;
// }

// console.log(balancedBrackets('{[()]}'));
// console.log(balancedBrackets('{[(])}'));


// create a unit test function for balancedBrackets function
// function testBalancedBrackets(str, expected) {
//     var result = balancedBrackets(str);
//     if (result === expected) {
//         console.log('passed');
//     } else {
//         console.log('failed');
//     }
// }


// testBalancedBrackets('{[()]}', true);
// testBalancedBrackets('{[(])}', false);



// let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]
// let value = 145


// const search = (arr, value)=>{
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//     let median = Math.round((start + end) /2)

//     if(arr[median] == value){
//     return `The value at an index of ${median} is equal to ${arr[median]}`
//     }else if(arr[median] < value){
//     start = median + 1
//     }else{

//     end = median - 1

//     }
// }
//     return false
    
// }


// console.log(search(arrs,value))



// class Stack {
//     constructor(element) {
//       this.element = element;
//       this.item = [];
//       this.size = 0;
//     }
//     // create push
//     push(element) {
//       this.item[this.size] = element;
//       this.size = this.size + 1;
//     }
    

//        unshift(element){
//         for(let i = this.item.length - 1; i >= 0; i--){
//             this.item[i + 1] = this.item[i]

            
//         }
//         this.item[0] = element
//         this.size++

//     }
//     print() {
//       console.log(this.item);
//     }
//   }
  
//   let lst = new Stack();
//   lst.push('How');
//   lst.push('are');
//   lst.push('you');
//   lst.unshift('thanks');
//   lst.print();
  













































































































































































































































































































