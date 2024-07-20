const  inputBox =  document.querySelector('.input-box') ;
const searchbtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const Description = document.querySelector('.Description');
const humidity = document.getElementById('humidity');
const Wind_Speed = document.getElementById('Wind-Speed');
const Location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

 async function checkWeather(city)
{
    const api_key="5d6f412ce6c89a346adc377c961a7f8a";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =  await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);


    if(weather_data.cod == "400"){
        Location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }


    Location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    Description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    Wind_Speed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds': 
            weather_img.src="weather-images/overcast clouds.jpg";
            break;
        case 'Clear': 
            weather_img.src="weather-images/clear2.jpg";
            break;
        case 'Mist': 
            weather_img.src="weather-images/mist2.jpg";
            break;
        case 'Snow': 
            weather_img.src="weather-images/snow2.jpg";
            break;
        case 'Rain': 
            weather_img.src="weather-images/rain2.jpg";
            break;
        case 'Sun': 
            weather_img.src="weather-images/sunny.jpg";
            break;
        case 'Haze': 
            weather_img.src="weather-images/haze.jpg";
            break;
        
    }
   
}

searchbtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});



