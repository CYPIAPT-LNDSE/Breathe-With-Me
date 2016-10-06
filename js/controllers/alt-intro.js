import { landingToInfo, nameToInfoSwitch, outOfInfo } from '../animations';

const infoCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const startBreathingCatButton = document.getElementById('start-breathing-cat-button');
  nameSubmitButton.addEventListener('click', nameToInfoSwitch);
  startBreathingCatButton.addEventListener('click', outOfInfo);

  const nameButton = document.getElementById('name-question-button');
  const name = document.getElementById('input-focus');

  landingToInfo();

  function storeName() {
    const array = name.value.split(' ');
    const lastNameEntered = array[array.length - 1];
    document.cookie = lastNameEntered;
  }
  nameButton.addEventListener('click', storeName);
};

export default infoCtrl;
