/* eslint-disable no-undef */
export function displayError(msg) {
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

export function handleTimeBackground(condition) {
  if (condition === 0) {
    document.body.classList.add('moon');
  } else {
    document.body.classList.remove('moon');
  }
}
