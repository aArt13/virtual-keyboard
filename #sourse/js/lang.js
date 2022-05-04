let langKey = 'en'
let url     = `json/keys_${langKey}.json`

function loadLangKeyStorage() {
    if (localStorage.getItem('langKeyboard') !== null) {
        langKey = localStorage.langKeyboard
        url = `json/keys_${langKey}.json`
    } 
}

window.addEventListener('loadstart', loadLangKeyStorage())

function changeLangKey() {
    if (langKey === 'en') {
        langKey = 'ru'
        url = `json/keys_${langKey}.json`
        localStorage.setItem('langKeyboard', langKey);
    } else {
        langKey = 'en'
        url = `json/keys_${langKey}.json`
        localStorage.setItem('langKeyboard', langKey);
    }
}