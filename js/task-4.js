const formRegistration = document.querySelector('form');

formRegistration.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert(`All form fields must be filled in`);
  } else {
    form.reset();
    console.log({ email, password });
  }
}
