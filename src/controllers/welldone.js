import { welldoneToIntro, breathingToWelldone } from '../animations';
import { granimInstance } from '../lib/background';
import { getState } from '../globalState';

const welldoneCtrl = () => {
  const { granimState, name } = getState();
  const startAgain = document.getElementById('start-again');
  startAgain.addEventListener('click', () => {
    granimInstance().changeState(granimState);
  });
  document.querySelector('.welldone-user').innerText = `${name}!`;
};

export default welldoneCtrl;
