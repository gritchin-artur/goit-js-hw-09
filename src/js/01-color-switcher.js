// Задание 1 - переключатель цветов

// Выполняй это задание в файлах 01 - color - switcher.html и
// 01 - color - switcher.js.Посмотри демо видео работы переключателя.

// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду 
// меняет цвет фона < body > на случайное значение используя инлайн
// стиль.При нажатии на кнопку «Stop», изменение цвета фона должно
// останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка «Start» 
// была не активна(disabled).
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const fonWall = document.querySelector('body');
console.log(startButton);
console.log(stopButton);
console.log(fonWall);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let timerId = null;
stopButton.disabled = true;

startButton.addEventListener('click', () => {
    if ('click') {
    timerId = setInterval(() => {
        fonWall.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000); 
        startButton.disabled = true;
        stopButton.disabled = false;
    };

});
stopButton.addEventListener("click", () => {
    clearInterval(timerId);
stopButton.disabled = true;
    startButton.disabled = false;
});

 
console.log(startButton);