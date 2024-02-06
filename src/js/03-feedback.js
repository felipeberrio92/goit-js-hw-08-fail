
import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const loadFormState = () => {
  const savedFormState = localStorage.getItem('feedback-form-state');

  if (savedFormState) {
    const parsedFormState = JSON.parse(savedFormState);
    emailInput.value = parsedFormState.email;
    messageInput.value = parsedFormState.message;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formState);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

const handleInput = throttle(() => {
  saveFormState();
}, 500);

emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

loadFormState();
const hello = 1;