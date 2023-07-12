const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a517037af3msh99f99cb08e434ecp1f6f17jsn951a1c0b3193",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
 
  if(city.charCodeAt(0)>96){
    city=city.charAt(0).toUpperCase()+city.slice(1);
  }
   cityName.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      const Cloud_pct = document.getElementsByClassName("Cloud_pct");
      const Temp = document.getElementsByClassName("Temp");
      const Feels_like = document.getElementsByClassName("Feels_like");
      const Humidity = document.getElementsByClassName("Humidity");
      const Min_temp = document.getElementsByClassName("Min_temp");
      const Max_temp = document.getElementsByClassName("Max_temp");
      const Wind_speed = document.getElementsByClassName("Wind_speed");
      const Wind_degrees = document.getElementsByClassName("Wind_degrees");
      const Sunrise = document.getElementsByClassName("Sunrise");
      const Sunset = document.getElementsByClassName("Sunset");

      Temp[0].innerHTML = response.temp;

      Feels_like[0].innerHTML = response.feels_like;

      Humidity[0].innerHTML = response.humidity;

      Min_temp[0].innerHTML = response.min_temp;

      Max_temp[0].innerHTML = response.max_temp;

      Wind_speed[0].innerHTML = response.wind_speed;

      Wind_degrees[0].innerHTML = response.wind_degrees;

      Sunrise[0].innerHTML = response.sunrise;

      Sunset[0].innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const getCityWeather = (city, cityid) => {
  var parameters = [];

  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      var arr = [];
      arr[0] = response.cloud_pct;
      arr[1] = response.temp;
      arr[2] = response.feels_like;
      arr[3] = response.humidity;
      arr[4] = response.min_temp;
      arr[5] = response.max_temp;
      arr[6] = response.wind_speed;
      arr[7] = response.wind_degrees;
      arr[8] = response.sunrise;
      arr[9] = response.sunset;

      for (var i = 0; i < 10; i++) {
        parameters[i] = arr[i];
      }

      const city = document.getElementsByClassName(cityid);
      for (var i = 0; i < 10; i++) {
        console.log(city[i]);
        city[i].innerHTML = arr[i];
      }
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
Hyderabad.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Hyderabad");
});
Bangalore.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Bangalore");
});
Warangal.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Warangal");
});

getWeather("Suryapet");

let final = ["city1", "city2", "city3", "city4"];
let cities = ["Hyderabad", "Pune", "Chennai", "Mumbai"];

for (var i = 0; i < 4; i++) {
  getCityWeather(cities[i], final[i]);
}

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
