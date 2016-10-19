import blacklist from '../lib/blacklist';

const landingCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const inputValidation = document.getElementById('input-validation');

  nameSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('#input-username').value;
    const isEmptyName = !name.trim().length;
    const isBlacklistedWord = name.trim()
      .split(/\s/)
      .some(word => !!blacklist[word]);
    if (isEmptyName) {
      inputValidation.textContent = 'Please enter a name!';
      inputValidation.style.visibility = 'visible';
    } else if (isBlacklistedWord) {
      inputValidation.textContent = 'Please enter a different name!';
      inputValidation.style.visibility = 'visible';
    } else {
      inputValidation.style.visibility = 'hidden';
      localStorage.setItem('username', name);
      location.hash = this.attributes.getNamedItem('href').value;
    }
  });
};

export default landingCtrl;
