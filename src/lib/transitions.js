import * as animations from '../animations/';

const viewTransition = (container, view, controller) => {
  const animateout = $(container).find('.page').data('animate-out');
  const animatein = $(view).data('animate-in');
  const resolve = Promise.resolve.bind(Promise);
  // Overlay is an empty div that prevents you from clicking items before they are mounted
  const overlay = $('#overlay');

  return resolve()
    // Before add new page
    .then(() => {
      overlay.addClass('show');
      return (animations[animateout] || resolve)();
    })
    .then(() => $(container).append(view))
    // Binding event listeners to the view
    .then(() => controller && controller())
    // Before remove the old view
    .then(() => (animations[animatein] || resolve)())
    .then(() => {
      overlay.removeClass('show');
      return $(container).html($(container).find('.page').last());
    });
};

export default viewTransition;
