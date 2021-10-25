




var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 2
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 1
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3
    }];


function sortArray(movies, attr){
for (let j = 0; j < movies.length - 1; j++){



    let max_num = movies[j]; // Maximum number  and number[i] is current number
    let max_location = j;
   
    for (let i = j; i < movies.length; i++) {
        
        if (movies[i][attr] < max_num[attr]) {

            //know max and its location
         
            max_num = movies[i];
            max_location = i;
            
            
        }

        
        
    }

    //swap first and last

    movies[max_location] = movies[j];
    movies[j] = max_num;
}


    return movies;



}

console.log(sortArray(library,'libraryID' ));
