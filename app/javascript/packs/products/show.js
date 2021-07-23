import { addCompare } from '../shared/compare'

const SELECTION_CLASS = 'selected_compare';

let compare_button = document.getElementsByClassName('compare_button');
let idStorage = 'data-attribute-id';

// Adds mechanizm for comparing gived items
addCompare(compare_button, SELECTION_CLASS, idStorage)
