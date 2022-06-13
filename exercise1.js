let citiesInTheWorld = [
    ['Amsterdam', 'The Netherlands'], 
    ['Moscow', 'Russia'],
    ['Los Angeles', 'The United States'], 
    ['Seoul', 'Korea'], 
    ['Jakarta', 'Indonesia']
  ]
  



  


  function getCities(arr){
    let obj = {}
      for(let i=0; i<arr.length; i++){
        obj[arr[i][0]] = arr[i][1] 
      }
      return obj
    }

  console.log(getCities(citiesInTheWorld))

