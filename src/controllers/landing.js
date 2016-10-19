import isNameInvalid from '../lib/validation';
import { saveState } from '../globalState';

const landingCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');

  nameSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('#input-username').value;
    if (isNameInvalid(name.trim().toLowerCase())) return;
    else {
      localStorage.setItem('username', name);
      location.hash = this.attributes.getNamedItem('href').value;
      saveState({ name });
    }
  });
};

export default landingCtrl;
