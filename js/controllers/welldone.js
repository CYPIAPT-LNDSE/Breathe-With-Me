import { welldoneToIntro } from '../animations';

const welldoneCtrl = () => {
  const startAgain = document.getElementById('start-again');
  startAgain.addEventListener('click', welldoneToIntro);
};

module.exports = welldoneCtrl;
