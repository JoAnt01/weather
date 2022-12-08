
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let month = now.getMonth() + 1;
let number = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();

let formatDate = `${day}, ${number}.${month}.${year}`;

function changeDate() {
  let today = document.querySelector("#current-date");
  today.innerHTML = formatDate;
}
changeDate();

if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}
let formatTime = `${hour}:${minute}`;
function changeTime() {
  let tonight = document.querySelector("#current-time");
  tonight.innerHTML = formatTime;
}
changeTime();

function changeList(event) {
  h1.innerHTML = event.target.innerHTML.trim();
}
let places = document.querySelectorAll("ul>li");
places.forEach(function (place) {
  return place.addEventListener("click", changeList);
});

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;
  let iconSky = document.querySelector("#iconSky");
  iconSky.innerHTML = `${temperature}`;
  let descriptionSky = document.querySelector ("#sun-description");
  descriptionSky.innerHTML = response.data.weather[0].description;
  let humidity =document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = response.data.main.pressure;
  let speedWind = document.querySelector("#speedWind");
  speedWind.innerHTML = response.data.wind.speed;
  let SunnyDay = document.querySelector("#icon");
  SunnyDay.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
  celciusTemperature = Math.round(response.data.main.temp);
}

function localChange(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

let localButton = document.querySelector("#local-btn");
localButton.addEventListener(
  "click",
 function(){navigator.geolocation.getCurrentPosition(localChange)});


function changeCity(event) {
  event.preventDefault();

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let input = document.querySelector("#city-input");
  let city = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(newWeather);
  h1.innerHTML = city;
}
     
function changeTopCity (){
let h1= document.querySelector("h1");
let city = "Poznań"; 
h1.innerHTML = city;
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
axios.get(url).then(newWeather);

}
changeTopCity();

function newWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let iconSky = document.querySelector("#iconSky");
  iconSky.innerHTML = `${temperature}`;
  let descriptionSky = document.querySelector ("#sun-description");
  descriptionSky.innerHTML = response.data.weather[0].description;
  let humidity =document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = response.data.main.pressure;
  let speedWind = document.querySelector("#speedWind");
  speedWind.innerHTML = response.data.wind.speed;
  let SunnyDay = document.querySelector("#icon");
  SunnyDay.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
  
  celciusTemperature = Math.round(response.data.main.temp);
}
  let form = document.querySelector("form");
  form.addEventListener("submit", changeCity);

let celciusTemperature = null;
  
  function changeFahrenheit(event) {
    event.preventDefault();
let temperatureElement = document.querySelector("#iconSky");
fahr.classList.add("active");
celc.classList.remove("active");

let Fahrenheit = (celciusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML =Math.round(Fahrenheit);
  }
  
  let fahr = document.querySelector("#tempFahr");
  fahr.addEventListener("click", changeFahrenheit);
  
  
  function changeCelcius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#iconSky");
    temperatureElement.innerHTML = celciusTemperature;
    celc.classList.add("active");
fahr.classList.remove("active");
  }
  
  let celc = document.querySelector("#tempCelcius");
  celc.addEventListener("click", changeCelcius);
  
  let h1= document.querySelector("h1");
