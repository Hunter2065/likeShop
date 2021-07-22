import { numberFieldValidation } from '../shared/validations'

const PRICE_FIELD = 'product_price';

let price_input = document.getElementById(PRICE_FIELD);

numberFieldValidation(price_input);
