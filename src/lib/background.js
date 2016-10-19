import Granim from 'granim';

const canvas = document.getElementById('bg');

let instance;

export const granimInstance = () =>
  instance || (instance = new Granim({
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
      'dog-state': {
        gradients: [
          ['#FDEDB3', '#FD9C9D'],
          ['#F2D4D4', '#DFC4D8'],
        ],
        transitionSpeed: 9000,
        loop: true,
      },
      'panda-state': {
        gradients: [
          ['#A685B4', '#9C90FF'],
          ['#CFDCFF', '#4942A5'],
        ],
        transitionSpeed: 9000,
        loop: true,
      },
      'dark-state': {
        gradients: [
          ['#091a3e', '#494a97'],
        ],
        transitionSpeed: 9000,
        loop: true,
      },
    },
  }));


export const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  granimInstance().getDimensions();
};
