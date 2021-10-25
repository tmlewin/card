// console.log('yoo!!!');


// alert('Hello this is Thomas');

// Variables

// var b = 'smoothie';
// console.log(b);

// var y = 45;
// console.log(y);


/// Manipulation of DOM elements

// var info = prompt('What is your Bio-Data');
//  document.getElementById('someText').innerHTML = info;


 //// Numbers in Javascript


 // Increment or dedecrement by any number
// var num1 = 10;
// num1 += 5;

// console.log(num1);

// // Functions 

// function fun(){

//     console.log('Hi');
// }
// fun();

// Creat a function that takes an name and returns hello folowed by your name

/** function greeting(yourName){
   
   document.getElementById('someText').innerHTML = yourName;
    //console.log(result);


}
var name = prompt('What is your name');
greeting(name);

// Function have arguments 

function yourNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
yourNumbers(4, 2);

**/


// Loops in next video 

//while loops

/** var num = 0;

while(num < 100){
    num += 1;
    console.log(num);


}
**/

// For loops

/**for(let i = 0; i <= 100; i++){
    console.log(i);


}
**/

// Data Types

// let ages = 18; // Numbers
// let name = 'Bob'; // string
// let bio = {First:'Kelvin', Last : 'Jones', Age: 18}; // Object aka diictionary
// let truth = true; // boolean
// let basket = ['Apple', 'Orange', 'Mango', 'Guava']; // Array
// let reason; // Undefined
// let nothing = null; // null 

// strings

// let fruit = 'banana,orange,apple';
// console.log(fruit.length -2);
// console.log(fruit.indexOf('na'));// indexof requires string position for matching sting
// console.log(fruit.slice(3, 5));// slice is a range from index pposition 0 to x.....
// console.log(fruit.replace('ban', '123'));// replace
// console.log(fruit.toUpperCase());// toUpper
// console.log(fruit.charAt(2));//
// console.log(fruit.split('')); // To split string to Array
// console.log(fruit.split(',')); //To split by comma to Array


// Arrays   

// let fruits = ['Apple', 'Banana', 'Orange', 'pineapple']; // array
// fruits = new Array('Banana', 'Orange', 'Apple', 'pineapple'); // array by creating a new array object
// console.log(fruits[2]);
// fruits[0] = 'Pear';
// console.log(fruits);
// console.log(fruits.length);

// // loop
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// // Array methods

// console.log('To string' , fruits.toString());  // convert array to strings
// console.log(fruits.join(' * ')); // Toadd the asterix or append it to array elements
// console.log( fruits.pop(), fruits); // To remove the  last item  at the end of an array list
// console.log(fruits.push('Blackberries'), fruits); // To append an item to the array list
// console.log(fruits.length[4]);
// fruits[fruits.length] = 'new fruit'; // same as push()
// console.log(fruits);
// fruits.shift(); //removes first item to array
// console.log(fruits);
// fruits.unshift('kiwi'); // Adds fisrt item to the list or array
// console.log(fruits);

// let vegetables = ['Brocolli', 'spinach', 'lettuce'];
// let allveg = fruits.concat(vegetables);
// console.log(allveg);
// console.log(allveg.slice(1, 4));// Slice off item from that range
// console.log(allveg.reverse()); // reverse
// console.log(allveg.sort()); // sort



// let numbers = [28,25,34,78,22,29,56,74,89,300,229,500];
// console.log(numbers);
// console.log(numbers.sort(function srt(a, b){ return a - b ;})); // sorted item in asc

// // loops in array of

// let empArray = new Array();

// for(let num = 0; num <= 10; num++){
//     empArray.push(num);
   


// }
// console.log(empArray);




// // Dictionary aka Objects

// let student = {
//     First: 'Eugene', 
//     Last: 'Blake', 
//     Age: 32,
//     Height: 180,
//     StudentInfo : function (){
//         return this.First + '\n' + this.Last }
//     };
// // console.log(student.First);
// // console.log(student.Last);
// console.log(student.Age);
// console.log(student.StudentInfo());


// // Conditionals , Control flow
// // Let us Check age demographics from an Input between age of 18 -34

// var age = 45;

// if ( (age >=18)  && (age <= 34) ){
//     status = 'My Target Audience';
//     console.log(status);
// }
// else{
//     status = 'Not My Target Audience';
//     console.log(status);
// }


// // Switch statement 
// //  differentiate between weekdays and weekends

// switch (6){
//     case 0:
//         text = 'Weekday';
//         break;
//     case  4:
//         text = 'Weekday';
//         break;
//     case 5:
//         text = 'Weekday';
//         break;
//     case 6:
//         text = 'Weekend';
//         break;
//     default:
//         text = 'Weekday';
//         break;


// }
// console.log(text);

// let students =  `[
//     {
//         "name" : "John",
//         "age" : 26,
//         "height" : 170
//     },

//     {
//         "name" : "Smith",
//         "age" : 25,
//         "height" : 174

//     }
// ]`
// console.log(JSON.parse(students));
// console.log('Age:', JSON.parse(students)[1].height);





// let arr =[1,2,3,4,5,6,7,8,9,10,10.5,11.5]
// let empArray = []

// let n = arr.length


// const average = arr=> Math.round(arr.reduce((a,b)=> a + b, 0)/n)
// let output = average(arr)
// for(let i = 0; i < arr.length; i++){
//     if(output < arr[i]){
//         empArray.push(arr[i])

//     }
    
// }

// console.log(empArray)


// let arrs = [1,3,6,14,20,21,65,75,82,102,130,145,175]
// value1 = 145
// value2 = 77

// const search = (arr,val)=>{
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//         let middle = Math.round((start + end) /2)
//         if(arr[middle] == val){
//             return `The value of ${arr[middle]} is at index of ${middle}`
//         }else if(arr[middle] < val){
//             start = middle + 1

//         }else if(arr[middle] > val){
//             end = middle - 1
//         }

//     }
//     return false
// }
// console.log(search(arrs,value1))
// console.log(search(arrs,value2))


// obj srt = Object

// const value = {
//     a: 1,
//     b: 2
// }

// newobj = {}

// const sort = (obj,key)=>{
//     for(let val in obj){
//         if(val !== key){
//             newobj[val] = obj[val]
//         }
        
//     }
//   return newobj
    
// }

// console.log(sort(value, 'a'))



// remove duplicates



// let arrs = [23,5,5,6,7,7,8,4,4,4,10,10]



// const removeDup = (arr)=>{
//     let emp = []
//     for(let i=0; i < arr.length; i++){
//         if(!emp.includes(arr[i])){
//             emp.push(arr[i])
//         }
//     }
//     return emp
// }
// console.log(removeDup(arrs))

// let arrs = [1,2,3,4,5,6,7,8,9,10]


// max min
// function maxmin(arrs) {
//     let start = arrs[0]
// for(let i = arrs.length -1 ; i >= 0; i--){
//     if (arrs[i] < start ){
//         start = arrs[i]
//     }

   


// }
// return start

// }
// console.log(maxmin(arrs))


// reverse function


// const reverse = (arr)=>{
//     for(let i = arr.length - 1; i >= 0; i--){
//         console.log(arr[i]) 
//     }
// }

// reverse(arrs)


// bubble sort
// let array = [3,43,42,1,4,5,2,57]

// const burbleSort = (arr)=>{

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] =  arr[j + 1]
//                 arr[j + 1] = temp

                

//             }
//     }
    
// }
// return arr
// }
// console.log(burbleSort(array))




// crazy array

// let crazyArray =[
//     'Elon Musk',
//     'BootCamp',
//     3,
//     5,
//     {a: 2, b: 8},
//     '#',
//     {language:'Japanse', greeting: '#'},
//     767,
//     34,
//     '#', 
//     ['Tomato','#','Pineapple'],
//     {sports: '#'}
// ]


// for (let i = 0; i < crazyArray.length; i++) {
//     if (crazyArray[i] == "#"){
//          crazyArray[i] = "Cool"
//     }

// for(let j = 0; j < crazyArray[i].length; j++){
//     if(crazyArray[i][j] == "#"){
//        crazyArray[i][j] = "Boom"
//     }

  

    

// }
// if(typeof object){
//     Object.keys(crazyArray[i]).forEach((key)=>{
//         if(crazyArray[i][key] == "#"){
//             crazyArray[i][key] = "Hash"
//         }
//     })
// }

// }

// console.log(crazyArray)








// calculateDaysBetweenDates


// const calculateDaysBetweenDates = (date1, date2) => {
//     let date1 = new Date(date1)
//     let date2 = new Date(date2)
//     let diff = Math.abs(date1 - date2)
//     let days = Math.floor(diff / (1000 * 60 * 60 * 24))
//     return days
// }
























































