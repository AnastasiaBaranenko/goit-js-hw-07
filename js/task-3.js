const text = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
text.addEventListener('input', event => {
  const valueEl = text.value.trim();

  textEl.textContent = valueEl;

  if (valueEl === '') {
    return (textEl.textContent = `Anonymous`);
  }
});
