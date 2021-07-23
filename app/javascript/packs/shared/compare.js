import { getCookie, addCookie } from '../shared/cookies_manager'

let localCookies = getCookie('compareItems');
let arrayOfIds = localCookies ? JSON.parse(localCookies) : [];

// Function for search of elements
let each = (elems, fn) => {
  let i = -1;
  while(++i < elems.length){
    fn(elems[i])
  }
}

// Removes or deletes gived class from gived  element by action (add or remove)
let addDeleteClass = (action, element, className) => {
  switch (action) {
    case 'add':
      element.classList.add(className);
      break;
    case 'remove':
      element.classList.remove(className);
      break;
  }
}

// Adds mechanizm selecting items for compare, saves selected items using cookies
let addCompare = (elements, selectionClass, idStorage) => {
  each(elements, element => {
    if (!arrayOfIds.includes(parseInt(element.getAttribute(idStorage)))) {
      addDeleteClass('remove', element, selectionClass);
    } else {
      addDeleteClass('add', element, selectionClass);
    }

    element.addEventListener('click', event => {
      let dataAttribute = parseInt(element.getAttribute(idStorage));

      if (!arrayOfIds.includes(dataAttribute)) {
        arrayOfIds.push(parseInt(dataAttribute));
        addDeleteClass('add', element, selectionClass);
      } else {
        let index = arrayOfIds.indexOf(dataAttribute);

        arrayOfIds.splice(index, 1);
        addDeleteClass('remove', element, selectionClass);
      }
      addCookie('compareItems', `[${arrayOfIds}]`);
    });
  });
}

export { addCompare }
