import data_key from './js/data_key.js';

let langEn = 0, // En
    langEnBig = 1, // EnBig
    langRu = 2, // Ru
    langRuBig = 3, // RuBig
    CurrentKeysStyle,
    caps = false

const loadStorage = () => {
    if (localStorage.getItem('keyboardStyle') !== null) {
        CurrentKeysStyle = localStorage.keyboardStyle
        if(CurrentKeysStyle === '1' || CurrentKeysStyle === '3'){
            caps = true
        }
    } else {
        CurrentKeysStyle = langEn
        localStorage.setItem('keyboardStyle', CurrentKeysStyle);
    }
    // console.log('loadStorage');
}

window.addEventListener('loadstart', loadStorage())

const changeLangKey = () => {
    // console.log('changeLangKey');
        if (CurrentKeysStyle === langEn) {
            CurrentKeysStyle = langRu
        } else if (CurrentKeysStyle === langRu) {
            CurrentKeysStyle = langEn
        } else if (CurrentKeysStyle === langEnBig) {
            CurrentKeysStyle = langRuBig
        } else if (CurrentKeysStyle === langRuBig) {
            CurrentKeysStyle = langEnBig
        }

    localStorage.setItem('keyboardStyle', CurrentKeysStyle);


}

const changeCaps = () => {
    console.log('changeCaps');
    if(CurrentKeysStyle === langEn){
        CurrentKeysStyle = langEnBig
        caps = true
    } else if(CurrentKeysStyle === langEnBig) {
        CurrentKeysStyle = langEn
        caps = false
    } else if (CurrentKeysStyle === langRu) {
        CurrentKeysStyle = langRuBig
        caps = true
    } else if(CurrentKeysStyle === langRuBig) {
        CurrentKeysStyle = langRu
        caps = false
    }
    console.log(CurrentKeysStyle);
    localStorage.setItem('keyboardStyle', CurrentKeysStyle);

    createKeyboard()
}