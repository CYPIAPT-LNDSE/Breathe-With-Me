import { TweenMax, TimelineMax, Linear, Power1, Power2 } from 'gsap';

import viewTransition from './lib/transitions';
import landingCtrl from './controllers/landing';
import infoCtrl from './controllers/alt-intro';
import breatheCtrl from './controllers/breathing';
import fractalCtrl from './controllers/fractal';
import welldoneCtrl from './controllers/welldone';

// FIXME
import { resizeCanvas, granimInstance } from './lib/background.js';

require('materialize-loader');

const landingTmpl = require('./templates/landing.html');
const infoTmpl = require('./templates/alt-intro.html');
const breatheTmpl = require('./templates/breathing.html');
const fractalTmpl = require('./templates/fractal.html');
const welldoneTmpl = require('./templates/welldone.html');

const views = {
  landingTmpl,
  infoTmpl,
  breatheTmpl,
  fractalTmpl,
  welldoneTmpl,
  default: landingTmpl,
};

const controllers = {
  landingCtrl,
  infoCtrl,
  breatheCtrl,
  fractalCtrl,
  welldoneCtrl,
  default: () => controllers.landingCtrl(),
};

const getTemplate = (name) => {
  const tmplName = `${name}Tmpl`;

  if (views[tmplName]) {
    return views[tmplName]();
  }

  return views.default();
};

const bindListeners = (name) => {
  const ctrlName = `${name}Ctrl`;

  if (controllers[ctrlName]) {
    return controllers[ctrlName]();
  }

  return controllers.default();
};

const App = document.querySelector('#app');

const changeView = () => {
  const { hash } = location;
  const viewName = hash.replace('#', '');
  const template = getTemplate(viewName);

  viewTransition(App, template)
  .then(() => {
    bindListeners(viewName);
  });
};

window.addEventListener('hashchange', changeView);
window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', () => {
  changeView();
  resizeCanvas();
});
