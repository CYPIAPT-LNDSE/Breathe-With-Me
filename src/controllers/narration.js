import { getState } from '../globalState';
import { granimInstance } from '../lib/background';

const narrationCtrl = () => {
  const { name, granimState } = getState();
  const mountains = $('.mountain');

  granimInstance().changeState(granimState);

  switch (granimState) {
    case 'default-state':
      mountains.addClass('cat');
      break;
    case 'dog-state':
      mountains.addClass('dog');
      break;
    case 'panda-state':
      mountains.addClass('panda');
      break;

    default:
      mountains.addClass('cat');
  }

  document.querySelector('#landing-username').innerText = `Hi ${name}`;
};

export default narrationCtrl;
