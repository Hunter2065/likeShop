import { numberFieldValidation } from '../shared/validations'
import { oneTimeError } from '../shared/errors'

const PRICE_FIELD = 'product_price';

let price_input = document.getElementById(PRICE_FIELD);

// Validate number field
numberFieldValidation(price_input);

// Remove error after event
oneTimeError('field_with_errors', 'input');
