import { TweenLite, TweenMax } from 'gsap';

let menuIsDisplayed = true;
let hideMenuTimer;
const elementsThatWontTriggerMenu = ['feel-good-button', 'info', 'settings'];
const elementsThatResetTimer = ['audio-controls', 'breathing-menu', 'menu-options'];

export const hideMenu = () => {
  hideMenuTimer = setTimeout(() => {
    TweenMax.to('#breathing-menu', 0.5, { y: -50 });
    menuIsDisplayed = false;
  }, 6000);
};

const resetHideMenuTimer = () => {
  clearTimeout(hideMenuTimer);
  hideMenu();
};

export const showMenu = (e) => {
  if (elementsThatWontTriggerMenu.includes(e.target.id)) {
    return;
  } else if (document.getElementById('breathing-menu').style.height === '100%') {
    return;
  } else if (menuIsDisplayed === false) {
    TweenMax.to('#breathing-menu', 0.5, { y: 0 });
    menuIsDisplayed = true;
    resetHideMenuTimer();
  } else if (menuIsDisplayed === true && (elementsThatResetTimer.includes(e.target.id))) {
    resetHideMenuTimer();
  } else if (menuIsDisplayed === true) {
    menuIsDisplayed = false;
    TweenMax.to('#breathing-menu', 0.5, { y: -50 });
  }
};

export const showModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { height: '100%' } }))
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'block', opacity: 1 }));
  clearTimeout(hideMenuTimer);
};

export const hideModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'none', opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { height: '7%' } }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0.8, display: 'block' }));
  hideMenu();
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
