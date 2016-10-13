import Granim from 'granim';
import { granimInstance } from '../lib/background.js';
import {
   breathe,
   headMovement,
   timeHasPassedNotification,
  //  changeToFractalView,
  } from '../animations';
import {
   showMenu,
   hideMenuTimer,
   showModal,
   hideModal,
   toggleAudio,
} from '../lib/breathingmenu.js';

const breatheCtrl = () => {
  // const belly = document.getElementById('belly');
  // const hands = document.getElementById('hands');
  const FeelingBetterBtn = document.getElementById('feel-good-button');
  const body = document.getElementsByTagName('body')[0];
  const audio = document.getElementById('audio');
  const audioControl = document.getElementById('audio-controls');
  const instructions = document.getElementById('info');
  const exitModalButton = document.getElementById('exit-modal-button');

  // hands.addEventListener('click', changeToFractalView);
  // belly.addEventListener('click', changeToFractalView);

  const breathingPageVisited = localStorage.getItem('hasVisited');

  const startTimerFirstVisitOnly = () => {
    if (!breathingPageVisited) {
      localStorage.setItem('hasVisited', true);
      timeHasPassedNotification(6000, '#first-msg');
      timeHasPassedNotification(120000, '#after-two-min');
      timeHasPassedNotification(300000, '#after-five-min');
    }
  };

  FeelingBetterBtn.addEventListener('click', () => {
    granimInstance.changeState('dark-state');
  });
  audioControl.addEventListener('click', toggleAudio);
  body.addEventListener('click', showMenu);
  instructions.addEventListener('click', showModal);
  exitModalButton.addEventListener('click', hideModal);
  exitModalButton.addEventListener('click', startTimerFirstVisitOnly);

  breathe();
  headMovement();
  if (!breathingPageVisited) {
    showModal();
  } else {
    setTimeout(() => {
      hideMenuTimer();
    }, 2000);
    timeHasPassedNotification(8000, '#first-msg');
    timeHasPassedNotification(120000, '#after-two-min');
    timeHasPassedNotification(300000, '#after-five-min');
  }
};

export default breatheCtrl;
