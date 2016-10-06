import { TweenMax, TimelineMax, Linear, Power1, Power2, Elastic } from 'gsap';

const breatheCtrl = () => {
  const belly = document.getElementById('belly');
  const hands = document.getElementById('hands');
  const exitBreathing = document.getElementById('exit-breathing');
  const FeelingBetterBtn = document.getElementById('feel-good-button');
  hands.addEventListener('click', changeToFractalView);
  belly.addEventListener('click', changeToFractalView);
  exitBreathing.addEventListener('click', fromBreathingToIntro);
  FeelingBetterBtn.addEventListener('click', breathingToWelldone);

  const tl = new TimelineMax();

  tl.add(TweenMax.to('.mountain3', 0.5, { y: -370, ease: Power2.easeOut }));
  tl.add(TweenMax.fromTo('.cat', 0.75, { css: { opacity: 0 } }, { css: { opacity: 1 } }));
  tl.add(TweenMax.to('.sync-breath-text', 0.5, { css: { visibility: 'visible', opacity: 1 } }));

  const changeToFractalView = () => {
    tl.add(TweenMax.to('.breathing', 0.1, { css: { display: 'none' } }));
    tl.add(TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: { '-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 } }));
  };

  const breatheOut = {
  visibility: true,
  scale: 1,
  delay: 2,
  };

  const breatheIn = {
  scale: 1.3,
  delay: 2,
  ease: Power1.easeInOut,
  yoyo: true,
  repeat: -1,
  };

  const breathe = TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);
  const headMovement = TweenMax.fromTo('#head', 5, { y: -0, delay: 2 }, { y: -19, delay: 2, ease: Power1.easeInOut, repeat: -1, yoyo: true });
}

module.exports = breatheCtrl;
