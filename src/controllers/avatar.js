import carousel from '../lib/carousel';
import { expandButton } from '../animations'
import { saveState } from '../globalState';
import * as avatars from '../templates/avatars';

const avatarCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  landingButton.addEventListener('click', expandButton);
  landingButton.addEventListener('click', () => {
    const avatarIndex = $('.active').index('.carousel_item');
    let avatar;
    switch (avatarIndex) {
      case 0:
        avatar = avatars.dog;
        break;
      case 1:
        avatar = avatars.cat;
        break;
      case 2:
        avatar = avatars.panda;
        break;
      default:
        avatar = avatars.cat;
        break;
    }
    saveState({ avatar });
  });

  const car = carousel();
  car.init();
};

export default avatarCtrl;
