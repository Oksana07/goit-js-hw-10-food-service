import createItemsEl from '../templates/items-serves.hbs';
import menu from '../menu.json';


const galleryUl = document.querySelector(".js-menu");

export function createElement () {
    return menu.map(createItemsEl).join('');
      }

      const menuItem = createElement();

      galleryUl.insertAdjacentHTML('beforeend', menuItem);

console.log(galleryUl)