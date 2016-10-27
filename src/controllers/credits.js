import { getState } from '../globalState';
import { granimInstance } from '../lib/background';

const creditsCtrl = () => {
  const { granimState } = getState();

  document.getElementById('back-icon').addEventListener('click', () => {
    granimInstance().changeState(granimState);
  });
};

export default creditsCtrl;
