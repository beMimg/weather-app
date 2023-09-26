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
      let condition = thisData.current.condition.text;
      let conditionIcon = thisData.current.condition.icon;
      let isDay = thisData.current.is_day;
      handleTimeBackground(isDay);
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
  document.body.classList.remove('moon');
}

function handleTimeBackground(condition) {
  if (condition === 0) {
    document.body.classList.add('moon');
  } else {
    document.body.classList.remove('moon');
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
  title.textContent = country;
  subtitle.textContent = name;
  currentInfo.className = `current-info active`;
  currentInfo.innerHTML = `
    <div class="current-info-header">
      <img src="${conditionIcon}" class="condition-icon" alt="">   
      <h1>${condition}</h1>
    </div>
    <p>Current Temperature:</p>
    <h1>${currentTemp_C}°C</h1>
    <h1>${currentTemp_F}°F</h1>
  `;
}

export function getForecastDay(day, url) {
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
      displayForecastToday(
        sunrise,
        sunset,
        maxTemp_c,
        maxTemp_f,
        minTemp_c,
        minTemp_f,
        avgHumidity,
        maxWindKph,
        maxWindMph,
      );
    } else if (day === 1 || day === 2 || day === 3) {
      displayForecastDay(
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

function displayForecastDay(
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
    <h2>${condition}</h2>
  </div>
  <div class="container-main-horizontal">
    <p>MAX: <strong> ${maxTemp_c}°C / ${maxTemp_f}°F </strong></p>
    <p>MIN: <strong>${minTemp_c}°C /${minTemp_f}°F</strong></p>
  <div class="container-main-vertical">
    <div class="wind-png"></div>
    <p>${maxWindKph}kph / ${maxWindMph}mph</p>
  </div>
  <div class="container-main-vertical">
  <div class="water-png"></div>
  <p>${avgHumidity}%</p>
  </div>
  </div>
  <h3>${date}</h3>
  `;

  footer.appendChild(dayContainer);
}

function displayForecastToday(
  sunrise,
  sunset,
  maxTemp_c,
  maxTemp_f,
  minTemp_c,
  minTemp_f,
  avgHumidity,
  maxWindKph,
  maxWindMph,
) {
  dayInfo.innerHTML = `
      <div class="row">
        <p>Sunrise:</p>
        <h2>${sunrise}</h2>
      </div>
      <div class="row">
        <p>Sunset:</p>
        <h2>${sunset}</h2>
      </div>
      <div class="row">
        <p>MAX:</p>
        <h2>${maxTemp_c}°C / ${maxTemp_f}°F</h2>
      </div>
      <div class="row">
        <p>MIN:</p>
        <h2>${minTemp_c}°C / ${minTemp_f}°F</h2>
      </div>
      <div class="row">
      <div class="wind-png"></div>  
      <h2>${maxWindKph}kph / ${maxWindMph}mph</h2>
      </div>
      <div class="row">
      <div class="water-png"></div>
      <h2>${avgHumidity}%</h2>
      </div>
  `;
}
