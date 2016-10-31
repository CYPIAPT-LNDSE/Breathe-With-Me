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

let currentView = undefined;

const changeView = () => {
  const { name, avatar } = getState();

  // views after '#' and '#avatar' require avatar state.
  if (avatar === undefined && (
      location.hash === '#breathe' || location.hash === '#narration')) {
    location.hash = '#avatar';
    return;
  }
  // redirect to '#' if name is missing
  if (name === undefined && location.hash !== '') {
    location.hash = '#';
    return;
  }

  const { hash } = location;
  const route = hash.replace('#', '');
  const { view, controller } = router(route);
  if (view === currentView) return;
  currentView = view;
  const viewRendered = render(view, getState() || {});

  viewTransition(App, viewRendered, controller);
};

window.addEventListener('hashchange', changeView);
window.addEventListener('resize', resizeCanvas);


window.addEventListener('load', () => setTimeout(() => {
  resizeCanvas();

  const { name } = getState();

  // if name state exist skip ahead to '#avatar'
  if (name !== undefined && location.hash !== '#avatar') {
    location.hash = '#avatar';
    return;
  }

  changeView();
}, 0));
