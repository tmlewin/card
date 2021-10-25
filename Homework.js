//Day 5

// Variable is like container that stores , array, string , numbers, functions and objects

// Assignment Operators 
// =, += , -=, *=



//Map Returns a new array

// Method 1 vanilla js

// let food1 ="soup"
// let food2 = "beans"
// let food3 = "plantain"
// let food4 = "Burger"

// let myfavfood = [food1,food2,food3,food4]

//
// if(food1 == "plantain"){
//     let output = myfavfood[0]
//     console.log(output)

// }
// else if(food2 == "plantain"){
//     let output = myfavfood[1]
//     console.log(output)
// }
// else if(food3 == "plantain"){
//     let output = myfavfood[2]
//     console.log(output)
// }
// else if(food4 == "plantain"){
//     let output = myfavfood[3]
//     console.log(output)

// }
// else{
//     console.log("Can't find matching food in the list")
// }


//Method 2 using es6 

// let food1 ="soup"
// let food2 = "beans"
// let food3 = "plantain"
// let food4 = "Burger"

// let myfavfood = [food1,food2,food3,food4]
// let myfood = myfavfood.map((food) =>{
//     return food
// }).filter((value) =>{
//     if(value == "plantain"){
//         console.log(value)
//     }
    
// })
// console.log(myfavfood)


// let arr = [1,2,3,4,5,6]
// let result = arr[1] * 2
// console.log(result)

//  let tvShow = ["breaking bad", "flash", "GOT","witcher","smallville"]
// // you can expand the array witth new index and value
//   tvShow[5] = "test"
//   console.log(tvShow)

//let fruit = 'Banana,orange';
// let fruits = ['Apple', 'Banana', 'Berry', 'Mango', 'lemon'];

// let srt = fruits.filter(fruit => fruit.length > 3)
// console.log(srt.splice(0,2))
// console.log(srt)
// let vegetables = ['Spinach', 'Carbage', 'Lettuce'];
// let allVeg = fruits.concat(vegetables);
// // //console.log(fruit.indexOf('na'));
//console.log(fruits.splice(2,4))
// for(let i = 0; i <fruit.length; i++) {

//     console.log('The value of ', i , fruit[i]);
   
// }

//console.log(fruit.split(','));

//  let empArray = []

// for (let i = 0; i <= 10; i++) {
//     empArray.push(i);
//     console.log(empArray);
// }

// console.log(fruits.join('_ '));

// console.log(fruits.pop(), fruits );
// console.log(fruits.push('Blackberries'), fruits);
// console.log(fruits.shift()); // removes first item while pop removes last item in an array
// console.log(fruits.unshift('kiwi'))


// console.log(fruits.push('Blackberries'), fruits);
// console.log(allVeg);
// console.log(allVeg.slice(1, 4));

//Home work 1

// let myStudies = ['maths', 'physics','chemistry','biology']
// let favstudy = 'geo'
// myStudies.forEach(() =>{
    
//     if(myStudies[0] == favstudy){
//         console.log(myStudies[0], 'is my favorite course')

//     }
//     else if(myStudies[1] == favstudy) {
//         console.log(myStudies[1], 'is my favorite course')
//     }
//     else if(myStudies[2] == favstudy) {
//         console.log(myStudies[2], 'is my favorite course')
//     }
//     else if(myStudies[3] == favstudy) {
//         console.log(myStudies[3], 'is my favorite course')
//     }
//     else{
//         console.log('not my favorite course')
//     }
// })

// let myStudies = ['maths', 'physics','chemistry','biology']

// myStudies.forEach((study) =>{
//     console.log(study)
// })

// for(let x of myStudies){
//     console.log(x)
// }

// let fruits = ['Apple', 'Banana', 'Berry', 'Mango', 'lemon'];
// let vegetables = ['Spinach', 'Carbage', 'Lettuce'];
// let allVeg = fruits.concat(vegetables);

// allVeg.forEach((veg) =>{
//     console.log(veg)
 


    
    
    
// })

// let i = 0
// while(i < allVeg.length ){
//     console.log(allVeg[i])
//     i++

// }
// var i = 0
// do{
//     allVeg.sort()
//    console.log('', allVeg[i], i)
   
//     i++
// }
// while (i  < allVeg.length)

// let myStudies = ['maths', 'physics','chemistry','biology']
// let grades = [20,30,40,50]
// let subjects = 'biology'

// if(myStudies[0] == subjects){
//     console.log('score  is',grades[0])
// }
// else if(myStudies[1] == subjects){
//     console.log('score  is',grades[1])
// }
// else if(myStudies[2] == subjects){
//     console.log('score is is',grades[2])
// }
// else if(myStudies[3] == subjects){
//     console.log('score is', grades[3])
// }
// else{
//     console.log('No grade for givenm subject')
// }

// let numbers =  [3,5,7,10,11]
// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 == 0){
//         console.log(numbers[i], 'is an even number')
//     }
//     else{
//         console.log(numbers[i],"Oddnumber")
//     }
// }


// Homewrk 1 push to

// let fruits = ['Apple', 'Banana', 'Berry', 'Mango', 'lemon']
// let vegetables = ['Spinach', 'Carbage', 'Lettuce']
// let allVeg = fruits.concat(vegetables)
// let emptarray = []
// for(let i = 0; i < allVeg.length; i++){
//     emptarray.push(allVeg[i])
//     console.log(`This is the content of the emptarray, ${emptarray[i]}`)

// }


//Homework 2 change

// let mainProductPrice = 75
// let money = [100,50,20,10,5,1]
// let changeType = ['Hundred dollar bill','Fifty Dollar Bill','Twenty Dollar Bill','Ten dollar Bill','Five Dollar Bill','One dollar Bill']
// let amount = 150
// let change = 0
// let remainder = amount - mainProductPrice
// let track = {}

// for(let i = 0; i < money.length; i++){
//     change = Math.floor(remainder/money[i])
//     if(change > 0){
//         remainder = remainder % money[i]
//         track[changeType[i]] = change
//     }
// }
// console.log(track)

// let array1 = [ [1,2,3], [4,[5,6,7],6], [7,8,9]]; 
// let flat = []




























// for(let i = 0; i < money.length; i++){
//     change = Math.floor(remainder/money[i])
//     if(change > 0){
//         remainder = remainder % money[i]
//         track[changeType[i]] = change
        


//     }

    


    
    


// }
// console.log(track)



//  sum = 0
 
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//     avg = sum / arr.length
   
    
// }
// console.log(avg)






    
 


    
   
// let array1= [[1,2,3],[4,5,6],[7,8,9]]
// console.log(array1[1][1])

// 2D array
//  let brands = ['amazon', 'tesla','disney', 'entertainment','ecommerce','innovation']
//  let empArray = []
// let  twoDArray = [
//     ['amazon','ecommerce'], 
//     ['disney', 'entertainment'],
//     ['ecommerce','innovation']
// ]
// console.log(twoDArray[1][1])

















// let twoDArray = [[1,2,3],[4,5,6],[7,8,9]]
// let flatArray = []

// for(let i = 0; i < twoDArray.length; i++){
//     for(let j = 0; j < twoDArray[i].length; j++){
//         flatArray.push(twoDArray[i][j])
    

        

//     }

    
// }
// console.log(flatArray)


// let arr = [ 45, 67, 4, 34, 2, 89, 10 ]
 
//   let max = arr[0];
//  let min = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i]
            

//         }
        
//       if(min > arr[i]){
        
//             min = arr[i]
            

//         }
       
//     }
//     console.log(max)
//     console.log(min)


//homewrk 7

// Declare array and initialize to avariable

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let value = ""

// for(let i = 0; i < numbers.length; i++){
//     value+= numbers[i]
//     console.log(numbers[i])
// }



// homework 8
        // decalre a variable for array
// let numbers = [1,2,3,4,5,6,7,8,9,10]

// declare an empty array that would contain the reversed values
// let empArray = []

// loop through the array

// for(let i = numbers.length - 1; i >= 0;  i--){
//     empArray.push(numbers[i])
    
    
   
    

// }

// console.log(empArray)


// USING TEMPOPRARY VARIABLES and one array 

// to get the next value the end -start which is arr.lenght -1-start



// let numbers = [1,2,3,4,5,6,7,8,9,10]
// getreverse = (arr) => {
    
//     let start = 0
//     let end = numbers.length -1
// while(start < end -start){
//     let temp = arr[start]
    
//     arr[start] = arr[end - start]
//     arr[end - start]  = temp
    
//     start++
  



// }
// return arr
// }
// console.log(getreverse(numbers))

// // for(let i=0;i<array1.length;i++){
// //     array3.push(array1[i])
// //     array3.push(array2[i])
// // }
// //   console.log(array3)


// let array1 = ['pasta','salad','noodle soup','chicken'];
// let array2 = ['dumplings','sushi','steak','beef']
// let array3 = []





// for(let i=0;i<array1.length;i++){
//     if(array3.indexOf(array1[i]) == -1)
//        array3.push(array1[i])
//   }
//   for(let i=0;i<array2.length;i++){
//     if(array3.indexOf(array2[i]) == -1)
//        array3.push(array2[i])
//   }
//   console.log(array3)

// let a = [[1,2,'#'], ['#', 16, 32], [64, '#', 256], [512, 1024, '#'], [4096, '#', '16,384']]
// console.log(a)
// //display the matrix as a 1d array
// let b = []
// for(let i = 0; i<a.length; i++){
//   for(let j = 0; j<a[i].length; j++){
//     b.push(a[i][j])
//   }
// }
// console.log(b)
// //replace # with 2 exponent the index
// for(let i = 0; i<b.length; i++){
//   if(b[i] == '#'){
//     b[i] = 2**i
//   }
// }
// console.log(b)
// //convert it back to 2d array using splice
// let c = []
// // c[0] = [b[0],b[1],b[2]]
// // c[1] = [b[3],b[4],b[5]]
// // c[2] = [b[5],b[7],b[8]]
// for(let i = 0; i<a.length; i++){
//      c.push(b.splice(0,3))
//   }

// var arr = []

//  var fruits = ["Banana", "Orange", "Apple", "Mango","banana","pie"];
//  //arr.push(fruits.splice(0,3))
//  arr.push(fruits.slice(0,3))
//  //console.log(fruits)
//  console.log(arr)



// let a = 3
// let b = 2 ** a
// console.log(b)


// let Matrix = [
//         [1, 2, '#'],
//         ['#', 16, 32],
//         [64, '#', 256],
//         [512, 1024, '#'],
//         [4096, '#', 16384]
    
//     ]
//    let counter = 0

//     for (i = 0; i < Matrix.length; i++) {
//         for (j = 0; j < Matrix[i].length; j++) {
//             if (Matrix[i][j] === '#'){
//                 Matrix[i][j] = 2 ** counter
//             }
//              counter++
            
//         }
//     }
    
//     console.log(Matrix)

// let personel = {
//         firstname: 'John',
//         lastname: 'wick',
//         location: 'usa',
//         foodType: ['rice','beans','egg'],
//         getfullName: (personel)=>{
//                 return `${personel.firstname} ${personel.lastname}`
       

//         }
// }


// // console.log(hobbies.getfullName(hobbies))
// console.log(personel.getfullName(personel))

const userList = [
        { 
                id: 001,
                make: 'Ford',
                model: 'Fiesta',
                color: 'purple'
},
{
        id:002,
        make: 'Subaru',
        model:'Outback',
        color: 'Black'
}


]

// for(let i = 0; i < userList.length; i ++){
//          return userList[i].color
// }
for(let x in userList){
        console.log(userList[x].model)
}

// let netflixShows = [
//         {
//           title: 'Stranger Things', 
//           rating: 4, 
//         }, 
//         { 
//           title: 'Cobra Kai', 
//           rating: 2,
//         }, 
//         {
//           title: 'Queen\'s Gambit', 
//           rating: 5,
//         }, 
//         {
//           title: 'Locke & Key', 
//           rating: 4,
//         },
//         {
//           title: 'Big Mouth',
//           rating: 3,
//         }, 
//         {
//           title: 'Glee',
//           rating: 2,
//         }
//       ]

//       for(let i = 0; i < netflixShows.length; i++){
//               if(netflixShows[i]['rating'] >=  3){
//                       console.log(netflixShows[i].title)
//               }
//       }



//Home work 2
// let income;


// function fiftyThirtyTwenty(income) {
//         max = income  * 50;
//         mid = income * 30;
//         min = income * 20;
//         return { needs: max, wants: mid, min: min}
        

// }
// let output = fiftyThirtyTwenty(100)
// console.log(output)


     




// ]

// function replaceHash(crazyArray){
// //         if(crazyArray[10][1] == '#') {
// //                 crazyArray[10][1] = 'Array'
// //                 return `hash in ${crazyArray[10][1]} => "Hash"`

// //         }
//         // if(crazyArray[6]['greeting'] == '#' || crazyArray[11]['sports']){
//         //         return 'boom'

//         // }

//         let  obj = 'YEAH' 
//         let obj2 = 'HASH'
//         let obj3 = 'BOOM'
//         if(crazyArray[6]['greeting'] == '#' || crazyArray[11]['sports'] == '#'){
//                 crazyArray[6]['greeting'] = obj
//                 crazyArray[11]['sports'] = obj




                
//         }
//         if(crazyArray[10][1] == '#'){
//                 crazyArray[10][1] = obj2



//         }
//         if(crazyArray[5] == '#' || crazyArray[9] == '#'){
//                 crazyArray[5] = obj3
//                 crazyArray[9] = obj3



//         }

//         return crazyArray

// }
       
// let output= replaceHash(crazyArray)
// console.log(output)
// console.log(crazyArray)


//converting arrayintoobject

// let arr = [1,2,3]
// let emparray = Object.entries(arr)
// console.log(emparray)


        // Homework https://edabit.com/challenge/pPNAs5PvB3WvnDwDM


// const getData= (age,status) => {
//         {
//                 if(age > 60 && status == 'over 60'){
//                         return `For ${age} , You are an elderly person`
//                 }
//                 else{
//                        return  `You are not an elserly person`
//                 }

                
                
//         }
// }

// let dt = getData(55, 'over 60')
// console.log(dt)
// const add = (x, y) => {
//         return x + y
// }



// function add(a, b)
// {
//     return a + b
// }


// function subtract(a, b)
// {
//         return a - b
//     // functions
// }

// function multiply(a, b)
// {
//         return a * b
//     // functions
// }

// example: (3 * 2) + 3
// res1:    (5 * 6) - 5 + (8 * 5)
// res2:    ((2 - 3) * (4 * 5)) - 10 + (8 * 3)
// res3:    (6 + 8) - (5 + 5) * (8 - 5)
// ***********************************


//let res1 = 0

//let res2 = add(multiply(5,6),subtract(multiply(8,5)))

// subtract(add(6,8),add(5,5),multiply(subtract(8,5)))




// ***********************************
//console.log(res1)
// //


//console.log((6 + 8) - (5 + 5) * (8 - 5))



//https://st1.zoom.us/web_client/ehjzr5/html/externalLinkPage.html?ref=https://stackblitz.com/edit/web-platform-yndjxq?file=index.js






























































