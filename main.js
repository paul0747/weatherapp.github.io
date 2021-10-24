// api_key ="0cb037f50b2dd493bae1032f4f72a477"
// h ttp://api.openweathermap.org/data/2.5/weather?q= {city_name}&appid= {api_key}

// fetch('http://example.com/movies.json%27)
//   .then(response => response.json())
//   .then(data => console.log(data));

let cityName = document.getElementById("city-input");
let btnLocation = document.getElementById("get-location");
let weatherTypes = {
  Clear: "sun",
  Rain: "rain",
  Snow: "snow",
  Clouds: "cloud",
};
let weatherDescription = {
  "overcast clouds": "Clouds",
  "few clouds": "Clouds",
  "scattered clouds": "Clouds",
  "broken clouds": "Clouds",

  "light rain": "Rain",
  "moderate rain": "Rain",
  "heavy intensity rain": "Rain",
  "very heavy rain": "Rain",
  "extreme rain ": "Rain",
  "freezing rain ": "Rain",
  "light intensity shower rain": "Rain",
  "shower rain ": "Rain",
  "heavy intensity shower rain": "Rain",
  "ragged shower rain": "Rain",

  "clear sky": "Clear Sky",
  "Heavy shower snow": "Snow",
  "Shower snow": "Snow",
  "Light shower snow": "Snow",
  "Rain and snow": "Snow",
  "Light rain and snow": "Snow",
  "Shower sleet": "Snow",
  "Light shower sleet": "Snow",
  Sleet: "Snow",
  "Heavy snow": "Snow",
  "light snow": "Snow",
  Snow: "Snow",
};

let apiKey = "0cb037f50b2dd493bae1032f4f72a477";

btnLocation.addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      let apiWeatherImage = document.getElementById("api-image");
      let apiTemp = document.getElementById("api-temp");
      let apiWeatherType = document.getElementById("api-weather");
      let apiLocation = document.getElementById("api-location");
      let feelsTemp = document.getElementById("feels-temp");
      let humidity = document.getElementById("humidity");
      apiWeatherImage.src = `./img/${
        weatherTypes[data["weather"][0]["main"]]
      }.png`;
      let kelvinTemp = data["main"]["temp"];
      let kelvinToCelsius = parseInt(kelvinTemp - 273.15);
      apiTemp.innerText = `${kelvinToCelsius}°C`;
      apiWeatherType.innerText = `${
        weatherDescription[data["weather"][0]["description"]]
      }`;
      apiLocation.innerText = cityName.value;

      feelsTemp.innerText = `${parseInt(
        data["main"]["feels_like"] - 273.15
      )}°C`;
      humidity.innerText = `${data["main"]["humidity"]}%`;

      document.getElementById("weather-info").style.display = "flex";
    })
    .catch((error) => {
      document.getElementById("api-location").innerText = "City Not Found";
    });
});
