import blacklist from '../lib/blacklist';

const notifyUser = (notification) => {
  const inputValidation = document.getElementById('input-validation');
  inputValidation.textContent = notification;
  inputValidation.style.visibility = 'visible';
  return true;
};

const isNameInvalid = (name) => {
  const nameIsEmpty = !name.length;
  let nameIsBlacklisted = [name].some(word => !!blacklist[word]);
  if (!nameIsBlacklisted) nameIsBlacklisted = name.split(/\s/).some(word => !!blacklist[word]);

  if (name.length > 30) return notifyUser('Maximum 30 characters!');
  else if (nameIsEmpty) return notifyUser('Please enter a name!');
  else if (nameIsBlacklisted) return notifyUser('Please enter a different name!');
  else {
    document.getElementById('input-validation').style.visibility = 'hidden';
    return false;
  }
};

export default isNameInvalid;
