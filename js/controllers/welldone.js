import { TweenMax, TimelineMax, Linear, Power1, Power2, Elastic } from 'gsap';

const welldoneCtrl = () => {
  const startAgain = document.getElementById('start-again');
  startAgain.addEventListener('click', welldoneToIntro);

  const tl = new TimelineMax();
  tl.add(TweenMax.fromTo('.welldone', 0.2, { backgroundColor: '#A5E2DA' }, { backgroundColor: '#494A97' }));
  tl.add(TweenMax.to('.welldone-user', 0, { text: { value: `Well Done ${document.cookie}!`, delimiter: ' ' }, ease: Linear.easeNone }));
  tl.add(TweenMax.to('#welldone-stars', 0.3, { opacity: 1 }));
  tl.add(TweenMax.to('.welldone-mountain1', 0.5, { y: -100 }));
  tl.add(TweenMax.to('.welldone-mountain2', 0.5, { y: -150 }));
  tl.add(TweenMax.to('.welldone-mountain3', 0.5, { y: -170 }));
  tl.add(TweenMax.to('#start-again', 0.3, { opacity: 1 }));
  tl.add(TweenMax.set('.breathing', 0, { backgroundColor: '#A5E2DA' }));
};

module.exports = welldoneCtrl;
