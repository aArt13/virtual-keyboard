import dataKey from "./data/dataKey.js";

const langEn = 0; // En
const langEnBig = 1; // EnBig
const langRu = 2; // Ru
const langRuBig = 3; // RuBig
let CurrentKeysStyle;
let caps = false;

const loadStorage = () => {
  if (localStorage.getItem("keyboardStyle") !== null) {
    CurrentKeysStyle = localStorage.keyboardStyle;
    if (CurrentKeysStyle === "1" || CurrentKeysStyle === "3") {
      caps = true;
    }
  } else {
    CurrentKeysStyle = langEn;
    localStorage.setItem("keyboardStyle", CurrentKeysStyle);
  }
};

window.addEventListener("loadstart", loadStorage());

const changeLangKey = () => {
  // console.log('changeLangKey');
  localStorage.removeItem("keyboardStyle");
  if (CurrentKeysStyle === langEn) {
    CurrentKeysStyle = langRu;
  } else if (CurrentKeysStyle === langRu) {
    CurrentKeysStyle = langEn;
  } else if (CurrentKeysStyle === langEnBig) {
    CurrentKeysStyle = langRuBig;
  } else if (CurrentKeysStyle === langRuBig) {
    CurrentKeysStyle = langEnBig;
  }
  localStorage.setItem("keyboardStyle", CurrentKeysStyle);
};

const changeCaps = () => {
//   console.log('changeCaps');
  localStorage.removeItem("keyboardStyle");
  if (CurrentKeysStyle === langEn) {
    CurrentKeysStyle = langEnBig;
    caps = true;
  } else if (CurrentKeysStyle === langEnBig) {
    CurrentKeysStyle = langEn;
    caps = false;
  } else if (CurrentKeysStyle === langRu) {
    CurrentKeysStyle = langRuBig;
    caps = true;
  } else if (CurrentKeysStyle === langRuBig) {
    CurrentKeysStyle = langRu;
    caps = false;
  }
  localStorage.setItem("keyboardStyle", CurrentKeysStyle);
};

let container = null;
let textarea = null;
let keyboard = null;
let row = null;
let key = null;
let keys = null;
let curKey = null;

// const addKeyItems = () => {
//     addKeyItems(dataKey);
//   }

const addKeyItems = (element) => {
  while (keyboard.firstChild) {
    keyboard.removeChild(keyboard.firstChild);
  }
  // console.log('addKeyItems');
  for (let i = 0; i < element.length; i += 1) {
    row = document.createElement("div");
    row.classList.add("row");
    keyboard.append(row);

    for (let j = 0; j < element[i].length; j += 1) {
      key = document.createElement("span");
      key.classList.add("key");
      if (!element[i][j].type === "abc") {
        key.classList.add("key__control");
      }
      key.classList.add(`${element[i][j].style}`);
      key.textContent = `${element[i][j].label[CurrentKeysStyle]}`;
      key.setAttribute("data-keycode", `${element[i][j].code}`);
      if (element[i][j].code === "Space") {
        key.classList.add("key__space");
      } if (element[i][j].code === "CapsLock") {
        key.classList.add("key__caps");
      }
      row.append(key);
    }
  }
  if (caps === true) {
    document.querySelector(".key__caps").classList.add("key__caps_active");
  }
};

const createElemLoad = () => {
  // console.log('createElemLoad');
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  container = document.createElement("div");
  container.classList.add("container");
  document.body.append(container);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Virtual keyboard";
  container.append(title);

  textarea = document.createElement("textarea");
  textarea.classList.add("textarea");
  textarea.setAttribute("rows", "5");
  textarea.setAttribute("cols", "40");
  textarea.setAttribute("wrap", "soft");
  textarea.setAttribute("placeholder", "Just do it!");
  container.append(textarea);

  keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  container.append(keyboard);

  let description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "Клавиатура создана в операционной системе Windows.";
  container.append(description);

  description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "Для переключения языка комбинация: ";
  const descriptionText = document.createElement("span");
  descriptionText.textContent = "«alt + shift» .";
  description.append(descriptionText);
  container.append(description);

  addKeyItems(dataKey);
};

window.addEventListener("loadstart", createElemLoad());

const changeLang = (e) => {
  if ((e.shiftKey || e.metaKey) && (e.altKey || e.metaKey)) {
    // console.log('changeLang');
    changeLangKey();
    addKeyItems(dataKey);
  }
};

document.addEventListener("keydown", changeLang);

const writeText = (e) => {
  // console.log('writeText');
  if (!curKey.classList.contains("key__control")) {
    textarea.textContent += e.key;
  } else if (e.code === "Backspace") {
    const str = textarea.textContent;
    textarea.textContent = str.substring(0, str.length - 1);
  } else if (e.code === "Space") {
    textarea.textContent += " ";
  } else if (e.code === "Enter") {
    textarea.textContent += "\n";
  } else if (e.code === "CapsLock") {
    // console.log('CapsLock');
    changeCaps();
    addKeyItems(dataKey);
  } else if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
    if (!e.key === "Shift") textarea.textContent += e.key.toUpperCase();
  } else if (e.code === "Tab") {
    e.preventDefault();
    // console.log('Tab');
    textarea.textContent += "\t";
    textarea.selectionStart = textarea.value.length;

    // textarea.value = textarea.value.substring(0, cursStart) +
    // "\t" + textarea.value.substring(cursEnd);
    // textarea.selectionStart =
    // textarea.selectionEnd = cursStart +1
  } else if (e.code === "ArrowLeft") {
    textarea.textContent += "←";
  } else if (e.code === "ArrowRight") {
    textarea.textContent += "→";
  } else if (e.code === "ArrowUp") {
    textarea.textContent += "↑";
  } else if (e.code === "ArrowDown") {
    textarea.textContent += "↓";
  }
};

const keyAct = (e) => {
  // console.log(e);
  e.preventDefault();
  // console.log('keyAct');
  keys = document.querySelectorAll(".key");
  keys.forEach((element) => {
    element.classList.remove("key_active");
  });

  curKey = document.querySelector(`.key[data-keycode="${e.code}"]`);
  // console.log(curKey == document.querySelector('.key__caps'))
  curKey.classList.add("key_active");
  writeText(e);
  // console.log('keyAct end');
};

document.addEventListener("keyup", keyAct);

const keyActRem = () => {
  keys = document.querySelectorAll(".key");
  keys.forEach((element) => {
    element.classList.remove("key_active");
  });
};

const writeTextMouse = (char, el) => {
  if (!curKey.classList.contains("key__control")) {
    textarea.textContent += char;
  } else if (el.dataset.keycode === "Backspace") {
    const str = textarea.textContent;
    textarea.textContent = str.substring(0, str.length - 1);
  } else if (el.dataset.keycode === "Space") {
    textarea.textContent += " ";
  } else if (el.dataset.keycode === "Enter") {
    textarea.textContent += "\n";
  } else if (el.dataset.keycode === "CapsLock") {
    changeCaps();
    addKeyItems(dataKey);
  } else if (el.dataset.keycode === "Tab") {
    textarea.textContent += "\t";
    textarea.selectionStart = textarea.value.length;
  } else if (el.dataset.keycode === "ArrowLeft") {
    textarea.textContent += "←";
  } else if (el.dataset.keycode === "ArrowRight") {
    textarea.textContent += "→";
  } else if (el.dataset.keycode === "ArrowUp") {
    textarea.textContent += "↑";
  } else if (el.dataset.keycode === "ArrowDown") {
    textarea.textContent += "↓";
  }
};

const keyActMouse = (e) => {
  e.preventDefault();
  const char = e.target.textContent;
  const el = e.target;
  if (e.target.classList.contains("key")) {
    curKey = document.querySelector(`.key[data-keycode="${e.target.dataset.keycode}"]`);
    curKey.classList.add("key_active");
    setTimeout(keyActRem, 300);
    writeTextMouse(char, el);
  }
};

const newKeyboard = document.querySelector(".keyboard");
newKeyboard.addEventListener("click", keyActMouse);

document.addEventListener("keyup", () => {
  setTimeout(keyActRem, 300);
});

// const cursStart = textarea.selectionStart;
// const cursEnd = textarea.selectionEnd;
// const textBefCurs = textarea.value.substring(0, cursStart);
// const textAftCurs = textarea.value.substring(cursEnd);
