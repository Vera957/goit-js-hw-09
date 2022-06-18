function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
console.log(start, stop);
start.addEventListener('click', changeBodyColor);
stop.addEventListener('click', stopChangingBodyColor);
let timerId = null;

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
