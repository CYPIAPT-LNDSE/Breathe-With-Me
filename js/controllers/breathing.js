import { outOfBreathing,
   breathe,
   headMovement,
   fromBreathingToIntro,
   changeToFractalView,
  } from '../animations';

const toggleAudio = (e) => {
  if (e.target.textContent === "volume_up") {
    e.target.textContent = "volume_off";
    audio.play();
  } else {
    e.target.textContent = "volume_up";
    audio.pause();
  }
}

const breatheCtrl = () => {
  const belly = document.getElementById('belly');
  const hands = document.getElementById('hands');
  const exitBreathing = document.getElementById('exit-breathing');
  const FeelingBetterBtn = document.getElementById('feel-good-button');
  const audioControl = document.getElementById('audio-controls');
  const audio = document.getElementById('audio');

  // hands.addEventListener('click', changeToFractalView);
  // belly.addEventListener('click', changeToFractalView);
  audioControl.addEventListener('click', toggleAudio);
  exitBreathing.addEventListener('click', fromBreathingToIntro);
  FeelingBetterBtn.addEventListener('click', outOfBreathing);

  breathe();
  headMovement();
};

export default breatheCtrl;
