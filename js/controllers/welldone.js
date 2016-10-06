import { welldoneToIntro, breathingToWelldone } from '../animations';

const welldoneCtrl = () => {
  const startAgain = document.getElementById('start-again');
  startAgain.addEventListener('click', welldoneToIntro);
};

export default welldoneCtrl;
