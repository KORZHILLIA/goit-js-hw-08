import { save, load } from './localStorageServices';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const localStorageCurrentContent = load(localStorageKey);

if (localStorageCurrentContent) {
  const parsedObj = load(localStorageKey);
  const parsedObjKeys = Object.keys(parsedObj);
  parsedObjKeys.forEach(key => {
    form.elements[key].value = parsedObj[key];
  });
}
form.addEventListener('input', feedbackMemoriser);
form.addEventListener('submit', feedbackEraser);

function feedbackMemoriser() {
  const {
    email: { value: email },
    message: { value: message },
  } = form.elements;
  const feedbackObj = { email, message };
  save(localStorageKey, feedbackObj);
}

function feedbackEraser(event) {
  event.preventDefault();
  console.log(load(localStorageKey));
  localStorage.clear();
  form.reset();
}
