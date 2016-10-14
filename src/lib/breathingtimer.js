import { TweenLite, TweenMax } from 'gsap';

let timer1, timer2, timer3;
export const timers = [timer1, timer2, timer3];

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

export const clearTimers = () => {
  timers.forEach((el) => {
    clearTimeout(el);
  });
};

export const startTimerFirstVisitOnly = (breathingPageVisited) => {
  if (!breathingPageVisited) {
    localStorage.setItem('hasVisited', true);
    timeHasPassedNotification(6000, '#first-msg', 0);
    timeHasPassedNotification(120000, '#after-two-min', 1);
    timeHasPassedNotification(300000, '#after-five-min', 2);
  }
};
