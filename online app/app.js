
const ApiKey = "e3e3e7e23def29a46de3b9d6906c4279";
const pixaApi = "15253415-221d11722c726863d98660192";
const Loader = document.getElementById("loader");
let LocationName = document.getElementById("location-name");
let Country = document.getElementById("country");
let scaleChange = document.getElementById("temperature-scale")
let temperature = document.getElementById("temperature");
let Location = document.getElementById("time-zone");
let map = document.getElementById("weather-map");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let visibility = document.getElementById("visibility");
let summary = document.getElementById("summary");
let searchForm = document.getElementById("search-form");
var Search = document.querySelector("#click");
let uvIndex= document.getElementById("uv");
let Cloud = document.getElementById("cloud-icon");
var searchCity = document.getElementById("search-input");
let population = document.getElementById("population");
let info = document.getElementById("weatherinfo");
let cloudConclusion = document.getElementById("clouds");
let sunRise = document.getElementById("sunrise");
let weatherIcon1 = document.getElementById("weather-icon1");
let weatherIcon2 = document.getElementById("weather-icon2");
let weatherIcon3 = document.getElementById("weather-icon3");
let weatherIcon4 = document.getElementById("weather-icon4");
let description1 = document.getElementById("description1");
let description2 = document.getElementById("description2");
let description3 = document.getElementById("description3");
let description4 = document.getElementById("description4");
let timeStamp1 = document.getElementById("timestamp1");
let videoWrap = document.getElementById("video-wrap");
let videoWrap1 = document.getElementById("video-wrap1");
let videoWrap2 = document.getElementById("video-wrap2");
let timeStamp2 = document.getElementById("timestamp2");
let timestamp3 = document.getElementById("timestamp3");
let timeStamp4 = document.getElementById("timestamp4");
let pixaBay = document.getElementById("logo-wrap");
let sunSet = document.getElementById("sunset");
let temperatureFeels = document.getElementById("feels-like");
var none = /^[^0-9\#\$\@\+]*$/;
let furtherInfo = document.getElementById("further-info");
var locationWrap = document.querySelector(".location-wrap");
var space =/^.*\s{2,}.*$/;
function formatDate(inputStr) {
    var timestamp = parseInt(inputStr, 10);
    var date = new Date(timestamp);
    return date.toJSON().substr(0, 10);
}

window.addEventListener("load",()=>{
let long;
let lat;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        lat = position.coords.latitude;
        long = position.coords.longitude;
        Loader.classList.add("show-load");
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${ApiKey}`;
    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        Loader.classList.remove("show-load");
        Country.textContent=data.timezone;
        location.textContent = data.timezone;
        temperature.textContent = Math.floor(data.current.temp-273)+"°C";
        wind.textContent=data.current.wind_speed+"m/s";
        humidity.textContent = data.current.humidity+"%";
        pressure.textContent =data.current.pressure+" hpa"
        visibility.textContent = data.current.wind_deg+"degree"
        uvIndex.textContent= "Uv index "+data.current.uvi;
        temperatureFeels.textContent = "Feels like "+ Math.floor(data.current.feels_like-272)+"°C"; 
        Cloud.innerHTML= `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="" width="100%;" height="100%">`
        cloudConclusion.textContent= data.current.weather[0].description;
        
    
    })

    });
 
}
else{
    alert("404 Error")
}})
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
if(searchCity.value.length===""){
alert("Enter a valid city");

}
else{
    Loader.classList.add("show-load");
   const api2 =`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${ApiKey}`;

 fetch(api2)
 .then(response =>{
     return response.json();
 })
 .then(data2 =>{
    Loader.classList.remove("show-load");
    pixaBay.classList.add("logo-wrap-show");
    furtherInfo.classList.add("show-further");
    
    Country.textContent= ": "+data2.sys.country;
    locationWrap.classList.add("show-location-wrap");
    LocationName.textContent=data2.name;
    temperature.textContent = Math.floor(data2.main.temp-273) +"°C";
    temperatureFeels.textContent = "feels like "+Math.floor(data2.main.feels_like-273)+"°C";
    wind.textContent=data2.wind.speed+" m/s";
    humidity.textContent=data2.main.humidity+"%";
    pressure.textContent=data2.main.pressure+" hpa";
    cloudConclusion.textContent= data2.weather[0].description;
    visibility.textContent="coordinates "+ data2.coord.lon+", "+data2.coord.lat;
 Cloud.innerHTML=  Cloud.innerHTML= `<img src="http://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png" alt="" width="100%;" height="100%">`
})
 
const weatherForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.value}&appid=${ApiKey}`;
 fetch(weatherForecastApi)
 .then(response =>{
     return response.json();
 }) 
 .then(weatherData =>{
    furtherInfo.classList.add("show.further");
    population.textContent= weatherData.city.population+" People"
    weatherIcon1.innerHTML=` <img src="http://openweathermap.org/img/wn/${weatherData.list[6].weather[0].icon}@2x.png" alt="" width="100px" >`
    weatherIcon2.innerHTML=` <img src="http://openweathermap.org/img/wn/${weatherData.list[13].weather[0].icon}@2x.png" alt="" width="100px" >`
    weatherIcon3.innerHTML=`  <img src="http://openweathermap.org/img/wn/${weatherData.list[21].weather[0].icon}@2x.png" alt="" width="100px" >`
    weatherIcon4.innerHTML=`  <img src="http://openweathermap.org/img/wn/${weatherData.list[31].weather[0].icon}@2x.png" alt="" width="100px" >`
    timeStamp1.textContent= weatherData.list[6].dt_txt;
    timeStamp2.textContent= weatherData.list[13].dt_txt;
    timestamp3.textContent= weatherData.list[21].dt_txt;
    timeStamp4.textContent= weatherData.list[31].dt_txt;
    description1.textContent= weatherData.list[6].weather[0].description;
    description2.textContent= weatherData.list[13].weather[0].description;
    description3.textContent= weatherData.list[21].weather[0].description;
    description4.textContent= weatherData.list[31].weather[0].description;
})
const imageApi = `https://pixabay.com/api/?key=${pixaApi}&q=${searchCity.value}&image_type=photo`;
fetch(imageApi)
.then(imageResponse =>{
    return imageResponse.json();
})
.then(imageData =>{
    
    pixaBay.classList.add("logo-wrap-show");
    videoWrap.innerHTML=`<img src="${imageData.hits[0].largeImageURL}" alt="" srcset="" width="90%; height="100%"> `
    videoWrap1.innerHTML=`<img src="${imageData.hits[3].largeImageURL}" alt="" srcset="" width="90%;" height="100%"> `
    videoWrap2.innerHTML=`<img src="${imageData.hits[2].largeImageURL}" alt="" srcset="" width="90%;" height="100%"> `
})
}
})
//http://openweathermap.org/img/wn/${id}@2x.png

