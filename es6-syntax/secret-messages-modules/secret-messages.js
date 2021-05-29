/* secret-messages.js */
import {toggleHiddenElement} from '../modules/dom-functions-es6.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});