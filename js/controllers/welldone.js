import { welldoneToIntro, breathingToWelldone } from '../animations';
import { granimInstance } from '../lib/background';

const welldoneCtrl = () => {
  const startAgain = document.getElementById('start-again');
  startAgain.addEventListener('click', () => {
    granimInstance.changeState('default-state');
  });

  const username = localStorage.getItem('username')
  document.querySelector('.welldone-user').innerText = `${username}!`;
};

export default welldoneCtrl;
