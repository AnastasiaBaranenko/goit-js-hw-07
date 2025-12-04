let color = document.querySelector('body');
let button = document.querySelector('button');

button.addEventListener('click', event => {
  color.style.backgroundColor = getRandomHexColor();
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
