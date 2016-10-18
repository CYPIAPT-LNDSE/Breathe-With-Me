import { TweenLite, TweenMax } from 'gsap';

let timer1, timer2, timer3, timer4, timer5, timer6, timer7;
const intervals = [7000, 15000, 26000, 37000, 60000, 120000, 300000];
const messages = ['#first-msg', '#second-msg', '#third-msg', '#fourth-msg', '#fifth-msg', '#after-two-min', '#after-five-min'];
export const timers = [timer1, timer2, timer3, timer4, timer5, timer6, timer7];

export const timeHasPassedNotification = (time, targetEl, timer) => {
  timers[timer] = setTimeout(() => {
    const tl = new TimelineMax();
    tl
      .add(TweenMax.to(targetEl, 2, { display: 'block', opacity: 1 }))
      .add(TweenMax.delayedCall(3, () => {
        TweenMax.to(targetEl, 2, { display: 'none', opacity: 0 })
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

export const startTimerFirstVisitOnly = (breathingPageVisited) => {
  if (!breathingPageVisited) {
    localStorage.setItem('hasVisited', true);
    startNotificationSequence();
  }
};
