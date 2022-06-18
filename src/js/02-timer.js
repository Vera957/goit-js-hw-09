import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const start = document.querySelector('button[data-start]');
start.setAttribute('disabled', 'disabled');

const elemsToFill = document.querySelectorAll('.value');

let time = null;

//const flatpi
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr('input', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //in past date
    if (selectedDates[0] - this.config.defaultDate < 0) {
      //window.alert('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future', {
        width: '360px',
        svgSize: '3000px',
        position: 'right-top',
      });  
    } //in future date
    else {
      start.removeAttribute('disabled');
      const ms = selectedDates[0] - this.config.defaultDate;
      time = selectedDates[0] - this.config.defaultDate;
      console.log(time);
      return time;
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function padStart(obj1, obj2) {
  const val = Object.values(obj2);
  obj1.forEach((e, i) => {
    if (val[i] < 10) {
      e.textContent = '0' + val[i];
    } else {
      e.textContent = val[i];
    }
  });
}

start.addEventListener('click', addLeadingZero);

function addLeadingZero(ms) {
  setInterval(() => {
    time = time - 1000;
    if (time > 0) {
      padStart(elemsToFill, convertMs(time));
    }
    return;
  }, 1000);
}
Notiflix.Notify.init({
  width: '300px',
  position: 'right-bottom',
  closeButton: false,
});
