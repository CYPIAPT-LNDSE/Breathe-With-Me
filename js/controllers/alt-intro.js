import { askNameToBreathingInfo, nameToInfoSwitch } from '../animations';

const infoCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const name = document.getElementById('input-focus');

  function storeName() {
    const array = name.value.split(' ');
    const lastNameEntered = array[array.length - 1];
    document.cookie = lastNameEntered;
  }

  nameSubmitButton.addEventListener('click', function(){
    storeName();
    nameToInfoSwitch();
  });

  if (!document.cookie) {
    askNameToBreathingInfo();
  } else {
    const name = document.cookie;
    document.querySelector('.name').innerText = `Hi ${name}`;
    nameToInfoSwitch();
  }
};

export default infoCtrl;
