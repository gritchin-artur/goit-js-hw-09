// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js.Напиши скрипт таймера,
//     который ведёт обратный отсчет до определенной даты.Такой таймер может использоваться в 
//     блогах и интернет - магазинах, страницах регистрации событий, во время технического 
//     обслуживания и т.д.Посмотри демо видео работы таймера.




// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
require('flatpickr/dist/themes/dark.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const div = document.querySelector('div.timer');
const allDiv = document.querySelectorAll('.field')
const inputCalendar = document.querySelector('input');
const startButton = document.querySelector('[data-start]');
const timerdDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');


allDiv[0].style.display = 'grid';
allDiv[1].style.display = 'grid';
allDiv[2].style.display = 'grid';
allDiv[3].style.display = 'grid';
inputCalendar.style.width = '200px'; 
inputCalendar.style.height = '40px';
inputCalendar.style.borderRadius = '10px';
startButton.style.width = '50px';
startButton.style.height = '50px';
startButton.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.gap = '20px';
div.style.fontSize = '40px';
timerdDays.style.textAlign = 'center';
timerHours.style.textAlign = 'center';
timerMinutes.style.textAlign = 'center';
timerSeconds.style.textAlign = 'center';

 let timer = null;
startButton.disabled = true;



startButton.addEventListener('click', onButtonClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
console.log(selectedDates[0])
    if (selectedDates[0] - options.defaultDate > 0) {
        startButton.disabled = false;
        inputCalendar.style.borderColor = '#44a832';
        startButton.style.backgroundColor = '#44a832';
        startButton.style.color = 'white';
    } else {
      startButton.disabled = true;
        Notify.failure('Please choose a date in the future', {
      });
    }
  },
};

const flapt = flatpickr('#datetime-picker', options);
 
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};


function timerDisplay(value) {
    return String(value).padStart(2, 0);
};

function onButtonClick() {
    const selectTimeDates = flapt.selectedDates[0];

  timer = setInterval(() => {
      const startTime = new Date();
      startButton.disabled = true;
    const countdown = selectTimeDates - startTime; 

    if (countdown < 0) {
        clearInterval(timer);
    }
    updateTimerFace(convertMs(countdown));
  }, 1000);
    startButton.style.backgroundColor = 'grey';
    timerSeconds.style.color = 'red';
    timerMinutes.style.color = '#3298a8';
    timerHours.style.color = '#3298a8';
    timerdDays.style.color = '#3298a8';
};




function updateTimerFace({ days, hours, minutes, seconds }) {
  timerdDays.textContent = timerDisplay(days);
  timerHours.textContent = timerDisplay(hours);
  timerMinutes.textContent = timerDisplay(minutes);
  timerSeconds.textContent = timerDisplay(seconds);
};

