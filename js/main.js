const DESCRIPTION = [
  'Бывало и лучше!',
  'Эх, как давно это было...',
  'Замечательное фото!Сразу видно руку профи!',
  'Это я дома на любимом диване',
  'Мой кот Зимбабве!'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Сильвия',
  'Лесси',
  'Катерина',
  'Елисей',
  'Андреас',
  'Иван',
  'Семен',
  'Петрович'
];


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

const createPhotoDescription = () => ({
  id: getIdPhoto(),
  url: `photos/${getUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getLikes(),
  comments:Array.from({length: getRandomInteger(1, 3)}, createComment),
});

const photos = Array.from({length: 25}, createPhotoDescription);
// console.dir(photos, { depth: 3 });
