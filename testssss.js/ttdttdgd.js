const group = (collection, grouper) => {
    //declare an empty object 
    let obj = {}
    //Then it loops through each item in the collection, creating an array for each key (the value passed into group) and adding them to obj[key].

    for(let i = 0; i < collection.length; i++){
        let key = grouper(collection[i])
        if(!obj[key]){
            obj[key] = []
        }
        obj[key].push(collection[i])
    }
    // It then returns obj.
//The code would return an object that has a property for each number in the collection, with the value being the value of that number.
    return obj
}


console.log(group([6.5, 4.2, 6.3], Math.floor))