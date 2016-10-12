import { outOfLanding, landingAnimation } from '../animations';
const avatarCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  landingButton.addEventListener('click', outOfLanding);

  landingAnimation();
};

export default avatarCtrl;
