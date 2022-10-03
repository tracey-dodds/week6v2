let now = new Date();

let h3 = document.querySelector("h3");

let minute = now.getMinutes();
let hours = now.getHours();
let date = now.getDate();

let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day} ${date}th ${month} ${year} at ${hours}:${minute}`;

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#enter-city").innerHTML = response.data.name;
  document.querySelector("#today-temperature").innerHTML = `${temperature}°C`;
}
function searchCity(city) {
  let apiKey = "708ef12b3e0617a4c8a28e31ae3f4341";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
