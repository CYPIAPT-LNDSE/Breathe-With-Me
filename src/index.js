import render from 'es6-template-render';
import * as controllers from './controllers';
import * as views from './templates';
import viewTransition from './lib/transitions';
import { resizeCanvas } from './lib/background';
import { getState } from './globalState';
import screenfull from 'screenfull';

//Hack to hopefully autohide the browser bar on load

window.scrollTo(0, 1);

//Hack to prevent select default on IOS

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

const fullscreenHandler = () => {
  if (!screenfull.isFullscreen) {
    setTimeout(() => {
      document.querySelector('#fullscreenBanner').style.display = 'none';
    }, 10000);
  }
};

['', 'webkit', 'moz', 'ms'].forEach(
    prefix => document.addEventListener(`${prefix}fullscreenchange`, fullscreenHandler, false)
);

window.addEventListener('load', () => setTimeout(() => {

  const breathingPageVisited = getState().hasVisited;

  if (!screenfull.enabled) {
    // Hide fullscreen banner if fullscreen is not supported
    document.querySelector('#fullscreenBanner').style.display = 'none';
  } else {
    // Hide fullscreen banner after 10 seconds
    fullscreenHandler();
  }

  const fullscreenBtn = document.querySelector('#fullscreenBanner i');

  fullscreenBtn.addEventListener('click', () => {
    screenfull.request(document.body);
  });

  if (!breathingPageVisited) {
    location.hash = '';
  } else {
    changeView();
  }
  resizeCanvas();
}, 0));
