const nameButton = document.getElementById('nameButton');
const name = document.getElementById('name-form');
const landing = document.getElementsByClassName('landing')[0];
const welcome = document.getElementsByClassName('welcome')[0]; //change to start page

if (document.cookie) {
  landing.style.visibility = "hidden";
  welcome.style.visibility = "visible"; //change to start page & perhaps add animations
}

function storeName() {
  document.cookie = name.value;
}

nameButton.addEventListener('click', storeName);
