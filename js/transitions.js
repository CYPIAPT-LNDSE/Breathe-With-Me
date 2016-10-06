import {
  outOfLanding,
  landingAnimation,
  landingToInfo,
  outOfInfo,
  infoToCatView,
  fromBreathingToIntro,
  changeToFractalView,
  exitFractalView,
  outOfBreathing,
  breathingToWelldone,
  welldoneToIntro,
} from './animations/';

const animations = {
  outOfLanding,
  landingAnimation,
  landingToInfo,
  outOfInfo,
  infoToCatView,
  fromBreathingToIntro,
  changeToFractalView,
  exitFractalView,
  outOfBreathing,
  breathingToWelldone,
  welldoneToIntro,
};

const App = $('#app');

const viewTransition = (view) => {
  const animateout = $(App).find('.page').data('animate-out');
  const animatein = $(view).data('animate-in');
  const transition = Promise.resolve();

  debugger;
  return transition
    // Before add new page
    .then(() => {
      if (animateout && typeof animations[animateout] === 'function') {
        return animations[animateout]()
        .then(() => {
          $(App).append(view);
        });
      } else {
        $(App).append(view);
        return Promise.resolve();
      }
    })
    // Before remove the old view
    .then(() => {
      if (animatein && typeof animations[animatein] === 'function') {
        return animations[animatein]()
        .then(() => {
          $(App).find('.page').length > 1 ? $(App).find('.page').first().remove() : null;
        });
      } else {
        $(App).find('.page').length > 1 ? $(App).find('.page').first().remove() : null;
        return Promise.resolve();
      }
    });
};

export default viewTransition;
