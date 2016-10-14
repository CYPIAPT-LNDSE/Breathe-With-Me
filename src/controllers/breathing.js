import Granim from 'granim';
import { granimInstance } from '../lib/background.js';
import {
   breathe,
   headMovement,
   hideMenu,
   showMenu,
   showModal,
   hideModal,
   timeHasPassedNotification,
  //  changeToFractalView,
  } from '../animations';

const breatheCtrl = () => {
  // const belly = document.getElementById('belly');
  // const hands = document.getElementById('hands');
  const FeelingBetterBtn = document.getElementById('feel-good-button');
  const body = document.getElementsByTagName('body')[0];
  const audio = document.getElementById('audio');
  const audioControl = document.getElementById('audio-controls');
  const instructions = document.getElementById('breathing-info');
  const exitModalButton = document.getElementById('exit-modal-button');

  // hands.addEventListener('click', changeToFractalView);
  // belly.addEventListener('click', changeToFractalView);

  const toggleAudio = (e) => {
    if (e.target.textContent === 'volume_off') {
      e.target.textContent = 'volume_up';
      audio.play();
    } else {
      e.target.textContent = 'volume_off';
      audio.pause();
    }
  };

  FeelingBetterBtn.addEventListener('click', () => {
    granimInstance.changeState('dark-state');
  });
  audioControl.addEventListener('click', toggleAudio);
  body.addEventListener('click', showMenu);
  instructions.addEventListener('click', showModal);
  exitModalButton.addEventListener('click', hideModal);

  breathe();
  headMovement();
  timeHasPassedNotification(8000, "#first-msg");
  timeHasPassedNotification(120000, "#after-two-min");
  timeHasPassedNotification(300000, "#after-five-min");
  setTimeout(() => {
    hideMenu();
  }, 2000);
};

export default breatheCtrl;
