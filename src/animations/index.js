import { TweenMax, TimelineMax, Power1, Elastic, Back } from 'gsap';
import { notifications } from '../lib/breathingtimer';
import { getState } from '../globalState';

const promisify = tl =>
  new Promise(success => tl.addCallback(success));

export const intoAvatar = () => {
  const activeAvatar = document.querySelector('.carousel_item.active');
  const tl = new TimelineMax();
  tl
  .add(TweenMax.to('#avatar-header', 0.3, { opacity: 1 }))
  .add(TweenMax.fromTo('.nav_dots', 1, { x: -300, delay: 1 }, { x: 0, scale: 1.2, ease: Elastic.easeOut.config(0.5, 0.6) }));

  TweenMax.to('.avatar', 0.2, { opacity: 1 });
  TweenMax.from(activeAvatar, 1,
    { delay: 0.2, opacity: 1, y: -350, ease: Elastic.easeOut.config(1, 1) });
  TweenMax.to(
    '#landing-button', 0.8,
    { opacity: 1 });

  return promisify(tl);
};

export const outOfLanding = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.breathing-information', 0.2, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('#alt-info-box', 0.2, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('.page', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const outOfAvatar = () => {
  const activeAvatar = document.querySelector('.carousel_item.active');
  const tl = new TimelineMax();
  tl
  .add(TweenMax.to('.avatar', 0.3, { delay: 1, opacity: 0 }));
  TweenMax.to('#avatar-header', 0.3, { opacity: 0 });
  TweenMax.to(activeAvatar, 1, { y: -400, ease: Elastic.easeIn.config(1, 1) });
  TweenMax.to(
    '#landing-button', 0.8,
    { y: 300, ease: Elastic.easeIn.config(1, 1) });
  return promisify(tl);
};

export const startLanding = () => {
  TweenMax.from('#mountain1', 1.2, { delay: 0.3, y: 340, ease: Elastic.easeOut.config(0.5, 0.6) });
  TweenMax.from('#mountain2', 1.2, { delay: 0.5, y: 400, ease: Elastic.easeOut.config(0.5, 0.6) });
  TweenMax.from('#mountain3', 1.2, { delay: 0.9, y: 440, ease: Elastic.easeOut.config(0.5, 0.6) });
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.text-box', 0.6, { delay: 1, opacity: 1 }));

  return promisify(tl);
};

export const statNarration = () => {
  TweenMax.from('#mountain1', 1.2, { delay: 0.1, y: 340, ease: Elastic.easeOut.config(0.7, 0.7) });
  TweenMax.from('#mountain2', 1.2, { delay: 0.4, y: 400, ease: Elastic.easeOut.config(0.7, 0.7) });
  TweenMax.from('#mountain3', 1.2, { delay: 0.8, y: 440, ease: Elastic.easeOut.config(0.7, 0.7) });
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.text-box', 0.6, { opacity: 1 }));

  return promisify(tl);
};

export const exitLanding = () => {
  TweenMax.to('#mountain1', 1.2, { delay: 0.1, opacity: 1, y: 340, ease: Back.easeIn.config(1, 0.6) });
  TweenMax.to('#mountain2', 1.2, { delay: 0.2, opacity: 1, y: 400, ease: Back.easeIn.config(1, 0.6) });
  TweenMax.to('#mountain3', 1.2, { delay: 0.3, opacity: 1, y: 440, ease: Back.easeIn.config(1, 0.6) });

  const tl = new TimelineMax();
  tl

    .add(TweenMax.to('.breathing-information', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('#alt-info-box', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.alt-intro', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const exitNarration = () => {
  TweenMax.to('#mountain1', 1.2, { delay: 0.1, opacity: 1, y: 340, ease: Back.easeIn.config(1, 0.6) });
  TweenMax.to('#mountain2', 1.2, { delay: 0.2, opacity: 1, y: 400, ease: Back.easeIn.config(1, 0.6) });
  TweenMax.to('#mountain3', 1.2, { delay: 0.3, opacity: 1, y: 440, ease: Back.easeIn.config(1, 0.6) });

  const tl = new TimelineMax();
  tl

    .add(TweenMax.to('.breathing-information', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('#alt-info-box', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.alt-intro', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const infoToCatView = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.fromTo('.character', 0.75, { css: { opacity: 0 } }, { css: { opacity: 1 } }))
    .to('#breathing-menu', 0.5, { opacity: 0.8 }, 1);
  if (getState().hasVisited) tl.to('#feel-good-modal', 0.5, { opacity: 0.8 }, 1);

  return promisify(tl);
};

export const outOfBreathing = () => {
  const tl = new TimelineMax();
  tl
    .to('#breathing-menu', 0.5, { y: -47 }, 0)
    .to('#feel-good-modal', 0.5, { y: 120 }, 0)
    .add(TweenMax.to('.sync-breath-text', 0.3, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.character', 0.5, { opacity: 0 }))
    .add(TweenMax.to('.breathing', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const breathingToWelldone = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#welldone-stars', 0.5, { scale: 1, opacity: 1 }))
    .add(TweenMax.to('#welldone-banner', 0.6, { delay: 0.4, y: 60, opacity: 1, ease: Back.easeOut.config(2) }))
    .add(TweenMax.to('.welldone-user', 0.2, { opacity: 1 }));

  TweenMax.to('.welldone-mountain1', 1.2, { delay: 0.1, opacity: 1, y: -370, ease: Elastic.easeOut.config(0.7, 0.7) });
  TweenMax.to('.welldone-mountain2', 1.2, { delay: 0.4, opacity: 1, y: -390, ease: Elastic.easeOut.config(0.7, 0.7) });
  TweenMax.to('.welldone-mountain3', 1.2, { delay: 0.8, opacity: 1, y: -419, ease: Elastic.easeOut.config(0.7, 0.7) });

  return promisify(tl);
};

export const welldoneToIntro = () => {
  TweenMax.to('.welldone-mountain1', 1.2, { delay: 0.1, opacity: 1, y: 370, ease: Back.easeIn.config(1, 0.6) });
  TweenMax.to('.welldone-mountain2', 1.2, { delay: 0.2, opacity: 1, y: 390, ease: Back.easeIn.config(1, 0.6) });
  TweenMax.to('.welldone-mountain3', 1.2, { delay: 0.3, opacity: 1, y: 419, ease: Back.easeIn.config(1, 0.6) });

  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#start-again', 0.5, { opacity: 0 }))
    .add(TweenMax.to('#welldone-stars', 0.3, { scale: 0 }))
    .add(TweenMax.to('#welldone-banner', 0.3, { y: -60, opacity: 0 }))
    .add(TweenMax.to('.welldone-user', 0.2, { opacity: 0 }))
    .add(TweenMax.to('#credits-icon', 0.5, { opacity: 0 }));

  return promisify(tl);
};

export const breathe = () => {
  const feelingBetterBtn = document.getElementById('feel-good-button');
  const settings = document.getElementById('breathing-settings');

  const tl = new TimelineMax({ repeat: -1 });
  tl
    .add(TweenMax.to('.belly', 5, { scale: 1.2, ease: Power1.easeInOut, visibility: true, onComplete: notifications.onExhale }))
    .add(TweenMax.to('.belly', 5, { scale: 1, ease: Power1.easeInOut, onComplete: notifications.onInhale }));

  feelingBetterBtn.addEventListener('click', () => {
    tl.pause();
  });
  settings.addEventListener('click', () => {
    tl.pause();
  });
};

export const headMovement = () =>
  TweenMax.fromTo('.head', 5, { y: -0 },
    { y: -20, ease: Power1.easeInOut, repeat: -1, yoyo: true });

export const displayNotification = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#fading-message', 2, { display: 'block', opacity: 1 }))
    .add(TweenMax.delayedCall(3, () => {
      TweenMax.to('#fading-message', 2, { display: 'none', opacity: 0 });
    }));
};

export const showModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#feel-good-modal', 0.5, { y: 120 }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { y: 0, className: 'full-screen-modal modal-active' } }))
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'block', opacity: 1 }));
};

export const hideModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'none', opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { className: '' } }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0.8, display: 'block' }))
    .add(TweenMax.to('#feel-good-modal', 0.5, { opacity: 0.8, y: 0, display: 'block' }));
};

export const displayMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: 0 });
  TweenMax.to('#feel-good-modal', 0.5, { y: 0 });
};

export const hideMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: -47 });
  TweenMax.to('#feel-good-modal', 0.5, { y: 120 });
};

export const intoCredits = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.credits', 0.3, { opacity: 1, display: 'block' }));

  return promisify(tl);
};

export const outOfCredits = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.credits', 0.3, { opacity: 0, display: 'none' }));

  return promisify(tl);
};
