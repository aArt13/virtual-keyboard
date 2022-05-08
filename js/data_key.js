const data_key = [
    [
      {type: 'abc',   code: 'Backquote',      style: 'key',   label: ['`', '~', 'ё', 'Ё']},
      {type: 'abc',   code: 'Digit1',         style: 'key',   label: ['1', '!', '1', '!']},
      {type: 'abc',   code: 'Digit2',         style: 'key',   label: ['2', '@', '2', '"']},
      {type: 'abc',   code: 'Digit3',         style: 'key',   label: ['3', '#', '3', '№']},
      {type: 'abc',   code: 'Digit4',         style: 'key',   label: ['4', '$', '4', ';']},
      {type: 'abc',   code: 'Digit5',         style: 'key',   label: ['5', '%', '5', '%']},
      {type: 'abc',   code: 'Digit6',         style: 'key',   label: ['6', '^', '6', '?']},
      {type: 'abc',   code: 'Digit7',         style: 'key',   label: ['7', '&', '7', '?']},
      {type: 'abc',   code: 'Digit8',         style: 'key',   label: ['8', '*', '8', '*']},
      {type: 'abc',   code: 'Digit9',         style: 'key',   label: ['9', '(', '9', '(']},
      {type: 'abc',   code: 'Digit0',         style: 'key',   label: ['0', ')', '0', ')']},
      {type: 'abc',   code: 'Minus',          style: 'key',   label: ['-', '_', '-', '_']},
      {type: 'abc',   code: 'Equal',          style: 'key',   label: ['=', '+', '=', '+']},
      {type: 'ctrl',  code: 'Backspace',      style: 'key__control',  label: ['Backspace', 'Backspace','Backspace', 'Backspace']},
    ],
    [
      {type: 'ctrl',  code: 'Tab',            style: 'key__control',   label: ['Tab', 'Tab', 'Tab', 'Tab']},
      {type: 'abc',   code: 'KeyQ',           style: 'key',   label: ['q', 'Q', 'й', 'Й']},
      {type: 'abc',   code: 'KeyW',           style: 'key',   label: ['w', 'W', 'ц', 'Ц']},
      {type: 'abc',   code: 'KeyE',           style: 'key',   label: ['e', 'E', 'у', 'У']},
      {type: 'abc',   code: 'KeyR',           style: 'key',   label: ['r', 'R', 'к', 'К']},
      {type: 'abc',   code: 'KeyT',           style: 'key',   label: ['t', 'T', 'е', 'Е']},
      {type: 'abc',   code: 'KeyY',           style: 'key',   label: ['y', 'Y', 'н', 'Н']},
      {type: 'abc',   code: 'KeyU',           style: 'key',   label: ['u', 'U', 'г', 'Г']},
      {type: 'abc',   code: 'KeyI',           style: 'key',   label: ['i', 'I', 'ш', 'Ш']},
      {type: 'abc',   code: 'KeyO',           style: 'key',   label: ['o', 'O', 'щ', 'Щ']},
      {type: 'abc',   code: 'KeyP',           style: 'key',   label: ['p', 'P', 'з', 'З']},
      {type: 'abc',   code: 'BracketLeft',    style: 'key',   label: ['[', '{', 'х', 'Х']},
      {type: 'abc',   code: 'BracketRight',   style: 'key',   label: [']', '}', 'ъ', 'Ъ']},
      {type: 'ctrl',  code: 'Delete',         style: 'key__control',   label: ['Del', 'Del','Del', 'Del']},
    ],
    [
      {type: 'ctrl',  code: 'CapsLock',       style: 'key__control',  label: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock']},
      {type: 'abc',   code: 'KeyA',           style: 'key',   label: ['a', 'A', 'ф', 'Ф']},
      {type: 'abc',   code: 'KeyS',           style: 'key',   label: ['s', 'S', 'ы', 'Ы']},
      {type: 'abc',   code: 'KeyD',           style: 'key',   label: ['d', 'D', 'в', 'В']},
      {type: 'abc',   code: 'KeyF',           style: 'key',   label: ['f', 'F', 'а', 'А']},
      {type: 'abc',   code: 'KeyG',           style: 'key',   label: ['g', 'G', 'п', 'П']},
      {type: 'abc',   code: 'KeyH',           style: 'key',   label: ['h', 'H', 'р', 'Р']},
      {type: 'abc',   code: 'KeyJ',           style: 'key',   label: ['j', 'J', 'о', 'О']},
      {type: 'abc',   code: 'KeyK',           style: 'key',   label: ['k', 'K', 'л', 'Л']},
      {type: 'abc',   code: 'KeyL',           style: 'key',   label: ['l', 'L', 'д', 'Д']},
      {type: 'abc',   code: 'Semicolon',      style: 'key',   label: [';', ':', 'ж', 'Ж']},
      {type: 'abc',   code: 'Quote',          style: 'key',   label: ["'", '"', 'э', 'Э']},
      {type: 'ctrl',  code: 'Enter',          style: 'key__control',  label: ['Enter', 'Enter', 'Enter', 'Enter']},
    ],
    [
      {type: 'ctrl',  code: 'ShiftLeft',      style: 'key__control',   label: ['Shift', 'Shift', 'Shift', 'Shift']},
      {type: 'abc',   code: 'Backslash',      style: 'key',   label: ['\\', '|', '\\', '/']},
      {type: 'abc',   code: 'KeyZ',           style: 'key',   label: ['z', 'Z', 'я', 'Я']},
      {type: 'abc',   code: 'KeyX',           style: 'key',   label: ['x', 'X', 'ч', 'Ч']},
      {type: 'abc',   code: 'KeyC',           style: 'key',   label: ['c', 'C', 'с', 'С']},
      {type: 'abc',   code: 'KeyV',           style: 'key',   label: ['v', 'V', 'м', 'М']},
      {type: 'abc',   code: 'KeyB',           style: 'key',   label: ['b', 'B', 'и', 'И']},
      {type: 'abc',   code: 'KeyN',           style: 'key',   label: ['n', 'N', 'т', 'Т']},
      {type: 'abc',   code: 'KeyM',           style: 'key',   label: ['m', 'M', 'ь', 'Ь']},
      {type: 'abc',   code: 'Comma',          style: 'key',   label: [',', ',', 'б', 'Б']},
      {type: 'abc',   code: 'Period',         style: 'key',   label: ['.', '.', 'ю', 'Ю']},
      {type: 'abc',   code: 'Slash',          style: 'key',   label: ['/', '?', '.', ',']},
      {type: 'arrow', code: 'ArrowUp',        style: 'key__control',   label: ['↑', '↑', '↑', '↑']},
      {type: 'ctrl',  code: 'ShiftRight',     style: 'key__control',   label: ['Shift', 'Shift','Shift', 'Shift']},
    ],
    [
      {type: 'ctrl',  code: 'ControlLeft',    style: 'key__control',   label: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']},
      {type: 'ctrl',  code: 'MetaLeft',       style: 'key__control',   label: ['Win', 'Win', 'Win', 'Win']},
      {type: 'ctrl',  code: 'AltLeft',        style: 'key__control',   label: ['Alt', 'Alt', 'Alt', 'Alt']},
      {type: 'abc',   code: 'Space',          style: 'key__control',   label: [' ', ' ', ' ', ' ']},
      {type: 'ctrl',  code: 'AltRight',       style: 'key__control',   label: ['Alt', 'Alt', 'Alt', 'Alt']},
      {type: 'ctrl',  code: 'ControlRight',   style: 'key__control',   label: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']},
      {type: 'arrow', code: 'ArrowLeft',      style: 'key__control',   label: ['←', '←', '←', '←']},
      {type: 'arrow', code: 'ArrowDown',      style: 'key__control',   label: ['↓', '↓', '↓', '↓']},
      {type: 'arrow', code: 'ArrowRight',     style: 'key__control',   label: ['→', '→', '→', '→']},
    ],
  ];
  export default data_key;

  