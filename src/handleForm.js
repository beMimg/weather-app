import { getForecastDay, getInfo } from './getData';

const form = document.querySelector('form');
const location = document.getElementById('location');
const error = document.querySelector('.error');

export function handleForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationValue = location.value;
    const newLocationUrl = `https://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=${locationValue}&days=7&aqi=yes&alerts=no`;
    if (locationValue === '' || null) {
      error.classList.add('error-active');
      error.textContent = 'Please enter a valid europe country';
    } else {
      getInfo(newLocationUrl, locationValue);
      getForecastDay(newLocationUrl);
      error.classList.remove('error-active');
      error.textContent = ' ';
    }
    form.reset();
  });
}
