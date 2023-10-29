import { FORM_MAPPER} from "../constants";
import { createErrorElement, createServerMessage} from "./error";
import { createLabelElement } from "./label";
import { createInputElement } from "./input";


const addFormField = ({ 
    element = "input",
    inputType,
    labelText,
    id,
    form,
    value = "",
    rows,
    errorText,
    novalidate
  }) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('field-wrapper');
    if (labelText) wrapper.appendChild(createLabelElement({ inputId: id, text: labelText }));
    wrapper.appendChild(createInputElement({ element, type: inputType, id, value, rows, novalidate }));
    if (errorText) wrapper.appendChild(createErrorElement({ className: id, text: errorText}))
    form.appendChild(wrapper);
}

export const createForm = () => {
  const form = document.createElement('form');
  form.setAttribute("id", "form");
  FORM_MAPPER.forEach((field) => {
    addFormField({ ...field, form });
  })
  form.appendChild(createServerMessage());
  return form;
}
