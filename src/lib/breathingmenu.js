import { TimelineMax, TweenMax } from 'gsap';
import { getState, saveState } from '../globalState';
import {
  showModal,
  hideModal,
  hideModalFirstVisit,
  displayMenu,
  hideMenu,
} from '../animations/index';

let timer;

const updateMenuState = () => {
  if (getState().menuIsDisplayed) saveState({ menuIsDisplayed: false });
  else saveState({ menuIsDisplayed: true });
};

export const hideMenuTimer = () => {
  timer = setTimeout(() => {
    hideMenu();
    updateMenuState();
  }, 5000);
};

const resetHideMenuTimer = () => {
  clearTimeout(timer);
  hideMenuTimer();
};

export const toggleBreathingMenu = (e) => {
  const elementsThatResetTimer = ['audio-controls', 'breathing-menu', 'menu-options', 'feel-good-modal'];
  const elementsThatWontTriggerMenu = ['breathing-settings', 'breathing-info', 'feel-good-button', 'exit-modal-button'];
  if (elementsThatWontTriggerMenu.includes(e.target.id)) return;
  else if (getState().modalActive) return;
  else if (!getState().menuIsDisplayed) {
    displayMenu();
    updateMenuState();
    resetHideMenuTimer();
  } else if (getState().menuIsDisplayed && (elementsThatResetTimer.includes(e.target.id))) {
    resetHideMenuTimer();
  } else if (getState().menuIsDisplayed) {
    hideMenu();
    updateMenuState();
  }
};

const updateModalState = () => {
  if (getState().modalActive) saveState({ modalActive: false });
  else saveState({ modalActive: true });
};

export const toggleModal = () => {
  if (getState().modalActive && getState().hasVisited) {
    hideModalFirstVisit();
    hideMenuTimer();
    updateModalState();
  } else if (getState().modalActive) {
    hideModal();
    hideMenuTimer();
    updateModalState();
  } else if (!getState().modalActive) {
    updateModalState();
    showModal();
    clearTimeout(timer);
  }
};
