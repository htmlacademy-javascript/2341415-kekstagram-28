import { renderPictures } from './templates.js';
import { getBigPicture } from './big-picture.js';
const container = document.querySelector('.pictures');

const renderGalery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniPicture = evt.target.closest('[data-user-picture-element-id]');

    if(!miniPicture) {
      return;
    }

    const picture = pictures.find((item) => item.id === +miniPicture.dataset.userPictureElementId);

    getBigPicture(picture);
  });

  renderPictures(pictures, container);
};

export {renderGalery};
