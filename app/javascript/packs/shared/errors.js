// Adds a one-time error display
let oneTimeError = (classNameOfElements, elementsEvent) => {
  document.querySelectorAll(`.${classNameOfElements}`).forEach (element => {
    if (element.localName == 'input' ||
        element.firstChild.localName == 'input' ||
        element.firstChild.localName == 'textarea') {
      element.addEventListener(elementsEvent, (event) => {
        element.nextElementSibling.innerText = '';
        element.classList.remove('field_with_errors');
      }, { once: true });
    } else {
      element.classList.remove('field_with_errors');
    }
  });
};

export { oneTimeError }
