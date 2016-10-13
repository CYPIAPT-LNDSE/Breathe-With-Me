import { TweenMax, TimelineMax, Linear, Power1, Power2, Elastic } from 'gsap';

const promisify = tl =>
  new Promise(success => tl.addCallback(success));

export const landingAnimation = () => {
  const tl = new TimelineMax();
  tl.add(
    TweenMax.to('.landing-cat-round', 2.5, {
      css: { 'margin-top': '15%', opacity: 1 },
      ease: Elastic.easeInOut.config(0.5, 0.2),
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
    .add(TweenMax.to('#landing-stars', 0.2, { opacity: 0, display: 'none' }))
    .add(TweenMax.to('#landing-material-icon', 0.2, { css: { display: 'none' } }))
    .add(TweenMax.fromTo(
      '#landing-button', 0.4,
      { scale: 1, backgroundColor: '#5CA1C2' },
      { scale: 30, backgroundColor: 'transparent', ease: Power1.easeIn }
    ))
    .add(TweenMax.to('.avatar', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const landingToInfo = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#mountain1', 0.5, { y: -250 }))
    .add(TweenMax.to('#mountain2', 0.5, { y: -300 }))
    .add(TweenMax.to('#mountain4', 0.5, { y: -350 }));

  return promisify(tl);
};

export const askNameToBreathingInfo = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.alt-info-box', 0.5, { y: 400, opacity: 1 }));

  return promisify(tl);
};

export const nameToInfoSwitch = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.breathing-information', 0.2,
    { css: { visibility: 'visible', opacity: 1 } }))
    .add(TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));

  return promisify(tl);
};

export const outOfInfo = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#mountain4', 0.3, { y: 0 }))
    .add(TweenMax.to('#mountain2', 0.3, { y: 0 }))
    .add(TweenMax.to('#mountain1', 0.3, { y: 0 }))
    .add(TweenMax.to('.breathing-information', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.alt-intro', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const infoToCatView = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#mountain3', 0.5, { y: -550, ease: Power2.easeOut }))
    .add(TweenMax.fromTo('.cat', 0.75, { css: { opacity: 0 } }, { css: { opacity: 1 } }))
    .add(TweenMax.to('#feel-good-button', 1, { opacity: 1 }))
    .add(TweenMax.to('.sync-breath-text', 0.5, { opacity: 1 }))
    .add(TweenMax.to('#breathing-menu', 0.5, { opacity: 0.8 }));

  return promisify(tl);
};

let bodyHasBeenClicked = false;
let hideMenuTimer;

export const hideMenu = () => {
  hideMenuTimer = setTimeout(() => {
    TweenMax.to('#breathing-menu', 0.5, { y: -50 });
    bodyHasBeenClicked = false;
  }, 6000);
};

const resetHideMenuTimer = () => {
  clearTimeout(hideMenuTimer);
  hideMenu();
};

export const showMenu = (e) => {
  if (e.target.id === 'feel-good-button' || e.target.id === 'info') {
    return;
  } else if (document.getElementById('breathing-menu').style.height === '100%') {
    return;
  } else if (bodyHasBeenClicked === false) {
    bodyHasBeenClicked = true;
    TweenMax.to('#breathing-menu', 0.5, { y: 0 });
    resetHideMenuTimer();
  } else if (bodyHasBeenClicked === true) {
    resetHideMenuTimer();
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

export const timeHasPassedNotification = (time, targetEl) => {
  const breathingTimer = setTimeout(() => {
    const tl = new TimelineMax();
    tl
      .add(TweenMax.to(targetEl, 2, { display: 'block', opacity: 1 }))
      .add(TweenMax.delayedCall(3, () => {
      TweenMax.to(targetEl, 2, { display: 'none', opacity: 0 })
    }));
  }, time);
};

export const fromBreathingToIntro = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.alt-intro', 0.2, { css: { display: 'block' } }))
    .add(TweenMax.to('#breathing-menu', 0.2, { opacity: 0 }))
    .add(TweenMax.to('#feel-good-button', 0.2, { opacity: 0 }))
    .add(TweenMax.to('.mountain1', 0.5, { y: -170 }))
    .add(TweenMax.to('.mountain2', 0.5, { y: -300 }))
    .add(TweenMax.to('.breathing-information', 0.2, { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));

  return promisify(tl);
};

export const changeToFractalView = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.breathing', 0.1, { css: { display: 'none' } }))
    .add(TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: { '-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 } }));
  return promisify(tl);
};

export const exitFractalView = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('.fractal', 0.2, { css: { display: 'none' } }))
    .add(TweenMax.to('.breathing', 0.2, { css: { display: 'block' } }))
    .add(TweenMax.fromTo('.cat', 0.5, { opacity: 0 }, { opacity: 1 }))
    .add(TweenMax.to('#mountain3', 0.5, { y: -370, ease: Power2.easeOut }));

  return promisify(tl);
};

export const outOfBreathing = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#feel-good-button', 1, { opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.2, { opacity: 0 }))
    .add(TweenMax.to('.sync-breath-text', 0.3, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.cat', 0.5, { opacity: 0 }))
    .add(TweenMax.to('.breathing', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const breathingToWelldone = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#welldone-stars', 0.3, { opacity: 1 }))
    .add(TweenMax.to('#breathing-menu', 0.2, { opacity: 1 }))
    .add(TweenMax.to('.welldone-mountain1', 0.5, { opacity: 1, y: -370 }))
    .add(TweenMax.to('.welldone-mountain2', 0.5, { opacity: 1, y: -390 }))
    .add(TweenMax.to('.welldone-mountain3', 0.5, { opacity: 1, y: -410 }));

  return promisify(tl);
};

export const welldoneToIntro = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#start-again', 0.2, { opacity: 0 }))
    .add(TweenMax.to('#welldone-stars', 0.3, { opacity: 0 }))
    .add(TweenMax.to('#welldone-banner', 0.3, { y: -200 }))
    .add(TweenMax.to('.welldone-user', 0.3, { opacity: 0 }))
    .add(TweenMax.to('.welldone-mountain3', 0.4, { y: 250 }))
    .add(TweenMax.to('.welldone-mountain2', 0.3, { y: 250 }))
    .add(TweenMax.to('.welldone-mountain1', 0.2, { y: 250 }))
    .add(TweenMax.to('.mountain1', 0.5, { y: -170 }))
    .add(TweenMax.to('.mountain2', 0.5, { y: -300 }))
    .add(TweenMax.to('.breathing-information', 0.2,
      { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));

  return promisify(tl);
};

export const breatheOut = {
  visibility: true,
  scale: 1,
  delay: 2,
};

export const breatheIn = {
  scale: 1.2,
  ease: Power1.easeInOut,
  yoyo: true,
  repeat: -1,
};

export const breathe = () =>
  TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);

export const headMovement = () =>
  TweenMax.fromTo('#head', 5, { y: -0, delay: 2 },
    { y: -20, ease: Power1.easeInOut, repeat: -1, yoyo: true });
