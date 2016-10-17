import { askNameToBreathingInfo, nameToInfoSwitch } from '../animations';

const landingCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');

  nameSubmitButton.addEventListener('click', () => {
    const name = document.querySelector('#input-username').value;
    localStorage.setItem('username', name);
  });
};

export default landingCtrl;
