const getRandomInteger = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const createRandomUnicInteger = (min, max) => {
  const previousValues = [];

  return () => {
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
    }

    let currentValue = getRandomInteger(min, max);

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
}

export{ getRandomInteger, getRandomArrayElement, createRandomUnicInteger };
