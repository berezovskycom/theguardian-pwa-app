require('../sass/style.sass');

import { CreateEl } from './createDomElement.js';

const Header = new CreateEl('header', 'header', '', '', '', 'body');
Header.init();
Header.addClassName('header-main');

let arr = ['My Account', 'Likes', 'Chat'];

arr.map(el => 
  new CreateEl(
    'a', 
    'header__child', 
    'href', 'https://www.google.com', 
    el, '.header').init());
