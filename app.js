
import DATA_key from './js/try.js';

// console.log(DATA_key);
// console.log(DATA_key[1][1].label[0].toUpperCase());

let langKey = 'en'
let url     = `json/keys_${langKey}.json`
// let url     = `json/keys_en.json`
let urlCntr = `json/keys_control.json`

// if (langKey === 'en'){
//     console.log(DATA_key[1][1].label[0].toUpperCase());
// } else {
//     console.log(DATA_key[1][1].label[0]);
// }


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


async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        console.log(data);
        // console.log(data[1][0]);
        // console.log((data[1].toString()).length);
        // console.log(data[0].length);
        // console.log(data[1].length);
        // console.log(data[2].length);
        // console.log(data[3].length);
        // console.log(data[1][0].charCodeAt());
        // console.log((data[1][0].toLowerCase()).charCodeAt());
        // for (let i = 0; i < data.length; i++) {
        //   petsArrayName.push(data[i].name)
        // console.log(data[i]);

            // for (let j = 0; j < data[i].length; j++) {
            //     // console.log(data[j]);
            //     // console.log(data[i].length);
            //     // console.log(data[i][j]);
            //     // console.log(data[i][j].length);
                
            // }
        // }
        // createCards()
        // createPopup(data)
        createKeyboard(data)
        return data
    } else {
        alert('Error status ' + response.status);
      }   
  }

window.addEventListener('loadstart', getData()) 
window.addEventListener('loadstart', getDataCntr()) 

async function getDataCntr() {
    const responseCntr = await fetch(urlCntr);
    if (responseCntr.ok) {
        dataCntr = await responseCntr.json();
        // console.log(dataCntr);
        // console.log(data[1][0]);
        // console.log((data[1].toString()).length);
        // console.log(data[0].length);
        // console.log(data[1].length);
        // console.log(data[2].length);
        // console.log(data[3].length);
        // console.log(data[1][0].charCodeAt());
        // console.log((data[1][0].toLowerCase()).charCodeAt());
        // for (let i = 0; i < data.length; i++) {
        //   petsArrayName.push(data[i].name)
        // console.log(data[i]);

            // for (let j = 0; j < data[i].length; j++) {
            //     // console.log(data[j]);
            //     // console.log(data[i].length);
            //     // console.log(data[i][j]);
            //     // console.log(data[i][j].length);
                
            // }
        // }
        // createCards()
        // createPopup(data)
        // createKeyboard(data)
        return dataCntr
    } else {
        alert('Error status ' + responseCntr.status);
      }   
  }

let container,
    textarea,
    keyboard,
    row,
    key,
    keys,
    curKey

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
    textarea.setAttribute('cols', '40')
    textarea.setAttribute('name', 'text')
    textarea.setAttribute('wrap', 'soft')
    textarea.setAttribute('placeholder', "Just do it!")
    container.append(textarea)

    keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    container.append(keyboard)

    let description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Клавиатура создана в операционной системе Windows.'
    container.append(description)

    description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Для переключения языка комбинация: '
    let descriptionText = document.createElement('span')
    descriptionText.textContent = `«alt + shift» .`
    description.append(descriptionText)
    container.append(description)
}

window.addEventListener('loadstart', createElemLoad())

function createKeyboard() {
    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.firstChild);
    }

    addKeyItems(data)
}


function addKeyItems(element) {

    for (let i = 0; i < element.length; i++) {
        row = document.createElement('div')
        row.classList.add('row')
        keyboard.append(row)

        for (let j = 0; j < element[i].length; j++) {
            key = document.createElement('span')
            key.classList.add('key')
            key.textContent = `${element[i][j]}`
            // key.textContent = `${String.fromCharCode(element[i][j])}`
            key.setAttribute ('data-keyCharCode', `${element[i][j].charCodeAt()}`)
            // key.setAttribute ('data-keyCode', `${element[i][j]}`)
            row.append(key)

            if (i == 0) {
                key = document.createElement('span')
                key.classList.add('key', 'key__control')
                key.textContent = 'Backspace'
                key.setAttribute ('data-keyCode', '8')
                row.append(key)
            }
        }
    }
}

const changeLang = (e) => {
    if ((e.shiftKey || e.metaKey) && (e.altKey || e.metaKey)) {
        changeLangKey()
        getData()
    }
}

document.addEventListener('keydown', changeLang)

const keyAct = (e) => {
    // console.log(e);
    // console.log(e.code);
    // console.log(e.key);
    // console.log(e.keyCode);

    keys = document.querySelectorAll('.key')
    keys.forEach((element) => {
        element.classList.remove('key_active')
    })

    curKey = document.querySelector('.key[data-keyCharCode="'+e.keyCode+'"]')
    console.log(curKey);
    curKey.classList.add('key_active')
    writeText(e)
}

// document.querySelectorAll('.keyboard .key').forEach(function(element) {

//     element.addEventListener('click', (function(element){
//         document.querySelectorAll('.key').forEach((element) => {
//             element.classList.remove('key_active')
//         })
//     }))

//     let code = this.getAttribute('data-keyCharCode')
//     this.classList.add('key_active')
//     console.log(code);
    
// })

const keyActRem = () => {
    keys = document.querySelectorAll('.key')
    keys.forEach((element) => {
        element.classList.remove('key_active')
    })
}

document.addEventListener('keydown', keyAct)
document.addEventListener('keyup', () => {
    setTimeout(keyActRem, 300);
})

const writeText = (e) => {
    if(!curKey.classList.contains('key__control')){
        textarea.textContent += e.key
    }
    if(e.keyCode === 8) {
        let str = textarea.textContent
        textarea.textContent = str.substring(0, str.length - 1)
    }
}
