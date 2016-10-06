import { TweenMax, TimelineMax, Linear } from 'gsap';

const infoCtrl = () => {
  const nameSubmitButton = document.getElementById('name-question-button');
  const startBreathingCatButton = document.getElementById('start-breathing-cat-button');
  nameSubmitButton.addEventListener('click', nameToInfoSwitch);
  startBreathingCatButton.addEventListener('click', infoToCatView);

  const nameButton = document.getElementById('name-question-button');
  const name = document.getElementById('input-focus');

  function storeName() {
    const array = name.value.split(' ');
    const lastNameEntered = array[array.length - 1];
    document.cookie = lastNameEntered;
  }

  nameButton.addEventListener('click', storeName);

  const tl = new TimelineMax();
  tl.add(TweenMax.to('#mountain1', 0.5, { y: -250 }));
  tl.add(TweenMax.to('#mountain2', 0.5, { y: -300 }));
  tl.add(TweenMax.to('#mountain4', 0.5, { y: -350 }));
  if (!document.cookie) {
    tl.add(TweenMax.to('.alt-info-box', 0.5, { y: 400, opacity: 1 }));
  } else {
    tl.add(TweenMax.to('.breathing-information', 1, { css: { visibility: 'visible', opacity: 1 } }));
    tl.add(TweenMax.to('.name', 0, { text: { value: `Hi ${document.cookie}`, delimiter: ' ' }, ease: Linear.easeNone }));
  }
  const nameToInfoSwitch = () => {
    const tl = new TimelineMax();
    tl.add(TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));
    tl.add(TweenMax.to('.breathing-information', 0.2, { css: { visibility: 'visible', opacity: 1 } }));
    tl.add(TweenMax.to('.name', 0, { text: { value: `Hi ${document.cookie}`, delimiter: ' ' }, ease: Linear.easeNone} ));
    tl.add(TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));
  };
  const infoToCatView = () => {
   const tl = new TimelineMax();
    tl.add(TweenMax.to('.mountain2', 0.3, { y: 0 }));
    tl.add(TweenMax.to('.mountain1', 0.3, { y: 0 }));
  };
};

module.exports = infoCtrl;
