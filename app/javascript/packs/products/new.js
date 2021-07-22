import {
  numberFieldValidation,
  resetFiles,
  flashMessage,
  validateFile
} from '../shared/validations'
import { oneTimeError } from '../shared/errors'

const PRICE_FIELD = 'product_price';
const FILE_INPUT = 'product_picture';

let priceInput = document.getElementById(PRICE_FIELD);
let fileInput = document.getElementById(FILE_INPUT);

// Validate number field
numberFieldValidation(priceInput);

fileInput.addEventListener('change', event => {
  let validatesResult = validateFile(fileInput);

  if (validatesResult !== true) {
    resetFiles(fileInput);
    flashMessage(validatesResult);
  }
});

// Remove error after event
oneTimeError('field_with_errors', 'input');
