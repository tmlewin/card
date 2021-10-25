let x = [5,8,2,9,3,10]


function sortArr(numbers) {
for(let j = 0; j < numbers.length - 1 ; j++){
    let maximum = numbers[j]
    let location = j

    for(let i = j; i < numbers.length; i++){
        if(numbers[i] > maximum){
            maximum = numbers[i]
            location = i
        }

    }
    numbers[location] = numbers[j]
    numbers[j] = maximum

}
return numbers

}
console.log(sortArr(x))