export const createInputElement = ({element, type = "text", id, value, rows, novalidate }) => {
  const input = document.createElement(element);
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("value", value);
  if (rows) input.setAttribute("rows", rows);
  if (novalidate) input.setAttribute("formnovalidate", "formnovalidate");
  return input;
}

export const createTextAreaElement = ( { id, value } ) => {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", id);
  textarea.setAttribute("value", value);
  return textarea;
}