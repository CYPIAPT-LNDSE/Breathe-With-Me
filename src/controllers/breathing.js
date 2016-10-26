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
  } from '../animations';
import breathingMenu from '../lib/breathingmenu';
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
  breathingPage.addEventListener('click', (e) => {
    breathingMenu.toggleBreathingMenu(e);
  });
  instructions.addEventListener('click', () => {
    breathingMenu.toggleModal();
  });
  exitModalButton.addEventListener('click', () => {
    breathingMenu.toggleModal();
  });
  exitModalButton.addEventListener('click', () => {
    startTimerFirstVisitOnly();
  });

  breathe();
  headMovement();
  // audio.play();
  if (!getState().hasVisited) breathingMenu.toggleModal();
  else {
    breathingMenu.setHideMenuTimer(7000);
    startNotificationSequence();
    localStorage.setItem('hasVisited', 'true');
  }
};

export default breatheCtrl;
