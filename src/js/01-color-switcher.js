const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let interval = null;
let isActive = false;

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', onStopColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  interval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.btnStart.disadled = true;
}

function onStopColor() {
  clearInterval(interval);
  refs.btnStop.disadled = false;
  isActive = false;
}
