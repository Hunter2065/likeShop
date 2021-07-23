import { getCookie } from '../shared/cookies_manager'

let products = document.getElementsByClassName('compare_button');
let link_to_compare = document.getElementById('link_to_compare');
let localCookies = getCookie('compareItems');
let parsedCookie = localCookies ? JSON.parse(localCookies) : [];
let arrayOfIds = parsedCookie;

let each = (elems, fn) => {
  let i = -1;
  while(++i < elems.length){
    fn(elems[i])
  }
}

each(products, product => {
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
    document.cookie = `compareItems=[${arrayOfIds}];SameSite=Lax`;
  });
});
