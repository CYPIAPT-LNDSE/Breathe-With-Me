import { outOfLanding, landingAnimation } from '../animations';
import { askNameToBreathingInfo, nameToInfoSwitch } from '../animations';

const landingCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const username = localStorage.getItem('username');

  nameSubmitButton.addEventListener('click', () => {
    const name = document.getElementById('input-focus').value;
    localStorage.setItem('username', name);
    document.querySelector('.name').innerText = `Hi ${name}`;
    nameToInfoSwitch();
  });

  if (!username) {
    askNameToBreathingInfo();
  } else {
    document.querySelector('.name').innerText = `Hi ${username}`;
    nameToInfoSwitch();
  }
};

export default landingCtrl;
