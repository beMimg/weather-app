import { getForecastFor, getInfo, locationURL } from './getData';

export function handleForm() {
  const form = document.querySelector('form');
  const location = document.getElementById('location');
  const error = document.querySelector('.error');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationValue = location.value.toLowerCase();
    if (locationValue === '' || null) {
      error.classList.add('error-active');
      error.textContent = 'Please enter a valid europe country';
      // eslint-disable-next-line no-prototype-builtins
    } else if (locationURL.hasOwnProperty(locationValue)) {
      const newLocationUrl = locationURL[locationValue];
      getInfo(newLocationUrl);
      getForecastFor(0, newLocationUrl); //THIS WILL IN THE FUTURE CHANGE THE DATE. 0 IS DEFAULT
    } else {
      error.classList.remove('error-active');
      error.textContent = '';
    }
    form.reset();
  });
}

handleForm();
