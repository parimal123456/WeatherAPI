const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a517037af3msh99f99cb08e434ecp1f6f17jsn951a1c0b3193",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
    cityName.innerHTML=city;
fetch(url+city, options)
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

    for(var i=0;i<Cloud_pct.length;i++){
    Cloud_pct[i].innerHTML = response.cloud_pct;}
    for(var i=0;i<Temp.length;i++){
    Temp[i].innerHTML = response.temp;}
    for(var i=0;i<Feels_like.length;i++){
    Feels_like[i].innerHTML = response.feels_like;}
    for(var i=0;i<Humidity.length;i++){
    Humidity[i].innerHTML = response.humidity;}
    for(var i=0;i<Min_temp.length;i++){
    Min_temp[i].innerHTML = response.min_temp;}
    for(var i=0;i<Max_temp.length;i++){
    Max_temp[i].innerHTML = response.max_temp;}
    for(var i=0;i<Wind_speed.length;i++){
    Wind_speed[i].innerHTML = response.wind_speed;}
    for(var i=0;i<Wind_degrees.length;i++){
    Wind_degrees[i].innerHTML = response.wind_degrees;}
    for(var i=0;i<Sunrise.length;i++){
    Sunrise[i].innerHTML = response.sunrise;}
    for(var i=0;i<Sunset.length;i++){
    Sunset[i].innerHTML = response.sunset;}

  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
Hyderabad.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather('Hyderabad')
})
Bangalore.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather('Bangalore')
})
Warangal.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather('Warangal')
})

getWeather("Suryapet")

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
