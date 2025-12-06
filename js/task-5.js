let colorEl = document.querySelector('body');
let color = document.querySelector('.color');
let button = document.querySelector('.change-color');

button.addEventListener('click', event => {
  const changeColor = getRandomHexColor();
  colorEl.style.backgroundColor = changeColor;
  color.textContent = changeColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
