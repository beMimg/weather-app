const portugalURL =
  'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Portugal&days=7&aqi=yes&alerts=no';
const spainURL =
  'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Spain&days=7&aqi=yes&alerts=no';

async function getDataFrom(url) {
  const response = await fetch(url);
  const thisData = await response.json();
  return thisData;
}

function getInfo(url) {
  getDataFrom(url).then((thisData) => {
    const name = thisData.location.name;
    const country = thisData.location.country;
    const lastUpdate = thisData.current.last_updated;
    const currentTemp_C = thisData.current.temp_c;
    const currentTemp_F = thisData.current.temp_f;
    return name, country, lastUpdate, currentTemp_C, currentTemp_F;
  });
}
function getForecastFor(day, url) {
  getDataFrom(url).then((thisData) => {
    const date = thisData.forecast.forecastday[day].date;
    const sunrise = thisData.forecast.forecastday[day].astro.sunrise;
    const sunset = thisData.forecast.forecastday[day].astro.sunset;
    const maxTemp_c = thisData.forecast.forecastday[day].day.maxtemp_c;
    const maxTemp_f = thisData.forecast.forecastday[day].day.maxtemp_f;
    const minTemp_c = thisData.forecast.forecastday[day].day.mintemp_c;
    const minTemp_f = thisData.forecast.forecastday[day].day.mintemp_f;

    return date, sunrise, sunset, maxTemp_c, maxTemp_f, minTemp_c, minTemp_f;
  });
}
