'use strict';

const pressed = [];
const secretCode = 'cornify';
const inpSecretCode = document.querySelector('input');
const btnImg = document.querySelector('.btn');
const pShow = document.querySelector('p');
let clock = null;

inpSecretCode.addEventListener('keyup', e => {
  let typeSC = inpSecretCode.value;
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
  setTimeout(() => {
    inpSecretCode.value = '';
  }, 4000);
});

btnImg.addEventListener('click', () => {
  pShow.style.display = 'block';
  if (clock === null) {
    clock = setTimeout(() => {
      pShow.style.display = 'none';
      clock = null;
    }, 2000);
  }
});
