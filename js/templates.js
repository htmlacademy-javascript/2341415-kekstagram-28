import { createPhotosDescription } from './data.js';

const userListPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPicture = createPhotosDescription();

const UsersListFragment = document.createDocumentFragment();

userPicture.forEach(({url, likes, comments, description}) => {
  const userPictureElement = pictureTemplate.cloneNode(true);
  userPictureElement.querySelector('.picture__img').src = url;
  userPictureElement.querySelector('.picture__img').alt = description;
  userPictureElement.querySelector('.picture__likes').textContent = likes;
  userPictureElement.querySelector('.picture__comments').textContent = comments.length;
  UsersListFragment.appendChild(userPictureElement);
});

userListPicture.appendChild(UsersListFragment);
