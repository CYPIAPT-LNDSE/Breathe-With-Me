import { TweenLite, TweenMax } from 'gsap';

let menuIsDisplayed = true;
let timer;
const elementsThatWontTriggerMenu = ['feel-good-button', 'info', 'settings'];
const elementsThatResetTimer = ['audio-controls', 'breathing-menu', 'menu-options'];

export const hideMenuTimer = () => {
  timer = setTimeout(() => {
    TweenMax.to('#breathing-menu', 0.5, { y: -50 });
    menuIsDisplayed = false;
  }, 6000);
};

const resetHideMenuTimer = () => {
  clearTimeout(timer);
  hideMenuTimer();
};

const displayMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: 0 });
  menuIsDisplayed = true;
};

const hideMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: -50 });
  menuIsDisplayed = false;
};

export const showMenu = (e) => {
  if (elementsThatWontTriggerMenu.includes(e.target.id)) {
    return;
  } else if (document.getElementById('breathing-menu').style.height === '100%') {
    return;
  } else if (menuIsDisplayed === false) {
    displayMenu();
    resetHideMenuTimer();
  } else if (menuIsDisplayed === true && (elementsThatResetTimer.includes(e.target.id))) {
    resetHideMenuTimer();
  } else if (menuIsDisplayed === true) {
    hideMenu();
  }
};

export const showModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { height: '100%' } }))
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'block', opacity: 1 }));
  clearTimeout(timer);
};

export const hideModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'none', opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { height: '7%' } }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0.8, display: 'block' }));
  hideMenuTimer();
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
    }
  }, interval);
};
