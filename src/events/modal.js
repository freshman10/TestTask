export const addModalEvents = () => {
  toogleButtonEvent();
}

const toogleButtonEvent = () => {
  const buttons = document.querySelectorAll('.modal-button');
  const layer = document.querySelector('.layer');
  const main = document.querySelector('main');
  const modal = document.querySelector('.modal');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.toggle('open');
      layer.classList.toggle('open-layer');
      main.classList.toggle('block-scroll');
    });
  });
}