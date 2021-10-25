// function get the url and fetchy the data with fetch or axios

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

  //HINT: Use template literals to create a url with input and an API key

const getweatherdata = (city)=>{

    let url = "https://api.openweathermap.org/data/2.5/weather"
    let Full_URL = `${url}?q=${city}&appid=${API_KEY}&units=imperial`

    let  retievedData = fetch(Full_URL)

    return retievedData.then((reponse)=>{
        return reponse.json();
        
    })
    
}



const getCity = () =>{
    const city = document.getElementById('city-input').value
    getweatherdata(city)
    .then((response)=>{
        
        showweatherData(response)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}


const clearData = () =>{
    document.getElementById('city-input').value = ""
    document.getElementById('city-name').innerText = '---'
    document.getElementById('weather-type').innerText = '----'
    document.getElementById('temp').innerText = ' --°'
    document.getElementById('min-temp').innerText = ' --°'
    document.getElementById('max-temp').innerText = ' --°'
    showweatherData()

}

const showweatherData = (response)=>{
    document.getElementById('city-name').innerText = response.name
    document.getElementById('weather-type').innerText = response.weather[0].description
    document.getElementById('temp').innerText = response.main.temp
    document.getElementById('min-temp').innerText = response.main.temp_min
    document.getElementById('max-temp').innerText = response.main.temp_max


}

  

