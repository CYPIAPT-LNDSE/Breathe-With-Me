const nameButton = document.getElementById('name-question-button');
const name = document.getElementById('input-focus');
const landing = document.getElementsByClassName('landing')[0];
const welcome = document.getElementsByClassName('welcome')[0];

// if (document.cookie) {
//    landing.style.visibility = "hidden";
//    welcome.style.visibility = "visible";
// }

function storeName() {
  // document.cookie = name.value.split(' ')[0];
  var array = name.value.split(' ');
  console.log('Array Names', array);
  lastNameEntered = array[array.length - 1];
  console.log('lastNameEntered', lastNameEntered);
  document.cookie = lastNameEntered;
}

nameButton.addEventListener('click', storeName);
