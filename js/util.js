import { MESSAGE, NAMES } from './data.js';

const getRandomInteger = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

function createRandomUnicInteger(min, max) {
  const previousValues = [];

  return () => {
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }

    let currentValue = getRandomInteger(min, max);

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
}

const createOrderIdGenerator = (start = 0) => {
  let count = start;
  return () => ++count;
};

const getUrl = createRandomUnicInteger(1, 25);
const getLikes = createRandomUnicInteger(15, 200);
const getIdPhoto = createOrderIdGenerator();

const createComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});


export{ getUrl, getLikes, getIdPhoto, createComment, getRandomInteger, getRandomArrayElement };
