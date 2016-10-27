import Granim from 'granim';
import { granimInstance } from '../lib/background';
import { getState } from '../globalState';
import {
  notifications,
  saveStateHasVisited,
} from '../lib/breathingtimer';
import {
   breathe,
   headMovement,
  } from '../animations';
import breathingMenu from '../lib/breathingmenu';
import {
  toggleAudio,
  fadeoutMusic,
  startAudio,
} from '../lib/audio';

const breatheCtrl = () => {
  const feelingBetterBtn = document.getElementById('feel-good-button');
  const breathingPage = document.getElementsByClassName('breathing')[0];
  const audioControl = document.getElementById('audio-controls');
  const instructions = document.getElementById('breathing-info');
  const exitModalButton = document.getElementById('exit-modal-button');
  const settings = document.getElementById('breathing-settings');

  feelingBetterBtn.addEventListener('click', () => {
    granimInstance().changeState('dark-state');
  });
  feelingBetterBtn.addEventListener('click', () => {
    notifications.resetTick();
  });
  settings.addEventListener('click', () => {
    notifications.resetTick();
  });
  feelingBetterBtn.addEventListener('click', () => {
    fadeoutMusic(260);
  });
  settings.addEventListener('click', () => {
    fadeoutMusic(280);
  });
  audioControl.addEventListener('click', toggleAudio);
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
    saveStateHasVisited();
  });

  breathe();
  headMovement();
  startAudio();
  if (!getState().hasVisited) breathingMenu.toggleModal();
  else {
    breathingMenu.setHideMenuTimer(7000);
  }
};

export default breatheCtrl;
