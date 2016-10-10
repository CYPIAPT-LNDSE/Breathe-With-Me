import { nameToInfoSwitch } from '../animations';

const infoCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  nameSubmitButton.addEventListener('click', nameToInfoSwitch);

  const nameButton = document.getElementById('name-question-button');
  const name = document.getElementById('input-focus');

  function storeName() {
    const array = name.value.split(' ');
    const lastNameEntered = array[array.length - 1];
    document.cookie = lastNameEntered;
  }
  nameButton.addEventListener('click', storeName);
};

export default infoCtrl;
