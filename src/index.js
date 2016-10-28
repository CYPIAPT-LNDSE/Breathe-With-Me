import render from 'es6-template-render';
import * as controllers from './controllers';
import * as views from './templates';
import viewTransition from './lib/transitions';
import { resizeCanvas } from './lib/background';
import { getState } from './globalState';

// Hack to prevent select default on IOS

document.addEventListener('touchstart', function () {}, true);

const router = (route) => {
  const view = views[route] || views.landing;
  const controller = controllers[route] || controllers.landing;
  return { view, controller };
};


const App = document.querySelector('#app');

const changeView = () => {
  const { hash } = location;
  const route = hash.replace('#', '');
  const { view, controller } = router(route);
  const viewRendered = render(view, getState() || {});

  viewTransition(App, viewRendered, controller);
};

window.addEventListener('hashchange', changeView);
window.addEventListener('resize', resizeCanvas);


window.addEventListener('load', () => setTimeout(() => {
  const { hasVisited } = getState();

  if (hasVisited && location.hash !== '#avatar') {
    location.hash = '#avatar';
  } else {
    changeView();
  }
  resizeCanvas();
}, 0));
