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

const App = $('#app');

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

const viewTransition = (view) => {
  const animateout = $(App).find('.page').data('animate-out');
  const animatein = $(view).data('animate-in');
  const transition = Promise.resolve();

  return transition
    // Before add new page
    .then(() => {
      if (animateout && typeof animations[animateout] === 'function') {
        return animations[animateout]()
        .then(() => {
          $(App).append(view);
        })
      } else {
        return $(App).append(view);
      }
    })
    // Before remove the old view
    .then(() => {
      if (animatein && typeof animations[animatein] === 'function') {
        return animations[animatein]()
        .then(() => {
          $(App).find('.page').first().remove();
        })
      } else {
        return $(App).find('.page').length > 1 ? $(App).find('.page').first().remove() : null;
      }
    });
};

export default viewTransition;
