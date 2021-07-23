let products = document.getElementsByClassName('compare_button');
let link_to_compare = document.getElementById('link_to_compare');
let localCookies = getCookie('compareItems');
let parsedCookie = localCookies ? JSON.parse(localCookies) : [];
let arrayOfIds = parsedCookie;

let each = (elems, fn) => {
  var i = -1;
  while(++i < elems.length){
    fn(elems[i])
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

link_to_compare.addEventListener('click', event => {
  document.cookie = `compareItems=[${arrayOfIds}];SameSite=Lax`
});

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
  });
});
