import { locationURL } from './getData';

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
    } else if (locationURL.hasOwnProperty(locationValue)) {
      console.log('true');
      // display this next
    } else {
      error.classList.remove('error-active');
      error.textContent = '';
    }
  });
}

handleForm();
console.log(locationURL);
