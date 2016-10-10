import { outOfLanding, landingAnimation } from '../animations';

const toggleAudio = (e) => {
  if (e.target.textContent === "volume_off") {
    e.target.textContent = "volume_up";
    audio.play();
  } else {
    e.target.textContent = "volume_off";
    audio.pause();
  }
};

const landingCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  const audioControl = document.getElementById('audio-controls');
  const audio = document.getElementById('audio');

  landingButton.addEventListener('click', outOfLanding);
  audioControl.addEventListener('click', toggleAudio);

  audio.volume = 0.3;
  landingAnimation();
};

export default landingCtrl;
