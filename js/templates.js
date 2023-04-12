const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = (({url, likes, comments, description, id}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.dataset.userPictureElementId = id;
  return picture;
});

const socialCommentTemplate = document.querySelector('#social_comment_template').content.querySelector('.social__comment');

const createComment = ({ avatar, message, name }) => {
  const comment = socialCommentTemplate.cloneNode(true);
  const commentImg = comment.querySelector('.social__picture');
  const commentText = comment.querySelector('.social__text');
  commentText.textContent = message;
  commentImg.src = avatar;
  commentImg.alt = name;

  return comment;
};

const renderPictures = (pictures, container) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  container.appendChild(fragment);
};

export { renderPictures, createComment };
