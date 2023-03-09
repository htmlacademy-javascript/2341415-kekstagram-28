const isLongerThen = (str, maxLength) => str.length <= maxLength;
// console.log('isLongerThen:', isLongerThen('проверяемая строка', 20));
// console.log('isLongerThen:', isLongerThen('проверяемая строка', 18));
// console.log('isLongerThen:', isLongerThen('проверяемая строка', 10));


const isPalindrom = (str) => str
  .replaceAll(' ','')
  .split('')
  .reverse()
  .join('')
  .toLowerCase() === str.replaceAll(' ','').toLowerCase();

// console.log('isPalindrom:', isPalindrom('Лёша на полке клопа нашёл'));

const isDigit = (ch) => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(ch);

const extractCurrencyValue = (arg) => {
  const digits = arg.toString().split('').filter(isDigit);

  return digits.length === 0 ? NaN : +(digits.join(''));
};

// console.log(extractCurrencyValue('2023 год'));            // 2023
// console.log(extractCurrencyValue('ECMAScript 2022'));     // 2022
// console.log(extractCurrencyValue('1 кефир, 0.5 батона')); // 105
// console.log(extractCurrencyValue('агент 007'));           // 7
// console.log(extractCurrencyValue('а я томат'));           // NaN
// console.log(extractCurrencyValue(2023));                  // 2023
// console.log(extractCurrencyValue(-1));                    // 1
// console.log(extractCurrencyValue(1.5));                   // 1.5
// console.log(extractCurrencyValue(NaN));                   // NaN

const getStrWithAddChars = (str, minLengthOfStr, addCharToStr) => {
  if(str.length >= minLengthOfStr) {
    return str;
  }

  const strForAdd = minLengthOfStr - str.length;
  const lack = (minLengthOfStr - str.length) % addCharToStr.length;
  const int = Math.floor(strForAdd / addCharToStr.length);
  return addCharToStr.substring(0 , lack) + addCharToStr.repeat(int) + str;

};


// // Добавочный символ использован один раз
// console.log(getStrWithAddChars('1', 2, '0'));      // '01'

// // Добавочный символ использован три раза
// console.log(getStrWithAddChars('1', 4, '0'));      // '0001'

// // // // Добавочные символы обрезаны с конца
// console.log(getStrWithAddChars('q', 4, 'werty'));  // 'werq'

// // // Добавочные символы использованы полтора раза
// console.log(getStrWithAddChars('q', 4, 'we'));     // 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// console.log(getStrWithAddChars('qwerty', 4, '0')); // 'qwerty'
