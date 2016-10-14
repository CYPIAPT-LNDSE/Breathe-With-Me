import Granim from 'granim';

// FIXME
const canvas = document.getElementById('bg');

export const granimInstance = new Granim({
  element: '#bg',
  name: 'granim',
  elToSetClassOn: 'body',
  direction: 'top-bottom',
  isPausedWhenNotInView: false,
  opacity: [1, 1],
  stateTransitionSpeed: 4500,
  states: {
    'default-state': {
      gradients: [
        ['#d1f3ef', '#6c9eb4'],
        ['#9ccdff', '#5ca1c2'],
      ],
      transitionSpeed: 9000,
      loop: true,
    },
    'dark-state': {
      gradients: [
        ['#091a3e','#494a97'],
      ],
      transitionSpeed: 9000,
      loop: true,
    },
  },
});


export const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  granimInstance.getDimensions();
};
