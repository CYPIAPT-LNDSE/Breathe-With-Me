import { TweenMax, TimelineMax } from 'gsap';
import { displayNotification } from '../animations/index';
import { saveState, getState } from '../globalState';
import breathingMenu from './breathingmenu';

export const notifications = {};

notifications.breathingTick = 0;

notifications.resetTick = function () {
  notifications.breathingTick = 0;
};

notifications.updateNotification = function (notification) {
  const message = document.getElementById('fading-message');
  message.textContent = notification;
};

notifications.onInhale = function () {
  if (breathingMenu.menuIsDisplayed || breathingMenu.modalIsDisplayed) return;

  notifications.breathingTick += 1;

  switch (notifications.breathingTick) {
    case 1:
      notifications.updateNotification('place one hand on your belly..');
      displayNotification();
      break;
    case 2:
      notifications.updateNotification('..and follow me..');
      displayNotification();
      break;
    case 3:
      notifications.updateNotification('breathe deeply and slowly..');
      displayNotification();
      break;
    case 5:
      notifications.updateNotification('as I grow, gently breathe in..');
      displayNotification();
      break;
    case 8:
      notifications.updateNotification('let your belly shrink as your chest expands');
      displayNotification();
      break;
    case 11:
      notifications.updateNotification('this is how we practice deep breathing');
      displayNotification();
      break;
    case 12:
      notifications.updateNotification('..one continuous motion without pause..');
      displayNotification();
      break;
    case 13:
      notifications.updateNotification('..deeply and slowly..');
      displayNotification();
      break;
    case 14:
      notifications.updateNotification('..that\'s two minutes \n welldone, ' + getState().name + '!');
      displayNotification();
      break;
    case 15:
      notifications.updateNotification('..continue for as long as you like..');
      displayNotification();
      break;
    case 30:
      notifications.updateNotification('it\'s been 5 minutes \nwelldone!');
      displayNotification();
      break;
    default: break;
  }
};

notifications.onExhale = function () {
  if (breathingMenu.menuIsDisplayed || breathingMenu.modalIsDisplayed) return;
  switch (notifications.breathingTick) {
    case 6:
      notifications.updateNotification('and out, without pause, as I shrink');
      displayNotification();
      break;
    case 9:
      notifications.updateNotification('..and grow again as you exhale');
      displayNotification();
      break;
    default: break;
  }
};

export const saveStateHasVisited = () => {
  if (!getState().hasVisited) {
    saveState({ hasVisited: true });
  }
};
