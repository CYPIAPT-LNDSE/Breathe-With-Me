import { TweenMax, TimelineMax } from 'gsap';
import { saveState, getState } from '../globalState';

let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let timer7;

const intervals = [7000, 15000, 26000, 37000, 60000, 120000, 300000];
const messages = ['#first-msg', '#second-msg', '#third-msg', '#fourth-msg', '#fifth-msg', '#after-two-min', '#after-five-min'];
const timers = [timer1, timer2, timer3, timer4, timer5, timer6, timer7];

const timeHasPassedNotification = (time, targetEl, timer) => {
  timers[timer] = setTimeout(() => {
    const tl = new TimelineMax();
    tl
      .add(TweenMax.to(targetEl, 2, { display: 'block', opacity: 1 }))
      .add(TweenMax.delayedCall(3, () => {
        TweenMax.to(targetEl, 2, { display: 'none', opacity: 0 });
      }));
  }, time);
};

export const startNotificationSequence = () => {
  timers.forEach((item, i) => {
    timeHasPassedNotification(intervals[i], messages[i], i);
  });
};

export const clearTimers = () => {
  timers.forEach((el) => {
    clearTimeout(el);
  });
};

export const startTimerFirstVisitOnly = () => {
  if (!getState().hasVisited) {
    saveState({ hasVisited: true });
    startNotificationSequence();
  }
};
