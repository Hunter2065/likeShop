let products = document.getElementsByClassName('compare_button');
let link_to_compare = document.getElementById('link_to_compare');
let arrayOfIds = [];

let each = (elems, fn) => {
  var i = -1;
  while(++i < elems.length){
    fn(elems[i])
  }
}

link_to_compare.addEventListener('click', event => {
  let new_link_to_compare = new URL(link_to_compare);

  new_link_to_compare.search = '?'; // cleaning if returned back
  new_link_to_compare.href += (arrayOfIds.map(x=>`id[]=${x}`).join('&') + '&');
  link_to_compare.href = new_link_to_compare.href;
});

each(products, product => {
  let switcher = false;

  product.classList.remove('selected_compare'); // cleaning if returned back

  product.addEventListener('click', event => {
    if (switcher = !switcher) {
      arrayOfIds.push(product.getAttribute('data-attribute-id'));
      product.classList.add('selected_compare');
    } else {
      let index = arrayOfIds.indexOf(product.getAttribute('data-attribute-id'));
      arrayOfIds.splice(index, 1);
      product.classList.remove('selected_compare');
    }
  });
});
