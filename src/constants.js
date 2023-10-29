export const SERVER_URL = 'http://localhost:9090';
export const FORM_MAPPER = [
  {
    inputType: 'text',
    labelText: 'User name:',
    id: 'name',
    errorText: "Name should contain only alphabets and be non empty",
    regExp: /^[a-zA-Z\s]+$/,
    minLength: 3,
    shouldCheckValidity: true,
  },
  {
    inputType: 'email',
    labelText: 'E-mail:',
    id: 'email', 
    errorText: "E-mail is invalid",
    regExp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    shouldCheckValidity: true,
  },
  {
    inputType: 'tel',
    labelText: 'Phone:',
    id: 'tel',
    errorText: "Phone is invalid",
    regExp: /^[0-9]{3}[-. ]?\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    shouldCheckValidity: true,
  },
  {
    element: 'textarea',
    inputType: 'textarea',
    labelText: 'Message:',
    id: 'message',
    errorText: "Message should be non empty",
    rows: 4,
    minLength: 1,
    shouldCheckValidity: true,
  },
  {
    inputType: 'submit',
    value: 'Submit',
    novalidate: true,
    id: 'submit-button'
  }
];