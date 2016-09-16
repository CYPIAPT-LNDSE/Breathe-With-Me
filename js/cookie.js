const nameButton = document.getElementById('name-question-button');
const name = document.getElementById('input-focus');
const landing = document.getElementsByClassName('landing')[0];
const welcome = document.getElementsByClassName('welcome')[0];


function storeName() {
  var array = name.value.split(' ');
  lastNameEntered = array[array.length - 1];
  document.cookie = lastNameEntered;
}

nameButton.addEventListener('click', storeName);
