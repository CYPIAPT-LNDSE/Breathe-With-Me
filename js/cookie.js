const nameButton = document.getElementById('name-question-button');
const name = document.getElementById('input-focus');

function storeName() {
  var array = name.value.split(' ');
  lastNameEntered = array[array.length - 1];
  document.cookie = lastNameEntered;
}

nameButton.addEventListener('click', storeName);
