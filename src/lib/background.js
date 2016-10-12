import Granim from 'granim';

// FIXME
const canvas = document.getElementById('bg');

export const granimInstance = new Granim({
  element: '#bg',
  name: 'granim',
  elToSetClassOn: 'body',
  direction: 'diagonal',
  isPausedWhenNotInView: false,
  opacity: [1, 1],
  stateTransitionSpeed: 4500,
  states: {
    'default-state': {
      gradients: [
        ['#d1f3ef', '#6c9eb4'],
        ['#9ccdff', '#5ca1c2'],
      ],
      transitionSpeed: 15000,
      loop: true,
    },
    'dark-state': {
      gradients: [
        ['#494a97', '#091a3e'],
      ],
      transitionSpeed: 5000,
      loop: true,
    },
  },
});


export const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  granimInstance.getDimensions();
};
