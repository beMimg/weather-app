const currentInfo = document.querySelector('.current-info');
const dayInfo = document.querySelector('.day-info');
const dayDate = document.querySelector('.date');

export const locationURL = {
  albania:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Albania&days=7&aqi=yes&alerts=no',
  andorra:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Andorra&days=7&aqi=yes&alerts=no',
  austria:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Austria&days=7&aqi=yes&alerts=no',
  belarus:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Belarus&days=7&aqi=yes&alerts=no',
  belgium:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Belgium&days=7&aqi=yes&alerts=no',
  bosnia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Bosnia&days=7&aqi=yes&alerts=no',
  bulgaria:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Bulgaria&days=7&aqi=yes&alerts=no',
  croatia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Croatia&days=7&aqi=yes&alerts=no',
  cyprus:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Cyprus&days=7&aqi=yes&alerts=no',
  czechrepublic:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Czech%20Republic&days=7&aqi=yes&alerts=no',
  denmark:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Denmark&days=7&aqi=yes&alerts=no',
  estonia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Estonia&days=7&aqi=yes&alerts=no',
  finland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Finland&days=7&aqi=yes&alerts=no',
  france:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=France&days=7&aqi=yes&alerts=no',
  germany:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Germany&days=7&aqi=yes&alerts=no',
  greece:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Greece&days=7&aqi=yes&alerts=no',
  hungary:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Hungary&days=7&aqi=yes&alerts=no',
  iceland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Iceland&days=7&aqi=yes&alerts=no',
  ireland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Ireland&days=7&aqi=yes&alerts=no',
  italy:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Italy&days=7&aqi=yes&alerts=no',
  latvia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Latvia&days=7&aqi=yes&alerts=no',
  liechtenstein:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Liechtenstein&days=7&aqi=yes&alerts=no',
  lithuania:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Lithuania&days=7&aqi=yes&alerts=no',
  luxembourg:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Luxembourg&days=7&aqi=yes&alerts=no',
  malta:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Malta&days=7&aqi=yes&alerts=no',
  moldova:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Moldova&days=7&aqi=yes&alerts=no',
  monaco:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Monaco&days=7&aqi=yes&alerts=no',
  montenegro:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Montenegro&days=7&aqi=yes&alerts=no',
  netherlands:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Netherlands&days=7&aqi=yes&alerts=no',
  northmacedonia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=North%20Macedonia&days=7&aqi=yes&alerts=no',
  norway:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Norway&days=7&aqi=yes&alerts=no',
  poland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Poland&days=7&aqi=yes&alerts=no',
  portugal:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Portugal&days=7&aqi=yes&alerts=no',
  romania:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Romania&days=7&aqi=yes&alerts=no',
  russia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Russia&days=7&aqi=yes&alerts=no',
  sanmarino:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=San%20Marino&days=7&aqi=yes&alerts=no',
  serbia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Serbia&days=7&aqi=yes&alerts=no',
  slovakia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Slovakia&days=7&aqi=yes&alerts=no',
  slovenia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Slovenia&days=7&aqi=yes&alerts=no',
  spain:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Spain&days=7&aqi=yes&alerts=no',
  sweden:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Sweden&days=7&aqi=yes&alerts=no',
  switzerland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Switzerland&days=7&aqi=yes&alerts=no',
  ukraine:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Ukraine&days=7&aqi=yes&alerts=no',
  unitedkingdom:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=United%20Kingdom&days=7&aqi=yes&alerts=no',
  vaticancity:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Vatican%20City&days=7&aqi=yes&alerts=no',
};

async function getDataFrom(url) {
  const response = await fetch(url);
  const thisData = await response.json();
  console.log(thisData);
  return thisData;
}

export function getInfo(url) {
  getDataFrom(url).then((thisData) => {
    let name = thisData.location.name;
    let country = thisData.location.country;
    let currentTemp_C = thisData.current.temp_c;
    let currentTemp_F = thisData.current.temp_f;
    let localTime = thisData.location.localtime;
    let localHour = localTime.substr(localTime.length - 5);
    let condition = thisData.current.condition.text;
    let conditionIcon = thisData.current.condition.icon;
    handleTimeBackground(localHour);
    displayInfo(
      name,
      country,
      currentTemp_C,
      currentTemp_F,
      localTime,
      condition,
      conditionIcon,
    );
  });
}

function handleTimeBackground(time) {
  if (time > '06:00' && time < '08:00') {
    document.body.classList.add('sunrise');
  } else if (time > '18:30' && time < '20:00') {
    document.body.classList.add('sunset');
  } else if (time > '23:00') {
    document.body.classList.add('moon');
  }
}
function displayInfo(
  name,
  country,
  currentTemp_C,
  currentTemp_F,
  localTime,
  condition,
  conditionIcon,
) {
  dayDate.textContent = `${localTime}`;
  dayDate.className = 'date active';
  dayInfo.className = 'day-info active';
  const title = document.getElementById('title');
  title.textContent = name;
  const subtitle = document.getElementById('subtitle');
  subtitle.textContent = country;
  currentInfo.className = `current-info active`;
  currentInfo.innerHTML = `
    <img src="${conditionIcon}" class="condition-icon" alt="">   
    <h1>${condition}</h1>
    <p>Current Temperature:</p>
    <h1>${currentTemp_C}°C</h1>
    <h1>${currentTemp_F}°F</h1>
  `;
}

export function getForecastFor(day, url) {
  dayInfo.innerHTML = ' ';
  getDataFrom(url).then((thisData) => {
    // const date = thisData.forecast.forecastday[day].date;
    const sunrise = thisData.forecast.forecastday[day].astro.sunrise;
    const sunset = thisData.forecast.forecastday[day].astro.sunset;
    const maxTemp_c = thisData.forecast.forecastday[day].day.maxtemp_c;
    const maxTemp_f = thisData.forecast.forecastday[day].day.maxtemp_f;
    const minTemp_c = thisData.forecast.forecastday[day].day.mintemp_c;
    const minTemp_f = thisData.forecast.forecastday[day].day.mintemp_f;

    displayForecastFor(
      sunrise,
      sunset,
      maxTemp_c,
      maxTemp_f,
      minTemp_c,
      minTemp_f,
    );
  });
}

function displayForecastFor(
  sunrise,
  sunset,
  maxTemp_c,
  maxTemp_f,
  minTemp_c,
  minTemp_f,
) {
  dayInfo.innerHTML = `
  <div class="row">
        <p>Sunrise:</p>
        <h1>${sunrise}</h1>
      </div>
      <div class="row">
        <p>Sunset:</p>
        <h1>${sunset}</h1>
      </div>
      <div class="row">
        <p>MAX:</p>
        <h1>${maxTemp_c}°C / ${maxTemp_f}°F</h1>
      </div>
      <div class="row">
        <p>MIN:</p>
        <h1>${minTemp_c}°C / ${minTemp_f}°F</h1>
      </div>
  `;
}
