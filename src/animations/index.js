import { TweenMax, TimelineMax, Power1 } from 'gsap';

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
      '#landing-button', 0.3,
      { scale: 1, backgroundColor: '#5CA1C2' },
      { scale: 30, backgroundColor: 'transparent', ease: Power1.easeIn }
    ));
};

export const landingToInfo = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.from('#mountain1', 0.5, { y: 340 }))
    .add(TweenMax.from('#mountain2', 0.5, { y: 400 }))
    .add(TweenMax.from('#mountain3', 0.5, { y: 440 }));

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
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#mountain1', 0.5, { y: 340 }))
    .add(TweenMax.to('#mountain2', 0.5, { y: 400 }))
    .add(TweenMax.to('#mountain3', 0.5, { y: 440 }))
    .add(TweenMax.to('.breathing-information', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('#alt-info-box', 0.5, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.alt-intro', 1, { visibility: 'hidden' }));

  return promisify(tl);
};

export const infoToCatView = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.fromTo('.character', 0.75, { css: { opacity: 0 } }, { css: { opacity: 1 } }))
    .add(TweenMax.to('#feel-good-button', 1, { opacity: 1 }))
    .add(TweenMax.to('.sync-breath-text', 0.5, { opacity: 1 }))
    .add(TweenMax.to('#breathing-menu', 0.5, { opacity: 0.8 }));

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
    .add(TweenMax.to('.breathing-information', 0.2, { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));

  return promisify(tl);
};

export const outOfBreathing = () => {
  const tl = new TimelineMax();
  tl
    .add(TweenMax.to('#feel-good-button', 1, { opacity: 0 }))
    .add(TweenMax.to('#breathing-menu', 0.2, { opacity: 0 }))
    .add(TweenMax.to('.sync-breath-text', 0.3, { css: { visibility: 'hidden', opacity: 0 } }))
    .add(TweenMax.to('.character', 0.5, { opacity: 0 }))
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
    .add(TweenMax.to('.welldone-mountain3', 0.5, { opacity: 1, y: -419 }));

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
