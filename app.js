
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


// async function getData() {
//     const response = await fetch(url);
//     if (response.ok) {
//         data = await response.json();
//         console.log(data);
//         // console.log(data[1][0]);
//         // console.log((data[1].toString()).length);
//         // console.log(data[0].length);
//         // console.log(data[1].length);
//         // console.log(data[2].length);
//         // console.log(data[3].length);
//         // console.log(data[1][0].charCodeAt());
//         // console.log((data[1][0].toLowerCase()).charCodeAt());
//         // for (let i = 0; i < data.length; i++) {
//         //   petsArrayName.push(data[i].name)
//         // console.log(data[i]);

//             // for (let j = 0; j < data[i].length; j++) {
//             //     // console.log(data[j]);
//             //     // console.log(data[i].length);
//             //     // console.log(data[i][j]);
//             //     // console.log(data[i][j].length);
                
//             // }
//         // }
//         // createCards()
//         // createPopup(data)
//         createKeyboard(data)
//         return data
//     } else {
//         alert('Error status ' + response.status);
//       }   
//   }

// window.addEventListener('loadstart', getData()) 
// window.addEventListener('loadstart', getDataCntr()) 

// async function getDataCntr() {
//     const responseCntr = await fetch(urlCntr);
//     if (responseCntr.ok) {
//         dataCntr = await responseCntr.json();
//         // console.log(dataCntr);
//         // console.log(data[1][0]);
//         // console.log((data[1].toString()).length);
//         // console.log(data[0].length);
//         // console.log(data[1].length);
//         // console.log(data[2].length);
//         // console.log(data[3].length);
//         // console.log(data[1][0].charCodeAt());
//         // console.log((data[1][0].toLowerCase()).charCodeAt());
//         // for (let i = 0; i < data.length; i++) {
//         //   petsArrayName.push(data[i].name)
//         // console.log(data[i]);

//             // for (let j = 0; j < data[i].length; j++) {
//             //     // console.log(data[j]);
//             //     // console.log(data[i].length);
//             //     // console.log(data[i][j]);
//             //     // console.log(data[i][j].length);
                
//             // }
//         // }
//         // createCards()
//         // createPopup(data)
//         // createKeyboard(data)
//         return dataCntr
//     } else {
//         alert('Error status ' + responseCntr.status);
//       }   
//   }

let container = null,
    textarea = null,
    keyboard = null,
    row = null,
    key = null,
    keys = null,
    curKey = null

function createElemLoad() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

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
    // textarea.setAttribute('name', 'text')
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

    createKeyboard()
}

window.addEventListener('loadstart', createElemLoad())

function createKeyboard() {
    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.firstChild);
    }

    addKeyItems(data_key)
}


function addKeyItems(element) {
    for (let i = 0; i < element.length; i++) {
        row = document.createElement('div')
        row.classList.add('row')
        keyboard.append(row)

        for (let j = 0; j < element[i].length; j++) {
            key = document.createElement('span')
            key.classList.add(`key`)
                if (!element[i][j].type === 'abc') {
                    key.classList.add(`key__control`)
                }
            key.classList.add(`${element[i][j].style}`)
            key.textContent = `${element[i][j].label[CurrentKeysStyle]}`
            key.setAttribute ('data-keycode', `${element[i][j].code}`)
                if (element[i][j].code === 'Space') {
                    key.classList.add('key__space')
                }
            row.append(key)
        }
    }
}

const changeLang = (e) => {
    if ((e.shiftKey || e.metaKey) && (e.altKey || e.metaKey)) {
        changeLangKey()
        // getData()
        createKeyboard()
    }
}

document.addEventListener('keydown', changeLang)

const keyAct = (e) => {
    // console.log(e);
    // console.log(e.code);
    console.log(e.key);
    // console.log(e.keyCode);

    keys = document.querySelectorAll('.key')
    keys.forEach((element) => {
        element.classList.remove('key_active')
    })

//    document.querySelector('.key[data-keycode="'+e.code+'"]')
    // console.log(document.querySelector('.key[data-keycode="'+e.code+'"]'));
    curKey = document.querySelector('.key[data-keycode="'+e.code+'"]')
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



const keyActMouse = (e) => {


    console.log(e.target);
    console.log(e.target.textContent);
    let char = e.target.textContent
    let el = e.target


    curKey = document.querySelector('.key[data-keycode="'+e.target.dataset.keycode+'"]')
    curKey.classList.add('key_active')
    setTimeout(keyActRem, 300);
    writeTextMouse(char, el)
    // keys = document.querySelectorAll('.key')
    // keys.forEach((element) => {
    //     element.classList.remove('key_active')
    // })
}

const newKeyboard = document.querySelector('.keyboard')
newKeyboard.addEventListener('click', keyActMouse)

const keyActRem = () => {
    keys = document.querySelectorAll('.key')
    keys.forEach((element) => {
        element.classList.remove('key_active')
    })
}

document.addEventListener('keydown', keyAct)
// document.addEventListener('click', keyActMouse)
document.addEventListener('keyup', () => {
    setTimeout(keyActRem, 300);
})

const writeText = (e) => {
    if(!curKey.classList.contains('key__control')){
        textarea.textContent += e.key
    }
    if(e.code === 'Backspace') {
        let str = textarea.textContent
        textarea.textContent = str.substring(0, str.length - 1)
    }
    if(e.code === 'Space') {
        textarea.textContent += ' '
    }
}

const writeTextMouse = (char, el) => {
    if(!curKey.classList.contains('key__control')){
        textarea.textContent += char
    }
    if(el.dataset.keycode === 'Backspace') {
        let str = textarea.textContent
        textarea.textContent = str.substring(0, str.length - 1)
    }
    if(el.dataset.keycode === 'Space') {
        textarea.textContent += ' '
    }
}
