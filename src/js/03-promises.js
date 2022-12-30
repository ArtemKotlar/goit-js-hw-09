import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
            timeout: 4000,
            width: '300px',
          })
        );
      } else {
        reject(
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
            timeout: 4000,
            width: '300px',
          })
        );
      }
    }, delay);
  });
}

function handelSubmit(evt) {
  evt.preventDefault();
  const formEl = evt.currentTarget.elements;
  let delay = +formEl.delay.value;
  let step = +formEl.step.value;
  let amount = +formEl.amount.value;

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(value => value)
      .catch(error => error);
    delay += step;
  }
}

refs.form.addEventListener('submit', handelSubmit);
