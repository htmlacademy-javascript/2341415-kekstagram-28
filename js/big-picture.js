
import { createComment } from './templates.js';

const bodyElement = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const bigImg = bigPictureImg.firstElementChild;
const likesEl = document.querySelector('.likes-count');
const commentsEl = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');
const descriptionObj = document.querySelector('.social__caption');
const closeButton = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');

closeButton.addEventListener(
  'click',
  () => {
    bigPicture.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
);


const getBigPicture = ({ url, description, likes, comments }) => {
  bigImg.src = url;
  likesEl.textContent = likes;
  commentsEl.textContent = comments;
  descriptionObj.textContent = description;
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const el = createComment(comment);
    fragment.append(el);
  });

  const socialComments = bigPicture.querySelector('.social__comments');
  socialComments.textContent = '';

  socialComments.appendChild(fragment);
};

export { getBigPicture };
