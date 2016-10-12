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
  const audioControl = document.getElementById('audio-controls');

  const toggleAudio = (e) => {
    if (e.target.textContent === 'volume_off') {
      e.target.textContent = 'volume_up';
      audio.play();
    } else {
      e.target.textContent = 'volume_off';
      audio.pause();
    }
  };

  // hands.addEventListener('click', changeToFractalView);
  // belly.addEventListener('click', changeToFractalView);

  FeelingBetterBtn.addEventListener('click', () => {
    granimInstance.changeState('dark-state');
  });
  audioControl.addEventListener('click', toggleAudio);

  breathe();
  headMovement();
};

export default breatheCtrl;
