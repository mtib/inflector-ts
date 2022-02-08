import { parseRoot } from '.';

export const ROOT_ID = '__INFLECTOR_ROOT__';

const rootElement = document.getElementById(ROOT_ID);
rootElement.innerHTML = parseRoot('merk(i)ʲ');

window['parseRoot'] = parseRoot;
