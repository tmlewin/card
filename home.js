//console.log('hello');
// alert('This is Thomas');

/**var age = prompt('How old are you?');
document.getElementById('someText').innerHTML = age;***/

// Numbers*************************
/** 
var num1 = 10;
num1 += 1;
console.log(num1);  **/


// Functions*******************************************

/** function fun(){

    alert('Hello there!!');
} **/
//fun();

// Create a Function that accepts input and returns a result

//function greetings(yourName){
   // let result = 'My name is' + '  ' + yourName;
  //  console.log(result);
   
//}
//let name = prompt('What is your name?');
//greetings(name);
//greetings();

/** 
function add(num1,num2){
    let sum = num1 + num2;
    console.log(sum);

} **/
//add(5,5);

//  While Loops ***************************************
/*
let num = 0;
while(num < 100){
    num += 1;
    console.log(num);
} */

// For loop **********************************************

/***for(let num = 0; num < 100; num++){
    alert(num);
    console.log(num);
   
}
***/

let fruit = 'Banana';
let fruits = ['Apple', 'Banana', 'Berry', 'Mango', 'lemon'];
fruits = new Array( 'Apple', 'Banana', 'Berry', 'Mango', 'lemon');
let moreFruit = 'Banana\nApple';

/**console.log(fruit.length -1);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(2,4)); **/
/**console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[2]);
console.log(fruit.charAt(2));
console.log(fruits.split(','));
console.log(fruit.replace('Ban', 'Dan'));**/
//console.log(fruits[2]);

for(let i = 0; i <fruits.length; i++) {

    console.log(fruits[i]);
   
}

console.log('To String' , fruits.toString());
console.log(fruit.indexOf('na'));
console.log(fruits.length -1);
console.log(fruits.join('_ '));
console.log(fruit.split(','));
console.log(fruits.pop(), fruits );
console.log(fruits.push('Blackberries'), fruits);
console.log(fruits.shift()); // removes first item while pop removes last item in an array
console.log(fruits.unshift('kiwi'));

//joining two seprate Arrays

let vegetables = ['Spinach', 'Carbage', 'Lettuce'];
let allVeg = fruits.concat(vegetables);
console.log(allVeg);
console.log(allVeg.slice(1, 4));
console.log(allVeg.reverse());
console.log(allVeg.sort()); // This is sort number of

let num = [1,2,3,5,56,78,4908,45,22,23,29,27,590];

/// in other to sort we need to write a function in the sort method to arrange it in ascending order

console.log(num.sort(function(a,b) { return a - b; })); // Ascending order

console.log(num.reverse(function(a,b) { return a - b; })); // Descending order thanks to the reverse method used...

let empArray = new Array();

for (let i = 0; i <= 10; i++) {
    empArray.push(i);
    console.log(empArray);



   // console.log(empArray.push(i)); // This is used to append the num,ber s from 0-9 in empty arra



}



/// Dealing with dictionaries

let student = {
    first:'John', 
    last:'Smith', 
    age:'24',
    gender:'Male',
    studentInfo: (student) => {
       return `${student.first} ${student.last}`
}

};

//console.log(student.first);
//console.log(student.last);
//student.first = 'notJohn';
//console.log(student.first);
console.log(student.studentInfo(student));

// Conditionals and control flow
//Below is an if-else statement

var age = 45;

if ((age >= 18) && (age <= 35))
{
    status ='Target Audience';
    console.log(status);
}
else
{
    status ='Not my target audience';
    console.log(status);
}


// Switch statement
//differentiate between weekday && weekend using switch

switch (2){
    case 0 :
        text = 'weekend';
        break;
    case 5 :
        text = 'weekend';
        break;
    case 6 :
        text = 'weekend';
        break;
    default : 
        text = 'weekday';



}
console.log(text);

