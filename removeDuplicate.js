let arrs = [1,2,3,1]


const dupArray = (arr) =>{
    let uniqueValues = new Set()
    for(let i = 0; i < arr.length; i++) {
        if(uniqueValues.has(arr[i]))
            return true
            uniqueValues.add(arr[i])
           

        
       
        
        

    }
    return false
   
    
}
console.log(dupArray(arrs))