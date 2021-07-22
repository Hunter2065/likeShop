// Number field validation with regex for price
let numberFieldValidation = (numberFieldElement) => {
  numberFieldElement.addEventListener('input',  (event) => {
    let getValue = (element) => {
      return element.originalTarget.value
    };

    let value = getValue(event);
    let regex = /^\d+(\.\d{0,2})?$/g;

    if (!regex.test(value)) {
      event.originalTarget.value = value.slice(0, -1);
    }
  });
};

export { numberFieldValidation }
