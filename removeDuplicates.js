let array = [33,21,14,21,9,8,8,8,15,15,32,32,32,6]


const removeDuplicates = (array) => {
    let empArray = []
    for (let i = 0; i < array.length; i++){
        if(!empArray.includes(array[i])){
            empArray.push(array[i])
        }
    }
    return empArray
}
console.log(removeDuplicates(array))




