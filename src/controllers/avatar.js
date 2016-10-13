import { outOfLanding, landingAnimation } from '../animations';
import carousel from '../lib/carousel';

const avatarCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  landingButton.addEventListener('click', outOfLanding);

  const car = carousel();
  car.init();

};

export default avatarCtrl;
