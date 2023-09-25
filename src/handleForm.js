import { getForecastFor, getInfo } from './getData';

export function handleForm() {
  const form = document.querySelector('form');
  const location = document.getElementById('location');
  const error = document.querySelector('.error');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationValue = location.value;
    if (locationValue === '' || null) {
      error.classList.add('error-active');
      error.textContent = 'Please enter a valid europe country';
      // eslint-disable-next-line no-prototype-builtins
    } else {
      const newLocationUrl = `http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=${locationValue}&days=7&aqi=yes&alerts=no`;
      getInfo(newLocationUrl);
      getForecastFor(0, newLocationUrl);
      getForecastFor(1, newLocationUrl);
      getForecastFor(2, newLocationUrl);
      getForecastFor(3, newLocationUrl);
      error.classList.remove('error-active');
      error.textContent = ' ';
    }
    // else if (!locationURL.hasOwnProperty(locationValue)) {
    //   error.classList.add('error-active');
    //   error.textContent = `${locationValue} is not an European country`;
    // }
    form.reset();
  });
}

handleForm();
