export const createErrorElement = ({ className, text }) => {
  const error = document.createElement('span');
  error.innerText = text;
  error.classList.add("error-message", className, 'hidden');
  return error;
}

export const createServerMessage = () => {
  const message = document.createElement('span');
  message.classList.add('hidden', 'server-message');
  return message;
}