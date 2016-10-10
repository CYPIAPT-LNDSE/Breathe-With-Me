import { TweenMax, textPlugin, TimelineMax, Linear, Power1, Power2, Elastic } from 'gsap';

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
  tl.add(TweenMax.to('#landing-stars', 0.2, { opacity: 0, display: 'none' }));
  tl.add(TweenMax.to('#landing-material-icon', 0.2, { css: { display: 'none' } }));
  tl.add(TweenMax.fromTo(
    '#landing-button', 0.4,
    { scale: 1, backgroundColor: '#5CA1C2' },
    { scale: 30, backgroundColor: '#5CA1C2', ease: Power1.easeIn }
  ));
  return promisify(tl);
};

export const landingToInfo = () => {
  // FIXME
  document.querySelector('.name').innerText = document.cookie || '';

  const tl = new TimelineMax();
  tl.add(TweenMax.to('#mountain1', 0.5, { y: -250 }));
  tl.add(TweenMax.to('#mountain2', 0.5, { y: -300 }));
  tl.add(TweenMax.to('#mountain4', 0.5, { y: -350 }));
  if (!document.cookie) {
    tl.add(TweenMax.to('.alt-info-box', 0.5, { y: 400, opacity: 1 }));
    return promisify(tl);
  }

  tl.add(TweenMax.to(
    '.breathing-information', 1,
    { css: { visibility: 'visible', opacity: 1 } }
  ));
  tl.add(TweenMax.to('.name', 0,
    {
      text: {
        value: `Hi ${document.cookie}`, delimiter: ' ',
      },
      ease: Linear.easeNone,
    }
  ));
  return promisify(tl);
};

export const nameToInfoSwitch = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));
  tl.add(TweenMax.to('.breathing-information', 0.2,
    { css: { visibility: 'visible', opacity: 1 } }));
  tl.add(TweenMax.to('.name', 0,
    { text: { value: `Hi ${document.cookie}`, delimiter: ' ' }, ease: Linear.easeNone }));
  tl.add(TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));
  return promisify(tl);
};

export const outOfInfo = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('#mountain4', 0.3, { y: 0 }));
  tl.add(TweenMax.to('#mountain2', 0.3, { y: 0 }));
  tl.add(TweenMax.to('#mountain1', 0.3, { y: 0 }));
  tl.add(TweenMax.to('.breathing-information', 0.5, { css: { visibility: 'hidden', opacity: 0 } }));
  tl.add(TweenMax.fromTo('.alt-intro', 0.5, { backgroundColor: '#5CA1C2' }, { backgroundColor: '#A5E2DA' }));
  return promisify(tl);
};

export const infoToCatView = () => {
  console.log('infoToCatView')
  const tl = new TimelineMax();
  tl.add(TweenMax.set('.breathing', 0, { backgroundColor: '#A5E2DA' }));
  tl.add(TweenMax.to('#mountain3', 0.5, { y: -550, ease: Power2.easeOut }));
  tl.add(TweenMax.fromTo('.cat', 0.75, { css: { opacity: 0 } }, { css: { opacity: 1 } }));
  tl.add(TweenMax.to('#feel-good-button', 1, { opacity: 1 }));
  tl.add(TweenMax.to('.sync-breath-text', 0.5, { opacity: 1 }));
  tl.add(TweenMax.to('.icon-menu', 0.5, { opacity: 1 }));
  return promisify(tl);
};

export const fromBreathingToIntro = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.alt-intro', 0.2, { css: { display: 'block' } }));
  tl.add(TweenMax.to('.icon-menu', 0.2, { opacity: 0 }));
  tl.add(TweenMax.to('#feel-good-button', 0.2, { opacity: 0 }));
  tl.add(TweenMax.to('.breathing', 0.2, { css: { backgroundColor: '#5CA1C2' } }));
  tl.add(TweenMax.to('.mountain1', 0.5, { y: -170 }));
  tl.add(TweenMax.to('.mountain2', 0.5, { y: -300 }));
  tl.add(TweenMax.to('.breathing-information', 0.2, { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));
  audio.pause();

  return promisify(tl);
};

export const changeToFractalView = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.breathing', 0.1, { css: { display: 'none' } }));
  tl.add(TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: { '-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 } }));
  return promisify(tl);
};

export const exitFractalView = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.fractal', 0.2, { css: { display: 'none' } }));
  tl.add(TweenMax.to('.breathing', 0.2, { css: { display: 'block' } }));
  tl.add(TweenMax.fromTo('.cat', 0.5, { opacity: 0 }, { opacity: 1 }));
  tl.add(TweenMax.to('#mountain3', 0.5, { y: -370, ease: Power2.easeOut }));
  return promisify(tl);
};

export const outOfBreathing = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('#feel-good-button', 1, { opacity: 0 }));
  tl.add(TweenMax.to('.icon-menu', 0.2, { opacity: 0 }));
  tl.add(TweenMax.to('.sync-breath-text', 0.3, { css: { visibility: 'hidden', opacity: 0 } }));
  tl.add(TweenMax.to('.cat', 0.5, { opacity: 0 }));
  tl.add(TweenMax.to('#mountain3', 1, { opacity: 0, y: 500 }));
  audio.pause();

  return promisify(tl);
};

export const breathingToWelldone = () => {
  // FIXME
  document.querySelector('.welldone-user').innerText = `${document.cookie}`;

  const tl = new TimelineMax();
  tl.add(TweenMax.fromTo('.welldone', 0.5, { backgroundColor: '#A5E2DA' }, { backgroundColor: '#494A97' }));
  tl.add(TweenMax.to('.welldone-user', 0,
    { text: { value: `Well Done ${document.cookie}!`, delimiter: ' ' }, ease: Linear.easeNone }));
  tl.add(TweenMax.to('#welldone-stars', 0.3, { opacity: 1 }));
  tl.add(TweenMax.to('.welldone-mountain1', 0.5, { opacity: 1, y: -300 }));
  tl.add(TweenMax.to('.welldone-mountain2', 0.5, { opacity: 1, y: -350 }));
  tl.add(TweenMax.to('.welldone-mountain3', 0.5, { opacity: 1, y: -370 }));

  return promisify(tl);
};

export const welldoneToIntro = () => {
  const tl = new TimelineMax();
  tl.add(TweenMax.to('.welldone', 0.3, { backgroundColor: '#5CA1C2' }));
  tl.add(TweenMax.to('#start-again', 0.2, { opacity: 0 }));
  tl.add(TweenMax.to('#welldone-stars', 0.3, { opacity: 0 }));
  tl.add(TweenMax.to('#welldone-banner', 0.3, { y: -200 }))
  tl.add(TweenMax.to('.welldone-mountain3', 0.5, { opacity: 0, y: 300 }));
  tl.add(TweenMax.to('.welldone-mountain2', 0.5, { opacity: 0, y: 300 }));
  tl.add(TweenMax.to('.welldone-mountain1', 0.5, { opacity: 0, y: 300 }));
  tl.add(TweenMax.to('.mountain1', 0.5, { y: -170 }));
  tl.add(TweenMax.to('.mountain2', 0.5, { y: -300 }));
  tl.add(TweenMax.to('.breathing-information', 0.2,
    { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));

  return promisify(tl);
};

export const breatheOut = {
  visibility: true,
  scale: 1,
  delay: 2,
};

export const breatheIn = {
  scale: 1.3,
  delay: 2,
  ease: Power1.easeInOut,
  yoyo: true,
  repeat: -1,
};

export const breathe = () =>
  TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);

export const headMovement = () =>
  TweenMax.fromTo('#head', 5, { y: -0, delay: 2 },
    { y: -20, delay: 2, ease: Power1.easeInOut, repeat: -1, yoyo: true });
