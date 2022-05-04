
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

async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        console.log(data);
        console.log(data[1][0]);
        console.log(data[1][0].charCodeAt());
        console.log((data[1][0].toLowerCase()).charCodeAt());
        // for (let i = 0; i < data.length; i++) {
        //   petsArrayName.push(data[i].name)
        // }
        // createCards()
        // createPopup(data)
        return data
    } else {
        alert('Error status ' + response.status);
      }   
  }

window.addEventListener('loadstart', getData()) 

let container,
    textarea,
    keyboard

function createElemLoad() {
    container = document.createElement('div')
    container.classList.add('container')
    document.body.append(container)

    let title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Virtual keyboard'
    container.append(title)

    textarea = document.createElement('textarea')
    textarea.classList.add('textarea')
    textarea.setAttribute('rows', '5')
    textarea.setAttribute('cols', '65')
    container.append(textarea)

    keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    container.append(keyboard)

    let description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Клавиатура создана в операционной системе Windows'
    container.append(description)

    description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Для переключения языка комбинация: левыe ctrl + alt'
    container.append(description)
}

window.addEventListener('loadstart', createElemLoad())


textarea.addEventListener('click', changeLangKey)
textarea.addEventListener('click', getData)



function createKeyboard() {

    key = document.createElement('span')
    key.classList.add('key')
    key.textContent = 'a'
    keyboard.append(key)
}

window.addEventListener('loadstart', createKeyboard())