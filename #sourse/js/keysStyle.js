import data_key from './js/data_key.js';

let langEn = 0, // En
    langEnBig = 1, // EnBig
    langRu = 2, // Ru
    langRuBig = 3, // RuBig
    CurrentKeysStyle = langEn,
    caps = false

// let url     = `json/keys_${langKey}.json`
// let url     = `json/keys_en.json`
// let urlCntr = `json/keys_control.json`




function loadStorage() {
    if (localStorage.getItem('keyboardStyle') !== null) {
        CurrentKeysStyle = localStorage.keyboardStyle
        // url = `json/keys_${langKey}.json`
    } 
}

window.addEventListener('loadstart', loadStorage())

function changeLangKey() {
    if(!caps) {
        if (CurrentKeysStyle === langEn) {
            CurrentKeysStyle = langRu
            localStorage.setItem('keyboardStyle', CurrentKeysStyle);
        } else {
            CurrentKeysStyle = langEn
            localStorage.removeItem('keyboardStyle');
        }
    } else {
        if (CurrentKeysStyle === langEnBig) {
            CurrentKeysStyle = langRuBig
            localStorage.setItem('keyboardStyle', CurrentKeysStyle);
        } else {
            CurrentKeysStyle = langEnBig
            localStorage.removeItem('keyboardStyle');
        }
    }

}
