import { getState } from '../globalState';

const narrationCtrl = () => {
  const { name } = getState();
  const startBreathingCat = document.getElementById('start-breathing-cat-button');
  document.querySelector('#landing-username').innerText = `Hi ${name}`;
};

export default narrationCtrl;
