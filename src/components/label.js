export const createLabelElement = ({ inputId, text }) => {
  const label = document.createElement('label');
  label.innerText = text;
  label.setAttribute("for", inputId);
  return label;
}