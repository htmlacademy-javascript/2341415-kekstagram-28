import { getUrl, getLikes, getIdPhoto, createComment, getRandomArrayElement, getRandomInteger } from './util.js';

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

const createPhotoDescription = () => ({
  id: getIdPhoto(),
  url: `photos/${getUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getLikes(),
  comments:Array.from({length: getRandomInteger(1, 3)}, createComment),
});

const createPhotosDescription = () => Array.from({length: 25}, createPhotoDescription);
// console.dir(photos, { depth: 3 });

export {MESSAGE, NAMES, createPhotosDescription};
