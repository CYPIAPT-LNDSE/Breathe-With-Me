import { landingToInfo, landingAnimation } from '../animations';
const landingCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  landingButton.addEventListener('click', landingToInfo);

  landingAnimation();
};

module.exports = landingCtrl;
