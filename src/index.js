import { createForm } from "./components/form";
import { createModalLayer, createModalWindow, createOpenModalWindonButton } from "./components/modal";
import { addFormEvents } from "./events/form";
import { setPhoneMask } from "./events/mask";
import { addModalEvents } from "./events/modal";
import "./style.scss";

function root() {
  const wrapper = document.createElement('main');
  wrapper.appendChild(createForm());
  wrapper.appendChild(createModalWindow())
  wrapper.appendChild(createOpenModalWindonButton());
  wrapper.appendChild(createModalLayer());
  return wrapper;
}

document.body.appendChild(root());
setPhoneMask('tel');
addFormEvents('form');
addModalEvents();

