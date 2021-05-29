/* secret-image.js */
import {changeToFunkyColor, toggleHiddenElement} from '../modules/dom-functions-es6.js';

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(buttonElement);
});