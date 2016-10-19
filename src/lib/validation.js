import blacklist from '../lib/blacklist';

const isNameInvalid = (name) => {
  const inputValidation = document.getElementById('input-validation');
  const nameIsEmpty = !name.trim().length;
  const nameIsBlacklisted = name.trim().split(/\s/).some(word => !!blacklist[word]);

  if (nameIsEmpty) {
    inputValidation.textContent = 'Please enter a name!';
    inputValidation.style.visibility = 'visible';
    return true;
  } else if (nameIsBlacklisted) {
    inputValidation.textContent = 'Please enter a different name!';
    inputValidation.style.visibility = 'visible';
    return true;
  } else {
    inputValidation.style.visibility = 'hidden';
    return false;
  }
};

export default isNameInvalid;
