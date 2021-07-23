import { getCookie } from '../shared/cookies_manager'

let product = document.getElementsByClassName('compare_button')[0];
let localCookies = getCookie('compareItems');
let parsedCookie = localCookies ? JSON.parse(localCookies) : [];
let arrayOfIds = parsedCookie;

if (!arrayOfIds.includes(parseInt(product.getAttribute('data-attribute-id')))) {
  product.classList.remove('selected_compare')
} else {
  product.classList.add('selected_compare');
}

product.addEventListener('click', event => {
  if (!arrayOfIds.includes(parseInt(product.getAttribute('data-attribute-id')))) {
    arrayOfIds.push(parseInt(product.getAttribute('data-attribute-id')));
    product.classList.add('selected_compare');
  } else {
    let index = arrayOfIds.indexOf(parseInt(product.getAttribute('data-attribute-id')));
    arrayOfIds.splice(index, 1);
    product.classList.remove('selected_compare');
  }
  document.cookie = `compareItems=[${arrayOfIds}];SameSite=Lax`
});
