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
