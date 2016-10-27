import { TweenMax, TimelineMax, Power1, Elastic, Back } from 'gsap';
import { notifications } from '../lib/breathingtimer';
import { getState } from '../globalState';

const promisify = tl =>
  new Promise(success => tl.addCallback(success));

export const landingAnimation = () => {
  const tl = new TimelineMax();

  tl.add(
    TweenMax.to('.avatar', 1, {
      css: { opacity: 1 },
      onComplete: () => {
        TweenMax.to('#landing-button', 0.5, { css: { opacity: 1 } });
        TweenMax.to('#landing-text', 0.5, { css: { opacity: 1 } });
        TweenMax.to('#landing-stars', 0.6, { opacity: 1 });
      },
    })
  );
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
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.avatar', 0.2, { opacity: 0 }));

  return promisify(tl);
};

export const expandButton = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#landing-material-icon', 0.2, { css: { display: 'none' } }))
    .add(TweenMax.fromTo(
      '#landing-button', 0.5,
      { scale: 1 },
      { scale: 30, ease: Power1.easeIn }
    ));
  return promisify(tl);
};

export const landingToInfo = () => {
  TweenMax.from('#mountain1', 1.2, { delay: 0.1, y: 340, ease: Elastic.easeOut.config(0.7, 0.7) });
  TweenMax.from('#mountain2', 1.2, { delay: 0.4, y: 400, ease: Elastic.easeOut.config(0.7, 0.7) });
  TweenMax.from('#mountain3', 1.2, { delay: 0.8, y: 440, ease: Elastic.easeOut.config(0.7, 0.7) });
  const tl = new TimelineMax();
  tl.add(TweenMax.from('.text-box', 0.6, { visibility: 'visible' }));



  return promisify(tl);
};

export const askNameToBreathingInfo = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.from('.alt-info-box', 0.5, { y: -300, opacity: 1 }));

  return promisify(tl);
};

export const nameToInfoSwitch = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.breathing-information', 0.2,
    { css: { visibility: 'visible', opacity: 1 } }));

  return promisify(tl);
};

export const outOfInfo = () => {
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

export const fromBreathingToIntro = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.alt-intro', 0.2, { css: { display: 'block' } }))
    .add(TweenMax.to('#breathing-menu', 0.2, { opacity: 0 }))
    .add(TweenMax.to('#feel-good-button', 0.2, { opacity: 0 }))
    .add(TweenMax.to('.mountain1', 0.5, { y: -170 }))
    .add(TweenMax.to('.mountain2', 0.5, { y: -300 }))
    .add(TweenMax.to('.breathing-information', 0.2, { opacity: 1 }));

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
    .add(TweenMax.to('#welldone-stars', 0.3, { opacity: 1 }))
    .add(TweenMax.to('#welldone-banner', 0.3, { y: 60, opacity: 1 }))
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
    .add(TweenMax.fromTo('.breathing', 1, { opacity: 0 }, { opacity: 1 }));

  return promisify(tl);
};

export const breathe = () => {
  const tl = new TimelineMax({ repeat: -1 });
  tl
    .add(TweenMax.to('.belly', 5, { scale: 1.2, ease: Power1.easeInOut, visibility: true, onComplete: notifications.onExhale }))
    .add(TweenMax.to('.belly', 5, { scale: 1, ease: Power1.easeInOut, onComplete: notifications.onInhale }));
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

export const hideModalFirstVisit = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'none', opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { className: '' } }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0.8, display: 'block' }))
    .add(TweenMax.to('#feel-good-modal', 0.5, { opacity: 0.8, y: 0, display: 'block' }));
};

export const hideModal = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#modal-breathing-instructions', 1, { display: 'none', opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.4, { css: { className: '' } }))
    .add(TweenMax.to('#menu-options', 0.5, { opacity: 0.8, display: 'block' }))
    .add(TweenMax.to('#feel-good-modal', 0.5, { y: 0 }));
};

export const displayMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: 0 });
  TweenMax.to('#feel-good-modal', 0.5, { y: 0 });
};

export const hideMenu = () => {
  TweenMax.to('#breathing-menu', 0.5, { y: -47 });
  TweenMax.to('#feel-good-modal', 0.5, { y: 120 });
};
