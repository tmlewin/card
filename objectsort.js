let value = {
    a : 1,
    b : 2
}

let newObj = {}



const sortObj = (obj,key) => {
    
    for(let  val in obj) {
        if(val !== key) {
            newObj[val] = obj[val]


        }
        
    }
    
        
    return newObj

    }
  

   


console.log(sortObj(value, 'b'))