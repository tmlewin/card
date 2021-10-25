let array = [0, 1, 'hello', '*&^', false, 2, undefined, '', 3, null, 23, 109]

function filterArr(array){
    let sortArr = []
    for(let  i=0; i<array.length; i++){
        if(
            // !! Brings out only the true values
            !!array[i]
            // array[i] !== undefined &&
            // array[i] !== false &&
            // array[i] !=='' &&
            // array[i] !== 0 &&
            // array[i] !== null
            ){
                sortArr.push(array[i])

            }
        }
        return sortArr
    }
    let output = filterArr(array)
    console.log(output)
        
