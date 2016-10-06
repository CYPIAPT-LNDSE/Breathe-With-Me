import { TweenMax, TimelineMax, Linear, Power1, Power2, Elastic } from 'gsap';

const landingCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  landingButton.addEventListener('click', landingToInfo);

  const landingToInfo = () => {
    const tl = new TimelineMax();
    tl.add(TweenMax.to('#landing-stars', 0.2, { opacity: 0, display: 'none' }));
    tl.add(TweenMax.to('#landing-material-icon', 0.2, { css: { display: 'none' } }));
    tl.add(TweenMax.fromTo('#landing-button', 0.4, { scale: 1, backgroundColor: '#5CA1C2' }, { scale: 30, backgroundColor: '#5CA1C2', ease: Power1.easeIn }));
  };

  TweenMax.to('.landing-cat-round', 2.5, {
    css: { 'margin-top': '15%', opacity: 1 },
    ease: Elastic.easeInOut.config(0.5, 0.2),
    onComplete: () => {
      TweenMax.to('#landing-button', 0.5, { css: { opacity: 1 } });
      TweenMax.to('#landing-text', 0.5, { css: { opacity: 1 } });
      TweenMax.to('#landing-stars', 0.6, { opacity: 1 });
    },
  });
};

module.exports = landingCtrl;
