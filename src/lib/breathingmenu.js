import { TimelineMax, TweenMax } from 'gsap';

let menuIsDisplayed = true;
let timer;

export const hideMenuTimer = () => {
  timer = setTimeout(() => {
    TweenMax.to('#breathing-menu', 0.5, { y: -75 });
    TweenMax.to('#feel-good-modal', 0.5, { y: 120 });
    menuIsDisplayed = false;
  }, 5000);
};

const resetHideMenuTimer = () => {
  clearTimeout(timer);
  hideMenuTimer();
};

const displayMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: 0 });
  TweenMax.to('#feel-good-modal', 0.5, { y: 0 });
  menuIsDisplayed = true;
};

const hideMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: -47 });
  TweenMax.to('#feel-good-modal', 0.5, { y: 120 });
  menuIsDisplayed = false;
};

export const toggleBreathingMenu = (e) => {
  const elementsThatResetTimer = ['audio-controls', 'breathing-menu', 'menu-options', 'feel-good-modal'];
  const elementsThatWontTriggerMenu = ['breathing-settings', 'breathing-info', 'feel-good-button'];
  if (elementsThatWontTriggerMenu.includes(e.target.id)) return;
  if (e.target.className.indexOf('modal-active') !== -1) return;
  else if (menuIsDisplayed === false) {
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
    .add(TweenMax.to('#feel-good-modal', 0.5, { y: 120 }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { y: 0, className: 'full-screen-modal modal-active' } }))
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'block', opacity: 1 }));
  clearTimeout(timer);
};

export const hideModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'none', opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { className: '' } }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0.8, display: 'block' }))
  if (localStorage.getItem('hasVisited')) {
      tl.add(TweenMax.to('#feel-good-modal', 0.5, { y: 0 }));
  } else {
      tl.add(TweenMax.to('#feel-good-modal', 0.5, { opacity: 0.8, y: 0, display: 'block' }));
  }
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
      audio.volume = 1;
    }
  }, interval);
};
