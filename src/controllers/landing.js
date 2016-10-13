import { askNameToBreathingInfo, nameToInfoSwitch } from '../animations';

const landingCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const username = localStorage.getItem('username');

  nameSubmitButton.addEventListener('click', () => {
    const name = document.querySelector('#input-username').value;
    localStorage.setItem('username', name);
    document.querySelector('#landing-username').innerText = `Hi ${name}`;
    nameToInfoSwitch();
  });

  if (!username) {
    askNameToBreathingInfo();
  } else {
    document.querySelector('#landing-username').innerText = `Hi ${username}`;
    nameToInfoSwitch();
  }
};

export default landingCtrl;
