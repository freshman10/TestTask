import { FORM_MAPPER } from "../constants";
import { sendRegistrationData } from "../requests/requests";

const handleSubmit = async (data) => {
  const response = await sendRegistrationData(data);
  const message = document.querySelector('.server-message');
  message.innerText = response.message;
  message.classList.remove('hidden');
  message.classList.add(`${response.status}-message`)
  if (response.status === 'success') form.reset();
}

export const addFormEvents = (formId) => {
  const form = document.querySelector(`#${formId}`);
  addFormSubmitCheck(form);
  addFormInputChange();
}

const addFormInputChange = () => {
  FORM_MAPPER.forEach(({ id }) => {
    const input = document.querySelector(`#${id}`);
    const message = document.querySelector(`.server-message`);
    input.addEventListener("input", () => {
      toggleError(id, input, false);
      message.classList.add('hidden');
      message.classList.remove('error-message', 'success-message');
    })
  });
}

const addFormSubmitCheck = (form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {};
    let hasError = false;
    FORM_MAPPER.forEach(({ id, shouldCheckValidity, regExp, minLength }) => {
      if (shouldCheckValidity) {
        const formField = document.querySelector(`#${id}`);
        const { value } = formField;
        data[id] = value;
        const isRegExpCheckPassed = regExp ? regExp.test(value) : true;
        const isLengthCheckPassed = minLength ? value.length >= minLength: true;
        if (isRegExpCheckPassed && isLengthCheckPassed) return;
        toggleError(id, formField, true);
        hasError = true;
      }
    });

    if (!hasError) {
      handleSubmit(data);
    }
  });
}

const toggleError = (fieldId, input, isError) => {
  const error = document.querySelector(`.error-message.${fieldId}`);
  if (isError) {
    error.classList.remove('hidden');
    input.classList.add('error');
  } else {
    error.classList.add('hidden');
    input.classList.remove('error');
  }
}