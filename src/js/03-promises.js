import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const btn = document.querySelector('button');
let amount = 0;
delay = 0;
step = 0;



const createPromise = (position, delay) =>{
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

btn.addEventListener('click', onSubmit);
form.addEventListener('input', picker);

function onSubmit(e) {
  e.preventDefault();
  console.log(
    `picker got values: amount: ${amount}, delay: ${delay}, step: ${step}`
  );
  for (let i = 0; i < amount; i++) {
    let position = i + 1;
    console.log(`call ${i} times, position: ${position}, delay: ${delay}`);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 5000,
            useIcon: false,
          }
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 5000,
            useIcon: false,
          }
        );
      });
        delay = delay + step;
  } form.reset();
}

function picker(e) {
  amount = Number(e.currentTarget.elements.amount.value);
  delay = Number(e.currentTarget.elements.delay.value);
  step = Number(e.currentTarget.elements.step.value);
  /*console.log(
    `picker got values: amount:${amount}, delay:${delay}, step${step}`
  );*/
}

