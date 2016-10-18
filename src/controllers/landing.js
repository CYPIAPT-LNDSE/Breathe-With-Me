import { askNameToBreathingInfo, nameToInfoSwitch } from '../animations';
import { saveState } from '../globalState';

const landingCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');

  nameSubmitButton.addEventListener('click', () => {
    const name = document.querySelector('#input-username').value;
    saveState({ name });
  });
};

export default landingCtrl;
