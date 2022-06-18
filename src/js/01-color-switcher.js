function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

start.addEventListener('click', changeBodyColor);
stop.addEventListener('click', stopChangingBodyColor);

function changeBodyColor() {
  timerId = setInterval(() => {
    setColor();
  }, 1000);
  start.setAttribute('disabled', 'disabled');
}

function stopChangingBodyColor() {
  clearInterval(timerId);
  start.removeAttribute('disabled');
}

function setColor() {
  body.style.backgroundColor = getRandomHexColor();
}
