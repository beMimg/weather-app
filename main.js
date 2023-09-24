/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcnR1Z2FsVVJMID1cbiAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPVBvcnR1Z2FsJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubyc7XG5jb25zdCBzcGFpblVSTCA9XG4gICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1TcGFpbiZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbSh1cmwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCB0aGlzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHRoaXNEYXRhO1xufVxuXG5mdW5jdGlvbiBnZXRJbmZvKHVybCkge1xuICBnZXREYXRhRnJvbSh1cmwpLnRoZW4oKHRoaXNEYXRhKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXNEYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY29uc3QgY291bnRyeSA9IHRoaXNEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgY29uc3QgbGFzdFVwZGF0ZSA9IHRoaXNEYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wX0MgPSB0aGlzRGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICBjb25zdCBjdXJyZW50VGVtcF9GID0gdGhpc0RhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgcmV0dXJuIG5hbWUsIGNvdW50cnksIGxhc3RVcGRhdGUsIGN1cnJlbnRUZW1wX0MsIGN1cnJlbnRUZW1wX0Y7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3RGb3IoZGF5LCB1cmwpIHtcbiAgZ2V0RGF0YUZyb20odXJsKS50aGVuKCh0aGlzRGF0YSkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRhdGU7XG4gICAgY29uc3Qgc3VucmlzZSA9IHRoaXNEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uYXN0cm8uc3VucmlzZTtcbiAgICBjb25zdCBzdW5zZXQgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmFzdHJvLnN1bnNldDtcbiAgICBjb25zdCBtYXhUZW1wX2MgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5tYXh0ZW1wX2M7XG4gICAgY29uc3QgbWF4VGVtcF9mID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWF4dGVtcF9mO1xuICAgIGNvbnN0IG1pblRlbXBfYyA9IHRoaXNEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1pbnRlbXBfYztcbiAgICBjb25zdCBtaW5UZW1wX2YgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5taW50ZW1wX2Y7XG5cbiAgICByZXR1cm4gZGF0ZSwgc3VucmlzZSwgc3Vuc2V0LCBtYXhUZW1wX2MsIG1heFRlbXBfZiwgbWluVGVtcF9jLCBtaW5UZW1wX2Y7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9