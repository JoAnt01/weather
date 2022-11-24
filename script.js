h1 = document.querySelector("h1");
// gives the real time and date
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

// changes temperature from celcius to fahrenheit
let celcius = 15;
let fahrenheit = (celcius * 9) / 5 + 32;
function changeFahrenheit() {
  let p = document.querySelector("#iconSky");
  p.innerHTML = fahrenheit;
}

let fahr = document.querySelector("#tempFahr");
fahr.addEventListener("click", changeFahrenheit);
// changes temperature from fahrenheit to celcius

function changeCelcius() {
  p = document.querySelector("#iconSky");
  p.innerHTML = celcius;
}

let celc = document.querySelector("#tempCelcius");
celc.addEventListener("click", changeCelcius);

// change the city from the form

function changeList(event) {
  h1.innerHTML = event.target.innerHTML.trim();
}
let places = document.querySelectorAll("ul>li");
places.forEach(function (place) {
  return place.addEventListener("click", changeList);
});

// exercise




function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;
  let iconSky = document.querySelector("#iconSky");
  iconSky.innerHTML = `${temperature}`;
}

function localChange(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}
;

let localBtn = document.querySelector("#local-btn");
localBtn.addEventListener(
  "click",
 function(){navigator.geolocation.getCurrentPosition(localChange)});

 // change the city from the form

function changeCity() {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let input = document.querySelector("#city-input");
  let city = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(newWeather);
  h1.innerHTML = city;
}

function newWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let iconSky = document.querySelector("#iconSky");
  iconSky.innerHTML = `${temperature}`;
}

let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener(
  "click", changeCity);

