import { weather_data } from './data.js';

let loadDayForecastData = () => {
	let [guayaquil, ambato, tena] = weather_data

    let {city, date, mintemperature, maxtemperature, cloudiness, wind, rainfall, forecast_today} = guayaquil

    let guayaquilmsg1 = `<h5 id="city" class="text-golden">${city}</h5>`;
    let guayaquilCity = document.getElementById('city');
    guayaquilCity.innerHTML = guayaquilmsg1;

    let guayaquilmsg2 = `<h5 id="date" class="text-golden text-sm  opacity-8 mb-0"> ${date}</h5>`;
    let guayaquilDate = document.getElementById('date');
    guayaquilDate.innerHTML = guayaquilmsg2;
    
    let guayaquilmsg3 = `<span id="maxtemperature">${maxtemperature}</span>`;
    let guayaquilMaxTemperature = document.getElementById('maxtemperature');
    guayaquilMaxTemperature.innerHTML = guayaquilmsg3;

    let guayaquilmsg4 = `<span id="mintemperature" class="opacity-6 mx-2"> ${mintemperature}</span>`
    let guayaquilMinTemperature = document.getElementById('mintemperature');
    guayaquilMinTemperature.innerHTML = guayaquilmsg4;

    let guayaquilmsg5 = `<h6 id="cloudiness" class="text-golden mb-0">${cloudiness}</h6>`
    let guayaquilCloudiness = document.getElementById('cloudiness');
    guayaquilCloudiness.innerHTML = guayaquilmsg5;

    let guayaquilmsg6 = `<h6 id="wind" class="text-golden mb-0">${wind}</h6>`
    let guayaquilWind = document.getElementById('wind');
    guayaquilWind.innerHTML = guayaquilmsg6;

    let guayaquilmsg7 = `<h6 id="rainfall" class="text-golden mb-0">${rainfall}</h6>`
    let guayaquilRainfall = document.getElementById('rainfall');
    guayaquilRainfall.innerHTML = guayaquilmsg7;

    //forecast_today tarde
    let {lapse, text, temperature, forecast, icon} = weather_data[0].forecast_today[0]
    console.log(weather_data[0].forecast_today[0])
    let guayaquilmsg8 = `<i id="late_icon" class="material-icons opacity-10">${icon}</i>`
    let lateIcon = document.getElementById('late_icon')
    lateIcon.innerHTML = guayaquilmsg8

    let guayaquilmsg9 = `<h3 id="late_temperature" class="text-center mb-0">${temperature}</h3>`
    let late_temperature = document.getElementById('late_temperature')
    late_temperature.innerHTML = guayaquilmsg9
    
    let guayaquilmsg10 = `<span id="late_forecast" class="text-md">${forecast}</span>`
    let late_forecast = document.getElementById('late_forecast')
    late_forecast.innerHTML = guayaquilmsg10

    let guayaquilmsg11 = `<h4 id="late_text" class="mb-0 text-md">${text}</h4>`
    let late_text = document.getElementById('late_text')
    late_text.innerHTML = guayaquilmsg11

}

let loadWeekForecastData = () => {
	/*console.log(weather_data[0].forecast_week)
    for (let item of weather_data[0].forecast_week) {
        console.log(item)*/
	let [day, text, date, temperature, icon] = weather_data[0].forecast_week
    console.log(day, text, date, temperature, icon)
    let {weekMintemperature, weekMaxTemperature} = temperature
    console.log(temperature.min, temperature.max)
    let forecast_week_gye = `
    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
        <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
        <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
        <span class="font-weight-bold text-dark mx-2">${weekMaxTemperature}</span>|<span class="text-dark mx-2">${weekMintemperature}</span>
        <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
    </li>
    `
    let guayaquilWeekforecast = document.getElementsByClassName('list-group');
    guayaquilWeekforecast.innerHTML += forecast_week_gye;
    console.log(guayaquilWeekforecast)
    
}



loadDayForecastData();
loadWeekForecastData();