const currentInfo = document.querySelector('.current-info');
const dayInfo = document.querySelector('.day-info');
const dayDate = document.querySelector('.date');
const curiosityInfo = document.querySelector('.curiosity');
const footer = document.querySelector('.footer');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

async function getDataFrom(url) {
  const response = await fetch(url);
  const thisData = await response.json();
  return thisData;
}

export function getInfo(url, locationValue) {
  getDataFrom(url)
    .then((thisData) => {
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
    })
    .catch(() => {
      displayError(
        `Cant find "${locationValue}". Please make sure this is a legit location.`,
      );
    });
}

function displayError(msg) {
  const error = document.querySelector('.error');
  error.textContent = msg;
  error.classList.add('error-active');
  title.textContent = 'Globe Weather';
  subtitle.textContent = 'Your Global Weather Companion';
  currentInfo.className = 'current-info';
  currentInfo.innerHTML = '';
  dayDate.className = 'date';
  dayDate.innerHTML = '';
  dayInfo.className = 'day-info ';
  dayInfo.innerHTML = '';
  curiosityInfo.className = 'curiosity';
}

function handleTimeBackground(time) {
  console.log(time);
  if (time > '06:00' && time < '08:00') {
    document.body.classList.add('sunrise');
  } else if (time > '18:30' && time < '20:00') {
    document.body.classList.add('sunset');
  } else if (time > '23:00' && time > '0:00') {
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
  title.textContent = name;
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
  footer.innerHTML = ' ';
  getDataFrom(url).then((thisData) => {
    const date = thisData.forecast.forecastday[day].date;
    const sunrise = thisData.forecast.forecastday[day].astro.sunrise;
    const sunset = thisData.forecast.forecastday[day].astro.sunset;
    const maxTemp_c = thisData.forecast.forecastday[day].day.maxtemp_c;
    const maxTemp_f = thisData.forecast.forecastday[day].day.maxtemp_f;
    const minTemp_c = thisData.forecast.forecastday[day].day.mintemp_c;
    const minTemp_f = thisData.forecast.forecastday[day].day.mintemp_f;
    const condition = thisData.forecast.forecastday[day].day.condition.text;
    const conditionIcon = thisData.forecast.forecastday[day].day.condition.icon;
    const avgHumidity = thisData.forecast.forecastday[day].day.avghumidity;
    const maxWindKph = thisData.forecast.forecastday[day].day.maxwind_kph;
    const maxWindMph = thisData.forecast.forecastday[day].day.maxwind_mph;

    if (day === 0) {
      displayForecastForToday(
        sunrise,
        sunset,
        maxTemp_c,
        maxTemp_f,
        minTemp_c,
        minTemp_f,
      );
    } else if (day === 1 || day === 2 || day === 3) {
      displayForecastForDay(
        day,
        date,
        maxTemp_c,
        maxTemp_f,
        minTemp_c,
        minTemp_f,
        condition,
        conditionIcon,
        avgHumidity,
        maxWindKph,
        maxWindMph,
      );
    }
  });
}

function displayForecastForDay(
  day,
  date,
  maxTemp_c,
  maxTemp_f,
  minTemp_c,
  minTemp_f,
  condition,
  conditionIcon,
  avgHumidity,
  maxWindKph,
  maxWindMph,
) {
  curiosityInfo.classList.add('deactive');
  let dayContainer = document.createElement('div');
  dayContainer.className = 'day-container';
  dayContainer.innerHTML = `
  <div class="container-header">
    <img src="${conditionIcon}" alt="" />
    <h1>${condition}</h1>
  </div>
  <div class="main">
    <p>MAX: <strong> ${maxTemp_c}°C / ${maxTemp_f}°F </strong></p>
    <p>MIN: <strong>${minTemp_c}°C /${minTemp_f}°F</strong></p>
  <div class="main-row">
    <img src="/src/img/weather-windy.svg" class="img-weather" alt="" />
    <p>${maxWindKph}kph / ${maxWindMph}mph</p>
  </div>
  <div class="main-row">
    <img src="/src/img/water.svg" class="img-weather" alt="" />
    <p>${avgHumidity}%</p>
  </div>
  </div>
  <h3>${date}</h3>
  `;

  footer.appendChild(dayContainer);
}

function displayForecastForToday(
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
