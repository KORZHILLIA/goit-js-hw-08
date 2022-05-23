const form = document.querySelector('feedback-form');

form.addEventListener('input', feedbackMemoriser);

function feedbackMemoriser(event) {
  const { email, message } = form.elements;
  const feedbackObj = {};
}
