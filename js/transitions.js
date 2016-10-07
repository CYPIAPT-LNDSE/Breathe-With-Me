import * as animations from './animations/';

const viewTransition = (container, view) => {
  const animateout = $(container).find('.page').data('animate-out');
  const animatein = $(view).data('animate-in');
  const resolve = Promise.resolve.bind(Promise);


  return transition
  debugger;
  return resolve()

    // Before add new page
    .then(() => (animations[animateout] || resolve)()
      .then(() => $(container).append(view)))
    // Before remove the old view
    .then(() => (animations[animatein] || resolve)()
      .then(() => $(container).html($(container).find('.page').last())));
};

export default viewTransition;
