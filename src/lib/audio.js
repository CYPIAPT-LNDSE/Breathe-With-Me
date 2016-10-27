const audio = document.getElementById('audio');

export const startAudio = () => {
  audio.play();
  audio.volume = 1;
};

export const toggleAudio = (e) => {
  if (e.target.textContent === 'volume_off') {
    e.target.textContent = 'volume_up';
    audio.play();
  } else {
    e.target.textContent = 'volume_off';
    audio.pause();
  }
};

export const fadeoutMusic = (int) => {
  let vol = 1;
  const interval = int;

  const fadeout = setInterval(() => {
    if (vol >= 0.05) {
      vol -= 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fadeout);
      audio.volume = 0;
    }
  }, interval);
};
