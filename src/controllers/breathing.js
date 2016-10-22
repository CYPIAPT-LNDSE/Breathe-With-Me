import Granim from 'granim';
import { granimInstance } from '../lib/background';
import { getState, saveState } from '../globalState';
import {
  clearTimers,
  startTimerFirstVisitOnly,
  startNotificationSequence,
} from '../lib/breathingtimer';
import {
   breathe,
   headMovement,
  } from '../animations';
import {
   toggleBreathingMenu,
   hideMenuTimer,
   toggleModal,
} from '../lib/breathingmenu';
// import {
//   toggleAudio,
//   fadeoutMusic,
// } from '../lib/audio';

const breatheCtrl = () => {
  const feelingBetterBtn = document.getElementById('feel-good-button');
  const breathingPage = document.getElementsByClassName('breathing')[0];
  // const audio = document.getElementById('audio');
  // const audioControl = document.getElementById('audio-controls');
  const instructions = document.getElementById('breathing-info');
  const exitModalButton = document.getElementById('exit-modal-button');
  const settings = document.getElementById('breathing-settings');

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
  instructions.addEventListener('click', toggleModal);
  exitModalButton.addEventListener('click', toggleModal);
  exitModalButton.addEventListener('click', () => {
    startTimerFirstVisitOnly();
  });

  breathe();
  headMovement();
  saveState({ menuIsDisplayed: true });
  // audio.play();
  if (!getState().hasVisited) toggleModal();
  else {
    setTimeout(() => {
      hideMenuTimer();
    }, 2000);
    startNotificationSequence();
  }
};

export default breatheCtrl;
