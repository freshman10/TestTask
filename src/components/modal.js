export const createModalWindow = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const title = document.createElement('h1');
  title.innerText = 'Congratulation!'
  const description = document.createElement('span');
  description.innerText = 'This condidate have made a model window. Cool!'
  const closeButton = document.createElement('button');
  closeButton.classList.add('modal-button', 'close-button');
  closeButton.innerText = 'Close';
  modal.appendChild(title);
  modal.appendChild(description);
  modal.appendChild(closeButton);
  return modal;
}

export const createOpenModalWindonButton = () => {
  const button = document.createElement('button');
  button.classList.add('modal-button', 'open-button');
  button.innerText = 'Open';
  return button;
}

export const createModalLayer = () => {
  const layer = document.createElement('div');
  layer.classList.add('layer');
  return layer;
}
