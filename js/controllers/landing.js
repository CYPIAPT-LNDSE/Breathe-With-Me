import { outOfLanding, landingAnimation } from '../animations';

const landingCtrl = () => {
  const landingButton = document.getElementById('landing-button');

  landingButton.addEventListener('click', outOfLanding);

  landingAnimation();
};

export default landingCtrl;
