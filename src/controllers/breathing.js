import Granim from 'granim';
import { granimInstance } from '../lib/background.js';
import {
   breathe,
   headMovement,
  //  changeToFractalView,
  } from '../animations';

const breatheCtrl = () => {
  // const belly = document.getElementById('belly');
  // const hands = document.getElementById('hands');
  const FeelingBetterBtn = document.getElementById('feel-good-button');
  const audio = document.getElementById('audio');

  // hands.addEventListener('click', changeToFractalView);
  // belly.addEventListener('click', changeToFractalView);

  FeelingBetterBtn.addEventListener('click', () => {
    granimInstance.changeState('dark-state');
  });
  audio.volume = 1;

  breathe();
  headMovement();
};

export default breatheCtrl;
