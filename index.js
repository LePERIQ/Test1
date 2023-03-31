const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
    if (seconds === 0) return;
    else {
      setInterval(() => {
        const hours = Math.floor(seconds / 3600)
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((seconds % 3600) / 60)
          .toString()
          .padStart(2, "0");
        const sec = ((seconds % 3600) % 60).toString().padStart(2, "0");
        timerEl.innerHTML = `${hours}:${minutes}:${sec}`;
        seconds -= 1
      }, 1000);
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
    let inputValue = inputEl.value;
  const clearInputValue = inputValue
    .split("")
    .filter((item) => (!isNaN(item) ? item : null))
    .join("");
  inputEl.value = clearInputValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
