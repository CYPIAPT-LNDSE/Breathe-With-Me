import { TweenMax, TimelineMax, Linear, Power1, Power2, Elastic } from 'gsap';

const fractalCtrl = () => {
  const exitFractal = document.getElementById('exit-fractal');
  exitFractal.addEventListener('click', exitFractalView);
  TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: { '-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 } });
};

module.exports = fractalCtrl;
