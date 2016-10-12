import { askNameToBreathingInfo, nameToInfoSwitch } from '../animations';

const infoCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const username = localStorage.getItem('username');

  nameSubmitButton.addEventListener('click', () => {
    const name = document.getElementById('input-focus').value;
    localStorage.setItem('username', name);
    nameToInfoSwitch();
  });

  if (!username) {
    askNameToBreathingInfo();
  } else {
    document.querySelector('.name').innerText = `Hi ${username}`;
    nameToInfoSwitch();
  }
};

export default infoCtrl;
