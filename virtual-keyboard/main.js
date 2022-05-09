// keyboard data
const firstRowData = [
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Backquote',
    EnUnpress: '`',
    EnShiftPressed: '~',
    EnCapslockPressed: '`',
    RuUnpress: 'ё',
    RuShiftPressed: 'Ё',
    RuCapslockPressed: 'ё',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit1',
    EnUnpress: '1',
    EnShiftPressed: '!',
    EnCapslockPressed: '1',
    RuUnpress: '1',
    RuShiftPressed: '!',
    RuCapslockPressed: '1',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit2',
    EnUnpress: '2',
    EnShiftPressed: '@',
    EnCapslockPressed: '2',
    RuUnpress: '2',
    RuShiftPressed: '"',
    RuCapslockPressed: '2',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit3',
    EnUnpress: '3',
    EnShiftPressed: '#',
    EnCapslockPressed: '3',
    RuUnpress: '3',
    RuShiftPressed: '№',
    RuCapslockPressed: '3',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit4',
    EnUnpress: '4',
    EnShiftPressed: '$',
    EnCapslockPressed: '4',
    RuUnpress: '4',
    RuShiftPressed: ';',
    RuCapslockPressed: '4',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit5',
    EnUnpress: '5',
    EnShiftPressed: '%',
    EnCapslockPressed: '5',
    RuUnpress: '5',
    RuShiftPressed: '%',
    RuCapslockPressed: '5',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit6',
    EnUnpress: '6',
    EnShiftPressed: '^',
    EnCapslockPressed: '6',
    RuUnpress: '6',
    RuShiftPressed: ':',
    RuCapslockPressed: '6',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit7',
    EnUnpress: '7',
    EnShiftPressed: '&',
    EnCapslockPressed: '7',
    RuUnpress: '7',
    RuShiftPressed: '?',
    RuCapslockPressed: '7',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit8',
    EnUnpress: '8',
    EnShiftPressed: '*',
    EnCapslockPressed: '8',
    RuUnpress: '8',
    RuShiftPressed: '*',
    RuCapslockPressed: '8',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit9',
    EnUnpress: '9',
    EnShiftPressed: '(',
    EnCapslockPressed: '9',
    RuUnpress: '9',
    RuShiftPressed: '(',
    RuCapslockPressed: '9',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Digit0',
    EnUnpress: '0',
    EnShiftPressed: ')',
    EnCapslockPressed: '0',
    RuUnpress: '0',
    RuShiftPressed: ')',
    RuCapslockPressed: '0',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Minus',
    EnUnpress: '-',
    EnShiftPressed: '_',
    EnCapslockPressed: '-',
    RuUnpress: '-',
    RuShiftPressed: '_',
    RuCapslockPressed: '-',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Equal',
    EnUnpress: '=',
    EnShiftPressed: '+',
    EnCapslockPressed: '=',
    RuUnpress: '=',
    RuShiftPressed: '+',
    RuCapslockPressed: '=',
    isManyValues: true,
  },
  {
    classNames: ['key', 'service', 'Backspace'],
    dataCode: 'Backspace',
    value: 'Backspace',
    isManyValues: false,
  },
];

const secondRowData = [
  {
    classNames: ['key', 'service', 'Tab'],
    dataCode: 'Tab',
    value: 'Tab',
    isManyValues: false,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyQ',
    EnUnpress: 'q',
    EnShiftPressed: 'Q',
    EnCapslockPressed: 'Q',
    RuUnpress: 'й',
    RuShiftPressed: 'Й',
    RuCapslockPressed: 'Й',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyW',
    EnUnpress: 'w',
    EnShiftPressed: 'W',
    EnCapslockPressed: 'W',
    RuUnpress: 'ц',
    RuShiftPressed: 'Ц',
    RuCapslockPressed: 'Ц',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyE',
    EnUnpress: 'e',
    EnShiftPressed: 'E',
    EnCapslockPressed: 'E',
    RuUnpress: 'у',
    RuShiftPressed: 'У',
    RuCapslockPressed: 'У',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyR',
    EnUnpress: 'r',
    EnShiftPressed: 'R',
    EnCapslockPressed: 'R',
    RuUnpress: 'к',
    RuShiftPressed: 'К',
    RuCapslockPressed: 'К',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyT',
    EnUnpress: 't',
    EnShiftPressed: 'T',
    EnCapslockPressed: 'T',
    RuUnpress: 'е',
    RuShiftPressed: 'Е',
    RuCapslockPressed: 'Е',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyY',
    EnUnpress: 'y',
    EnShiftPressed: 'Y',
    EnCapslockPressed: 'Y',
    RuUnpress: 'н',
    RuShiftPressed: 'Н',
    RuCapslockPressed: 'Н',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyU',
    EnUnpress: 'u',
    EnShiftPressed: 'U',
    EnCapslockPressed: 'U',
    RuUnpress: 'г',
    RuShiftPressed: 'Г',
    RuCapslockPressed: 'Г',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyI',
    EnUnpress: 'i',
    EnShiftPressed: 'I',
    EnCapslockPressed: 'I',
    RuUnpress: 'ш',
    RuShiftPressed: 'Ш',
    RuCapslockPressed: 'Ш',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyO',
    EnUnpress: 'o',
    EnShiftPressed: 'O',
    EnCapslockPressed: 'O',
    RuUnpress: 'щ',
    RuShiftPressed: 'Щ',
    RuCapslockPressed: 'Щ',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyP',
    EnUnpress: 'p',
    EnShiftPressed: 'P',
    EnCapslockPressed: 'P',
    RuUnpress: 'з',
    RuShiftPressed: 'З',
    RuCapslockPressed: 'З',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'BracketLeft',
    EnUnpress: '[',
    EnShiftPressed: '{',
    EnCapslockPressed: '[',
    RuUnpress: 'х',
    RuShiftPressed: 'Х',
    RuCapslockPressed: 'Х',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'BracketRight',
    EnUnpress: ']',
    EnShiftPressed: '}',
    EnCapslockPressed: ']',
    RuUnpress: 'ъ',
    RuShiftPressed: 'Ъ',
    RuCapslockPressed: 'Ъ',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Backslash',
    EnUnpress: '\\',
    EnShiftPressed: '|',
    EnCapslockPressed: '\\',
    RuUnpress: '\\',
    RuShiftPressed: '/',
    RuCapslockPressed: '\\',
    isManyValues: true,
  },
  {
    classNames: ['key', 'service', 'Delete'],
    dataCode: 'Delete',
    value: 'Del',
    isManyValues: false,
  },
];

const thirdRowData = [
  {
    classNames: ['key', 'service', 'CapsLock'],
    dataCode: 'CapsLock',
    value: 'CapsLock',
    isManyValues: false,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyA',
    EnUnpress: 'a',
    EnShiftPressed: 'A',
    EnCapslockPressed: 'A',
    RuUnpress: 'ф',
    RuShiftPressed: 'Ф',
    RuCapslockPressed: 'Ф',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyS',
    EnUnpress: 's',
    EnShiftPressed: 'S',
    EnCapslockPressed: 'S',
    RuUnpress: 'ы',
    RuShiftPressed: 'Ы',
    RuCapslockPressed: 'Ы',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyD',
    EnUnpress: 'd',
    EnShiftPressed: 'D',
    EnCapslockPressed: 'D',
    RuUnpress: 'в',
    RuShiftPressed: 'В',
    RuCapslockPressed: 'В',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyF',
    EnUnpress: 'f',
    EnShiftPressed: 'F',
    EnCapslockPressed: 'F',
    RuUnpress: 'а',
    RuShiftPressed: 'А',
    RuCapslockPressed: 'А',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyG',
    EnUnpress: 'g',
    EnShiftPressed: 'G',
    EnCapslockPressed: 'G',
    RuUnpress: 'п',
    RuShiftPressed: 'П',
    RuCapslockPressed: 'П',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyH',
    EnUnpress: 'h',
    EnShiftPressed: 'H',
    EnCapslockPressed: 'H',
    RuUnpress: 'р',
    RuShiftPressed: 'Р',
    RuCapslockPressed: 'Р',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyJ',
    EnUnpress: 'j',
    EnShiftPressed: 'J',
    EnCapslockPressed: 'J',
    RuUnpress: 'о',
    RuShiftPressed: 'О',
    RuCapslockPressed: 'О',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyK',
    EnUnpress: 'k',
    EnShiftPressed: 'K',
    EnCapslockPressed: 'K',
    RuUnpress: 'л',
    RuShiftPressed: 'Л',
    RuCapslockPressed: 'Л',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyL',
    EnUnpress: 'l',
    EnShiftPressed: 'L',
    EnCapslockPressed: 'L',
    RuUnpress: 'д',
    RuShiftPressed: 'Д',
    RuCapslockPressed: 'Д',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Semicolon',
    EnUnpress: ';',
    EnShiftPressed: ':',
    EnCapslockPressed: ';',
    RuUnpress: 'ж',
    RuShiftPressed: 'Ж',
    RuCapslockPressed: 'Ж',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Quote',
    EnUnpress: "'",
    EnShiftPressed: '"',
    EnCapslockPressed: "'",
    RuUnpress: 'э',
    RuShiftPressed: 'Э',
    RuCapslockPressed: 'Э',
    isManyValues: true,
  },
  {
    classNames: ['key', 'service', 'Enter'],
    dataCode: 'Enter',
    value: 'Enter',
    isManyValues: false,
  },
];

const fourthRowData = [
  {
    classNames: ['key', 'service', 'ShiftLeft'],
    dataCode: 'ShiftLeft',
    value: 'Shift',
    isManyValues: false,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyZ',
    EnUnpress: 'z',
    EnShiftPressed: 'Z',
    EnCapslockPressed: 'Z',
    RuUnpress: 'я',
    RuShiftPressed: 'Я',
    RuCapslockPressed: 'Я',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyX',
    EnUnpress: 'x',
    EnShiftPressed: 'X',
    EnCapslockPressed: 'X',
    RuUnpress: 'ч',
    RuShiftPressed: 'Ч',
    RuCapslockPressed: 'Ч',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyC',
    EnUnpress: 'c',
    EnShiftPressed: 'C',
    EnCapslockPressed: 'C',
    RuUnpress: 'с',
    RuShiftPressed: 'С',
    RuCapslockPressed: 'С',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyV',
    EnUnpress: 'v',
    EnShiftPressed: 'V',
    EnCapslockPressed: 'V',
    RuUnpress: 'м',
    RuShiftPressed: 'М',
    RuCapslockPressed: 'М',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyB',
    EnUnpress: 'b',
    EnShiftPressed: 'B',
    EnCapslockPressed: 'B',
    RuUnpress: 'и',
    RuShiftPressed: 'И',
    RuCapslockPressed: 'И',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyN',
    EnUnpress: 'n',
    EnShiftPressed: 'N',
    EnCapslockPressed: 'N',
    RuUnpress: 'т',
    RuShiftPressed: 'Т',
    RuCapslockPressed: 'Т',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'KeyM',
    EnUnpress: 'm',
    EnShiftPressed: 'M',
    EnCapslockPressed: 'M',
    RuUnpress: 'ь',
    RuShiftPressed: 'Ь',
    RuCapslockPressed: 'Ь',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Comma',
    EnUnpress: ',',
    EnShiftPressed: '<',
    EnCapslockPressed: ',',
    RuUnpress: 'б',
    RuShiftPressed: 'Б',
    RuCapslockPressed: 'Б',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Period',
    EnUnpress: '.',
    EnShiftPressed: '>',
    EnCapslockPressed: '.',
    RuUnpress: 'ю',
    RuShiftPressed: 'Ю',
    RuCapslockPressed: 'Ю',
    isManyValues: true,
  },
  {
    classNames: ['key', 'symbol'],
    dataCode: 'Slash',
    EnUnpress: '/',
    EnShiftPressed: '?',
    EnCapslockPressed: '/',
    RuUnpress: '.',
    RuShiftPressed: ',',
    RuCapslockPressed: '.',
    isManyValues: true,
  },
  {
    classNames: ['key', 'service', 'ArrowUp'],
    dataCode: 'ArrowUp',
    value: `
<svg
  height="512px"
  id="Layer_1"
  style="enable-background: new 0 0 512 512"
  version="1.1"
  viewBox="0 0 512 512"
  width="512px"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <path
    fill="#fff"
    d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"
  /></svg
>
    `,
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'ShiftRight'],
    dataCode: 'ShiftRight',
    value: 'Shift',
    isManyValues: false,
  },
];

const fifthRowData = [
  {
    classNames: ['key', 'service', 'ControlLeft'],
    dataCode: 'ControlLeft',
    value: 'Ctrl',
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'ico', 'MetaLeft'],
    dataCode: 'MetaLeft',
    value: `
<svg
  enable-background="new 0 0 24 24"
  height="24px"
  version="1.1"
  viewBox="0 0 24 24"
  width="24px"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g>
    <polygon
      fill="#fff"
      points="1.3,19.5 9.3,20.7 9.3,13.1 1.3,13.1  "
    />
    <polygon
      fill="#fff"
      points="11.6,21 22.7,22.6 22.7,13.1 11.6,13.1  "
    />
    <polygon
      fill="#fff"
      points="11.6,3 11.6,10.9 22.7,10.9 22.7,1.4  "
    />
    <polygon
      fill="#fff"
      points="1.3,10.9 9.3,10.9 9.3,3.3 1.3,4.5  "
    />
  </g></svg
>    
    `,
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'AltLeft'],
    dataCode: 'AltLeft',
    value: 'Alt',
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'Space'],
    dataCode: 'Space',
    value: '',
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'AltRight'],
    dataCode: 'AltRight',
    value: 'Alt',
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'ArrowLeft'],
    dataCode: 'ArrowLeft',
    value: `
      <svg
        height="512px"
        id="Layer_1"
        style="enable-background: new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#fff"
          d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z"
        /></svg
      >
    `,
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'ArrowDown'],
    dataCode: 'ArrowDown',
    value: `
      <svg
        height="512px"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#fff"
          d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
        />
      </svg>
    `,
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'ArrowRight'],
    dataCode: 'ArrowRight',
    value: `
      <svg
        height="512px"
        id="Layer_1"
        style="enable-background: new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#fff"
          d="M184.7,413.1l2.1-1.8l156.5-136c5.3-4.6,8.6-11.5,8.6-19.2c0-7.7-3.4-14.6-8.6-19.2L187.1,101l-2.6-2.3  C182,97,179,96,175.8,96c-8.7,0-15.8,7.4-15.8,16.6h0v286.8h0c0,9.2,7.1,16.6,15.8,16.6C179.1,416,182.2,414.9,184.7,413.1z"
        />
      </svg>
    `,
    isManyValues: false,
  },
  {
    classNames: ['key', 'service', 'ControlRight'],
    dataCode: 'ControlRight',
    value: 'Ctrl',
    isManyValues: false,
  },
];

// create html
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = `
<h1 class="title">Virtual Keyboard for Windows</h1>
<div class="input__field">
  <textarea rows="10" class="input__area"></textarea>
</div>
<div class="keyboard">
  <div class="keyboard__row first__row"></div>
  <div class="keyboard__row second__row"></div>
  <div class="keyboard__row third__row"></div>
  <div class="keyboard__row fourth__row"></div>
  <div class="keyboard__row fifth__row"></div>
<div>
`;
body.prepend(container);

const firstRow = document.querySelector('.first__row');
const secondRow = document.querySelector('.second__row');
const thirdRow = document.querySelector('.third__row');
const fourthRow = document.querySelector('.fourth__row');
const fifthRow = document.querySelector('.fifth__row');

const createBtn = (item, element) => {
  const {
    classNames,
    dataCode,
    isManyValues,
    EnUnpress,
    EnShiftPressed,
    EnCapslockPressed,
    RuUnpress,
    RuShiftPressed,
    RuCapslockPressed,
    value,
  } = item;
  const button = document.createElement('button');
  button.classList.add(...classNames);
  button.setAttribute('data-code', `${dataCode}`);
  if (isManyValues) {
    button.innerHTML = `
<span class="en">
  <span class="unpress">${EnUnpress}</span>
  <span class="shiftPressed">${EnShiftPressed}</span>
  <span class="capslockPressed">${EnCapslockPressed}</span>
</span>
<span class="ru">
  <span class="unpress">${RuUnpress}</span>
  <span class="shiftPressed">${RuShiftPressed}</span>
  <span class="capslockPressed">${RuCapslockPressed}</span>
</span>
  `;
  } else {
    button.innerHTML = `
    <span>${value}</span>
    `;
  }
  element.append(button);
};

firstRowData.forEach((item) => {
  createBtn(item, firstRow);
});

secondRowData.forEach((item) => {
  createBtn(item, secondRow);
});

thirdRowData.forEach((item) => {
  createBtn(item, thirdRow);
});

fourthRowData.forEach((item) => {
  createBtn(item, fourthRow);
});

fifthRowData.forEach((item) => {
  createBtn(item, fifthRow);
});

// create block info
const infoBlock = document.createElement('p');
infoBlock.classList.add('info');
infoBlock.textContent = 'To switch language press left Ctrl + left Alt';
container.append(infoBlock);

// main logic
const allKeys = document.querySelectorAll('.key');
const allRu = document.querySelectorAll('.ru');
const allEn = document.querySelectorAll('.en');
const allSymbol = document.querySelectorAll('.symbol');
const allUnpress = document.querySelectorAll('.unpress');
const allShiftPressed = document.querySelectorAll('.shiftPressed');
const allCapslockPressed = document.querySelectorAll('.capslockPressed');
const capsLockKey = document.querySelector('.CapsLock');
const inputArea = document.querySelector('.input__area');
let isShiftPressed = false;
let isCapslockPressed = false;

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en');
}

const alphaNumericCodes = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'IntlBackslash',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
];

// switch set of keys

const showKeys = (item) => {
  item.hidden = false;
  return null;
};
const hideKeys = (item) => {
  item.hidden = true;
  return null;
};

// initial state
if (localStorage.getItem('lang') === 'en') {
  allRu.forEach(hideKeys);
} else {
  allEn.forEach(hideKeys);
}
allShiftPressed.forEach(hideKeys);
allCapslockPressed.forEach(hideKeys);

// add active effect to virtual keyboard on keydown
document.addEventListener('keydown', (e) => {
  allKeys.forEach((el) => {
    if (el.dataset.code === e.code && e.code !== 'CapsLock') {
      el.classList.add('active');
    }
  });
});

// remove active effect from virtual keyboard on keyup
document.addEventListener('keyup', (e) => {
  allKeys.forEach((el) => {
    if (el.dataset.code === e.code && e.code !== 'CapsLock') {
      el.classList.remove('active');
    }
  });
});

// change language
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (
    (e.code === 'AltLeft' && e.ctrlKey) ||
    (e.code === 'ControlLeft' && e.altKey)
  ) {
    if (localStorage.getItem('lang') === 'en') {
      allEn.forEach(hideKeys);
      allRu.forEach(showKeys);
      localStorage.setItem('lang', 'ru');
    } else {
      allRu.forEach(hideKeys);
      allEn.forEach(showKeys);
      localStorage.setItem('lang', 'en');
    }
  }
});
let position = 0;
inputArea.addEventListener('click', () => {
  position = inputArea.selectionStart;
});

const onInputSymbol = (symb) => {
  const str = inputArea.value;
  inputArea.selectionStart = position;
  inputArea.selectionEnd = position;
  const start = str.substring(0, position);
  const end = str.substring(position);
  inputArea.value = start + symb + end;
  inputArea.selectionStart = position + 1;
  inputArea.selectionEnd = position + 1;
  position += 1;
};

const selectSymbol = (code) => {
  let elem = null;
  allSymbol.forEach((el) => {
    if (el.dataset.code === code) {
      elem = el;
    }
  });
  let ch = null;
  let symb = '';
  const [first, second] = elem.children;
  if (localStorage.getItem('lang') === 'en') {
    ch = first;
  } else {
    ch = second;
  }
  for (let i = 0; i < ch.children.length; i += 1) {
    if (ch.children[i].hidden === false) {
      symb = ch.children[i].textContent;
    }
  }
  onInputSymbol(symb);
};

// keyboard input
document.addEventListener('keydown', ({ code }) => {
  const codeOfKey = code;
  if (alphaNumericCodes.includes(codeOfKey)) {
    selectSymbol(codeOfKey);
  }
});

// virtual keyboard input
allSymbol.forEach((item) => {
  item.addEventListener('click', (e) => {
    const { code } = e.target.closest('.key').dataset;
    selectSymbol(code);
  });
});

// del
document.addEventListener('keydown', (e) => {
  if (e.code === 'Delete') {
    const str = inputArea.value;
    const pos = inputArea.selectionStart;
    const start = str.substring(0, pos);
    const end = str.substring(pos + 1, str.length);
    inputArea.value = start + end;
    inputArea.selectionStart = pos;
    inputArea.selectionEnd = pos;
  }
});

// virtual del
const deleteKey = document.querySelector('.Delete');
deleteKey.addEventListener('click', () => {
  const str = inputArea.value;
  inputArea.selectionStart = position;
  const start = str.substring(0, position);
  const end = str.substring(position + 1);
  inputArea.value = start + end;
  inputArea.selectionStart = position;
  inputArea.selectionEnd = position;
});

// backspace
document.addEventListener('keydown', (e) => {
  if (e.code === 'Backspace') {
    const str = inputArea.value;
    const pos = inputArea.selectionStart;
    if (pos !== 0) {
      const start = str.substring(0, pos - 1);
      const end = str.substring(pos);
      inputArea.value = start + end;
      inputArea.selectionStart = pos - 1;
      inputArea.selectionEnd = pos - 1;
    }
  }
});

// virtual backspace
const backspaceKey = document.querySelector('.Backspace');
backspaceKey.addEventListener('click', () => {
  const str = inputArea.value;
  inputArea.selectionStart = position;
  if (position !== 0) {
    const start = str.substring(0, position - 1);
    const end = str.substring(position);
    inputArea.value = start + end;
    inputArea.selectionStart = position - 1;
    inputArea.selectionEnd = position - 1;
    position -= 1;
  }
});

// space
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    onInputSymbol(' ');
  }
});

// virtual space
const space = document.querySelector('.Space');
space.addEventListener('click', () => {
  onInputSymbol(' ');
});

// tab
document.addEventListener('keydown', (e) => {
  if (e.code === 'Tab') {
    onInputSymbol('\t');
  }
});

// virtual tab
const tabKey = document.querySelector('.Tab');
tabKey.addEventListener('click', () => {
  onInputSymbol('\t');
});

// enter
document.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    inputArea.value += '\n';
    position += 1;
  }
});

// virtual enter
const enterkey = document.querySelector('.Enter');
enterkey.addEventListener('click', () => {
  inputArea.value += '\n';
  position += 1;
});

// capslock
const onCapsLockPress = () => {
  capsLockKey.classList.toggle('active');
  if (!isCapslockPressed) {
    allUnpress.forEach(hideKeys);
    allCapslockPressed.forEach(showKeys);
  } else {
    allCapslockPressed.forEach(hideKeys);
    allUnpress.forEach(showKeys);
  }
  isCapslockPressed = !isCapslockPressed;
};

document.addEventListener('keydown', (e) => {
  if (e.code === 'CapsLock') {
    onCapsLockPress();
  }
});

// virtual capslock
capsLockKey.addEventListener('click', () => {
  onCapsLockPress();
});

// shift
const onShiftDown = () => {
  isShiftPressed = !isShiftPressed;
  if (isCapslockPressed) {
    allCapslockPressed.forEach(hideKeys);
    allShiftPressed.forEach(showKeys);
  } else {
    allUnpress.forEach(hideKeys);
    allShiftPressed.forEach(showKeys);
  }
};

const onShiftUp = () => {
  isShiftPressed = !isShiftPressed;
  if (isCapslockPressed) {
    allShiftPressed.forEach(hideKeys);
    allCapslockPressed.forEach(showKeys);
  } else {
    allShiftPressed.forEach(hideKeys);
    allUnpress.forEach(showKeys);
  }
};

document.addEventListener('keydown', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    onShiftDown();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    onShiftUp();
  }
});

// virtural shift
const leftShiftKey = document.querySelector('.ShiftLeft');
const rightShiftKey = document.querySelector('.ShiftRight');

leftShiftKey.addEventListener('mousedown', onShiftDown);
leftShiftKey.addEventListener('mouseup', onShiftUp);
rightShiftKey.addEventListener('mousedown', onShiftDown);
rightShiftKey.addEventListener('mouseup', onShiftUp);

// arrows
document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') {
    onInputSymbol('↑');
  }
  if (e.code === 'ArrowLeft') {
    onInputSymbol('←');
  }
  if (e.code === 'ArrowDown') {
    onInputSymbol('↓');
  }
  if (e.code === 'ArrowRight') {
    onInputSymbol('→');
  }
});

// virtual arrows
const arrowUpKey = document.querySelector('.ArrowUp');
const arrowLeftKey = document.querySelector('.ArrowLeft');
const arrowDownKey = document.querySelector('.ArrowDown');
const arrowRightKey = document.querySelector('.ArrowRight');

arrowUpKey.addEventListener('click', () => {
  onInputSymbol('↑');
});
arrowLeftKey.addEventListener('click', () => {
  onInputSymbol('←');
});
arrowDownKey.addEventListener('click', () => {
  onInputSymbol('↓');
});
arrowRightKey.addEventListener('click', () => {
  onInputSymbol('→');
});
