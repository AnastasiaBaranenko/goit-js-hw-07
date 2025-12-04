const text = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
text.addEventListener('input', event => {
  const valueEl = text.value.trim();

  if (valueEl === '' || valueEl === ' ') {
    return 'Anonymous';
  }
});
