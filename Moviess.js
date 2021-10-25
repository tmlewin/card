// Homework 1


const listOfMovies = {
        account: 'Jessy', 
                 genres: ['Thriller', 'Drama', 'Anime', 'Comedy','Romance', 'Horror', 'Documentaries'],
                favourites: [
              {
                title: 'Little Miss Sunshine',
                genre: 'Comedy',
                year: 2006
              }, 
              {
                title: 'Howl\'s Moving Castle',
                genre: 'Japanese animation',
                year: 2004
              }, 
              { 
                title: 'Aquaman',
                genre: 'Action',
                year: 2019
              },       
              {
                title: 'The Shape of Water',
                genre: 'Drama',
                year: 2017
              },
              { 
                title: 'Your name',
                genre: 'Japanese animation',
                year: 2017
              },
              { 
                title: 'Inception',
                genre: 'Action',
                year: 2010
              }, 
            ]
        }
        // this shows us the title of the first movie in the favorite array
// console.log(listOfMovies['favourites'][1].title)
// console.log(listOfMovies['favourites'][1])

// // this is to get the movies in the genres array
// //console.log(listOfMovies['genres'][0])

// let DanielList = {

// }


// //inserting aquasman into daniel list
//  DanielList = listOfMovies['favourites'][2]
//  console.log(DanielList)
// loop through the list of movies
// let favList = []
// let notfavList = []

// for(let i = 0; i < listOfMovies.length; i++) {
//     const  element = listOfMovies[i]
//     if(element.account == 'Jessy'){
//         let genres = element.genres
//         for(let j = 0; j < element.favourites.length; j++) {
//             const favgenre = element.favourites[j].genre
//             if(!favList.find((e) =>
//                 e === favgenre
//             )){
//                 favList.push(favgenre)

//             }

            
//         }
//         for(let j= 0; j < genres.length; j++){
//             const genre = genres[j]
//             if(!favList.find((e) =>
//                 e === genre

//             )){
//                 notfavList.push(genre)
                
//             }

            
//         }
//     }
// }

// console.log(favList)