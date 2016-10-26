import { TweenMax, TimelineMax } from 'gsap';
import { saveState, getState } from '../globalState';

let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let timer7;
let timer8;
let timer9;
let timer10;
let timer11;
let timer12;
let timer13;

const intervals = [
  7000,
  15000,
  23000,
  31000,
  39000,
  47000,
  55000,
  63000,
  71000,
  82000,
  103000,
  120000,
  300000,
];
const messages = [
  '#first-msg',
  '#second-msg',
  '#third-msg',
  '#fourth-msg',
  '#fifth-msg',
  '#sixth-msg',
  '#seventh-msg',
  '#eigth-msg',
  '#ninth-msg',
  '#tenth-msg',
  '#eleventh-msg',
  '#after-two-min',
  '#after-five-min',
];
const timers = [
  timer1,
  timer2,
  timer3,
  timer4,
  timer5,
  timer6,
  timer7,
  timer8,
  timer9,
  timer10,
  timer11,
  timer12,
  timer13,
];

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
