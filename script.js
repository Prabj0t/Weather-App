const apiKey="199f1bf7546fb69a993301c2aefe2866";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput=document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weather=document.querySelector('.weather-icon');
async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.Weather').style.display="none";
        document.querySelector('.error').style.display="block";
    }else{
        document.querySelector('.error').style.display="none";
         var data= await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main ==="Clear"){
        weather.src="pics/clear.png";
    }
    else if(data.weather[0].main ==="Clouds"){
        weather.src="pics/clouds.png";
    }
    else if(data.weather[0].main ==="Drizzle"){
        weather.src="pics/drizzle.png";
    }
    else if(data.weather[0].main ==="Mist"){
        weather.src="pics/mist.png";
    }
    else if(data.weather[0].main ==="Rain"){
        weather.src="pics/rain.png";
    }
    else if(data.weather[0].main ==="Snow"){
        weather.src="pics/snow.png";
    }
    else if(data.weather[0].main === "Clouds"){
        weather.src="pics/clouds.png";
    }
    else{
        weather.src="pics/clear.png";
    }
    document.querySelector('.Weather').style.display="block";
    }

    

};

searchbtn.addEventListener('click',()=>{
    
    checkWeather(searchInput.value);
});



