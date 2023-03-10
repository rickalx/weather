import { weather_data } from "./data.js";
var Ciudad = {};
var ciudades = {};
var text = "";
let loadDayForecastData = (b) => {
    console.log("desde loadDayForecastData")
    console.log(b)
    let {
    city,
    date,
    mintemperature,
    maxtemperature,
    cloudiness,
    wind,
    rainfall,
    forecast_today,
  } = b;

  let guayaquilmsg1 = `<h5 id="city" class="text-golden">${city}</h5>`;
  let guayaquilCity = document.getElementById("city");
  guayaquilCity.innerHTML = guayaquilmsg1;

  let guayaquilmsg2 = `<h5 id="date" class="text-golden text-sm  opacity-8 mb-0"> ${date}</h5>`;
  let guayaquilDate = document.getElementById("date");
  guayaquilDate.innerHTML = guayaquilmsg2;

  let guayaquilmsg3 = `<span id="maxtemperature">${maxtemperature}</span>`;
  let guayaquilMaxTemperature = document.getElementById("maxtemperature");
  guayaquilMaxTemperature.innerHTML = guayaquilmsg3;

  let guayaquilmsg4 = `<span id="mintemperature" class="opacity-6 mx-2"> ${mintemperature}</span>`;
  let guayaquilMinTemperature = document.getElementById("mintemperature");
  guayaquilMinTemperature.innerHTML = guayaquilmsg4;

  let guayaquilmsg5 = `<h6 id="cloudiness" class="text-golden mb-0">${cloudiness}</h6>`;
  let guayaquilCloudiness = document.getElementById("cloudiness");
  guayaquilCloudiness.innerHTML = guayaquilmsg5;

  let guayaquilmsg6 = `<h6 id="wind" class="text-golden mb-0">${wind}</h6>`;
  let guayaquilWind = document.getElementById("wind");
  guayaquilWind.innerHTML = guayaquilmsg6;

  let guayaquilmsg7 = `<h6 id="rainfall" class="text-golden mb-0">${rainfall}</h6>`;
  let guayaquilRainfall = document.getElementById("rainfall");
  guayaquilRainfall.innerHTML = guayaquilmsg7;

  //forecast_today tarde

  var { lapse, text, temperature, forecast, icon } =
    b.forecast_today[0];

  let guayaquilmsg8 = `<i id="late_icon" class="material-icons opacity-10">${icon}</i>`;
  let lateIcon = document.getElementById("late_icon");
  lateIcon.innerHTML = guayaquilmsg8;

  let guayaquilmsg9 = `<h3 id="late_temperature" class="text-center mb-0">${temperature}</h3>`;
  let late_temperature = document.getElementById("late_temperature");
  late_temperature.innerHTML = guayaquilmsg9;

  let guayaquilmsg10 = `<span id="late_forecast" class="text-md">${forecast}</span>`;
  let late_forecast = document.getElementById("late_forecast");
  late_forecast.innerHTML = guayaquilmsg10;

  let guayaquilmsg11 = `<h4 id="late_text" class="mb-0 text-md">${text}</h4>`;
  let late_text = document.getElementById("late_text");
  late_text.innerHTML = guayaquilmsg11;

  //forecast_today noche

  var { lapse, text, temperature, forecast, icon } =
    b.forecast_today[1];

  let guayaquilmsg12 = `<i id="late_icon" class="material-icons opacity-10">${icon}</i>`;
  let nightIcon = document.getElementById("night_icon");
  nightIcon.innerHTML = guayaquilmsg12;

  let guayaquilmsg13 = `<h3 id="late_temperature" class="text-center mb-0">${temperature}</h3>`;
  let night_temperature = document.getElementById("night_temperature");
  night_temperature.innerHTML = guayaquilmsg13;

  let guayaquilmsg14 = `<span id="late_forecast" class="text-md">${forecast}</span>`;
  let night_forecast = document.getElementById("night_forecast");
  night_forecast.innerHTML = guayaquilmsg14;

  let guayaquilmsg15 = `<h4 id="late_text" class="mb-0 text-md">${text}</h4>`;
  let night_text = document.getElementById("night_text");
  night_text.innerHTML = guayaquilmsg15;
};

let loadWeekForecastData = (a) => {
  //console.log(weather_data[0].forecast_week)
  console.log(a);
  let forecast_week_gye = "";
  for (let item of a.forecast_week) {
    //console.log(item)
    let { day, text, date, temperature, icon } = item; //weather_data[0].forecast_week[0]
    //console.log(day, text, date, temperature, icon)
    let { min, max } = temperature;

    forecast_week_gye += `
    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
        <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
        <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
        <span class="font-weight-bold text-dark mx-2">${max}</span>|<span class="text-dark mx-2">${min}</span>
        <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
    </li>
    `;
  }
  let guayaquilWeekforecast = document.getElementsByClassName("list-group");
  guayaquilWeekforecast[0].innerHTML = forecast_week_gye;
  //console.log("forecast_week_gye")
  //console.log(forecast_week_gye)
};

addEventListener("DOMContentLoaded", (event) => {
  for (Ciudad of weather_data) {
    let cities = "";
    cities += `<option class="dropdown-item" value="guayaquil">${Ciudad.city}</option>`;
    let btnSelect = document.getElementById("dropdownMenuButton");
    btnSelect.innerHTML += cities;
    ciudades[Ciudad.city] = Ciudad;
  }

  var seleccionado = document.getElementById("dropdownMenuButton");
  function onChange() {
    text = seleccionado.options[seleccionado.selectedIndex].text;
    
    loadDayForecastData(ciudades[text]);
  }
  seleccionado.onchange = onChange;
  onChange();

  let btnCargar = document.getElementById("loadinfo");
  btnCargar.addEventListener("click", (e) => {
    console.log("boton cargar ");
    loadWeekForecastData(ciudades[text]);

  });
});
