import isNameInvalid from '../lib/validation';
import { saveState, getState } from '../globalState';

const landingCtrl = () => {
  const nameInput = document.querySelector('#input-username')
  const { hasVisited, name, avatar } = getState();
  if (name !== undefined) {
    nameInput.value = name;
  }

  const nameSubmitButton = document.getElementById('name-question-button');

  nameSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('#input-username').value;
    if (isNameInvalid(name.trim().toLowerCase())) return;
    else {
      saveState({ name });
      location.hash = this.attributes.getNamedItem('href').value;
    }
  });
};

export default landingCtrl;
