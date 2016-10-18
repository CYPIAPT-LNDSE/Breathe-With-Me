import 'materialize-loader';
import render from 'es6-template-render';
import * as controllers from './controllers';
import * as views from './templates';
import viewTransition from './lib/transitions';
import { resizeCanvas } from './lib/background';
import { getState } from './globalState';

//Hack to hopefully autohide the browser bar on load

window.scrollTo(0, 1);

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
window.addEventListener('load', () => {
  const breathingPageVisited = localStorage.getItem('hasVisited');

  if (breathingPageVisited && location.hash !== '#breathe') {
    location.hash = '#breathe';
  } else {
    changeView();
  }
  resizeCanvas();
});
