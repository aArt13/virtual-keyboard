import asd from './js/try.js';

console.log(asd);

let langKey = 'en'
let url     = `json/keys_${langKey}.json`
// let url     = `json/keys_en.json`
let urlCntr = `json/keys_control.json`


function loadLangKeyStorage() {
    if (localStorage.getItem('langKeyboard') !== null) {
        langKey = localStorage.langKeyboard
        url = `json/keys_${langKey}.json`
    } 
}

window.addEventListener('loadstart', loadLangKeyStorage())

function changeLangKey() {

    while (key.firstChild) {
        key.removeChild(key.firstChild);
    }

    if (langKey === 'en') {
        langKey = 'ru'
        localStorage.setItem('langKeyboard', langKey);
    } else {
        langKey = 'en'
        localStorage.removeItem('langKeyboard');
    }
    url = `json/keys_${langKey}.json`

    // keyAct()
}
