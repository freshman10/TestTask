import Inputmask from "inputmask";

export const setPhoneMask = (phoneId) => {
  const tel = document.querySelector(`#${phoneId}`);
  const im = new Inputmask({"mask": "375 (99) 999-9999"});
  im.mask(tel);
}