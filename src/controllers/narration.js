const narrationCtrl = () => {
  const username = localStorage.getItem('username');
  const startBreathingCat = document.getElementById('start-breathing-cat-button');
  document.querySelector('#landing-username').innerText = `Hi ${username}`;
};

export default narrationCtrl;
