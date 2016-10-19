import Granim from 'granim';
import { granimInstance } from '../lib/background';
import { getState } from '../globalState';
import {
  timeHasPassedNotification,
  clearTimers,
  timers,
  startTimerFirstVisitOnly,
  startNotificationSequence,
} from '../lib/breathingtimer';
import {
   breathe,
   headMovement,
  } from '../animations';
import {
   showMenu,
   hideMenuTimer,
   showModal,
   hideModal,
   toggleAudio,
   fadeoutMusic,
} from '../lib/breathingmenu';

const breatheCtrl = () => {
  const feelingBetterBtn = document.getElementById('feel-good-button');
  const body = document.getElementsByTagName('body')[0];
  // const audio = document.getElementById('audio');
  // const audioControl = document.getElementById('audio-controls');
  const instructions = document.getElementById('breathing-info');
  const exitModalButton = document.getElementById('exit-modal-button');

  const settings = document.getElementById('breathing-settings');
  const breathingPageVisited = localStorage.getItem('hasVisited');

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
  body.addEventListener('click', showMenu);
  instructions.addEventListener('click', showModal);
  exitModalButton.addEventListener('click', hideModal);
  exitModalButton.addEventListener('click', () => {
    startTimerFirstVisitOnly(breathingPageVisited);
  });

  breathe();
  headMovement();
  // audio.play();
  if (!breathingPageVisited) {
    showModal();
  } else {
    setTimeout(() => {
      hideMenuTimer();
    }, 2000);
    startNotificationSequence();
  }
};

export default breatheCtrl;
