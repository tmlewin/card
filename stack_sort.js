//  let obj =    [{
//    name: 'john',
//     surname: 'smith'
//    },
//    {
//      name: 'jill',
//      surname: 'hog'
//    }
//  ]
// newObj = {}
// const sorter  = (obj,key)=>{
//     for(val in obj){
//         if(val !== key){
//             newObj[val] = obj[val]
//         }
//     }
//     return newObj
// }
// console.log(sorter(value,'e'))

// const search = (input)=>{

// let resData = obj.filter(data=>
//     data.name.toLocaleLowerCase().includes(input) || data.surname.toLocaleLowerCase().includes(input)
   

// )
// return resData

// }


// console.log(search('john'))

// var library = [ 
//   {
//       title:  'The Road Ahead',
//       author: 'Bill Gates',
//       libraryID: 2
//   },
//   {
//       title: 'Walter Isaacson',
//       author: 'Steve Jobs',
//       libraryID: 1
//   },
//   {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       libraryID: 3
//   }]


  

//   const sort = (movies,attr)=>{

//     for(let j= 0; j < movies.length - 1; j++){
//       let max_num = movies[j]
//       let max_location = j

//       for (let i = j;i < movies.length; i++){
//         if(movies[i][attr] < max_num[attr]){
//           max_num= movies[i]
//           max_location = i
//         }

//       }
//       movies[max_location] = movies[j]
//       movies[j] = max_num


//     }
//     return movies 

//   }
//   console.log(sort(library,'author'))