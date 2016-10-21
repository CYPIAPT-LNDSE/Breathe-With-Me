import Granim from 'granim';
import { granimInstance } from '../lib/background';
import { getState } from '../globalState';
import {
  clearTimers,
  startTimerFirstVisitOnly,
  startNotificationSequence,
} from '../lib/breathingtimer';
import {
   breathe,
   headMovement,
   showFeelGoodModal,
  } from '../animations';
import {
   toggleBreathingMenu,
   updateModalState,
   hideMenuTimer,
   showModal,
   hideModal,
   toggleAudio,
   fadeoutMusic,
} from '../lib/breathingmenu';

const breatheCtrl = () => {
  const feelingBetterBtn = document.getElementById('feel-good-button');
  const breathingPage = document.getElementsByClassName('breathing')[0];
  // const audio = document.getElementById('audio');
  // const audioControl = document.getElementById('audio-controls');
  const instructions = document.getElementById('breathing-info');
  const exitModalButton = document.getElementById('exit-modal-button');
  const settings = document.getElementById('breathing-settings');
  const { hasVisited } = getState();

  feelingBetterBtn.addEventListener('click', () => {
    granimInstance().changeState('dark-state');
  });
  feelingBetterBtn.addEventListener('click', clearTimers);
  settings.addEventListener('click', clearTimers);
  // feelingBetterBtn.addEventListener('click', () => {
  //   fadeoutMusic(260);
  // });
  // settings.addEventListener('click', () => {
  //   fadeoutMusic(280);
  // });
  // audioControl.addEventListener('click', toggleAudio);
  breathingPage.addEventListener('click', toggleBreathingMenu);
  instructions.addEventListener('click', updateModalState);
  instructions.addEventListener('click', showModal);
  exitModalButton.addEventListener('click', updateModalState);
  exitModalButton.addEventListener('click', hideModal);
  exitModalButton.addEventListener('click', () => {
    startTimerFirstVisitOnly();
  });

  breathe();
  headMovement();
  // audio.play();
  if (!hasVisited) {
    updateModalState();
    showModal();
  } else {
    setTimeout(() => {
      hideMenuTimer();
    }, 2000);
    startNotificationSequence();
  }
};

export default breatheCtrl;
