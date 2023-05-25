// Напиши скрипт, который при сабмите формы вызывает функцию
// createPromise(position, delay) столько раз, сколько ввели в поле amount.
// При каждом вызове передай ей номер создаваемого промиса(position) и 
// задержку учитывая введенную пользователем первую задержку(delay) и
// шаг(step).

// Дополни код функции createPromise так, чтобы она возвращала один промис,
//   который выполянется или отклоняется через delay времени.Значением 
//   промиса должен быть объект, в котором будут свойства position и 
//   delay со значениями одноименных параметров.Используй начальный код 
//   функции для выбора того, что нужно сделать с промисом - выполнить 
//   или отклонить.


import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const greateButton = document.querySelector('[type="submit"]');

form.style.display = 'flex';
form.style.gap = '30px';
form.style.alignItems = 'center';
greateButton.style.height = '40px';
greateButton.style.borderRadius = '5px';
greateButton.style.backgroundColor = '#44a832';

form.addEventListener('submit', onCreatePromises);

 const delay = Number.parseInt(delayInput.value);
const step = Number.parseInt(stepInput.value);
  
function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      }
      rej({ position, delay });
    }, delay);
  });

};


function onCreatePromises(event) {
  event.preventDefault();

  for (let i = 0; i < amountInput.value; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
  form.reset();
};








