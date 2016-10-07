/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	module.exports = __webpack_require__(24);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.headMovement = exports.breathe = exports.breatheIn = exports.breatheOut = exports.welldoneToIntro = exports.breathingToWelldone = exports.outOfBreathing = exports.exitFractalView = exports.changeToFractalView = exports.fromBreathingToIntro = exports.infoToCatView = exports.outOfInfo = exports.nameToInfoSwitch = exports.landingToInfo = exports.outOfLanding = exports.landingAnimation = undefined;
	
	var _gsap = __webpack_require__(2);
	
	var promisify = function promisify(tl) {
	  return new Promise(function (success) {
	    return tl.addCallback(success);
	  });
	};
	
	var landingAnimation = exports.landingAnimation = function landingAnimation() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.landing-cat-round', 2.5, {
	    css: { 'margin-top': '15%', opacity: 1 },
	    ease: _gsap.Elastic.easeInOut.config(0.5, 0.2),
	    onComplete: function onComplete() {
	      _gsap.TweenMax.to('#landing-button', 0.5, { css: { opacity: 1 } });
	      _gsap.TweenMax.to('#landing-text', 0.5, { css: { opacity: 1 } });
	      _gsap.TweenMax.to('#landing-stars', 0.6, { opacity: 1 });
	    }
	  }));
	  return promisify(tl);
	};
	
	var outOfLanding = exports.outOfLanding = function outOfLanding() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('#landing-stars', 0.2, { opacity: 0, display: 'none' }));
	  tl.add(_gsap.TweenMax.to('#landing-material-icon', 0.2, { css: { display: 'none' } }));
	  tl.add(_gsap.TweenMax.fromTo('#landing-button', 0.4, { scale: 1, backgroundColor: '#5CA1C2' }, { scale: 30, backgroundColor: '#5CA1C2', ease: _gsap.Power1.easeIn }));
	  return promisify(tl);
	};
	
	var landingToInfo = exports.landingToInfo = function landingToInfo() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('#mountain1', 0.5, { y: -250 }));
	  tl.add(_gsap.TweenMax.to('#mountain2', 0.5, { y: -300 }));
	  tl.add(_gsap.TweenMax.to('#mountain4', 0.5, { y: -350 }));
	  if (!document.cookie) {
	    tl.add(_gsap.TweenMax.to('.alt-info-box', 0.5, { y: 400, opacity: 1 }));
	    return promisify(tl);
	  }
	
	  tl.add(_gsap.TweenMax.to('.breathing-information', 1, { css: { visibility: 'visible', opacity: 1 } }));
	  tl.add(_gsap.TweenMax.to('.name', 0, {
	    text: {
	      value: 'Hi ' + document.cookie, delimiter: ' '
	    },
	    ease: _gsap.Linear.easeNone
	  }));
	  return promisify(tl);
	};
	
	var nameToInfoSwitch = exports.nameToInfoSwitch = function nameToInfoSwitch() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));
	  tl.add(_gsap.TweenMax.to('.breathing-information', 0.2, { css: { visibility: 'visible', opacity: 1 } }));
	  tl.add(_gsap.TweenMax.to('.name', 0, { text: { value: 'Hi ' + document.cookie, delimiter: ' ' }, ease: _gsap.Linear.easeNone }));
	  tl.add(_gsap.TweenMax.to('.alt-info-box', 0.2, { css: { visibility: 'hidden', opacity: 0 } }));
	  return promisify(tl);
	};
	
	var outOfInfo = exports.outOfInfo = function outOfInfo() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('#mountain4', 0.3, { y: 0 }));
	  tl.add(_gsap.TweenMax.to('#mountain2', 0.3, { y: 0 }));
	  tl.add(_gsap.TweenMax.to('#mountain1', 0.3, { y: 0 }));
	  tl.add(_gsap.TweenMax.to('.breathing-information', 0.5, { css: { visibility: 'hidden', opacity: 0 } }));
	  tl.add(_gsap.TweenMax.fromTo('.alt-intro', 0.5, { backgroundColor: '#5CA1C2' }, { backgroundColor: '#A5E2DA' }));
	  return promisify(tl);
	};
	
	var infoToCatView = exports.infoToCatView = function infoToCatView() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.set('.breathing', 0, { backgroundColor: '#A5E2DA' }));
	  tl.add(_gsap.TweenMax.fromTo('.breathing', 0.5, { css: { display: 'none' } }, { css: { display: 'block' } }));
	  tl.add(_gsap.TweenMax.to('#mountain3', 0.5, { y: -550, ease: _gsap.Power2.easeOut }));
	  tl.add(_gsap.TweenMax.fromTo('.cat', 0.75, { css: { opacity: 0 } }, { css: { opacity: 1 } }));
	  tl.add(_gsap.TweenMax.to('.sync-breath-text', 0.5, { css: { visibility: 'visible', opacity: 1 } }));
	  return promisify(tl);
	};
	
	var fromBreathingToIntro = exports.fromBreathingToIntro = function fromBreathingToIntro() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.breathing', 0.2, { css: { display: 'none' } }));
	  tl.add(_gsap.TweenMax.to('.alt-intro', 0.2, { css: { display: 'block' } }));
	  tl.add(_gsap.TweenMax.fromTo('.alt-intro', 0.5, { backgroundColor: '#A5E2DA' }, { backgroundColor: '#5CA1C2' }));
	  tl.add(_gsap.TweenMax.to('.mountain1', 0.5, { y: -170 }));
	  tl.add(_gsap.TweenMax.to('.mountain2', 0.5, { y: -300 }));
	  tl.add(_gsap.TweenMax.to('.breathing-information', 0.2, { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));
	  return promisify(tl);
	};
	
	var changeToFractalView = exports.changeToFractalView = function changeToFractalView() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.breathing', 0.1, { css: { display: 'none' } }));
	  tl.add(_gsap.TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: { '-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 } }));
	  return promisify(tl);
	};
	
	var exitFractalView = exports.exitFractalView = function exitFractalView() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.fractal', 0.2, { css: { display: 'none' } }));
	  tl.add(_gsap.TweenMax.to('.breathing', 0.2, { css: { display: 'block' } }));
	  tl.add(_gsap.TweenMax.fromTo('.cat', 0.5, { opacity: 0 }, { opacity: 1 }));
	  tl.add(_gsap.TweenMax.to('#mountain3', 0.5, { y: -370, ease: _gsap.Power2.easeOut }));
	  return promisify(tl);
	};
	
	var outOfBreathing = exports.outOfBreathing = function outOfBreathing() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.sync-breath-text', 0, { css: { visibility: 'hidden', opacity: 0 } }));
	  tl.add(_gsap.TweenMax.to('.cat', 0.5, { opacity: 0 }));
	  tl.add(_gsap.TweenMax.to('#mountain3', 1, { y: 500 }));
	  return promisify(tl);
	};
	
	var breathingToWelldone = exports.breathingToWelldone = function breathingToWelldone() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.fromTo('.welldone', 0.2, { backgroundColor: '#A5E2DA' }, { backgroundColor: '#494A97' }));
	  tl.add(_gsap.TweenMax.to('.welldone-user', 0, { text: { value: 'Well Done ' + document.cookie + '!', delimiter: ' ' }, ease: _gsap.Linear.easeNone }));
	  tl.add(_gsap.TweenMax.to('#welldone-stars', 0.3, { opacity: 1 }));
	  tl.add(_gsap.TweenMax.to('.welldone-mountain1', 0.5, { y: -100 }));
	  tl.add(_gsap.TweenMax.to('.welldone-mountain2', 0.5, { y: -150 }));
	  tl.add(_gsap.TweenMax.to('.welldone-mountain3', 0.5, { y: -170 }));
	  tl.add(_gsap.TweenMax.to('#start-again', 0.3, { opacity: 1 }));
	  tl.add(_gsap.TweenMax.set('.breathing', 0, { backgroundColor: '#A5E2DA' }));
	  return promisify(tl);
	};
	
	var welldoneToIntro = exports.welldoneToIntro = function welldoneToIntro() {
	  var tl = new _gsap.TimelineMax();
	  tl.add(_gsap.TweenMax.to('.welldone-mountain3', 0.3, { y: 0 }));
	  tl.add(_gsap.TweenMax.to('.welldone-mountain2', 0.3, { y: 0 }));
	  tl.add(_gsap.TweenMax.to('.welldone-mountain1', 0.3, { y: 0 }));
	  tl.add(_gsap.TweenMax.to('.welldone', 0.2, { css: { display: 'none' } }));
	  tl.add(_gsap.TweenMax.to('.alt-intro', 0.2, { css: { display: 'flex' } }));
	  tl.add(_gsap.TweenMax.to('.mountain1', 0.5, { y: -170 }));
	  tl.add(_gsap.TweenMax.to('.mountain2', 0.5, { y: -300 }));
	  tl.add(_gsap.TweenMax.fromTo('.alt-intro', 0.3, { backgroundColor: '#494A97' }, { backgroundColor: '#5CA1C2' }));
	  tl.add(_gsap.TweenMax.to('.breathing-information', 0.2, { css: { display: 'flex', opacity: 1, visibility: 'visible' } }));
	  return promisify(tl);
	};
	
	var breatheOut = exports.breatheOut = {
	  visibility: true,
	  scale: 1,
	  delay: 2
	};
	
	var breatheIn = exports.breatheIn = {
	  scale: 1.3,
	  delay: 2,
	  ease: _gsap.Power1.easeInOut,
	  yoyo: true,
	  repeat: -1
	};
	
	var breathe = exports.breathe = function breathe() {
	  return _gsap.TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);
	};
	
	var headMovement = exports.headMovement = function headMovement() {
	  return _gsap.TweenMax.fromTo('#head', 5, { y: -0, delay: 2 }, { y: -19, delay: 2, ease: _gsap.Power1.easeInOut, repeat: -1, yoyo: true });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	 * VERSION: 1.19.0
	 * DATE: 2016-07-14
	 * UPDATES AND DOCS AT: http://greensock.com
	 * 
	 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 **/var _gsScope=typeof module!=="undefined"&&module.exports&&typeof global!=="undefined"?global:undefined||window;//helps ensure compatibility with AMD/RequireJS and CommonJS/Node
	(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(Animation,SimpleTimeline,TweenLite){var _slice=function _slice(a){//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
	var b=[],l=a.length,i;for(i=0;i!==l;b.push(a[i++])){}return b;},_applyCycle=function _applyCycle(vars,targets,i){var alt=vars.cycle,p,val;for(p in alt){val=alt[p];vars[p]=typeof val==="function"?val(i,targets[i]):val[i%val.length];}delete vars.cycle;},TweenMax=function TweenMax(target,duration,vars){TweenLite.call(this,target,duration,vars);this._cycle=0;this._yoyo=this.vars.yoyo===true;this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._dirty=true;//ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
	this.render=TweenMax.prototype.render;//speed optimization (avoid prototype lookup on this "hot" method)
	},_tinyNum=0.0000000001,TweenLiteInternals=TweenLite._internals,_isSelector=TweenLiteInternals.isSelector,_isArray=TweenLiteInternals.isArray,p=TweenMax.prototype=TweenLite.to({},0.1,{}),_blankArray=[];TweenMax.version="1.19.0";p.constructor=TweenMax;p.kill()._gc=false;TweenMax.killTweensOf=TweenMax.killDelayedCallsTo=TweenLite.killTweensOf;TweenMax.getTweensOf=TweenLite.getTweensOf;TweenMax.lagSmoothing=TweenLite.lagSmoothing;TweenMax.ticker=TweenLite.ticker;TweenMax.render=TweenLite.render;p.invalidate=function(){this._yoyo=this.vars.yoyo===true;this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._uncache(true);return TweenLite.prototype.invalidate.call(this);};p.updateTo=function(vars,resetDuration){var curRatio=this.ratio,immediate=this.vars.immediateRender||vars.immediateRender,p;if(resetDuration&&this._startTime<this._timeline._time){this._startTime=this._timeline._time;this._uncache(false);if(this._gc){this._enabled(true,false);}else{this._timeline.insert(this,this._startTime-this._delay);//ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
	}}for(p in vars){this.vars[p]=vars[p];}if(this._initted||immediate){if(resetDuration){this._initted=false;if(immediate){this.render(0,true,true);}}else{if(this._gc){this._enabled(true,false);}if(this._notifyPluginsOfEnabled&&this._firstPT){TweenLite._onPluginEvent("_onDisable",this);//in case a plugin like MotionBlur must perform some cleanup tasks
	}if(this._time/this._duration>0.998){//if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
	var prevTime=this._totalTime;this.render(0,true,false);this._initted=false;this.render(prevTime,true,false);}else{this._initted=false;this._init();if(this._time>0||immediate){var inv=1/(1-curRatio),pt=this._firstPT,endValue;while(pt){endValue=pt.s+pt.c;pt.c*=inv;pt.s=endValue-pt.c;pt=pt._next;}}}}}return this;};p.render=function(time,suppressEvents,force){if(!this._initted)if(this._duration===0&&this.vars.repeat){//zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
	this.invalidate();}var totalDur=!this._dirty?this._totalDuration:this.totalDuration(),prevTime=this._time,prevTotalTime=this._totalTime,prevCycle=this._cycle,duration=this._duration,prevRawPrevTime=this._rawPrevTime,isComplete,callback,pt,cycleDuration,r,type,pow,rawPrevTime;if(time>=totalDur-0.0000001){//to work around occasional floating point math artifacts.
	this._totalTime=totalDur;this._cycle=this._repeat;if(this._yoyo&&(this._cycle&1)!==0){this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;}else{this._time=duration;this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1;}if(!this._reversed){isComplete=true;callback="onComplete";force=force||this._timeline.autoRemoveChildren;//otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
	}if(duration===0)if(this._initted||!this.vars.lazy||force){//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
	if(this._startTime===this._timeline._duration){//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
	time=0;}if(prevRawPrevTime<0||time<=0&&time>=-0.0000001||prevRawPrevTime===_tinyNum&&this.data!=="isPause")if(prevRawPrevTime!==time){//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
	force=true;if(prevRawPrevTime>_tinyNum){callback="onReverseComplete";}}this._rawPrevTime=rawPrevTime=!suppressEvents||time||prevRawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	}}else if(time<0.0000001){//to work around occasional floating point math artifacts, round super small values to 0.
	this._totalTime=this._time=this._cycle=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(prevTotalTime!==0||duration===0&&prevRawPrevTime>0){callback="onReverseComplete";isComplete=this._reversed;}if(time<0){this._active=false;if(duration===0)if(this._initted||!this.vars.lazy||force){//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
	if(prevRawPrevTime>=0){force=true;}this._rawPrevTime=rawPrevTime=!suppressEvents||time||prevRawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	}}if(!this._initted){//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
	force=true;}}else{this._totalTime=this._time=time;if(this._repeat!==0){cycleDuration=duration+this._repeatDelay;this._cycle=this._totalTime/cycleDuration>>0;//originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
	if(this._cycle!==0)if(this._cycle===this._totalTime/cycleDuration&&prevTotalTime<=time){this._cycle--;//otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
	}this._time=this._totalTime-this._cycle*cycleDuration;if(this._yoyo)if((this._cycle&1)!==0){this._time=duration-this._time;}if(this._time>duration){this._time=duration;}else if(this._time<0){this._time=0;}}if(this._easeType){r=this._time/duration;type=this._easeType;pow=this._easePower;if(type===1||type===3&&r>=0.5){r=1-r;}if(type===3){r*=2;}if(pow===1){r*=r;}else if(pow===2){r*=r*r;}else if(pow===3){r*=r*r*r;}else if(pow===4){r*=r*r*r*r;}if(type===1){this.ratio=1-r;}else if(type===2){this.ratio=r;}else if(this._time/duration<0.5){this.ratio=r/2;}else{this.ratio=1-r/2;}}else{this.ratio=this._ease.getRatio(this._time/duration);}}if(prevTime===this._time&&!force&&prevCycle===this._cycle){if(prevTotalTime!==this._totalTime)if(this._onUpdate)if(!suppressEvents){//so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
	this._callback("onUpdate");}return;}else if(!this._initted){this._init();if(!this._initted||this._gc){//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
	return;}else if(!force&&this._firstPT&&(this.vars.lazy!==false&&this._duration||this.vars.lazy&&!this._duration)){//we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
	this._time=prevTime;this._totalTime=prevTotalTime;this._rawPrevTime=prevRawPrevTime;this._cycle=prevCycle;TweenLiteInternals.lazyTweens.push(this);this._lazy=[time,suppressEvents];return;}//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
	if(this._time&&!isComplete){this.ratio=this._ease.getRatio(this._time/duration);}else if(isComplete&&this._ease._calcEnd){this.ratio=this._ease.getRatio(this._time===0?0:1);}}if(this._lazy!==false){this._lazy=false;}if(!this._active)if(!this._paused&&this._time!==prevTime&&time>=0){this._active=true;//so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
	}if(prevTotalTime===0){if(this._initted===2&&time>0){//this.invalidate();
	this._init();//will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
	}if(this._startAt){if(time>=0){this._startAt.render(time,suppressEvents,force);}else if(!callback){callback="_dummyGS";//if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
	}}if(this.vars.onStart)if(this._totalTime!==0||duration===0)if(!suppressEvents){this._callback("onStart");}}pt=this._firstPT;while(pt){if(pt.f){pt.t[pt.p](pt.c*this.ratio+pt.s);}else{pt.t[pt.p]=pt.c*this.ratio+pt.s;}pt=pt._next;}if(this._onUpdate){if(time<0)if(this._startAt&&this._startTime){//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
	this._startAt.render(time,suppressEvents,force);//note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
	}if(!suppressEvents)if(this._totalTime!==prevTotalTime||callback){this._callback("onUpdate");}}if(this._cycle!==prevCycle)if(!suppressEvents)if(!this._gc)if(this.vars.onRepeat){this._callback("onRepeat");}if(callback)if(!this._gc||force){//check gc because there's a chance that kill() could be called in an onUpdate
	if(time<0&&this._startAt&&!this._onUpdate&&this._startTime){//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
	this._startAt.render(time,suppressEvents,force);}if(isComplete){if(this._timeline.autoRemoveChildren){this._enabled(false,false);}this._active=false;}if(!suppressEvents&&this.vars[callback]){this._callback(callback);}if(duration===0&&this._rawPrevTime===_tinyNum&&rawPrevTime!==_tinyNum){//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
	this._rawPrevTime=0;}}};//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------
	TweenMax.to=function(target,duration,vars){return new TweenMax(target,duration,vars);};TweenMax.from=function(target,duration,vars){vars.runBackwards=true;vars.immediateRender=vars.immediateRender!=false;return new TweenMax(target,duration,vars);};TweenMax.fromTo=function(target,duration,fromVars,toVars){toVars.startAt=fromVars;toVars.immediateRender=toVars.immediateRender!=false&&fromVars.immediateRender!=false;return new TweenMax(target,duration,toVars);};TweenMax.staggerTo=TweenMax.allTo=function(targets,duration,vars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope){stagger=stagger||0;var delay=0,a=[],finalComplete=function finalComplete(){if(vars.onComplete){vars.onComplete.apply(vars.onCompleteScope||this,arguments);}onCompleteAll.apply(onCompleteAllScope||vars.callbackScope||this,onCompleteAllParams||_blankArray);},cycle=vars.cycle,fromCycle=vars.startAt&&vars.startAt.cycle,l,copy,i,p;if(!_isArray(targets)){if(typeof targets==="string"){targets=TweenLite.selector(targets)||targets;}if(_isSelector(targets)){targets=_slice(targets);}}targets=targets||[];if(stagger<0){targets=_slice(targets);targets.reverse();stagger*=-1;}l=targets.length-1;for(i=0;i<=l;i++){copy={};for(p in vars){copy[p]=vars[p];}if(cycle){_applyCycle(copy,targets,i);if(copy.duration!=null){duration=copy.duration;delete copy.duration;}}if(fromCycle){fromCycle=copy.startAt={};for(p in vars.startAt){fromCycle[p]=vars.startAt[p];}_applyCycle(copy.startAt,targets,i);}copy.delay=delay+(copy.delay||0);if(i===l&&onCompleteAll){copy.onComplete=finalComplete;}a[i]=new TweenMax(targets[i],duration,copy);delay+=stagger;}return a;};TweenMax.staggerFrom=TweenMax.allFrom=function(targets,duration,vars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope){vars.runBackwards=true;vars.immediateRender=vars.immediateRender!=false;return TweenMax.staggerTo(targets,duration,vars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};TweenMax.staggerFromTo=TweenMax.allFromTo=function(targets,duration,fromVars,toVars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope){toVars.startAt=fromVars;toVars.immediateRender=toVars.immediateRender!=false&&fromVars.immediateRender!=false;return TweenMax.staggerTo(targets,duration,toVars,stagger,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};TweenMax.delayedCall=function(delay,callback,params,scope,useFrames){return new TweenMax(callback,0,{delay:delay,onComplete:callback,onCompleteParams:params,callbackScope:scope,onReverseComplete:callback,onReverseCompleteParams:params,immediateRender:false,useFrames:useFrames,overwrite:0});};TweenMax.set=function(target,vars){return new TweenMax(target,0,vars);};TweenMax.isTweening=function(target){return TweenLite.getTweensOf(target,true).length>0;};var _getChildrenOf=function _getChildrenOf(timeline,includeTimelines){var a=[],cnt=0,tween=timeline._first;while(tween){if(tween instanceof TweenLite){a[cnt++]=tween;}else{if(includeTimelines){a[cnt++]=tween;}a=a.concat(_getChildrenOf(tween,includeTimelines));cnt=a.length;}tween=tween._next;}return a;},getAllTweens=TweenMax.getAllTweens=function(includeTimelines){return _getChildrenOf(Animation._rootTimeline,includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline,includeTimelines));};TweenMax.killAll=function(complete,tweens,delayedCalls,timelines){if(tweens==null){tweens=true;}if(delayedCalls==null){delayedCalls=true;}var a=getAllTweens(timelines!=false),l=a.length,allTrue=tweens&&delayedCalls&&timelines,isDC,tween,i;for(i=0;i<l;i++){tween=a[i];if(allTrue||tween instanceof SimpleTimeline||(isDC=tween.target===tween.vars.onComplete)&&delayedCalls||tweens&&!isDC){if(complete){tween.totalTime(tween._reversed?0:tween.totalDuration());}else{tween._enabled(false,false);}}}};TweenMax.killChildTweensOf=function(parent,complete){if(parent==null){return;}var tl=TweenLiteInternals.tweenLookup,a,curParent,p,i,l;if(typeof parent==="string"){parent=TweenLite.selector(parent)||parent;}if(_isSelector(parent)){parent=_slice(parent);}if(_isArray(parent)){i=parent.length;while(--i>-1){TweenMax.killChildTweensOf(parent[i],complete);}return;}a=[];for(p in tl){curParent=tl[p].target.parentNode;while(curParent){if(curParent===parent){a=a.concat(tl[p].tweens);}curParent=curParent.parentNode;}}l=a.length;for(i=0;i<l;i++){if(complete){a[i].totalTime(a[i].totalDuration());}a[i]._enabled(false,false);}};var _changePause=function _changePause(pause,tweens,delayedCalls,timelines){tweens=tweens!==false;delayedCalls=delayedCalls!==false;timelines=timelines!==false;var a=getAllTweens(timelines),allTrue=tweens&&delayedCalls&&timelines,i=a.length,isDC,tween;while(--i>-1){tween=a[i];if(allTrue||tween instanceof SimpleTimeline||(isDC=tween.target===tween.vars.onComplete)&&delayedCalls||tweens&&!isDC){tween.paused(pause);}}};TweenMax.pauseAll=function(tweens,delayedCalls,timelines){_changePause(true,tweens,delayedCalls,timelines);};TweenMax.resumeAll=function(tweens,delayedCalls,timelines){_changePause(false,tweens,delayedCalls,timelines);};TweenMax.globalTimeScale=function(value){var tl=Animation._rootTimeline,t=TweenLite.ticker.time;if(!arguments.length){return tl._timeScale;}value=value||_tinyNum;//can't allow zero because it'll throw the math off
	tl._startTime=t-(t-tl._startTime)*tl._timeScale/value;tl=Animation._rootFramesTimeline;t=TweenLite.ticker.frame;tl._startTime=t-(t-tl._startTime)*tl._timeScale/value;tl._timeScale=Animation._rootTimeline._timeScale=value;return value;};//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------
	p.progress=function(value,suppressEvents){return!arguments.length?this._time/this.duration():this.totalTime(this.duration()*(this._yoyo&&(this._cycle&1)!==0?1-value:value)+this._cycle*(this._duration+this._repeatDelay),suppressEvents);};p.totalProgress=function(value,suppressEvents){return!arguments.length?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*value,suppressEvents);};p.time=function(value,suppressEvents){if(!arguments.length){return this._time;}if(this._dirty){this.totalDuration();}if(value>this._duration){value=this._duration;}if(this._yoyo&&(this._cycle&1)!==0){value=this._duration-value+this._cycle*(this._duration+this._repeatDelay);}else if(this._repeat!==0){value+=this._cycle*(this._duration+this._repeatDelay);}return this.totalTime(value,suppressEvents);};p.duration=function(value){if(!arguments.length){return this._duration;//don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
	}return Animation.prototype.duration.call(this,value);};p.totalDuration=function(value){if(!arguments.length){if(this._dirty){//instead of Infinity, we use 999999999999 so that we can accommodate reverses
	this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat;this._dirty=false;}return this._totalDuration;}return this._repeat===-1?this:this.duration((value-this._repeat*this._repeatDelay)/(this._repeat+1));};p.repeat=function(value){if(!arguments.length){return this._repeat;}this._repeat=value;return this._uncache(true);};p.repeatDelay=function(value){if(!arguments.length){return this._repeatDelay;}this._repeatDelay=value;return this._uncache(true);};p.yoyo=function(value){if(!arguments.length){return this._yoyo;}this._yoyo=value;return this;};return TweenMax;},true);/*
	 * ----------------------------------------------------------------
	 * TimelineLite
	 * ----------------------------------------------------------------
	 */_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(Animation,SimpleTimeline,TweenLite){var TimelineLite=function TimelineLite(vars){SimpleTimeline.call(this,vars);this._labels={};this.autoRemoveChildren=this.vars.autoRemoveChildren===true;this.smoothChildTiming=this.vars.smoothChildTiming===true;this._sortChildren=true;this._onUpdate=this.vars.onUpdate;var v=this.vars,val,p;for(p in v){val=v[p];if(_isArray(val))if(val.join("").indexOf("{self}")!==-1){v[p]=this._swapSelfInParams(val);}}if(_isArray(v.tweens)){this.add(v.tweens,0,v.align,v.stagger);}},_tinyNum=0.0000000001,TweenLiteInternals=TweenLite._internals,_internals=TimelineLite._internals={},_isSelector=TweenLiteInternals.isSelector,_isArray=TweenLiteInternals.isArray,_lazyTweens=TweenLiteInternals.lazyTweens,_lazyRender=TweenLiteInternals.lazyRender,_globals=_gsScope._gsDefine.globals,_copy=function _copy(vars){var copy={},p;for(p in vars){copy[p]=vars[p];}return copy;},_applyCycle=function _applyCycle(vars,targets,i){var alt=vars.cycle,p,val;for(p in alt){val=alt[p];vars[p]=typeof val==="function"?val.call(targets[i],i):val[i%val.length];}delete vars.cycle;},_pauseCallback=_internals.pauseCallback=function(){},_slice=function _slice(a){//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
	var b=[],l=a.length,i;for(i=0;i!==l;b.push(a[i++])){}return b;},p=TimelineLite.prototype=new SimpleTimeline();TimelineLite.version="1.19.0";p.constructor=TimelineLite;p.kill()._gc=p._forcingPlayhead=p._hasPause=false;/* might use later...
			//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
			function localToGlobal(time, animation) {
				while (animation) {
					time = (time / animation._timeScale) + animation._startTime;
					animation = animation.timeline;
				}
				return time;
			}
	
			//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
			function globalToLocal(time, animation) {
				var scale = 1;
				time -= localToGlobal(0, animation);
				while (animation) {
					scale *= animation._timeScale;
					animation = animation.timeline;
				}
				return time * scale;
			}
			*/p.to=function(target,duration,vars,position){var Engine=vars.repeat&&_globals.TweenMax||TweenLite;return duration?this.add(new Engine(target,duration,vars),position):this.set(target,vars,position);};p.from=function(target,duration,vars,position){return this.add((vars.repeat&&_globals.TweenMax||TweenLite).from(target,duration,vars),position);};p.fromTo=function(target,duration,fromVars,toVars,position){var Engine=toVars.repeat&&_globals.TweenMax||TweenLite;return duration?this.add(Engine.fromTo(target,duration,fromVars,toVars),position):this.set(target,toVars,position);};p.staggerTo=function(targets,duration,vars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope){var tl=new TimelineLite({onComplete:onCompleteAll,onCompleteParams:onCompleteAllParams,callbackScope:onCompleteAllScope,smoothChildTiming:this.smoothChildTiming}),cycle=vars.cycle,copy,i;if(typeof targets==="string"){targets=TweenLite.selector(targets)||targets;}targets=targets||[];if(_isSelector(targets)){//senses if the targets object is a selector. If it is, we should translate it into an array.
	targets=_slice(targets);}stagger=stagger||0;if(stagger<0){targets=_slice(targets);targets.reverse();stagger*=-1;}for(i=0;i<targets.length;i++){copy=_copy(vars);if(copy.startAt){copy.startAt=_copy(copy.startAt);if(copy.startAt.cycle){_applyCycle(copy.startAt,targets,i);}}if(cycle){_applyCycle(copy,targets,i);if(copy.duration!=null){duration=copy.duration;delete copy.duration;}}tl.to(targets[i],duration,copy,i*stagger);}return this.add(tl,position);};p.staggerFrom=function(targets,duration,vars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope){vars.immediateRender=vars.immediateRender!=false;vars.runBackwards=true;return this.staggerTo(targets,duration,vars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};p.staggerFromTo=function(targets,duration,fromVars,toVars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope){toVars.startAt=fromVars;toVars.immediateRender=toVars.immediateRender!=false&&fromVars.immediateRender!=false;return this.staggerTo(targets,duration,toVars,stagger,position,onCompleteAll,onCompleteAllParams,onCompleteAllScope);};p.call=function(callback,params,scope,position){return this.add(TweenLite.delayedCall(0,callback,params,scope),position);};p.set=function(target,vars,position){position=this._parseTimeOrLabel(position,0,true);if(vars.immediateRender==null){vars.immediateRender=position===this._time&&!this._paused;}return this.add(new TweenLite(target,0,vars),position);};TimelineLite.exportRoot=function(vars,ignoreDelayedCalls){vars=vars||{};if(vars.smoothChildTiming==null){vars.smoothChildTiming=true;}var tl=new TimelineLite(vars),root=tl._timeline,tween,next;if(ignoreDelayedCalls==null){ignoreDelayedCalls=true;}root._remove(tl,true);tl._startTime=0;tl._rawPrevTime=tl._time=tl._totalTime=root._time;tween=root._first;while(tween){next=tween._next;if(!ignoreDelayedCalls||!(tween instanceof TweenLite&&tween.target===tween.vars.onComplete)){tl.add(tween,tween._startTime-tween._delay);}tween=next;}root.add(tl,0);return tl;};p.add=function(value,position,align,stagger){var curTime,l,i,child,tl,beforeRawTime;if(typeof position!=="number"){position=this._parseTimeOrLabel(position,0,true,value);}if(!(value instanceof Animation)){if(value instanceof Array||value&&value.push&&_isArray(value)){align=align||"normal";stagger=stagger||0;curTime=position;l=value.length;for(i=0;i<l;i++){if(_isArray(child=value[i])){child=new TimelineLite({tweens:child});}this.add(child,curTime);if(typeof child!=="string"&&typeof child!=="function"){if(align==="sequence"){curTime=child._startTime+child.totalDuration()/child._timeScale;}else if(align==="start"){child._startTime-=child.delay();}}curTime+=stagger;}return this._uncache(true);}else if(typeof value==="string"){return this.addLabel(value,position);}else if(typeof value==="function"){value=TweenLite.delayedCall(0,value);}else{throw"Cannot add "+value+" into the timeline; it is not a tween, timeline, function, or string.";}}SimpleTimeline.prototype.add.call(this,value,position);//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
	if(this._gc||this._time===this._duration)if(!this._paused)if(this._duration<this.duration()){//in case any of the ancestors had completed but should now be enabled...
	tl=this;beforeRawTime=tl.rawTime()>value._startTime;//if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
	while(tl._timeline){if(beforeRawTime&&tl._timeline.smoothChildTiming){tl.totalTime(tl._totalTime,true);//moves the timeline (shifts its startTime) if necessary, and also enables it.
	}else if(tl._gc){tl._enabled(true,false);}tl=tl._timeline;}}return this;};p.remove=function(value){if(value instanceof Animation){this._remove(value,false);var tl=value._timeline=value.vars.useFrames?Animation._rootFramesTimeline:Animation._rootTimeline;//now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
	value._startTime=(value._paused?value._pauseTime:tl._time)-(!value._reversed?value._totalTime:value.totalDuration()-value._totalTime)/value._timeScale;//ensure that if it gets played again, the timing is correct.
	return this;}else if(value instanceof Array||value&&value.push&&_isArray(value)){var i=value.length;while(--i>-1){this.remove(value[i]);}return this;}else if(typeof value==="string"){return this.removeLabel(value);}return this.kill(null,value);};p._remove=function(tween,skipDisable){SimpleTimeline.prototype._remove.call(this,tween,skipDisable);var last=this._last;if(!last){this._time=this._totalTime=this._duration=this._totalDuration=0;}else if(this._time>last._startTime+last._totalDuration/last._timeScale){this._time=this.duration();this._totalTime=this._totalDuration;}return this;};p.append=function(value,offsetOrLabel){return this.add(value,this._parseTimeOrLabel(null,offsetOrLabel,true,value));};p.insert=p.insertMultiple=function(value,position,align,stagger){return this.add(value,position||0,align,stagger);};p.appendMultiple=function(tweens,offsetOrLabel,align,stagger){return this.add(tweens,this._parseTimeOrLabel(null,offsetOrLabel,true,tweens),align,stagger);};p.addLabel=function(label,position){this._labels[label]=this._parseTimeOrLabel(position);return this;};p.addPause=function(position,callback,params,scope){var t=TweenLite.delayedCall(0,_pauseCallback,params,scope||this);t.vars.onComplete=t.vars.onReverseComplete=callback;t.data="isPause";this._hasPause=true;return this.add(t,position);};p.removeLabel=function(label){delete this._labels[label];return this;};p.getLabelTime=function(label){return this._labels[label]!=null?this._labels[label]:-1;};p._parseTimeOrLabel=function(timeOrLabel,offsetOrLabel,appendIfAbsent,ignore){var i;//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
	if(ignore instanceof Animation&&ignore.timeline===this){this.remove(ignore);}else if(ignore&&(ignore instanceof Array||ignore.push&&_isArray(ignore))){i=ignore.length;while(--i>-1){if(ignore[i]instanceof Animation&&ignore[i].timeline===this){this.remove(ignore[i]);}}}if(typeof offsetOrLabel==="string"){return this._parseTimeOrLabel(offsetOrLabel,appendIfAbsent&&typeof timeOrLabel==="number"&&this._labels[offsetOrLabel]==null?timeOrLabel-this.duration():0,appendIfAbsent);}offsetOrLabel=offsetOrLabel||0;if(typeof timeOrLabel==="string"&&(isNaN(timeOrLabel)||this._labels[timeOrLabel]!=null)){//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
	i=timeOrLabel.indexOf("=");if(i===-1){if(this._labels[timeOrLabel]==null){return appendIfAbsent?this._labels[timeOrLabel]=this.duration()+offsetOrLabel:offsetOrLabel;}return this._labels[timeOrLabel]+offsetOrLabel;}offsetOrLabel=parseInt(timeOrLabel.charAt(i-1)+"1",10)*Number(timeOrLabel.substr(i+1));timeOrLabel=i>1?this._parseTimeOrLabel(timeOrLabel.substr(0,i-1),0,appendIfAbsent):this.duration();}else if(timeOrLabel==null){timeOrLabel=this.duration();}return Number(timeOrLabel)+offsetOrLabel;};p.seek=function(position,suppressEvents){return this.totalTime(typeof position==="number"?position:this._parseTimeOrLabel(position),suppressEvents!==false);};p.stop=function(){return this.paused(true);};p.gotoAndPlay=function(position,suppressEvents){return this.play(position,suppressEvents);};p.gotoAndStop=function(position,suppressEvents){return this.pause(position,suppressEvents);};p.render=function(time,suppressEvents,force){if(this._gc){this._enabled(true,false);}var totalDur=!this._dirty?this._totalDuration:this.totalDuration(),prevTime=this._time,prevStart=this._startTime,prevTimeScale=this._timeScale,prevPaused=this._paused,tween,isComplete,next,callback,internalForce,pauseTween,curTime;if(time>=totalDur-0.0000001){//to work around occasional floating point math artifacts.
	this._totalTime=this._time=totalDur;if(!this._reversed)if(!this._hasPausedChild()){isComplete=true;callback="onComplete";internalForce=!!this._timeline.autoRemoveChildren;//otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
	if(this._duration===0)if(time<=0&&time>=-0.0000001||this._rawPrevTime<0||this._rawPrevTime===_tinyNum)if(this._rawPrevTime!==time&&this._first){internalForce=true;if(this._rawPrevTime>_tinyNum){callback="onReverseComplete";}}}this._rawPrevTime=this._duration||!suppressEvents||time||this._rawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	time=totalDur+0.0001;//to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
	}else if(time<0.0000001){//to work around occasional floating point math artifacts, round super small values to 0.
	this._totalTime=this._time=0;if(prevTime!==0||this._duration===0&&this._rawPrevTime!==_tinyNum&&(this._rawPrevTime>0||time<0&&this._rawPrevTime>=0)){callback="onReverseComplete";isComplete=this._reversed;}if(time<0){this._active=false;if(this._timeline.autoRemoveChildren&&this._reversed){//ensures proper GC if a timeline is resumed after it's finished reversing.
	internalForce=isComplete=true;callback="onReverseComplete";}else if(this._rawPrevTime>=0&&this._first){//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
	internalForce=true;}this._rawPrevTime=time;}else{this._rawPrevTime=this._duration||!suppressEvents||time||this._rawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	if(time===0&&isComplete){//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
	tween=this._first;while(tween&&tween._startTime===0){if(!tween._duration){isComplete=false;}tween=tween._next;}}time=0;//to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
	if(!this._initted){internalForce=true;}}}else{if(this._hasPause&&!this._forcingPlayhead&&!suppressEvents){if(time>=prevTime){tween=this._first;while(tween&&tween._startTime<=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&!tween.ratio&&!(tween._startTime===0&&this._rawPrevTime===0)){pauseTween=tween;}tween=tween._next;}}else{tween=this._last;while(tween&&tween._startTime>=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&tween._rawPrevTime>0){pauseTween=tween;}tween=tween._prev;}}if(pauseTween){this._time=time=pauseTween._startTime;this._totalTime=time+this._cycle*(this._totalDuration+this._repeatDelay);}}this._totalTime=this._time=this._rawPrevTime=time;}if((this._time===prevTime||!this._first)&&!force&&!internalForce&&!pauseTween){return;}else if(!this._initted){this._initted=true;}if(!this._active)if(!this._paused&&this._time!==prevTime&&time>0){this._active=true;//so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
	}if(prevTime===0)if(this.vars.onStart)if(this._time!==0||!this._duration)if(!suppressEvents){this._callback("onStart");}curTime=this._time;if(curTime>=prevTime){tween=this._first;while(tween){next=tween._next;//record it here because the value could change after rendering...
	if(curTime!==this._time||this._paused&&!prevPaused){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
	break;}else if(tween._active||tween._startTime<=curTime&&!tween._paused&&!tween._gc){if(pauseTween===tween){this.pause();}if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render((!tween._dirty?tween._totalDuration:tween.totalDuration())-(time-tween._startTime)*tween._timeScale,suppressEvents,force);}}tween=next;}}else{tween=this._last;while(tween){next=tween._prev;//record it here because the value could change after rendering...
	if(curTime!==this._time||this._paused&&!prevPaused){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
	break;}else if(tween._active||tween._startTime<=prevTime&&!tween._paused&&!tween._gc){if(pauseTween===tween){pauseTween=tween._prev;//the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
	while(pauseTween&&pauseTween.endTime()>this._time){pauseTween.render(pauseTween._reversed?pauseTween.totalDuration()-(time-pauseTween._startTime)*pauseTween._timeScale:(time-pauseTween._startTime)*pauseTween._timeScale,suppressEvents,force);pauseTween=pauseTween._prev;}pauseTween=null;this.pause();}if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render((!tween._dirty?tween._totalDuration:tween.totalDuration())-(time-tween._startTime)*tween._timeScale,suppressEvents,force);}}tween=next;}}if(this._onUpdate)if(!suppressEvents){if(_lazyTweens.length){//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
	_lazyRender();}this._callback("onUpdate");}if(callback)if(!this._gc)if(prevStart===this._startTime||prevTimeScale!==this._timeScale)if(this._time===0||totalDur>=this.totalDuration()){//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
	if(isComplete){if(_lazyTweens.length){//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
	_lazyRender();}if(this._timeline.autoRemoveChildren){this._enabled(false,false);}this._active=false;}if(!suppressEvents&&this.vars[callback]){this._callback(callback);}}};p._hasPausedChild=function(){var tween=this._first;while(tween){if(tween._paused||tween instanceof TimelineLite&&tween._hasPausedChild()){return true;}tween=tween._next;}return false;};p.getChildren=function(nested,tweens,timelines,ignoreBeforeTime){ignoreBeforeTime=ignoreBeforeTime||-9999999999;var a=[],tween=this._first,cnt=0;while(tween){if(tween._startTime<ignoreBeforeTime){//do nothing
	}else if(tween instanceof TweenLite){if(tweens!==false){a[cnt++]=tween;}}else{if(timelines!==false){a[cnt++]=tween;}if(nested!==false){a=a.concat(tween.getChildren(true,tweens,timelines));cnt=a.length;}}tween=tween._next;}return a;};p.getTweensOf=function(target,nested){var disabled=this._gc,a=[],cnt=0,tweens,i;if(disabled){this._enabled(true,true);//getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
	}tweens=TweenLite.getTweensOf(target);i=tweens.length;while(--i>-1){if(tweens[i].timeline===this||nested&&this._contains(tweens[i])){a[cnt++]=tweens[i];}}if(disabled){this._enabled(false,true);}return a;};p.recent=function(){return this._recent;};p._contains=function(tween){var tl=tween.timeline;while(tl){if(tl===this){return true;}tl=tl.timeline;}return false;};p.shiftChildren=function(amount,adjustLabels,ignoreBeforeTime){ignoreBeforeTime=ignoreBeforeTime||0;var tween=this._first,labels=this._labels,p;while(tween){if(tween._startTime>=ignoreBeforeTime){tween._startTime+=amount;}tween=tween._next;}if(adjustLabels){for(p in labels){if(labels[p]>=ignoreBeforeTime){labels[p]+=amount;}}}return this._uncache(true);};p._kill=function(vars,target){if(!vars&&!target){return this._enabled(false,false);}var tweens=!target?this.getChildren(true,true,false):this.getTweensOf(target),i=tweens.length,changed=false;while(--i>-1){if(tweens[i]._kill(vars,target)){changed=true;}}return changed;};p.clear=function(labels){var tweens=this.getChildren(false,true,true),i=tweens.length;this._time=this._totalTime=0;while(--i>-1){tweens[i]._enabled(false,false);}if(labels!==false){this._labels={};}return this._uncache(true);};p.invalidate=function(){var tween=this._first;while(tween){tween.invalidate();tween=tween._next;}return Animation.prototype.invalidate.call(this);;};p._enabled=function(enabled,ignoreTimeline){if(enabled===this._gc){var tween=this._first;while(tween){tween._enabled(enabled,true);tween=tween._next;}}return SimpleTimeline.prototype._enabled.call(this,enabled,ignoreTimeline);};p.totalTime=function(time,suppressEvents,uncapped){this._forcingPlayhead=true;var val=Animation.prototype.totalTime.apply(this,arguments);this._forcingPlayhead=false;return val;};p.duration=function(value){if(!arguments.length){if(this._dirty){this.totalDuration();//just triggers recalculation
	}return this._duration;}if(this.duration()!==0&&value!==0){this.timeScale(this._duration/value);}return this;};p.totalDuration=function(value){if(!arguments.length){if(this._dirty){var max=0,tween=this._last,prevStart=999999999999,prev,end;while(tween){prev=tween._prev;//record it here in case the tween changes position in the sequence...
	if(tween._dirty){tween.totalDuration();//could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
	}if(tween._startTime>prevStart&&this._sortChildren&&!tween._paused){//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
	this.add(tween,tween._startTime-tween._delay);}else{prevStart=tween._startTime;}if(tween._startTime<0&&!tween._paused){//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
	max-=tween._startTime;if(this._timeline.smoothChildTiming){this._startTime+=tween._startTime/this._timeScale;}this.shiftChildren(-tween._startTime,false,-9999999999);prevStart=0;}end=tween._startTime+tween._totalDuration/tween._timeScale;if(end>max){max=end;}tween=prev;}this._duration=this._totalDuration=max;this._dirty=false;}return this._totalDuration;}return value&&this.totalDuration()?this.timeScale(this._totalDuration/value):this;};p.paused=function(value){if(!value){//if there's a pause directly at the spot from where we're unpausing, skip it.
	var tween=this._first,time=this._time;while(tween){if(tween._startTime===time&&tween.data==="isPause"){tween._rawPrevTime=0;//remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
	}tween=tween._next;}}return Animation.prototype.paused.apply(this,arguments);};p.usesFrames=function(){var tl=this._timeline;while(tl._timeline){tl=tl._timeline;}return tl===Animation._rootFramesTimeline;};p.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale;};return TimelineLite;},true);/*
	 * ----------------------------------------------------------------
	 * TimelineMax
	 * ----------------------------------------------------------------
	 */_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(TimelineLite,TweenLite,Ease){var TimelineMax=function TimelineMax(vars){TimelineLite.call(this,vars);this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._cycle=0;this._yoyo=this.vars.yoyo===true;this._dirty=true;},_tinyNum=0.0000000001,TweenLiteInternals=TweenLite._internals,_lazyTweens=TweenLiteInternals.lazyTweens,_lazyRender=TweenLiteInternals.lazyRender,_globals=_gsScope._gsDefine.globals,_easeNone=new Ease(null,null,1,0),p=TimelineMax.prototype=new TimelineLite();p.constructor=TimelineMax;p.kill()._gc=false;TimelineMax.version="1.19.0";p.invalidate=function(){this._yoyo=this.vars.yoyo===true;this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._uncache(true);return TimelineLite.prototype.invalidate.call(this);};p.addCallback=function(callback,position,params,scope){return this.add(TweenLite.delayedCall(0,callback,params,scope),position);};p.removeCallback=function(callback,position){if(callback){if(position==null){this._kill(null,callback);}else{var a=this.getTweensOf(callback,false),i=a.length,time=this._parseTimeOrLabel(position);while(--i>-1){if(a[i]._startTime===time){a[i]._enabled(false,false);}}}}return this;};p.removePause=function(position){return this.removeCallback(TimelineLite._internals.pauseCallback,position);};p.tweenTo=function(position,vars){vars=vars||{};var copy={ease:_easeNone,useFrames:this.usesFrames(),immediateRender:false},Engine=vars.repeat&&_globals.TweenMax||TweenLite,duration,p,t;for(p in vars){copy[p]=vars[p];}copy.time=this._parseTimeOrLabel(position);duration=Math.abs(Number(copy.time)-this._time)/this._timeScale||0.001;t=new Engine(this,duration,copy);copy.onStart=function(){t.target.paused(true);if(t.vars.time!==t.target.time()&&duration===t.duration()){//don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
	t.duration(Math.abs(t.vars.time-t.target.time())/t.target._timeScale);}if(vars.onStart){//in case the user had an onStart in the vars - we don't want to overwrite it.
	t._callback("onStart");}};return t;};p.tweenFromTo=function(fromPosition,toPosition,vars){vars=vars||{};fromPosition=this._parseTimeOrLabel(fromPosition);vars.startAt={onComplete:this.seek,onCompleteParams:[fromPosition],callbackScope:this};vars.immediateRender=vars.immediateRender!==false;var t=this.tweenTo(toPosition,vars);return t.duration(Math.abs(t.vars.time-fromPosition)/this._timeScale||0.001);};p.render=function(time,suppressEvents,force){if(this._gc){this._enabled(true,false);}var totalDur=!this._dirty?this._totalDuration:this.totalDuration(),dur=this._duration,prevTime=this._time,prevTotalTime=this._totalTime,prevStart=this._startTime,prevTimeScale=this._timeScale,prevRawPrevTime=this._rawPrevTime,prevPaused=this._paused,prevCycle=this._cycle,tween,isComplete,next,callback,internalForce,cycleDuration,pauseTween,curTime;if(time>=totalDur-0.0000001){//to work around occasional floating point math artifacts.
	if(!this._locked){this._totalTime=totalDur;this._cycle=this._repeat;}if(!this._reversed)if(!this._hasPausedChild()){isComplete=true;callback="onComplete";internalForce=!!this._timeline.autoRemoveChildren;//otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
	if(this._duration===0)if(time<=0&&time>=-0.0000001||prevRawPrevTime<0||prevRawPrevTime===_tinyNum)if(prevRawPrevTime!==time&&this._first){internalForce=true;if(prevRawPrevTime>_tinyNum){callback="onReverseComplete";}}}this._rawPrevTime=this._duration||!suppressEvents||time||this._rawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	if(this._yoyo&&(this._cycle&1)!==0){this._time=time=0;}else{this._time=dur;time=dur+0.0001;//to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
	}}else if(time<0.0000001){//to work around occasional floating point math artifacts, round super small values to 0.
	if(!this._locked){this._totalTime=this._cycle=0;}this._time=0;if(prevTime!==0||dur===0&&prevRawPrevTime!==_tinyNum&&(prevRawPrevTime>0||time<0&&prevRawPrevTime>=0)&&!this._locked){//edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
	callback="onReverseComplete";isComplete=this._reversed;}if(time<0){this._active=false;if(this._timeline.autoRemoveChildren&&this._reversed){internalForce=isComplete=true;callback="onReverseComplete";}else if(prevRawPrevTime>=0&&this._first){//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
	internalForce=true;}this._rawPrevTime=time;}else{this._rawPrevTime=dur||!suppressEvents||time||this._rawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	if(time===0&&isComplete){//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
	tween=this._first;while(tween&&tween._startTime===0){if(!tween._duration){isComplete=false;}tween=tween._next;}}time=0;//to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
	if(!this._initted){internalForce=true;}}}else{if(dur===0&&prevRawPrevTime<0){//without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
	internalForce=true;}this._time=this._rawPrevTime=time;if(!this._locked){this._totalTime=time;if(this._repeat!==0){cycleDuration=dur+this._repeatDelay;this._cycle=this._totalTime/cycleDuration>>0;//originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
	if(this._cycle!==0)if(this._cycle===this._totalTime/cycleDuration&&prevTotalTime<=time){this._cycle--;//otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
	}this._time=this._totalTime-this._cycle*cycleDuration;if(this._yoyo)if((this._cycle&1)!==0){this._time=dur-this._time;}if(this._time>dur){this._time=dur;time=dur+0.0001;//to avoid occasional floating point rounding error
	}else if(this._time<0){this._time=time=0;}else{time=this._time;}}}if(this._hasPause&&!this._forcingPlayhead&&!suppressEvents){time=this._time;if(time>=prevTime){tween=this._first;while(tween&&tween._startTime<=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&!tween.ratio&&!(tween._startTime===0&&this._rawPrevTime===0)){pauseTween=tween;}tween=tween._next;}}else{tween=this._last;while(tween&&tween._startTime>=time&&!pauseTween){if(!tween._duration)if(tween.data==="isPause"&&tween._rawPrevTime>0){pauseTween=tween;}tween=tween._prev;}}if(pauseTween){this._time=time=pauseTween._startTime;this._totalTime=time+this._cycle*(this._totalDuration+this._repeatDelay);}}}if(this._cycle!==prevCycle)if(!this._locked){/*
					make sure children at the end/beginning of the timeline are rendered properly. If, for example,
					a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
					would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
					could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
					we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
					ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
					*/var backwards=this._yoyo&&(prevCycle&1)!==0,wrap=backwards===(this._yoyo&&(this._cycle&1)!==0),recTotalTime=this._totalTime,recCycle=this._cycle,recRawPrevTime=this._rawPrevTime,recTime=this._time;this._totalTime=prevCycle*dur;if(this._cycle<prevCycle){backwards=!backwards;}else{this._totalTime+=dur;}this._time=prevTime;//temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.
	this._rawPrevTime=dur===0?prevRawPrevTime-0.0001:prevRawPrevTime;this._cycle=prevCycle;this._locked=true;//prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
	prevTime=backwards?0:dur;this.render(prevTime,suppressEvents,dur===0);if(!suppressEvents)if(!this._gc){if(this.vars.onRepeat){this._callback("onRepeat");}}if(prevTime!==this._time){//in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
	return;}if(wrap){prevTime=backwards?dur+0.0001:-0.0001;this.render(prevTime,true,false);}this._locked=false;if(this._paused&&!prevPaused){//if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
	return;}this._time=recTime;this._totalTime=recTotalTime;this._cycle=recCycle;this._rawPrevTime=recRawPrevTime;}if((this._time===prevTime||!this._first)&&!force&&!internalForce&&!pauseTween){if(prevTotalTime!==this._totalTime)if(this._onUpdate)if(!suppressEvents){//so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
	this._callback("onUpdate");}return;}else if(!this._initted){this._initted=true;}if(!this._active)if(!this._paused&&this._totalTime!==prevTotalTime&&time>0){this._active=true;//so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
	}if(prevTotalTime===0)if(this.vars.onStart)if(this._totalTime!==0||!this._totalDuration)if(!suppressEvents){this._callback("onStart");}curTime=this._time;if(curTime>=prevTime){tween=this._first;while(tween){next=tween._next;//record it here because the value could change after rendering...
	if(curTime!==this._time||this._paused&&!prevPaused){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
	break;}else if(tween._active||tween._startTime<=this._time&&!tween._paused&&!tween._gc){if(pauseTween===tween){this.pause();}if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render((!tween._dirty?tween._totalDuration:tween.totalDuration())-(time-tween._startTime)*tween._timeScale,suppressEvents,force);}}tween=next;}}else{tween=this._last;while(tween){next=tween._prev;//record it here because the value could change after rendering...
	if(curTime!==this._time||this._paused&&!prevPaused){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
	break;}else if(tween._active||tween._startTime<=prevTime&&!tween._paused&&!tween._gc){if(pauseTween===tween){pauseTween=tween._prev;//the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
	while(pauseTween&&pauseTween.endTime()>this._time){pauseTween.render(pauseTween._reversed?pauseTween.totalDuration()-(time-pauseTween._startTime)*pauseTween._timeScale:(time-pauseTween._startTime)*pauseTween._timeScale,suppressEvents,force);pauseTween=pauseTween._prev;}pauseTween=null;this.pause();}if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render((!tween._dirty?tween._totalDuration:tween.totalDuration())-(time-tween._startTime)*tween._timeScale,suppressEvents,force);}}tween=next;}}if(this._onUpdate)if(!suppressEvents){if(_lazyTweens.length){//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
	_lazyRender();}this._callback("onUpdate");}if(callback)if(!this._locked)if(!this._gc)if(prevStart===this._startTime||prevTimeScale!==this._timeScale)if(this._time===0||totalDur>=this.totalDuration()){//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
	if(isComplete){if(_lazyTweens.length){//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
	_lazyRender();}if(this._timeline.autoRemoveChildren){this._enabled(false,false);}this._active=false;}if(!suppressEvents&&this.vars[callback]){this._callback(callback);}}};p.getActive=function(nested,tweens,timelines){if(nested==null){nested=true;}if(tweens==null){tweens=true;}if(timelines==null){timelines=false;}var a=[],all=this.getChildren(nested,tweens,timelines),cnt=0,l=all.length,i,tween;for(i=0;i<l;i++){tween=all[i];if(tween.isActive()){a[cnt++]=tween;}}return a;};p.getLabelAfter=function(time){if(!time)if(time!==0){//faster than isNan()
	time=this._time;}var labels=this.getLabelsArray(),l=labels.length,i;for(i=0;i<l;i++){if(labels[i].time>time){return labels[i].name;}}return null;};p.getLabelBefore=function(time){if(time==null){time=this._time;}var labels=this.getLabelsArray(),i=labels.length;while(--i>-1){if(labels[i].time<time){return labels[i].name;}}return null;};p.getLabelsArray=function(){var a=[],cnt=0,p;for(p in this._labels){a[cnt++]={time:this._labels[p],name:p};}a.sort(function(a,b){return a.time-b.time;});return a;};//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------
	p.progress=function(value,suppressEvents){return!arguments.length?this._time/this.duration():this.totalTime(this.duration()*(this._yoyo&&(this._cycle&1)!==0?1-value:value)+this._cycle*(this._duration+this._repeatDelay),suppressEvents);};p.totalProgress=function(value,suppressEvents){return!arguments.length?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*value,suppressEvents);};p.totalDuration=function(value){if(!arguments.length){if(this._dirty){TimelineLite.prototype.totalDuration.call(this);//just forces refresh
	//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
	this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat;}return this._totalDuration;}return this._repeat===-1||!value?this:this.timeScale(this.totalDuration()/value);};p.time=function(value,suppressEvents){if(!arguments.length){return this._time;}if(this._dirty){this.totalDuration();}if(value>this._duration){value=this._duration;}if(this._yoyo&&(this._cycle&1)!==0){value=this._duration-value+this._cycle*(this._duration+this._repeatDelay);}else if(this._repeat!==0){value+=this._cycle*(this._duration+this._repeatDelay);}return this.totalTime(value,suppressEvents);};p.repeat=function(value){if(!arguments.length){return this._repeat;}this._repeat=value;return this._uncache(true);};p.repeatDelay=function(value){if(!arguments.length){return this._repeatDelay;}this._repeatDelay=value;return this._uncache(true);};p.yoyo=function(value){if(!arguments.length){return this._yoyo;}this._yoyo=value;return this;};p.currentLabel=function(value){if(!arguments.length){return this.getLabelBefore(this._time+0.00000001);}return this.seek(value,true);};return TimelineMax;},true);/*
	 * ----------------------------------------------------------------
	 * BezierPlugin
	 * ----------------------------------------------------------------
	 */(function(){var _RAD2DEG=180/Math.PI,_r1=[],_r2=[],_r3=[],_corProps={},_globals=_gsScope._gsDefine.globals,Segment=function Segment(a,b,c,d){if(c===d){//if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
	c=d-(d-b)/1000000;}if(a===b){//if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
	b=a+(c-a)/1000000;}this.a=a;this.b=b;this.c=c;this.d=d;this.da=d-a;this.ca=c-a;this.ba=b-a;},_correlate=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",cubicToQuadratic=function cubicToQuadratic(a,b,c,d){var q1={a:a},q2={},q3={},q4={c:d},mab=(a+b)/2,mbc=(b+c)/2,mcd=(c+d)/2,mabc=(mab+mbc)/2,mbcd=(mbc+mcd)/2,m8=(mbcd-mabc)/8;q1.b=mab+(a-mab)/4;q2.b=mabc+m8;q1.c=q2.a=(q1.b+q2.b)/2;q2.c=q3.a=(mabc+mbcd)/2;q3.b=mbcd-m8;q4.b=mcd+(d-mcd)/4;q3.c=q4.a=(q3.b+q4.b)/2;return[q1,q2,q3,q4];},_calculateControlPoints=function _calculateControlPoints(a,curviness,quad,basic,correlate){var l=a.length-1,ii=0,cp1=a[0].a,i,p1,p2,p3,seg,m1,m2,mm,cp2,qb,r1,r2,tl;for(i=0;i<l;i++){seg=a[ii];p1=seg.a;p2=seg.d;p3=a[ii+1].d;if(correlate){r1=_r1[i];r2=_r2[i];tl=(r2+r1)*curviness*0.25/(basic?0.5:_r3[i]||0.5);m1=p2-(p2-p1)*(basic?curviness*0.5:r1!==0?tl/r1:0);m2=p2+(p3-p2)*(basic?curviness*0.5:r2!==0?tl/r2:0);mm=p2-(m1+((m2-m1)*(r1*3/(r1+r2)+0.5)/4||0));}else{m1=p2-(p2-p1)*curviness*0.5;m2=p2+(p3-p2)*curviness*0.5;mm=p2-(m1+m2)/2;}m1+=mm;m2+=mm;seg.c=cp2=m1;if(i!==0){seg.b=cp1;}else{seg.b=cp1=seg.a+(seg.c-seg.a)*0.6;//instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
	}seg.da=p2-p1;seg.ca=cp2-p1;seg.ba=cp1-p1;if(quad){qb=cubicToQuadratic(p1,cp1,cp2,p2);a.splice(ii,1,qb[0],qb[1],qb[2],qb[3]);ii+=4;}else{ii++;}cp1=m2;}seg=a[ii];seg.b=cp1;seg.c=cp1+(seg.d-cp1)*0.4;//instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
	seg.da=seg.d-seg.a;seg.ca=seg.c-seg.a;seg.ba=cp1-seg.a;if(quad){qb=cubicToQuadratic(seg.a,cp1,seg.c,seg.d);a.splice(ii,1,qb[0],qb[1],qb[2],qb[3]);}},_parseAnchors=function _parseAnchors(values,p,correlate,prepend){var a=[],l,i,p1,p2,p3,tmp;if(prepend){values=[prepend].concat(values);i=values.length;while(--i>-1){if(typeof(tmp=values[i][p])==="string")if(tmp.charAt(1)==="="){values[i][p]=prepend[p]+Number(tmp.charAt(0)+tmp.substr(2));//accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
	}}}l=values.length-2;if(l<0){a[0]=new Segment(values[0][p],0,0,values[l<-1?0:1][p]);return a;}for(i=0;i<l;i++){p1=values[i][p];p2=values[i+1][p];a[i]=new Segment(p1,0,0,p2);if(correlate){p3=values[i+2][p];_r1[i]=(_r1[i]||0)+(p2-p1)*(p2-p1);_r2[i]=(_r2[i]||0)+(p3-p2)*(p3-p2);}}a[i]=new Segment(values[i][p],0,0,values[i+1][p]);return a;},bezierThrough=function bezierThrough(values,curviness,quadratic,basic,correlate,prepend){var obj={},props=[],first=prepend||values[0],i,p,a,j,r,l,seamless,last;correlate=typeof correlate==="string"?","+correlate+",":_correlate;if(curviness==null){curviness=1;}for(p in values[0]){props.push(p);}//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
	if(values.length>1){last=values[values.length-1];seamless=true;i=props.length;while(--i>-1){p=props[i];if(Math.abs(first[p]-last[p])>0.05){//build in a tolerance of +/-0.05 to accommodate rounding errors.
	seamless=false;break;}}if(seamless){values=values.concat();//duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
	if(prepend){values.unshift(prepend);}values.push(values[1]);prepend=values[values.length-3];}}_r1.length=_r2.length=_r3.length=0;i=props.length;while(--i>-1){p=props[i];_corProps[p]=correlate.indexOf(","+p+",")!==-1;obj[p]=_parseAnchors(values,p,_corProps[p],prepend);}i=_r1.length;while(--i>-1){_r1[i]=Math.sqrt(_r1[i]);_r2[i]=Math.sqrt(_r2[i]);}if(!basic){i=props.length;while(--i>-1){if(_corProps[p]){a=obj[props[i]];l=a.length-1;for(j=0;j<l;j++){r=a[j+1].da/_r2[j]+a[j].da/_r1[j]||0;_r3[j]=(_r3[j]||0)+r*r;}}}i=_r3.length;while(--i>-1){_r3[i]=Math.sqrt(_r3[i]);}}i=props.length;j=quadratic?4:1;while(--i>-1){p=props[i];a=obj[p];_calculateControlPoints(a,curviness,quadratic,basic,_corProps[p]);//this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
	if(seamless){a.splice(0,j);a.splice(a.length-j,j);}}return obj;},_parseBezierData=function _parseBezierData(values,type,prepend){type=type||"soft";var obj={},inc=type==="cubic"?3:2,soft=type==="soft",props=[],a,b,c,d,cur,i,j,l,p,cnt,tmp;if(soft&&prepend){values=[prepend].concat(values);}if(values==null||values.length<inc+1){throw"invalid Bezier data";}for(p in values[0]){props.push(p);}i=props.length;while(--i>-1){p=props[i];obj[p]=cur=[];cnt=0;l=values.length;for(j=0;j<l;j++){a=prepend==null?values[j][p]:typeof(tmp=values[j][p])==="string"&&tmp.charAt(1)==="="?prepend[p]+Number(tmp.charAt(0)+tmp.substr(2)):Number(tmp);if(soft)if(j>1)if(j<l-1){cur[cnt++]=(a+cur[cnt-2])/2;}cur[cnt++]=a;}l=cnt-inc+1;cnt=0;for(j=0;j<l;j+=inc){a=cur[j];b=cur[j+1];c=cur[j+2];d=inc===2?0:cur[j+3];cur[cnt++]=tmp=inc===3?new Segment(a,b,c,d):new Segment(a,(2*b+a)/3,(2*b+c)/3,c);}cur.length=cnt;}return obj;},_addCubicLengths=function _addCubicLengths(a,steps,resolution){var inc=1/resolution,j=a.length,d,d1,s,da,ca,ba,p,i,inv,bez,index;while(--j>-1){bez=a[j];s=bez.a;da=bez.d-s;ca=bez.c-s;ba=bez.b-s;d=d1=0;for(i=1;i<=resolution;i++){p=inc*i;inv=1-p;d=d1-(d1=(p*p*da+3*inv*(p*ca+inv*ba))*p);index=j*resolution+i-1;steps[index]=(steps[index]||0)+d*d;}}},_parseLengthData=function _parseLengthData(obj,resolution){resolution=resolution>>0||6;var a=[],lengths=[],d=0,total=0,threshold=resolution-1,segments=[],curLS=[],//current length segments array
	p,i,l,index;for(p in obj){_addCubicLengths(obj[p],a,resolution);}l=a.length;for(i=0;i<l;i++){d+=Math.sqrt(a[i]);index=i%resolution;curLS[index]=d;if(index===threshold){total+=d;index=i/resolution>>0;segments[index]=curLS;lengths[index]=total;d=0;curLS=[];}}return{length:total,lengths:lengths,segments:segments};},BezierPlugin=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:true,//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init:function init(target,vars,tween){this._target=target;if(vars instanceof Array){vars={values:vars};}this._func={};this._mod={};this._props=[];this._timeRes=vars.timeResolution==null?6:parseInt(vars.timeResolution,10);var values=vars.values||[],first={},second=values[0],autoRotate=vars.autoRotate||tween.vars.orientToBezier,p,isFunc,i,j,prepend;this._autoRotate=autoRotate?autoRotate instanceof Array?autoRotate:[["x","y","rotation",autoRotate===true?0:Number(autoRotate)||0]]:null;for(p in second){this._props.push(p);}i=this._props.length;while(--i>-1){p=this._props[i];this._overwriteProps.push(p);isFunc=this._func[p]=typeof target[p]==="function";first[p]=!isFunc?parseFloat(target[p]):target[p.indexOf("set")||typeof target["get"+p.substr(3)]!=="function"?p:"get"+p.substr(3)]();if(!prepend)if(first[p]!==values[0][p]){prepend=first;}}this._beziers=vars.type!=="cubic"&&vars.type!=="quadratic"&&vars.type!=="soft"?bezierThrough(values,isNaN(vars.curviness)?1:vars.curviness,false,vars.type==="thruBasic",vars.correlate,prepend):_parseBezierData(values,vars.type,first);this._segCount=this._beziers[p].length;if(this._timeRes){var ld=_parseLengthData(this._beziers,this._timeRes);this._length=ld.length;this._lengths=ld.lengths;this._segments=ld.segments;this._l1=this._li=this._s1=this._si=0;this._l2=this._lengths[0];this._curSeg=this._segments[0];this._s2=this._curSeg[0];this._prec=1/this._curSeg.length;}if(autoRotate=this._autoRotate){this._initialRotations=[];if(!(autoRotate[0]instanceof Array)){this._autoRotate=autoRotate=[autoRotate];}i=autoRotate.length;while(--i>-1){for(j=0;j<3;j++){p=autoRotate[i][j];this._func[p]=typeof target[p]==="function"?target[p.indexOf("set")||typeof target["get"+p.substr(3)]!=="function"?p:"get"+p.substr(3)]:false;}p=autoRotate[i][2];this._initialRotations[i]=(this._func[p]?this._func[p].call(this._target):this._target[p])||0;this._overwriteProps.push(p);}}this._startRatio=tween.vars.runBackwards?1:0;//we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
	return true;},//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set:function set(v){var segments=this._segCount,func=this._func,target=this._target,notStart=v!==this._startRatio,curIndex,inv,i,p,b,t,val,l,lengths,curSeg;if(!this._timeRes){curIndex=v<0?0:v>=1?segments-1:segments*v>>0;t=(v-curIndex*(1/segments))*segments;}else{lengths=this._lengths;curSeg=this._curSeg;v*=this._length;i=this._li;//find the appropriate segment (if the currently cached one isn't correct)
	if(v>this._l2&&i<segments-1){l=segments-1;while(i<l&&(this._l2=lengths[++i])<=v){}this._l1=lengths[i-1];this._li=i;this._curSeg=curSeg=this._segments[i];this._s2=curSeg[this._s1=this._si=0];}else if(v<this._l1&&i>0){while(i>0&&(this._l1=lengths[--i])>=v){}if(i===0&&v<this._l1){this._l1=0;}else{i++;}this._l2=lengths[i];this._li=i;this._curSeg=curSeg=this._segments[i];this._s1=curSeg[(this._si=curSeg.length-1)-1]||0;this._s2=curSeg[this._si];}curIndex=i;//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
	v-=this._l1;i=this._si;if(v>this._s2&&i<curSeg.length-1){l=curSeg.length-1;while(i<l&&(this._s2=curSeg[++i])<=v){}this._s1=curSeg[i-1];this._si=i;}else if(v<this._s1&&i>0){while(i>0&&(this._s1=curSeg[--i])>=v){}if(i===0&&v<this._s1){this._s1=0;}else{i++;}this._s2=curSeg[i];this._si=i;}t=(i+(v-this._s1)/(this._s2-this._s1))*this._prec||0;}inv=1-t;i=this._props.length;while(--i>-1){p=this._props[i];b=this._beziers[p][curIndex];val=(t*t*b.da+3*inv*(t*b.ca+inv*b.ba))*t+b.a;if(this._mod[p]){val=this._mod[p](val,target);}if(func[p]){target[p](val);}else{target[p]=val;}}if(this._autoRotate){var ar=this._autoRotate,b2,x1,y1,x2,y2,add,conv;i=ar.length;while(--i>-1){p=ar[i][2];add=ar[i][3]||0;conv=ar[i][4]===true?1:_RAD2DEG;b=this._beziers[ar[i][0]];b2=this._beziers[ar[i][1]];if(b&&b2){//in case one of the properties got overwritten.
	b=b[curIndex];b2=b2[curIndex];x1=b.a+(b.b-b.a)*t;x2=b.b+(b.c-b.b)*t;x1+=(x2-x1)*t;x2+=(b.c+(b.d-b.c)*t-x2)*t;y1=b2.a+(b2.b-b2.a)*t;y2=b2.b+(b2.c-b2.b)*t;y1+=(y2-y1)*t;y2+=(b2.c+(b2.d-b2.c)*t-y2)*t;val=notStart?Math.atan2(y2-y1,x2-x1)*conv+add:this._initialRotations[i];if(this._mod[p]){val=this._mod[p](val,target);//for modProps
	}if(func[p]){target[p](val);}else{target[p]=val;}}}}}}),p=BezierPlugin.prototype;BezierPlugin.bezierThrough=bezierThrough;BezierPlugin.cubicToQuadratic=cubicToQuadratic;BezierPlugin._autoCSS=true;//indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
	BezierPlugin.quadraticToCubic=function(a,b,c){return new Segment(a,(2*b+a)/3,(2*b+c)/3,c);};BezierPlugin._cssRegister=function(){var CSSPlugin=_globals.CSSPlugin;if(!CSSPlugin){return;}var _internals=CSSPlugin._internals,_parseToProxy=_internals._parseToProxy,_setPluginRatio=_internals._setPluginRatio,CSSPropTween=_internals.CSSPropTween;_internals._registerComplexSpecialProp("bezier",{parser:function parser(t,e,prop,cssp,pt,plugin){if(e instanceof Array){e={values:e};}plugin=new BezierPlugin();var values=e.values,l=values.length-1,pluginValues=[],v={},i,p,data;if(l<0){return pt;}for(i=0;i<=l;i++){data=_parseToProxy(t,values[i],cssp,pt,plugin,l!==i);pluginValues[i]=data.end;}for(p in e){v[p]=e[p];//duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
	}v.values=pluginValues;pt=new CSSPropTween(t,"bezier",0,0,data.pt,2);pt.data=data;pt.plugin=plugin;pt.setRatio=_setPluginRatio;if(v.autoRotate===0){v.autoRotate=true;}if(v.autoRotate&&!(v.autoRotate instanceof Array)){i=v.autoRotate===true?0:Number(v.autoRotate);v.autoRotate=data.end.left!=null?[["left","top","rotation",i,false]]:data.end.x!=null?[["x","y","rotation",i,false]]:false;}if(v.autoRotate){if(!cssp._transform){cssp._enableTransforms(false);}data.autoRotate=cssp._target._gsTransform;data.proxy.rotation=data.autoRotate.rotation||0;cssp._overwriteProps.push("rotation");}plugin._onInitTween(data.proxy,v,cssp._tween);return pt;}});};p._mod=function(lookup){var op=this._overwriteProps,i=op.length,val;while(--i>-1){val=lookup[op[i]];if(val&&typeof val==="function"){this._mod[op[i]]=val;}}};p._kill=function(lookup){var a=this._props,p,i;for(p in this._beziers){if(p in lookup){delete this._beziers[p];delete this._func[p];i=a.length;while(--i>-1){if(a[i]===p){a.splice(i,1);}}}}a=this._autoRotate;if(a){i=a.length;while(--i>-1){if(lookup[a[i][2]]){a.splice(i,1);}}}return this._super._kill.call(this,lookup);};})();/*
	 * ----------------------------------------------------------------
	 * CSSPlugin
	 * ----------------------------------------------------------------
	 */_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(TweenPlugin,TweenLite){/** @constructor **/var CSSPlugin=function CSSPlugin(){TweenPlugin.call(this,"css");this._overwriteProps.length=0;this.setRatio=CSSPlugin.prototype.setRatio;//speed optimization (avoid prototype lookup on this "hot" method)
	},_globals=_gsScope._gsDefine.globals,_hasPriority,//turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
	_suffixMap,//we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
	_cs,//computed style (we store this in a shared variable to conserve memory and make minification tighter
	_overwriteProps,//alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
	_specialProps={},p=CSSPlugin.prototype=new TweenPlugin("css");p.constructor=CSSPlugin;CSSPlugin.version="1.19.0";CSSPlugin.API=2;CSSPlugin.defaultTransformPerspective=0;CSSPlugin.defaultSkewType="compensated";CSSPlugin.defaultSmoothOrigin=true;p="px";//we'll reuse the "p" variable to keep file size down
	CSSPlugin.suffixMap={top:p,right:p,bottom:p,left:p,width:p,height:p,fontSize:p,padding:p,margin:p,perspective:p,lineHeight:""};var _numExp=/(?:\-|\.|\b)(\d|\.|e\-)+/g,_relNumExp=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,_valuesExp=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,//finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
	_NaNExp=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,//also allows scientific notation and doesn't kill the leading -/+ in -= and +=
	_suffixExp=/(?:\d|\-|\+|=|#|\.)*/g,_opacityExp=/opacity *= *([^)]*)/i,_opacityValExp=/opacity:([^;]*)/i,_alphaFilterExp=/alpha\(opacity *=.+?\)/i,_rgbhslExp=/^(rgb|hsl)/,_capsExp=/([A-Z])/g,_camelExp=/-([a-z])/gi,_urlExp=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,//for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
	_camelFunc=function _camelFunc(s,g){return g.toUpperCase();},_horizExp=/(?:Left|Right|Width)/i,_ieGetMatrixExp=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,_ieSetMatrixExp=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,_commasOutsideParenExp=/,(?=[^\)]*(?:\(|$))/gi,//finds any commas that are not within parenthesis
	_complexExp=/[\s,\(]/i,//for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
	_DEG2RAD=Math.PI/180,_RAD2DEG=180/Math.PI,_forcePT={},_doc=document,_createElement=function _createElement(type){return _doc.createElementNS?_doc.createElementNS("http://www.w3.org/1999/xhtml",type):_doc.createElement(type);},_tempDiv=_createElement("div"),_tempImg=_createElement("img"),_internals=CSSPlugin._internals={_specialProps:_specialProps},//provides a hook to a few internal methods that we need to access from inside other plugins
	_agent=navigator.userAgent,_autoRound,_reqSafariFix,//we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).
	_isSafari,_isFirefox,//Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
	_isSafariLT6,//Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
	_ieVers,_supportsOpacity=function(){//we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
	var i=_agent.indexOf("Android"),a=_createElement("a");_isSafari=_agent.indexOf("Safari")!==-1&&_agent.indexOf("Chrome")===-1&&(i===-1||Number(_agent.substr(i+8,1))>3);_isSafariLT6=_isSafari&&Number(_agent.substr(_agent.indexOf("Version/")+8,1))<6;_isFirefox=_agent.indexOf("Firefox")!==-1;if(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)){_ieVers=parseFloat(RegExp.$1);}if(!a){return false;}a.style.cssText="top:1px;opacity:.55;";return /^0.55/.test(a.style.opacity);}(),_getIEOpacity=function _getIEOpacity(v){return _opacityExp.test(typeof v==="string"?v:(v.currentStyle?v.currentStyle.filter:v.style.filter)||"")?parseFloat(RegExp.$1)/100:1;},_log=function _log(s){//for logging messages, but in a way that won't throw errors in old versions of IE.
	if(window.console){console.log(s);}},_target,//when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
	_index,//when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
	_prefixCSS="",//the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
	_prefix="",//camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".
	// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
	_checkPropPrefix=function _checkPropPrefix(p,e){e=e||_tempDiv;var s=e.style,a,i;if(s[p]!==undefined){return p;}p=p.charAt(0).toUpperCase()+p.substr(1);a=["O","Moz","ms","Ms","Webkit"];i=5;while(--i>-1&&s[a[i]+p]===undefined){}if(i>=0){_prefix=i===3?"ms":a[i];_prefixCSS="-"+_prefix.toLowerCase()+"-";return _prefix+p;}return null;},_getComputedStyle=_doc.defaultView?_doc.defaultView.getComputedStyle:function(){},/**
				 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
				 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
				 *
				 * @param {!Object} t Target element whose style property you want to query
				 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
				 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
				 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
				 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
				 * @return {?string} The current property value
				 */_getStyle=CSSPlugin.getStyle=function(t,p,cs,calc,dflt){var rv;if(!_supportsOpacity)if(p==="opacity"){//several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
	return _getIEOpacity(t);}if(!calc&&t.style[p]){rv=t.style[p];}else if(cs=cs||_getComputedStyle(t)){rv=cs[p]||cs.getPropertyValue(p)||cs.getPropertyValue(p.replace(_capsExp,"-$1").toLowerCase());}else if(t.currentStyle){rv=t.currentStyle[p];}return dflt!=null&&(!rv||rv==="none"||rv==="auto"||rv==="auto auto")?dflt:rv;},/**
				 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
				 * @param {!Object} t Target element
				 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
				 * @param {!number} v Value
				 * @param {string=} sfx Suffix (like "px" or "%" or "em")
				 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
				 * @return {number} value in pixels
				 */_convertToPixels=_internals.convertToPixels=function(t,p,v,sfx,recurse){if(sfx==="px"||!sfx){return v;}if(sfx==="auto"||!v){return 0;}var horiz=_horizExp.test(p),node=t,style=_tempDiv.style,neg=v<0,precise=v===1,pix,cache,time;if(neg){v=-v;}if(precise){v*=100;}if(sfx==="%"&&p.indexOf("border")!==-1){pix=v/100*(horiz?t.clientWidth:t.clientHeight);}else{style.cssText="border:0 solid red;position:"+_getStyle(t,"position")+";line-height:0;";if(sfx==="%"||!node.appendChild||sfx.charAt(0)==="v"||sfx==="rem"){node=t.parentNode||_doc.body;cache=node._gsCache;time=TweenLite.ticker.frame;if(cache&&horiz&&cache.time===time){//performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
	return cache.width*v/100;}style[horiz?"width":"height"]=v+sfx;}else{style[horiz?"borderLeftWidth":"borderTopWidth"]=v+sfx;}node.appendChild(_tempDiv);pix=parseFloat(_tempDiv[horiz?"offsetWidth":"offsetHeight"]);node.removeChild(_tempDiv);if(horiz&&sfx==="%"&&CSSPlugin.cacheWidths!==false){cache=node._gsCache=node._gsCache||{};cache.time=time;cache.width=pix/v*100;}if(pix===0&&!recurse){pix=_convertToPixels(t,p,v,sfx,true);}}if(precise){pix/=100;}return neg?-pix:pix;},_calculateOffset=_internals.calculateOffset=function(t,p,cs){//for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
	if(_getStyle(t,"position",cs)!=="absolute"){return 0;}var dim=p==="left"?"Left":"Top",v=_getStyle(t,"margin"+dim,cs);return t["offset"+dim]-(_convertToPixels(t,p,parseFloat(v),v.replace(_suffixExp,""))||0);},// @private returns at object containing ALL of the style properties in camelCase and their associated values.
	_getAllStyles=function _getAllStyles(t,cs){var s={},i,tr,p;if(cs=cs||_getComputedStyle(t,null)){if(i=cs.length){while(--i>-1){p=cs[i];if(p.indexOf("-transform")===-1||_transformPropCSS===p){//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
	s[p.replace(_camelExp,_camelFunc)]=cs.getPropertyValue(p);}}}else{//some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
	for(i in cs){if(i.indexOf("Transform")===-1||_transformProp===i){//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
	s[i]=cs[i];}}}}else if(cs=t.currentStyle||t.style){for(i in cs){if(typeof i==="string"&&s[i]===undefined){s[i.replace(_camelExp,_camelFunc)]=cs[i];}}}if(!_supportsOpacity){s.opacity=_getIEOpacity(t);}tr=_getTransform(t,cs,false);s.rotation=tr.rotation;s.skewX=tr.skewX;s.scaleX=tr.scaleX;s.scaleY=tr.scaleY;s.x=tr.x;s.y=tr.y;if(_supports3D){s.z=tr.z;s.rotationX=tr.rotationX;s.rotationY=tr.rotationY;s.scaleZ=tr.scaleZ;}if(s.filters){delete s.filters;}return s;},// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
	_cssDif=function _cssDif(t,s1,s2,vars,forceLookup){var difs={},style=t.style,val,p,mpt;for(p in s2){if(p!=="cssText")if(p!=="length")if(isNaN(p))if(s1[p]!==(val=s2[p])||forceLookup&&forceLookup[p])if(p.indexOf("Origin")===-1)if(typeof val==="number"||typeof val==="string"){difs[p]=val==="auto"&&(p==="left"||p==="top")?_calculateOffset(t,p):(val===""||val==="auto"||val==="none")&&typeof s1[p]==="string"&&s1[p].replace(_NaNExp,"")!==""?0:val;//if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
	if(style[p]!==undefined){//for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
	mpt=new MiniPropTween(style,p,style[p],mpt);}}}if(vars){for(p in vars){//copy properties (except className)
	if(p!=="className"){difs[p]=vars[p];}}}return{difs:difs,firstMPT:mpt};},_dimensions={width:["Left","Right"],height:["Top","Bottom"]},_margins=["marginLeft","marginRight","marginTop","marginBottom"],/**
				 * @private Gets the width or height of an element
				 * @param {!Object} t Target element
				 * @param {!string} p Property name ("width" or "height")
				 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
				 * @return {number} Dimension (in pixels)
				 */_getDimension=function _getDimension(t,p,cs){if((t.nodeName+"").toLowerCase()==="svg"){//Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
	return(cs||_getComputedStyle(t))[p]||0;}else if(t.getBBox&&_isSVG(t)){return t.getBBox()[p]||0;}var v=parseFloat(p==="width"?t.offsetWidth:t.offsetHeight),a=_dimensions[p],i=a.length;cs=cs||_getComputedStyle(t,null);while(--i>-1){v-=parseFloat(_getStyle(t,"padding"+a[i],cs,true))||0;v-=parseFloat(_getStyle(t,"border"+a[i]+"Width",cs,true))||0;}return v;},// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
	_parsePosition=function _parsePosition(v,recObj){if(v==="contain"||v==="auto"||v==="auto auto"){//note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
	return v+" ";}if(v==null||v===""){v="0 0";}var a=v.split(" "),x=v.indexOf("left")!==-1?"0%":v.indexOf("right")!==-1?"100%":a[0],y=v.indexOf("top")!==-1?"0%":v.indexOf("bottom")!==-1?"100%":a[1],i;if(a.length>3&&!recObj){//multiple positions
	a=v.split(", ").join(",").split(",");v=[];for(i=0;i<a.length;i++){v.push(_parsePosition(a[i]));}return v.join(",");}if(y==null){y=x==="center"?"50%":"0";}else if(y==="center"){y="50%";}if(x==="center"||isNaN(parseFloat(x))&&(x+"").indexOf("=")===-1){//remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
	x="50%";}v=x+" "+y+(a.length>2?" "+a[2]:"");if(recObj){recObj.oxp=x.indexOf("%")!==-1;recObj.oyp=y.indexOf("%")!==-1;recObj.oxr=x.charAt(1)==="=";recObj.oyr=y.charAt(1)==="=";recObj.ox=parseFloat(x.replace(_NaNExp,""));recObj.oy=parseFloat(y.replace(_NaNExp,""));recObj.v=v;}return recObj||v;},/**
				 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
				 * @param {(number|string)} e End value which is typically a string, but could be a number
				 * @param {(number|string)} b Beginning value which is typically a string but could be a number
				 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
				 */_parseChange=function _parseChange(e,b){if(typeof e==="function"){e=e(_index,_target);}return typeof e==="string"&&e.charAt(1)==="="?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2)):parseFloat(e)-parseFloat(b)||0;},/**
				 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
				 * @param {Object} v Value to be parsed
				 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
				 * @return {number} Parsed value
				 */_parseVal=function _parseVal(v,d){if(typeof v==="function"){v=v(_index,_target);}return v==null?d:typeof v==="string"&&v.charAt(1)==="="?parseInt(v.charAt(0)+"1",10)*parseFloat(v.substr(2))+d:parseFloat(v)||0;},/**
				 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
				 * @param {Object} v Value to be parsed
				 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
				 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
				 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
				 * @return {number} parsed angle in radians
				 */_parseAngle=function _parseAngle(v,d,p,directionalEnd){var min=0.000001,cap,split,dif,result,isRelative;if(typeof v==="function"){v=v(_index,_target);}if(v==null){result=d;}else if(typeof v==="number"){result=v;}else{cap=360;split=v.split("_");isRelative=v.charAt(1)==="=";dif=(isRelative?parseInt(v.charAt(0)+"1",10)*parseFloat(split[0].substr(2)):parseFloat(split[0]))*(v.indexOf("rad")===-1?1:_RAD2DEG)-(isRelative?0:d);if(split.length){if(directionalEnd){directionalEnd[p]=d+dif;}if(v.indexOf("short")!==-1){dif=dif%cap;if(dif!==dif%(cap/2)){dif=dif<0?dif+cap:dif-cap;}}if(v.indexOf("_cw")!==-1&&dif<0){dif=(dif+cap*9999999999)%cap-(dif/cap|0)*cap;}else if(v.indexOf("ccw")!==-1&&dif>0){dif=(dif-cap*9999999999)%cap-(dif/cap|0)*cap;}}result=d+dif;}if(result<min&&result>-min){result=0;}return result;},_colorLookup={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},_hue=function _hue(h,m1,m2){h=h<0?h+1:h>1?h-1:h;return(h*6<1?m1+(m2-m1)*h*6:h<0.5?m2:h*3<2?m1+(m2-m1)*(2/3-h)*6:m1)*255+0.5|0;},/**
				 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
				 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
				 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
				 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
				 */_parseColor=CSSPlugin.parseColor=function(v,toHSL){var a,r,g,b,h,s,l,max,min,d,wasHSL;if(!v){a=_colorLookup.black;}else if(typeof v==="number"){a=[v>>16,v>>8&255,v&255];}else{if(v.charAt(v.length-1)===","){//sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
	v=v.substr(0,v.length-1);}if(_colorLookup[v]){a=_colorLookup[v];}else if(v.charAt(0)==="#"){if(v.length===4){//for shorthand like #9F0
	r=v.charAt(1);g=v.charAt(2);b=v.charAt(3);v="#"+r+r+g+g+b+b;}v=parseInt(v.substr(1),16);a=[v>>16,v>>8&255,v&255];}else if(v.substr(0,3)==="hsl"){a=wasHSL=v.match(_numExp);if(!toHSL){h=Number(a[0])%360/360;s=Number(a[1])/100;l=Number(a[2])/100;g=l<=0.5?l*(s+1):l+s-l*s;r=l*2-g;if(a.length>3){a[3]=Number(v[3]);}a[0]=_hue(h+1/3,r,g);a[1]=_hue(h,r,g);a[2]=_hue(h-1/3,r,g);}else if(v.indexOf("=")!==-1){//if relative values are found, just return the raw strings with the relative prefixes in place.
	return v.match(_relNumExp);}}else{a=v.match(_numExp)||_colorLookup.transparent;}a[0]=Number(a[0]);a[1]=Number(a[1]);a[2]=Number(a[2]);if(a.length>3){a[3]=Number(a[3]);}}if(toHSL&&!wasHSL){r=a[0]/255;g=a[1]/255;b=a[2]/255;max=Math.max(r,g,b);min=Math.min(r,g,b);l=(max+min)/2;if(max===min){h=s=0;}else{d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);h=max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4;h*=60;}a[0]=h+0.5|0;a[1]=s*100+0.5|0;a[2]=l*100+0.5|0;}return a;},_formatColors=function _formatColors(s,toHSL){var colors=s.match(_colorExp)||[],charIndex=0,parsed=colors.length?"":s,i,color,temp;for(i=0;i<colors.length;i++){color=colors[i];temp=s.substr(charIndex,s.indexOf(color,charIndex)-charIndex);charIndex+=temp.length+color.length;color=_parseColor(color,toHSL);if(color.length===3){color.push(1);}parsed+=temp+(toHSL?"hsla("+color[0]+","+color[1]+"%,"+color[2]+"%,"+color[3]:"rgba("+color.join(","))+")";}return parsed+s.substr(charIndex);},_colorExp="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";//we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.
	for(p in _colorLookup){_colorExp+="|"+p+"\\b";}_colorExp=new RegExp(_colorExp+")","gi");CSSPlugin.colorStringFilter=function(a){var combined=a[0]+a[1],toHSL;if(_colorExp.test(combined)){toHSL=combined.indexOf("hsl(")!==-1||combined.indexOf("hsla(")!==-1;a[0]=_formatColors(a[0],toHSL);a[1]=_formatColors(a[1],toHSL);}_colorExp.lastIndex=0;};if(!TweenLite.defaultStringFilter){TweenLite.defaultStringFilter=CSSPlugin.colorStringFilter;}/**
			 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
			 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
			 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
			 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
			 * @return {Function} formatter function
			 */var _getFormatter=function _getFormatter(dflt,clr,collapsible,multi){if(dflt==null){return function(v){return v;};}var dColor=clr?(dflt.match(_colorExp)||[""])[0]:"",dVals=dflt.split(dColor).join("").match(_valuesExp)||[],pfx=dflt.substr(0,dflt.indexOf(dVals[0])),sfx=dflt.charAt(dflt.length-1)===")"?")":"",delim=dflt.indexOf(" ")!==-1?" ":",",numVals=dVals.length,dSfx=numVals>0?dVals[0].replace(_numExp,""):"",_formatter2;if(!numVals){return function(v){return v;};}if(clr){_formatter2=function formatter(v){var color,vals,i,a;if(typeof v==="number"){v+=dSfx;}else if(multi&&_commasOutsideParenExp.test(v)){a=v.replace(_commasOutsideParenExp,"|").split("|");for(i=0;i<a.length;i++){a[i]=_formatter2(a[i]);}return a.join(",");}color=(v.match(_colorExp)||[dColor])[0];vals=v.split(color).join("").match(_valuesExp)||[];i=vals.length;if(numVals>i--){while(++i<numVals){vals[i]=collapsible?vals[(i-1)/2|0]:dVals[i];}}return pfx+vals.join(delim)+delim+color+sfx+(v.indexOf("inset")!==-1?" inset":"");};return _formatter2;}_formatter2=function _formatter(v){var vals,a,i;if(typeof v==="number"){v+=dSfx;}else if(multi&&_commasOutsideParenExp.test(v)){a=v.replace(_commasOutsideParenExp,"|").split("|");for(i=0;i<a.length;i++){a[i]=_formatter2(a[i]);}return a.join(",");}vals=v.match(_valuesExp)||[];i=vals.length;if(numVals>i--){while(++i<numVals){vals[i]=collapsible?vals[(i-1)/2|0]:dVals[i];}}return pfx+vals.join(delim)+sfx;};return _formatter2;},/**
				 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
				 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
				 * @return {Function} a formatter function
				 */_getEdgeParser=function _getEdgeParser(props){props=props.split(",");return function(t,e,p,cssp,pt,plugin,vars){var a=(e+"").split(" "),i;vars={};for(i=0;i<4;i++){vars[props[i]]=a[i]=a[i]||a[(i-1)/2>>0];}return cssp.parse(t,vars,pt,plugin);};},// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
	_setPluginRatio=_internals._setPluginRatio=function(v){this.plugin.setRatio(v);var d=this.data,proxy=d.proxy,mpt=d.firstMPT,min=0.000001,val,pt,i,str,p;while(mpt){val=proxy[mpt.v];if(mpt.r){val=Math.round(val);}else if(val<min&&val>-min){val=0;}mpt.t[mpt.p]=val;mpt=mpt._next;}if(d.autoRotate){d.autoRotate.rotation=d.mod?d.mod(proxy.rotation,this.t):proxy.rotation;//special case for ModifyPlugin to hook into an auto-rotating bezier
	}//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
	if(v===1||v===0){mpt=d.firstMPT;p=v===1?"e":"b";while(mpt){pt=mpt.t;if(!pt.type){pt[p]=pt.s+pt.xs0;}else if(pt.type===1){str=pt.xs0+pt.s+pt.xs1;for(i=1;i<pt.l;i++){str+=pt["xn"+i]+pt["xs"+(i+1)];}pt[p]=str;}mpt=mpt._next;}}},/**
				 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
				 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
				 * @param {!string} p property name
				 * @param {(number|string|object)} v value
				 * @param {MiniPropTween=} next next MiniPropTween in the linked list
				 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
				 */MiniPropTween=function MiniPropTween(t,p,v,next,r){this.t=t;this.p=p;this.v=v;this.r=r;if(next){next._prev=this;this._next=next;}},/**
				 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
				 * This method returns an object that has the following properties:
				 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
				 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
				 *  - firstMPT: the first MiniPropTween in the linked list
				 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
				 * @param {!Object} t target object to be tweened
				 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
				 * @param {!CSSPlugin} cssp The CSSPlugin instance
				 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
				 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
				 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
				 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
				 */_parseToProxy=_internals._parseToProxy=function(t,vars,cssp,pt,plugin,shallow){var bpt=pt,start={},end={},transform=cssp._transform,oldForce=_forcePT,i,p,xp,mpt,firstPT;cssp._transform=null;_forcePT=vars;pt=firstPT=cssp.parse(t,vars,pt,plugin);_forcePT=oldForce;//break off from the linked list so the new ones are isolated.
	if(shallow){cssp._transform=transform;if(bpt){bpt._prev=null;if(bpt._prev){bpt._prev._next=null;}}}while(pt&&pt!==bpt){if(pt.type<=1){p=pt.p;end[p]=pt.s+pt.c;start[p]=pt.s;if(!shallow){mpt=new MiniPropTween(pt,"s",p,mpt,pt.r);pt.c=0;}if(pt.type===1){i=pt.l;while(--i>0){xp="xn"+i;p=pt.p+"_"+xp;end[p]=pt.data[xp];start[p]=pt[xp];if(!shallow){mpt=new MiniPropTween(pt,xp,p,mpt,pt.rxp[xp]);}}}}pt=pt._next;}return{proxy:start,end:end,firstMPT:mpt,pt:firstPT};},/**
				 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
				 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
				 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
				 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
				 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
				 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
				 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
				 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
				 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
				 * @param {number} s Starting numeric value
				 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
				 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
				 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
				 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
				 * @param {boolean=} r If true, the value(s) should be rounded
				 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
				 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
				 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
				 */CSSPropTween=_internals.CSSPropTween=function(t,p,s,c,next,type,n,r,pr,b,e){this.t=t;//target
	this.p=p;//property
	this.s=s;//starting value
	this.c=c;//change value
	this.n=n||p;//name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
	if(!(t instanceof CSSPropTween)){_overwriteProps.push(this.n);}this.r=r;//round (boolean)
	this.type=type||0;//0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
	if(pr){this.pr=pr;_hasPriority=true;}this.b=b===undefined?s:b;this.e=e===undefined?s+c:e;if(next){this._next=next;next._prev=this;}},_addNonTweeningNumericPT=function _addNonTweeningNumericPT(target,prop,start,end,next,overwriteProp){//cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
	var pt=new CSSPropTween(target,prop,start,end-start,next,-1,overwriteProp);pt.b=start;pt.e=pt.xs0=end;return pt;},/**
				 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
				 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
				 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
				 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
				 *
				 * @param {!Object} t Target whose property will be tweened
				 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
				 * @param {string} b Beginning value
				 * @param {string} e Ending value
				 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
				 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
				 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
				 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
				 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
				 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
				 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
				 */_parseComplex=CSSPlugin.parseComplex=function(t,p,b,e,clrs,dflt,pt,pr,plugin,setRatio){//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
	b=b||dflt||"";if(typeof e==="function"){e=e(_index,_target);}pt=new CSSPropTween(t,p,0,0,pt,setRatio?2:1,null,false,pr,b,e);e+="";//ensures it's a string
	if(clrs&&_colorExp.test(e+b)){//if colors are found, normalize the formatting to rgba() or hsla().
	e=[b,e];CSSPlugin.colorStringFilter(e);b=e[0];e=e[1];}var ba=b.split(", ").join(",").split(" "),//beginning array
	ea=e.split(", ").join(",").split(" "),//ending array
	l=ba.length,autoRound=_autoRound!==false,i,xi,ni,bv,ev,bnums,enums,bn,hasAlpha,temp,cv,str,useHSL;if(e.indexOf(",")!==-1||b.indexOf(",")!==-1){ba=ba.join(" ").replace(_commasOutsideParenExp,", ").split(" ");ea=ea.join(" ").replace(_commasOutsideParenExp,", ").split(" ");l=ba.length;}if(l!==ea.length){//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
	ba=(dflt||"").split(" ");l=ba.length;}pt.plugin=plugin;pt.setRatio=setRatio;_colorExp.lastIndex=0;for(i=0;i<l;i++){bv=ba[i];ev=ea[i];bn=parseFloat(bv);//if the value begins with a number (most common). It's fine if it has a suffix like px
	if(bn||bn===0){pt.appendXtra("",bn,_parseChange(ev,bn),ev.replace(_relNumExp,""),autoRound&&ev.indexOf("px")!==-1,true);//if the value is a color
	}else if(clrs&&_colorExp.test(bv)){str=ev.indexOf(")")+1;str=")"+(str?ev.substr(str):"");//if there's a comma or ) at the end, retain it.
	useHSL=ev.indexOf("hsl")!==-1&&_supportsOpacity;bv=_parseColor(bv,useHSL);ev=_parseColor(ev,useHSL);hasAlpha=bv.length+ev.length>6;if(hasAlpha&&!_supportsOpacity&&ev[3]===0){//older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
	pt["xs"+pt.l]+=pt.l?" transparent":"transparent";pt.e=pt.e.split(ea[i]).join("transparent");}else{if(!_supportsOpacity){//old versions of IE don't support rgba().
	hasAlpha=false;}if(useHSL){pt.appendXtra(hasAlpha?"hsla(":"hsl(",bv[0],_parseChange(ev[0],bv[0]),",",false,true).appendXtra("",bv[1],_parseChange(ev[1],bv[1]),"%,",false).appendXtra("",bv[2],_parseChange(ev[2],bv[2]),hasAlpha?"%,":"%"+str,false);}else{pt.appendXtra(hasAlpha?"rgba(":"rgb(",bv[0],ev[0]-bv[0],",",true,true).appendXtra("",bv[1],ev[1]-bv[1],",",true).appendXtra("",bv[2],ev[2]-bv[2],hasAlpha?",":str,true);}if(hasAlpha){bv=bv.length<4?1:bv[3];pt.appendXtra("",bv,(ev.length<4?1:ev[3])-bv,str,false);}}_colorExp.lastIndex=0;//otherwise the test() on the RegExp could move the lastIndex and taint future results.
	}else{bnums=bv.match(_numExp);//gets each group of numbers in the beginning value string and drops them into an array
	//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
	if(!bnums){pt["xs"+pt.l]+=pt.l||pt["xs"+pt.l]?" "+ev:ev;//loop through all the numbers that are found and construct the extra values on the pt.
	}else{enums=ev.match(_relNumExp);//get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
	if(!enums||enums.length!==bnums.length){//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
	return pt;}ni=0;for(xi=0;xi<bnums.length;xi++){cv=bnums[xi];temp=bv.indexOf(cv,ni);pt.appendXtra(bv.substr(ni,temp-ni),Number(cv),_parseChange(enums[xi],cv),"",autoRound&&bv.substr(temp+cv.length,2)==="px",xi===0);ni=temp+cv.length;}pt["xs"+pt.l]+=bv.substr(ni);}}}//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
	if(e.indexOf("=")!==-1)if(pt.data){str=pt.xs0+pt.data.s;for(i=1;i<pt.l;i++){str+=pt["xs"+i]+pt.data["xn"+i];}pt.e=str+pt["xs"+i];}if(!pt.l){pt.type=-1;pt.xs0=pt.e;}return pt.xfirst||pt;},i=9;p=CSSPropTween.prototype;p.l=p.pr=0;//length (number of extra properties like xn1, xn2, xn3, etc.
	while(--i>0){p["xn"+i]=0;p["xs"+i]="";}p.xs0="";p._next=p._prev=p.xfirst=p.data=p.plugin=p.setRatio=p.rxp=null;/**
			 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
			 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
			 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
			 * @param {string=} pfx Prefix (if any)
			 * @param {!number} s Starting value
			 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
			 * @param {string=} sfx Suffix (if any)
			 * @param {boolean=} r Round (if true).
			 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
			 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
			 */p.appendXtra=function(pfx,s,c,sfx,r,pad){var pt=this,l=pt.l;pt["xs"+l]+=pad&&(l||pt["xs"+l])?" "+pfx:pfx||"";if(!c)if(l!==0&&!pt.plugin){//typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
	pt["xs"+l]+=s+(sfx||"");return pt;}pt.l++;pt.type=pt.setRatio?2:1;pt["xs"+pt.l]=sfx||"";if(l>0){pt.data["xn"+l]=s+c;pt.rxp["xn"+l]=r;//round extra property (we need to tap into this in the _parseToProxy() method)
	pt["xn"+l]=s;if(!pt.plugin){pt.xfirst=new CSSPropTween(pt,"xn"+l,s,c,pt.xfirst||pt,0,pt.n,r,pt.pr);pt.xfirst.xs0=0;//just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
	}return pt;}pt.data={s:s+c};pt.rxp={};pt.s=s;pt.c=c;pt.r=r;return pt;};/**
			 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
			 * @param {!string} p Property name (like "boxShadow" or "throwProps")
			 * @param {Object=} options An object containing any of the following configuration options:
			 *                      - defaultValue: the default value
			 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
			 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
			 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
			 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
			 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
			 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
			 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
			 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
			 */var SpecialProp=function SpecialProp(p,options){options=options||{};this.p=options.prefix?_checkPropPrefix(p)||p:p;_specialProps[p]=_specialProps[this.p]=this;this.format=options.formatter||_getFormatter(options.defaultValue,options.color,options.collapsible,options.multi);if(options.parser){this.parse=options.parser;}this.clrs=options.color;this.multi=options.multi;this.keyword=options.keyword;this.dflt=options.defaultValue;this.pr=options.priority||0;},//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
	_registerComplexSpecialProp=_internals._registerComplexSpecialProp=function(p,options,defaults){if((typeof options==="undefined"?"undefined":_typeof(options))!=="object"){options={parser:defaults};//to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
	}var a=p.split(","),d=options.defaultValue,i,temp;defaults=defaults||[d];for(i=0;i<a.length;i++){options.prefix=i===0&&options.prefix;options.defaultValue=defaults[i]||d;temp=new SpecialProp(a[i],options);}},//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
	_registerPluginProp=_internals._registerPluginProp=function(p){if(!_specialProps[p]){var pluginName=p.charAt(0).toUpperCase()+p.substr(1)+"Plugin";_registerComplexSpecialProp(p,{parser:function parser(t,e,p,cssp,pt,plugin,vars){var pluginClass=_globals.com.greensock.plugins[pluginName];if(!pluginClass){_log("Error: "+pluginName+" js file not loaded.");return pt;}pluginClass._cssRegister();return _specialProps[p].parse(t,e,p,cssp,pt,plugin,vars);}});}};p=SpecialProp.prototype;/**
			 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
			 * @param {!Object} t target element
			 * @param {(string|number|object)} b beginning value
			 * @param {(string|number|object)} e ending (destination) value
			 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
			 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
			 * @return {CSSPropTween=} First CSSPropTween in the linked list
			 */p.parseComplex=function(t,b,e,pt,plugin,setRatio){var kwd=this.keyword,i,ba,ea,l,bi,ei;//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
	if(this.multi)if(_commasOutsideParenExp.test(e)||_commasOutsideParenExp.test(b)){ba=b.replace(_commasOutsideParenExp,"|").split("|");ea=e.replace(_commasOutsideParenExp,"|").split("|");}else if(kwd){ba=[b];ea=[e];}if(ea){l=ea.length>ba.length?ea.length:ba.length;for(i=0;i<l;i++){b=ba[i]=ba[i]||this.dflt;e=ea[i]=ea[i]||this.dflt;if(kwd){bi=b.indexOf(kwd);ei=e.indexOf(kwd);if(bi!==ei){if(ei===-1){//if the keyword isn't in the end value, remove it from the beginning one.
	ba[i]=ba[i].split(kwd).join("");}else if(bi===-1){//if the keyword isn't in the beginning, add it.
	ba[i]+=" "+kwd;}}}}b=ba.join(", ");e=ea.join(", ");}return _parseComplex(t,this.p,b,e,this.clrs,this.dflt,pt,this.pr,plugin,setRatio);};/**
			 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
			 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
			 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
			 * @param {!Object} t Target object whose property is being tweened
			 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
			 * @param {!string} p Property name
			 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
			 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
			 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
			 * @param {Object=} vars Original vars object that contains the data for parsing.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
			 */p.parse=function(t,e,p,cssp,pt,plugin,vars){return this.parseComplex(t.style,this.format(_getStyle(t,this.p,_cs,false,this.dflt)),this.format(e),pt,plugin);};/**
			 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
			 *  1) Target object whose property should be tweened (typically a DOM element)
			 *  2) The end/destination value (could be a string, number, object, or whatever you want)
			 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
			 *
			 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
			 *
			 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
			 *      var start = target.style.width;
			 *      return function(ratio) {
			 *              target.style.width = (start + value * ratio) + "px";
			 *              console.log("set width to " + target.style.width);
			 *          }
			 * }, 0);
			 *
			 * Then, when I do this tween, it will trigger my special property:
			 *
			 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
			 *
			 * In the example, of course, we're just changing the width, but you can do anything you want.
			 *
			 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
			 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
			 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
			 */CSSPlugin.registerSpecialProp=function(name,onInitTween,priority){_registerComplexSpecialProp(name,{parser:function parser(t,e,p,cssp,pt,plugin,vars){var rv=new CSSPropTween(t,p,0,0,pt,2,p,false,priority);rv.plugin=plugin;rv.setRatio=onInitTween(t,e,cssp._tween,p);return rv;},priority:priority});};//transform-related methods and properties
	CSSPlugin.useSVGTransformAttr=_isSafari||_isFirefox;//Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
	var _transformProps="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),_transformProp=_checkPropPrefix("transform"),//the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
	_transformPropCSS=_prefixCSS+"transform",_transformOriginProp=_checkPropPrefix("transformOrigin"),_supports3D=_checkPropPrefix("perspective")!==null,Transform=_internals.Transform=function(){this.perspective=parseFloat(CSSPlugin.defaultTransformPerspective)||0;this.force3D=CSSPlugin.defaultForce3D===false||!_supports3D?false:CSSPlugin.defaultForce3D||"auto";},_SVGElement=window.SVGElement,_useSVGTransformAttr,//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.
	_createSVG=function _createSVG(type,container,attributes){var element=_doc.createElementNS("http://www.w3.org/2000/svg",type),reg=/([a-z])([A-Z])/g,p;for(p in attributes){element.setAttributeNS(null,p.replace(reg,"$1-$2").toLowerCase(),attributes[p]);}container.appendChild(element);return element;},_docElement=_doc.documentElement,_forceSVGTransformAttr=function(){//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
	var force=_ieVers||/Android/i.test(_agent)&&!window.chrome,svg,rect,width;if(_doc.createElementNS&&!force){//IE8 and earlier doesn't support SVG anyway
	svg=_createSVG("svg",_docElement);rect=_createSVG("rect",svg,{width:100,height:50,x:100});width=rect.getBoundingClientRect().width;rect.style[_transformOriginProp]="50% 50%";rect.style[_transformProp]="scaleX(0.5)";force=width===rect.getBoundingClientRect().width&&!(_isFirefox&&_supports3D);//note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
	_docElement.removeChild(svg);}return force;}(),_parseSVGOrigin=function _parseSVGOrigin(e,local,decoratee,absolute,smoothOrigin,skipRecord){var tm=e._gsTransform,m=_getMatrix(e,true),v,x,y,xOrigin,yOrigin,a,b,c,d,tx,ty,determinant,xOriginOld,yOriginOld;if(tm){xOriginOld=tm.xOrigin;//record the original values before we alter them.
	yOriginOld=tm.yOrigin;}if(!absolute||(v=absolute.split(" ")).length<2){b=e.getBBox();local=_parsePosition(local).split(" ");v=[(local[0].indexOf("%")!==-1?parseFloat(local[0])/100*b.width:parseFloat(local[0]))+b.x,(local[1].indexOf("%")!==-1?parseFloat(local[1])/100*b.height:parseFloat(local[1]))+b.y];}decoratee.xOrigin=xOrigin=parseFloat(v[0]);decoratee.yOrigin=yOrigin=parseFloat(v[1]);if(absolute&&m!==_identity2DMatrix){//if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
	a=m[0];b=m[1];c=m[2];d=m[3];tx=m[4];ty=m[5];determinant=a*d-b*c;x=xOrigin*(d/determinant)+yOrigin*(-c/determinant)+(c*ty-d*tx)/determinant;y=xOrigin*(-b/determinant)+yOrigin*(a/determinant)-(a*ty-b*tx)/determinant;xOrigin=decoratee.xOrigin=v[0]=x;yOrigin=decoratee.yOrigin=v[1]=y;}if(tm){//avoid jump when transformOrigin is changed - adjust the x/y values accordingly
	if(skipRecord){decoratee.xOffset=tm.xOffset;decoratee.yOffset=tm.yOffset;tm=decoratee;}if(smoothOrigin||smoothOrigin!==false&&CSSPlugin.defaultSmoothOrigin!==false){x=xOrigin-xOriginOld;y=yOrigin-yOriginOld;//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
	//tm.x -= x - (x * m[0] + y * m[2]);
	//tm.y -= y - (x * m[1] + y * m[3]);
	tm.xOffset+=x*m[0]+y*m[2]-x;tm.yOffset+=x*m[1]+y*m[3]-y;}else{tm.xOffset=tm.yOffset=0;}}if(!skipRecord){e.setAttribute("data-svg-origin",v.join(" "));}},_canGetBBox=function _canGetBBox(e){try{return e.getBBox();//Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
	}catch(e){}},_isSVG=function _isSVG(e){//reports if the element is an SVG on which getBBox() actually works
	return!!(_SVGElement&&e.getBBox&&e.getCTM&&_canGetBBox(e)&&(!e.parentNode||e.parentNode.getBBox&&e.parentNode.getCTM));},_identity2DMatrix=[1,0,0,1,0,0],_getMatrix=function _getMatrix(e,force2D){var tm=e._gsTransform||new Transform(),rnd=100000,style=e.style,isDefault,s,m,n,dec,none;if(_transformProp){s=_getStyle(e,_transformPropCSS,null,true);}else if(e.currentStyle){//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
	s=e.currentStyle.filter.match(_ieGetMatrixExp);s=s&&s.length===4?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),tm.x||0,tm.y||0].join(","):"";}isDefault=!s||s==="none"||s==="matrix(1, 0, 0, 1, 0, 0)";if(isDefault&&_transformProp&&((none=_getComputedStyle(e).display==="none")||!e.parentNode)){if(none){//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none".
	n=style.display;style.display="block";}if(!e.parentNode){dec=1;//flag
	_docElement.appendChild(e);}s=_getStyle(e,_transformPropCSS,null,true);isDefault=!s||s==="none"||s==="matrix(1, 0, 0, 1, 0, 0)";if(n){style.display=n;}else if(none){_removeProp(style,"display");}if(dec){_docElement.removeChild(e);}}if(tm.svg||e.getBBox&&_isSVG(e)){if(isDefault&&(style[_transformProp]+"").indexOf("matrix")!==-1){//some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
	s=style[_transformProp];isDefault=0;}m=e.getAttribute("transform");if(isDefault&&m){if(m.indexOf("matrix")!==-1){//just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
	s=m;isDefault=0;}else if(m.indexOf("translate")!==-1){s="matrix(1,0,0,1,"+m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")";isDefault=0;}}}if(isDefault){return _identity2DMatrix;}//split the matrix values out into an array (m for matrix)
	m=(s||"").match(_numExp)||[];i=m.length;while(--i>-1){n=Number(m[i]);m[i]=(dec=n-(n|=0))?(dec*rnd+(dec<0?-0.5:0.5)|0)/rnd+n:n;//convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
	}return force2D&&m.length>6?[m[0],m[1],m[4],m[5],m[12],m[13]]:m;},/**
				 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
				 * @param {!Object} t target element
				 * @param {Object=} cs computed style object (optional)
				 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
				 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
				 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
				 */_getTransform=_internals.getTransform=function(t,cs,rec,parse){if(t._gsTransform&&rec&&!parse){return t._gsTransform;//if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
	}var tm=rec?t._gsTransform||new Transform():new Transform(),invX=tm.scaleX<0,//in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
	min=0.00002,rnd=100000,zOrigin=_supports3D?parseFloat(_getStyle(t,_transformOriginProp,cs,false,"0 0 0").split(" ")[2])||tm.zOrigin||0:0,defaultTransformPerspective=parseFloat(CSSPlugin.defaultTransformPerspective)||0,m,i,scaleX,scaleY,rotation,skewX;tm.svg=!!(t.getBBox&&_isSVG(t));if(tm.svg){_parseSVGOrigin(t,_getStyle(t,_transformOriginProp,cs,false,"50% 50%")+"",tm,t.getAttribute("data-svg-origin"));_useSVGTransformAttr=CSSPlugin.useSVGTransformAttr||_forceSVGTransformAttr;}m=_getMatrix(t);if(m!==_identity2DMatrix){if(m.length===16){//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
	var a11=m[0],a21=m[1],a31=m[2],a41=m[3],a12=m[4],a22=m[5],a32=m[6],a42=m[7],a13=m[8],a23=m[9],a33=m[10],a14=m[12],a24=m[13],a34=m[14],a43=m[11],angle=Math.atan2(a32,a33),t1,t2,t3,t4,cos,sin;//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
	if(tm.zOrigin){a34=-tm.zOrigin;a14=a13*a34-m[12];a24=a23*a34-m[13];a34=a33*a34+tm.zOrigin-m[14];}tm.rotationX=angle*_RAD2DEG;//rotationX
	if(angle){cos=Math.cos(-angle);sin=Math.sin(-angle);t1=a12*cos+a13*sin;t2=a22*cos+a23*sin;t3=a32*cos+a33*sin;a13=a12*-sin+a13*cos;a23=a22*-sin+a23*cos;a33=a32*-sin+a33*cos;a43=a42*-sin+a43*cos;a12=t1;a22=t2;a32=t3;}//rotationY
	angle=Math.atan2(-a31,a33);tm.rotationY=angle*_RAD2DEG;if(angle){cos=Math.cos(-angle);sin=Math.sin(-angle);t1=a11*cos-a13*sin;t2=a21*cos-a23*sin;t3=a31*cos-a33*sin;a23=a21*sin+a23*cos;a33=a31*sin+a33*cos;a43=a41*sin+a43*cos;a11=t1;a21=t2;a31=t3;}//rotationZ
	angle=Math.atan2(a21,a11);tm.rotation=angle*_RAD2DEG;if(angle){cos=Math.cos(-angle);sin=Math.sin(-angle);a11=a11*cos+a12*sin;t2=a21*cos+a22*sin;a22=a21*-sin+a22*cos;a32=a31*-sin+a32*cos;a21=t2;}if(tm.rotationX&&Math.abs(tm.rotationX)+Math.abs(tm.rotation)>359.9){//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
	tm.rotationX=tm.rotation=0;tm.rotationY=180-tm.rotationY;}tm.scaleX=(Math.sqrt(a11*a11+a21*a21)*rnd+0.5|0)/rnd;tm.scaleY=(Math.sqrt(a22*a22+a23*a23)*rnd+0.5|0)/rnd;tm.scaleZ=(Math.sqrt(a32*a32+a33*a33)*rnd+0.5|0)/rnd;if(tm.rotationX||tm.rotationY){tm.skewX=0;}else{tm.skewX=a12||a22?Math.atan2(a12,a22)*_RAD2DEG+tm.rotation:tm.skewX||0;if(Math.abs(tm.skewX)>90&&Math.abs(tm.skewX)<270){if(invX){tm.scaleX*=-1;tm.skewX+=tm.rotation<=0?180:-180;tm.rotation+=tm.rotation<=0?180:-180;}else{tm.scaleY*=-1;tm.skewX+=tm.skewX<=0?180:-180;}}}tm.perspective=a43?1/(a43<0?-a43:a43):0;tm.x=a14;tm.y=a24;tm.z=a34;if(tm.svg){tm.x-=tm.xOrigin-(tm.xOrigin*a11-tm.yOrigin*a12);tm.y-=tm.yOrigin-(tm.yOrigin*a21-tm.xOrigin*a22);}}else if(!_supports3D||parse||!m.length||tm.x!==m[4]||tm.y!==m[5]||!tm.rotationX&&!tm.rotationY){//sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
	var k=m.length>=6,a=k?m[0]:1,b=m[1]||0,c=m[2]||0,d=k?m[3]:1;tm.x=m[4]||0;tm.y=m[5]||0;scaleX=Math.sqrt(a*a+b*b);scaleY=Math.sqrt(d*d+c*c);rotation=a||b?Math.atan2(b,a)*_RAD2DEG:tm.rotation||0;//note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
	skewX=c||d?Math.atan2(c,d)*_RAD2DEG+rotation:tm.skewX||0;if(Math.abs(skewX)>90&&Math.abs(skewX)<270){if(invX){scaleX*=-1;skewX+=rotation<=0?180:-180;rotation+=rotation<=0?180:-180;}else{scaleY*=-1;skewX+=skewX<=0?180:-180;}}tm.scaleX=scaleX;tm.scaleY=scaleY;tm.rotation=rotation;tm.skewX=skewX;if(_supports3D){tm.rotationX=tm.rotationY=tm.z=0;tm.perspective=defaultTransformPerspective;tm.scaleZ=1;}if(tm.svg){tm.x-=tm.xOrigin-(tm.xOrigin*a+tm.yOrigin*c);tm.y-=tm.yOrigin-(tm.xOrigin*b+tm.yOrigin*d);}}tm.zOrigin=zOrigin;//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
	for(i in tm){if(tm[i]<min)if(tm[i]>-min){tm[i]=0;}}}//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
	if(rec){t._gsTransform=tm;//record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
	if(tm.svg){//if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
	if(_useSVGTransformAttr&&t.style[_transformProp]){TweenLite.delayedCall(0.001,function(){//if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
	_removeProp(t.style,_transformProp);});}else if(!_useSVGTransformAttr&&t.getAttribute("transform")){TweenLite.delayedCall(0.001,function(){t.removeAttribute("transform");});}}}return tm;},//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
	_setIETransformRatio=function _setIETransformRatio(v){var t=this.data,//refers to the element's _gsTransform object
	ang=-t.rotation*_DEG2RAD,skew=ang+t.skewX*_DEG2RAD,rnd=100000,a=(Math.cos(ang)*t.scaleX*rnd|0)/rnd,b=(Math.sin(ang)*t.scaleX*rnd|0)/rnd,c=(Math.sin(skew)*-t.scaleY*rnd|0)/rnd,d=(Math.cos(skew)*t.scaleY*rnd|0)/rnd,style=this.t.style,cs=this.t.currentStyle,filters,val;if(!cs){return;}val=b;//just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
	b=-c;c=-val;filters=cs.filter;style.filter="";//remove filters so that we can accurately measure offsetWidth/offsetHeight
	var w=this.t.offsetWidth,h=this.t.offsetHeight,clip=cs.position!=="absolute",m="progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12="+b+", M21="+c+", M22="+d,ox=t.x+w*t.xPercent/100,oy=t.y+h*t.yPercent/100,dx,dy;//if transformOrigin is being used, adjust the offset x and y
	if(t.ox!=null){dx=(t.oxp?w*t.ox*0.01:t.ox)-w/2;dy=(t.oyp?h*t.oy*0.01:t.oy)-h/2;ox+=dx-(dx*a+dy*b);oy+=dy-(dx*c+dy*d);}if(!clip){m+=", sizingMethod='auto expand')";}else{dx=w/2;dy=h/2;//translate to ensure that transformations occur around the correct origin (default is center).
	m+=", Dx="+(dx-(dx*a+dy*b)+ox)+", Dy="+(dy-(dx*c+dy*d)+oy)+")";}if(filters.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1){style.filter=filters.replace(_ieSetMatrixExp,m);}else{style.filter=m+" "+filters;//we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
	}//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
	if(v===0||v===1)if(a===1)if(b===0)if(c===0)if(d===1)if(!clip||m.indexOf("Dx=0, Dy=0")!==-1)if(!_opacityExp.test(filters)||parseFloat(RegExp.$1)===100)if(filters.indexOf("gradient("&&filters.indexOf("Alpha"))===-1){style.removeAttribute("filter");}//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
	if(!clip){var mult=_ieVers<8?1:-1,//in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
	marg,prop,dif;dx=t.ieOffsetX||0;dy=t.ieOffsetY||0;t.ieOffsetX=Math.round((w-((a<0?-a:a)*w+(b<0?-b:b)*h))/2+ox);t.ieOffsetY=Math.round((h-((d<0?-d:d)*h+(c<0?-c:c)*w))/2+oy);for(i=0;i<4;i++){prop=_margins[i];marg=cs[prop];//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
	val=marg.indexOf("px")!==-1?parseFloat(marg):_convertToPixels(this.t,prop,parseFloat(marg),marg.replace(_suffixExp,""))||0;if(val!==t[prop]){dif=i<2?-t.ieOffsetX:-t.ieOffsetY;//if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
	}else{dif=i<2?dx-t.ieOffsetX:dy-t.ieOffsetY;}style[prop]=(t[prop]=Math.round(val-dif*(i===0||i===2?1:mult)))+"px";}}},/* translates a super small decimal to a string WITHOUT scientific notation
				_safeDecimal = function(n) {
					var s = (n < 0 ? -n : n) + "",
						a = s.split("e-");
					return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
				},
				*/_setTransformRatio=_internals.set3DTransformRatio=_internals.setTransformRatio=function(v){var t=this.data,//refers to the element's _gsTransform object
	style=this.t.style,angle=t.rotation,rotationX=t.rotationX,rotationY=t.rotationY,sx=t.scaleX,sy=t.scaleY,sz=t.scaleZ,x=t.x,y=t.y,z=t.z,isSVG=t.svg,perspective=t.perspective,force3D=t.force3D,a11,a12,a13,a21,a22,a23,a31,a32,a33,a41,a42,a43,zOrigin,min,cos,sin,t1,t2,transform,comma,zero,skew,rnd;//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
	if(((v===1||v===0)&&force3D==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!force3D)&&!z&&!perspective&&!rotationY&&!rotationX&&sz===1||_useSVGTransformAttr&&isSVG||!_supports3D){//on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.
	//2D
	if(angle||t.skewX||isSVG){angle*=_DEG2RAD;skew=t.skewX*_DEG2RAD;rnd=100000;a11=Math.cos(angle)*sx;a21=Math.sin(angle)*sx;a12=Math.sin(angle-skew)*-sy;a22=Math.cos(angle-skew)*sy;if(skew&&t.skewType==="simple"){//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
	t1=Math.tan(skew-t.skewY*_DEG2RAD);t1=Math.sqrt(1+t1*t1);a12*=t1;a22*=t1;if(t.skewY){t1=Math.tan(t.skewY*_DEG2RAD);t1=Math.sqrt(1+t1*t1);a11*=t1;a21*=t1;}}if(isSVG){x+=t.xOrigin-(t.xOrigin*a11+t.yOrigin*a12)+t.xOffset;y+=t.yOrigin-(t.xOrigin*a21+t.yOrigin*a22)+t.yOffset;if(_useSVGTransformAttr&&(t.xPercent||t.yPercent)){//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
	min=this.t.getBBox();x+=t.xPercent*0.01*min.width;y+=t.yPercent*0.01*min.height;}min=0.000001;if(x<min)if(x>-min){x=0;}if(y<min)if(y>-min){y=0;}}transform=(a11*rnd|0)/rnd+","+(a21*rnd|0)/rnd+","+(a12*rnd|0)/rnd+","+(a22*rnd|0)/rnd+","+x+","+y+")";if(isSVG&&_useSVGTransformAttr){this.t.setAttribute("transform","matrix("+transform);}else{//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
	style[_transformProp]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+transform;}}else{style[_transformProp]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+sx+",0,0,"+sy+","+x+","+y+")";}return;}if(_isFirefox){//Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
	min=0.0001;if(sx<min&&sx>-min){sx=sz=0.00002;}if(sy<min&&sy>-min){sy=sz=0.00002;}if(perspective&&!t.z&&!t.rotationX&&!t.rotationY){//Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
	perspective=0;}}if(angle||t.skewX){angle*=_DEG2RAD;cos=a11=Math.cos(angle);sin=a21=Math.sin(angle);if(t.skewX){angle-=t.skewX*_DEG2RAD;cos=Math.cos(angle);sin=Math.sin(angle);if(t.skewType==="simple"){//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
	t1=Math.tan((t.skewX-t.skewY)*_DEG2RAD);t1=Math.sqrt(1+t1*t1);cos*=t1;sin*=t1;if(t.skewY){t1=Math.tan(t.skewY*_DEG2RAD);t1=Math.sqrt(1+t1*t1);a11*=t1;a21*=t1;}}}a12=-sin;a22=cos;}else if(!rotationY&&!rotationX&&sz===1&&!perspective&&!isSVG){//if we're only translating and/or 2D scaling, this is faster...
	style[_transformProp]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) translate3d(":"translate3d(")+x+"px,"+y+"px,"+z+"px)"+(sx!==1||sy!==1?" scale("+sx+","+sy+")":"");return;}else{a11=a22=1;a12=a21=0;}// KEY  INDEX   AFFECTS
	// a11  0       rotation, rotationY, scaleX
	// a21  1       rotation, rotationY, scaleX
	// a31  2       rotationY, scaleX
	// a41  3       rotationY, scaleX
	// a12  4       rotation, skewX, rotationX, scaleY
	// a22  5       rotation, skewX, rotationX, scaleY
	// a32  6       rotationX, scaleY
	// a42  7       rotationX, scaleY
	// a13  8       rotationY, rotationX, scaleZ
	// a23  9       rotationY, rotationX, scaleZ
	// a33  10      rotationY, rotationX, scaleZ
	// a43  11      rotationY, rotationX, perspective, scaleZ
	// a14  12      x, zOrigin, svgOrigin
	// a24  13      y, zOrigin, svgOrigin
	// a34  14      z, zOrigin
	// a44  15
	// rotation: Math.atan2(a21, a11)
	// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
	// rotationX: Math.atan2(a32, a33)
	a33=1;a13=a23=a31=a32=a41=a42=0;a43=perspective?-1/perspective:0;zOrigin=t.zOrigin;min=0.000001;//threshold below which browsers use scientific notation which won't work.
	comma=",";zero="0";angle=rotationY*_DEG2RAD;if(angle){cos=Math.cos(angle);sin=Math.sin(angle);a31=-sin;a41=a43*-sin;a13=a11*sin;a23=a21*sin;a33=cos;a43*=cos;a11*=cos;a21*=cos;}angle=rotationX*_DEG2RAD;if(angle){cos=Math.cos(angle);sin=Math.sin(angle);t1=a12*cos+a13*sin;t2=a22*cos+a23*sin;a32=a33*sin;a42=a43*sin;a13=a12*-sin+a13*cos;a23=a22*-sin+a23*cos;a33=a33*cos;a43=a43*cos;a12=t1;a22=t2;}if(sz!==1){a13*=sz;a23*=sz;a33*=sz;a43*=sz;}if(sy!==1){a12*=sy;a22*=sy;a32*=sy;a42*=sy;}if(sx!==1){a11*=sx;a21*=sx;a31*=sx;a41*=sx;}if(zOrigin||isSVG){if(zOrigin){x+=a13*-zOrigin;y+=a23*-zOrigin;z+=a33*-zOrigin+zOrigin;}if(isSVG){//due to bugs in some browsers, we need to manage the transform-origin of SVG manually
	x+=t.xOrigin-(t.xOrigin*a11+t.yOrigin*a12)+t.xOffset;y+=t.yOrigin-(t.xOrigin*a21+t.yOrigin*a22)+t.yOffset;}if(x<min&&x>-min){x=zero;}if(y<min&&y>-min){y=zero;}if(z<min&&z>-min){z=0;//don't use string because we calculate perspective later and need the number.
	}}//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
	transform=t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix3d(":"matrix3d(";transform+=(a11<min&&a11>-min?zero:a11)+comma+(a21<min&&a21>-min?zero:a21)+comma+(a31<min&&a31>-min?zero:a31);transform+=comma+(a41<min&&a41>-min?zero:a41)+comma+(a12<min&&a12>-min?zero:a12)+comma+(a22<min&&a22>-min?zero:a22);if(rotationX||rotationY||sz!==1){//performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
	transform+=comma+(a32<min&&a32>-min?zero:a32)+comma+(a42<min&&a42>-min?zero:a42)+comma+(a13<min&&a13>-min?zero:a13);transform+=comma+(a23<min&&a23>-min?zero:a23)+comma+(a33<min&&a33>-min?zero:a33)+comma+(a43<min&&a43>-min?zero:a43)+comma;}else{transform+=",0,0,0,0,1,0,";}transform+=x+comma+y+comma+z+comma+(perspective?1+-z/perspective:1)+")";style[_transformProp]=transform;};p=Transform.prototype;p.x=p.y=p.z=p.skewX=p.skewY=p.rotation=p.rotationX=p.rotationY=p.zOrigin=p.xPercent=p.yPercent=p.xOffset=p.yOffset=0;p.scaleX=p.scaleY=p.scaleZ=1;_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function parser(t,e,parsingProp,cssp,pt,plugin,vars){if(cssp._lastParsedTransform===vars){return pt;}//only need to parse the transform once, and only if the browser supports it.
	cssp._lastParsedTransform=vars;var swapFunc;if(typeof vars[parsingProp]==="function"){//whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
	swapFunc=vars[parsingProp];vars[parsingProp]=e;}var originalGSTransform=t._gsTransform,style=t.style,min=0.000001,i=_transformProps.length,v=vars,endRotations={},transformOriginString="transformOrigin",m1=_getTransform(t,_cs,true,v.parseTransform),orig=v.transform&&(typeof v.transform==="function"?v.transform(_index,_target):v.transform),m2,copy,has3D,hasChange,dr,x,y,matrix,p;cssp._transform=m1;if(orig&&typeof orig==="string"&&_transformProp){//for values like transform:"rotate(60deg) scale(0.5, 0.8)"
	copy=_tempDiv.style;//don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
	copy[_transformProp]=orig;copy.display="block";//if display is "none", the browser often refuses to report the transform properties correctly.
	copy.position="absolute";_doc.body.appendChild(_tempDiv);m2=_getTransform(_tempDiv,null,false);if(m1.svg){//if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
	x=m1.xOrigin;y=m1.yOrigin;m2.x-=m1.xOffset;m2.y-=m1.yOffset;if(v.transformOrigin||v.svgOrigin){//if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
	orig={};_parseSVGOrigin(t,_parsePosition(v.transformOrigin),orig,v.svgOrigin,v.smoothOrigin,true);x=orig.xOrigin;y=orig.yOrigin;m2.x-=orig.xOffset-m1.xOffset;m2.y-=orig.yOffset-m1.yOffset;}if(x||y){matrix=_getMatrix(_tempDiv,true);m2.x-=x-(x*matrix[0]+y*matrix[2]);m2.y-=y-(x*matrix[1]+y*matrix[3]);}}_doc.body.removeChild(_tempDiv);if(!m2.perspective){m2.perspective=m1.perspective;//tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
	}if(v.xPercent!=null){m2.xPercent=_parseVal(v.xPercent,m1.xPercent);}if(v.yPercent!=null){m2.yPercent=_parseVal(v.yPercent,m1.yPercent);}}else if((typeof v==="undefined"?"undefined":_typeof(v))==="object"){//for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
	m2={scaleX:_parseVal(v.scaleX!=null?v.scaleX:v.scale,m1.scaleX),scaleY:_parseVal(v.scaleY!=null?v.scaleY:v.scale,m1.scaleY),scaleZ:_parseVal(v.scaleZ,m1.scaleZ),x:_parseVal(v.x,m1.x),y:_parseVal(v.y,m1.y),z:_parseVal(v.z,m1.z),xPercent:_parseVal(v.xPercent,m1.xPercent),yPercent:_parseVal(v.yPercent,m1.yPercent),perspective:_parseVal(v.transformPerspective,m1.perspective)};dr=v.directionalRotation;if(dr!=null){if((typeof dr==="undefined"?"undefined":_typeof(dr))==="object"){for(copy in dr){v[copy]=dr[copy];}}else{v.rotation=dr;}}if(typeof v.x==="string"&&v.x.indexOf("%")!==-1){m2.x=0;m2.xPercent=_parseVal(v.x,m1.xPercent);}if(typeof v.y==="string"&&v.y.indexOf("%")!==-1){m2.y=0;m2.yPercent=_parseVal(v.y,m1.yPercent);}m2.rotation=_parseAngle("rotation"in v?v.rotation:"shortRotation"in v?v.shortRotation+"_short":"rotationZ"in v?v.rotationZ:m1.rotation-m1.skewY,m1.rotation-m1.skewY,"rotation",endRotations);//see notes below about skewY for why we subtract it from rotation here
	if(_supports3D){m2.rotationX=_parseAngle("rotationX"in v?v.rotationX:"shortRotationX"in v?v.shortRotationX+"_short":m1.rotationX||0,m1.rotationX,"rotationX",endRotations);m2.rotationY=_parseAngle("rotationY"in v?v.rotationY:"shortRotationY"in v?v.shortRotationY+"_short":m1.rotationY||0,m1.rotationY,"rotationY",endRotations);}m2.skewX=_parseAngle(v.skewX,m1.skewX-m1.skewY);//see notes below about skewY and why we subtract it from skewX here
	//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
	if(m2.skewY=_parseAngle(v.skewY,m1.skewY)){m2.skewX+=m2.skewY;m2.rotation+=m2.skewY;}}if(_supports3D&&v.force3D!=null){m1.force3D=v.force3D;hasChange=true;}m1.skewType=v.skewType||m1.skewType||CSSPlugin.defaultSkewType;has3D=m1.force3D||m1.z||m1.rotationX||m1.rotationY||m2.z||m2.rotationX||m2.rotationY||m2.perspective;if(!has3D&&v.scale!=null){m2.scaleZ=1;//no need to tween scaleZ.
	}while(--i>-1){p=_transformProps[i];orig=m2[p]-m1[p];if(orig>min||orig<-min||v[p]!=null||_forcePT[p]!=null){hasChange=true;pt=new CSSPropTween(m1,p,m1[p],orig,pt);if(p in endRotations){pt.e=endRotations[p];//directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
	}pt.xs0=0;//ensures the value stays numeric in setRatio()
	pt.plugin=plugin;cssp._overwriteProps.push(pt.n);}}orig=v.transformOrigin;if(m1.svg&&(orig||v.svgOrigin)){x=m1.xOffset;//when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
	y=m1.yOffset;_parseSVGOrigin(t,_parsePosition(orig),m2,v.svgOrigin,v.smoothOrigin);pt=_addNonTweeningNumericPT(m1,"xOrigin",(originalGSTransform?m1:m2).xOrigin,m2.xOrigin,pt,transformOriginString);//note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
	pt=_addNonTweeningNumericPT(m1,"yOrigin",(originalGSTransform?m1:m2).yOrigin,m2.yOrigin,pt,transformOriginString);if(x!==m1.xOffset||y!==m1.yOffset){pt=_addNonTweeningNumericPT(m1,"xOffset",originalGSTransform?x:m1.xOffset,m1.xOffset,pt,transformOriginString);pt=_addNonTweeningNumericPT(m1,"yOffset",originalGSTransform?y:m1.yOffset,m1.yOffset,pt,transformOriginString);}orig=_useSVGTransformAttr?null:"0px 0px";//certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
	}if(orig||_supports3D&&has3D&&m1.zOrigin){//if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
	if(_transformProp){hasChange=true;p=_transformOriginProp;orig=(orig||_getStyle(t,p,_cs,false,"50% 50%"))+"";//cast as string to avoid errors
	pt=new CSSPropTween(style,p,0,0,pt,-1,transformOriginString);pt.b=style[p];pt.plugin=plugin;if(_supports3D){copy=m1.zOrigin;orig=orig.split(" ");m1.zOrigin=(orig.length>2&&!(copy!==0&&orig[2]==="0px")?parseFloat(orig[2]):copy)||0;//Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
	pt.xs0=pt.e=orig[0]+" "+(orig[1]||"50%")+" 0px";//we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
	pt=new CSSPropTween(m1,"zOrigin",0,0,pt,-1,pt.n);//we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
	pt.b=copy;pt.xs0=pt.e=m1.zOrigin;}else{pt.xs0=pt.e=orig;}//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
	}else{_parsePosition(orig+"",m1);}}if(hasChange){cssp._transformType=!(m1.svg&&_useSVGTransformAttr)&&(has3D||this._transformType===3)?3:2;//quicker than calling cssp._enableTransforms();
	}if(swapFunc){vars[parsingProp]=swapFunc;}return pt;},prefix:true});_registerComplexSpecialProp("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:true,color:true,multi:true,keyword:"inset"});_registerComplexSpecialProp("borderRadius",{defaultValue:"0px",parser:function parser(t,e,p,cssp,pt,plugin){e=this.format(e);var props=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],style=t.style,ea1,i,es2,bs2,bs,es,bn,en,w,h,esfx,bsfx,rel,hn,vn,em;w=parseFloat(t.offsetWidth);h=parseFloat(t.offsetHeight);ea1=e.split(" ");for(i=0;i<props.length;i++){//if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
	if(this.p.indexOf("border")){//older browsers used a prefix
	props[i]=_checkPropPrefix(props[i]);}bs=bs2=_getStyle(t,props[i],_cs,false,"0px");if(bs.indexOf(" ")!==-1){bs2=bs.split(" ");bs=bs2[0];bs2=bs2[1];}es=es2=ea1[i];bn=parseFloat(bs);bsfx=bs.substr((bn+"").length);rel=es.charAt(1)==="=";if(rel){en=parseInt(es.charAt(0)+"1",10);es=es.substr(2);en*=parseFloat(es);esfx=es.substr((en+"").length-(en<0?1:0))||"";}else{en=parseFloat(es);esfx=es.substr((en+"").length);}if(esfx===""){esfx=_suffixMap[p]||bsfx;}if(esfx!==bsfx){hn=_convertToPixels(t,"borderLeft",bn,bsfx);//horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
	vn=_convertToPixels(t,"borderTop",bn,bsfx);//vertical number
	if(esfx==="%"){bs=hn/w*100+"%";bs2=vn/h*100+"%";}else if(esfx==="em"){em=_convertToPixels(t,"borderLeft",1,"em");bs=hn/em+"em";bs2=vn/em+"em";}else{bs=hn+"px";bs2=vn+"px";}if(rel){es=parseFloat(bs)+en+esfx;es2=parseFloat(bs2)+en+esfx;}}pt=_parseComplex(style,props[i],bs+" "+bs2,es+" "+es2,false,"0px",pt);}return pt;},prefix:true,formatter:_getFormatter("0px 0px 0px 0px",false,true)});_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function parser(t,e,p,cssp,pt,plugin){return _parseComplex(t.style,p,this.format(_getStyle(t,p,_cs,false,"0px 0px")),this.format(e),false,"0px",pt);},prefix:true,formatter:_getFormatter("0px 0px",false,true)});_registerComplexSpecialProp("backgroundPosition",{defaultValue:"0 0",parser:function parser(t,e,p,cssp,pt,plugin){var bp="background-position",cs=_cs||_getComputedStyle(t,null),bs=this.format((cs?_ieVers?cs.getPropertyValue(bp+"-x")+" "+cs.getPropertyValue(bp+"-y"):cs.getPropertyValue(bp):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),//Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
	es=this.format(e),ba,ea,i,pct,overlap,src;if(bs.indexOf("%")!==-1!==(es.indexOf("%")!==-1)&&es.split(",").length<2){src=_getStyle(t,"backgroundImage").replace(_urlExp,"");if(src&&src!=="none"){ba=bs.split(" ");ea=es.split(" ");_tempImg.setAttribute("src",src);//set the temp IMG's src to the background-image so that we can measure its width/height
	i=2;while(--i>-1){bs=ba[i];pct=bs.indexOf("%")!==-1;if(pct!==(ea[i].indexOf("%")!==-1)){overlap=i===0?t.offsetWidth-_tempImg.width:t.offsetHeight-_tempImg.height;ba[i]=pct?parseFloat(bs)/100*overlap+"px":parseFloat(bs)/overlap*100+"%";}}bs=ba.join(" ");}}return this.parseComplex(t.style,bs,es,pt,plugin);},formatter:_parsePosition});_registerComplexSpecialProp("backgroundSize",{defaultValue:"0 0",formatter:function formatter(v){v+="";//ensure it's a string
	return _parsePosition(v.indexOf(" ")===-1?v+" "+v:v);//if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong).
	}});_registerComplexSpecialProp("perspective",{defaultValue:"0px",prefix:true});_registerComplexSpecialProp("perspectiveOrigin",{defaultValue:"50% 50%",prefix:true});_registerComplexSpecialProp("transformStyle",{prefix:true});_registerComplexSpecialProp("backfaceVisibility",{prefix:true});_registerComplexSpecialProp("userSelect",{prefix:true});_registerComplexSpecialProp("margin",{parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});_registerComplexSpecialProp("padding",{parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});_registerComplexSpecialProp("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function parser(t,e,p,cssp,pt,plugin){var b,cs,delim;if(_ieVers<9){//IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
	cs=t.currentStyle;delim=_ieVers<8?" ":",";b="rect("+cs.clipTop+delim+cs.clipRight+delim+cs.clipBottom+delim+cs.clipLeft+")";e=this.format(e).split(",").join(delim);}else{b=this.format(_getStyle(t,this.p,_cs,false,this.dflt));e=this.format(e);}return this.parseComplex(t.style,b,e,pt,plugin);}});_registerComplexSpecialProp("textShadow",{defaultValue:"0px 0px 0px #999",color:true,multi:true});_registerComplexSpecialProp("autoRound,strictUnits",{parser:function parser(t,e,p,cssp,pt){return pt;}});//just so that we can ignore these properties (not tween them)
	_registerComplexSpecialProp("border",{defaultValue:"0px solid #000",parser:function parser(t,e,p,cssp,pt,plugin){var bw=_getStyle(t,"borderTopWidth",_cs,false,"0px"),end=this.format(e).split(" "),esfx=end[0].replace(_suffixExp,"");if(esfx!=="px"){//if we're animating to a non-px value, we need to convert the beginning width to that unit.
	bw=parseFloat(bw)/_convertToPixels(t,"borderTopWidth",1,esfx)+esfx;}return this.parseComplex(t.style,this.format(bw+" "+_getStyle(t,"borderTopStyle",_cs,false,"solid")+" "+_getStyle(t,"borderTopColor",_cs,false,"#000")),end.join(" "),pt,plugin);},color:true,formatter:function formatter(v){var a=v.split(" ");return a[0]+" "+(a[1]||"solid")+" "+(v.match(_colorExp)||["#000"])[0];}});_registerComplexSpecialProp("borderWidth",{parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")});//Firefox doesn't pick up on borderWidth set in style sheets (only inline).
	_registerComplexSpecialProp("float,cssFloat,styleFloat",{parser:function parser(t,e,p,cssp,pt,plugin){var s=t.style,prop="cssFloat"in s?"cssFloat":"styleFloat";return new CSSPropTween(s,prop,0,0,pt,-1,p,false,0,s[prop],e);}});//opacity-related
	var _setIEOpacityRatio=function _setIEOpacityRatio(v){var t=this.t,//refers to the element's style property
	filters=t.filter||_getStyle(this.data,"filter")||"",val=this.s+this.c*v|0,skip;if(val===100){//for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
	if(filters.indexOf("atrix(")===-1&&filters.indexOf("radient(")===-1&&filters.indexOf("oader(")===-1){t.removeAttribute("filter");skip=!_getStyle(this.data,"filter");//if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
	}else{t.filter=filters.replace(_alphaFilterExp,"");skip=true;}}if(!skip){if(this.xn1){t.filter=filters=filters||"alpha(opacity="+val+")";//works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
	}if(filters.indexOf("pacity")===-1){//only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
	if(val!==0||!this.xn1){//bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
	t.filter=filters+" alpha(opacity="+val+")";//we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
	}}else{t.filter=filters.replace(_opacityExp,"opacity="+val);}}};_registerComplexSpecialProp("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function parser(t,e,p,cssp,pt,plugin){var b=parseFloat(_getStyle(t,"opacity",_cs,false,"1")),style=t.style,isAutoAlpha=p==="autoAlpha";if(typeof e==="string"&&e.charAt(1)==="="){e=(e.charAt(0)==="-"?-1:1)*parseFloat(e.substr(2))+b;}if(isAutoAlpha&&b===1&&_getStyle(t,"visibility",_cs)==="hidden"&&e!==0){//if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
	b=0;}if(_supportsOpacity){pt=new CSSPropTween(style,"opacity",b,e-b,pt);}else{pt=new CSSPropTween(style,"opacity",b*100,(e-b)*100,pt);pt.xn1=isAutoAlpha?1:0;//we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
	style.zoom=1;//helps correct an IE issue.
	pt.type=2;pt.b="alpha(opacity="+pt.s+")";pt.e="alpha(opacity="+(pt.s+pt.c)+")";pt.data=t;pt.plugin=plugin;pt.setRatio=_setIEOpacityRatio;}if(isAutoAlpha){//we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
	pt=new CSSPropTween(style,"visibility",0,0,pt,-1,null,false,0,b!==0?"inherit":"hidden",e===0?"hidden":"inherit");pt.xs0="inherit";cssp._overwriteProps.push(pt.n);cssp._overwriteProps.push(p);}return pt;}});var _removeProp=function _removeProp(s,p){if(p){if(s.removeProperty){if(p.substr(0,2)==="ms"||p.substr(0,6)==="webkit"){//Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
	p="-"+p;}s.removeProperty(p.replace(_capsExp,"-$1").toLowerCase());}else{//note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
	s.removeAttribute(p);}}},_setClassNameRatio=function _setClassNameRatio(v){this.t._gsClassPT=this;if(v===1||v===0){this.t.setAttribute("class",v===0?this.b:this.e);var mpt=this.data,//first MiniPropTween
	s=this.t.style;while(mpt){if(!mpt.v){_removeProp(s,mpt.p);}else{s[mpt.p]=mpt.v;}mpt=mpt._next;}if(v===1&&this.t._gsClassPT===this){this.t._gsClassPT=null;}}else if(this.t.getAttribute("class")!==this.e){this.t.setAttribute("class",this.e);}};_registerComplexSpecialProp("className",{parser:function parser(t,e,p,cssp,pt,plugin,vars){var b=t.getAttribute("class")||"",//don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
	cssText=t.style.cssText,difData,bs,cnpt,cnptLookup,mpt;pt=cssp._classNamePT=new CSSPropTween(t,p,0,0,pt,2);pt.setRatio=_setClassNameRatio;pt.pr=-11;_hasPriority=true;pt.b=b;bs=_getAllStyles(t,_cs);//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
	cnpt=t._gsClassPT;if(cnpt){cnptLookup={};mpt=cnpt.data;//first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
	while(mpt){cnptLookup[mpt.p]=1;mpt=mpt._next;}cnpt.setRatio(1);}t._gsClassPT=pt;pt.e=e.charAt(1)!=="="?e:b.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+(e.charAt(0)==="+"?" "+e.substr(2):"");t.setAttribute("class",pt.e);difData=_cssDif(t,bs,_getAllStyles(t),vars,cnptLookup);t.setAttribute("class",b);pt.data=difData.firstMPT;t.style.cssText=cssText;//we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
	pt=pt.xfirst=cssp.parse(t,difData.difs,pt,plugin);//we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
	return pt;}});var _setClearPropsRatio=function _setClearPropsRatio(v){if(v===1||v===0)if(this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){//this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
	var s=this.t.style,transformParse=_specialProps.transform.parse,a,p,i,clearTransform,transform;if(this.e==="all"){s.cssText="";clearTransform=true;}else{a=this.e.split(" ").join("").split(",");i=a.length;while(--i>-1){p=a[i];if(_specialProps[p]){if(_specialProps[p].parse===transformParse){clearTransform=true;}else{p=p==="transformOrigin"?_transformOriginProp:_specialProps[p].p;//ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
	}}_removeProp(s,p);}}if(clearTransform){_removeProp(s,_transformProp);transform=this.t._gsTransform;if(transform){if(transform.svg){this.t.removeAttribute("data-svg-origin");this.t.removeAttribute("transform");}delete this.t._gsTransform;}}}};_registerComplexSpecialProp("clearProps",{parser:function parser(t,e,p,cssp,pt){pt=new CSSPropTween(t,p,0,0,pt,2);pt.setRatio=_setClearPropsRatio;pt.e=e;pt.pr=-10;pt.data=cssp._tween;_hasPriority=true;return pt;}});p="bezier,throwProps,physicsProps,physics2D".split(",");i=p.length;while(i--){_registerPluginProp(p[i]);}p=CSSPlugin.prototype;p._firstPT=p._lastParsedTransform=p._transform=null;//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
	p._onInitTween=function(target,vars,tween,index){if(!target.nodeType){//css is only for dom elements
	return false;}this._target=_target=target;this._tween=tween;this._vars=vars;_index=index;_autoRound=vars.autoRound;_hasPriority=false;_suffixMap=vars.suffixMap||CSSPlugin.suffixMap;_cs=_getComputedStyle(target,"");_overwriteProps=this._overwriteProps;var style=target.style,v,pt,pt2,first,last,next,zIndex,tpt,threeD;if(_reqSafariFix)if(style.zIndex===""){v=_getStyle(target,"zIndex",_cs);if(v==="auto"||v===""){//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
	this._addLazySet(style,"zIndex",0);}}if(typeof vars==="string"){first=style.cssText;v=_getAllStyles(target,_cs);style.cssText=first+";"+vars;v=_cssDif(target,v,_getAllStyles(target)).difs;if(!_supportsOpacity&&_opacityValExp.test(vars)){v.opacity=parseFloat(RegExp.$1);}vars=v;style.cssText=first;}if(vars.className){//className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
	this._firstPT=pt=_specialProps.className.parse(target,vars.className,"className",this,null,null,vars);}else{this._firstPT=pt=this.parse(target,vars,null);}if(this._transformType){threeD=this._transformType===3;if(!_transformProp){style.zoom=1;//helps correct an IE issue.
	}else if(_isSafari){_reqSafariFix=true;//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
	if(style.zIndex===""){zIndex=_getStyle(target,"zIndex",_cs);if(zIndex==="auto"||zIndex===""){this._addLazySet(style,"zIndex",0);}}//Setting WebkitBackfaceVisibility corrects 3 bugs:
	// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
	// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
	// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
	//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
	if(_isSafariLT6){this._addLazySet(style,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(threeD?"visible":"hidden"));}}pt2=pt;while(pt2&&pt2._next){pt2=pt2._next;}tpt=new CSSPropTween(target,"transform",0,0,null,2);this._linkCSSP(tpt,null,pt2);tpt.setRatio=_transformProp?_setTransformRatio:_setIETransformRatio;tpt.data=this._transform||_getTransform(target,_cs,true);tpt.tween=tween;tpt.pr=-1;//ensures that the transforms get applied after the components are updated.
	_overwriteProps.pop();//we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
	}if(_hasPriority){//reorders the linked list in order of pr (priority)
	while(pt){next=pt._next;pt2=first;while(pt2&&pt2.pr>pt.pr){pt2=pt2._next;}if(pt._prev=pt2?pt2._prev:last){pt._prev._next=pt;}else{first=pt;}if(pt._next=pt2){pt2._prev=pt;}else{last=pt;}pt=next;}this._firstPT=first;}return true;};p.parse=function(target,vars,pt,plugin){var style=target.style,p,sp,bn,en,bs,es,bsfx,esfx,isStr,rel;for(p in vars){es=vars[p];//ending value string
	if(typeof es==="function"){es=es(_index,_target);}sp=_specialProps[p];//SpecialProp lookup.
	if(sp){pt=sp.parse(target,es,p,this,pt,plugin,vars);}else{bs=_getStyle(target,p,_cs)+"";isStr=typeof es==="string";if(p==="color"||p==="fill"||p==="stroke"||p.indexOf("Color")!==-1||isStr&&_rgbhslExp.test(es)){//Opera uses background: to define color sometimes in addition to backgroundColor:
	if(!isStr){es=_parseColor(es);es=(es.length>3?"rgba(":"rgb(")+es.join(",")+")";}pt=_parseComplex(style,p,bs,es,true,"transparent",pt,0,plugin);}else if(isStr&&_complexExp.test(es)){pt=_parseComplex(style,p,bs,es,true,null,pt,0,plugin);}else{bn=parseFloat(bs);bsfx=bn||bn===0?bs.substr((bn+"").length):"";//remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.
	if(bs===""||bs==="auto"){if(p==="width"||p==="height"){bn=_getDimension(target,p,_cs);bsfx="px";}else if(p==="left"||p==="top"){bn=_calculateOffset(target,p,_cs);bsfx="px";}else{bn=p!=="opacity"?0:1;bsfx="";}}rel=isStr&&es.charAt(1)==="=";if(rel){en=parseInt(es.charAt(0)+"1",10);es=es.substr(2);en*=parseFloat(es);esfx=es.replace(_suffixExp,"");}else{en=parseFloat(es);esfx=isStr?es.replace(_suffixExp,""):"";}if(esfx===""){esfx=p in _suffixMap?_suffixMap[p]:bsfx;//populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
	}es=en||en===0?(rel?en+bn:en)+esfx:vars[p];//ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
	//if the beginning/ending suffixes don't match, normalize them...
	if(bsfx!==esfx)if(esfx!=="")if(en||en===0)if(bn){//note: if the beginning value (bn) is 0, we don't need to convert units!
	bn=_convertToPixels(target,p,bn,bsfx);if(esfx==="%"){bn/=_convertToPixels(target,p,100,"%")/100;if(vars.strictUnits!==true){//some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
	bs=bn+"%";}}else if(esfx==="em"||esfx==="rem"||esfx==="vw"||esfx==="vh"){bn/=_convertToPixels(target,p,1,esfx);//otherwise convert to pixels.
	}else if(esfx!=="px"){en=_convertToPixels(target,p,en,esfx);esfx="px";//we don't use bsfx after this, so we don't need to set it to px too.
	}if(rel)if(en||en===0){es=en+bn+esfx;//the changes we made affect relative calculations, so adjust the end value here.
	}}if(rel){en+=bn;}if((bn||bn===0)&&(en||en===0)){//faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
	pt=new CSSPropTween(style,p,bn,en-bn,pt,0,p,_autoRound!==false&&(esfx==="px"||p==="zIndex"),0,bs,es);pt.xs0=esfx;//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
	}else if(style[p]===undefined||!es&&(es+""==="NaN"||es==null)){_log("invalid "+p+" tween value: "+vars[p]);}else{pt=new CSSPropTween(style,p,en||bn||0,0,pt,-1,p,false,0,bs,es);pt.xs0=es==="none"&&(p==="display"||p.indexOf("Style")!==-1)?bs:es;//intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
	//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
	}}}if(plugin)if(pt&&!pt.plugin){pt.plugin=plugin;}}return pt;};//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
	p.setRatio=function(v){var pt=this._firstPT,min=0.000001,val,str,i;//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
	if(v===1&&(this._tween._time===this._tween._duration||this._tween._time===0)){while(pt){if(pt.type!==2){if(pt.r&&pt.type!==-1){val=Math.round(pt.s+pt.c);if(!pt.type){pt.t[pt.p]=val+pt.xs0;}else if(pt.type===1){//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
	i=pt.l;str=pt.xs0+val+pt.xs1;for(i=1;i<pt.l;i++){str+=pt["xn"+i]+pt["xs"+(i+1)];}pt.t[pt.p]=str;}}else{pt.t[pt.p]=pt.e;}}else{pt.setRatio(v);}pt=pt._next;}}else if(v||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-0.000001){while(pt){val=pt.c*v+pt.s;if(pt.r){val=Math.round(val);}else if(val<min)if(val>-min){val=0;}if(!pt.type){pt.t[pt.p]=val+pt.xs0;}else if(pt.type===1){//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
	i=pt.l;if(i===2){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2;}else if(i===3){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2+pt.xn2+pt.xs3;}else if(i===4){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2+pt.xn2+pt.xs3+pt.xn3+pt.xs4;}else if(i===5){pt.t[pt.p]=pt.xs0+val+pt.xs1+pt.xn1+pt.xs2+pt.xn2+pt.xs3+pt.xn3+pt.xs4+pt.xn4+pt.xs5;}else{str=pt.xs0+val+pt.xs1;for(i=1;i<pt.l;i++){str+=pt["xn"+i]+pt["xs"+(i+1)];}pt.t[pt.p]=str;}}else if(pt.type===-1){//non-tweening value
	pt.t[pt.p]=pt.xs0;}else if(pt.setRatio){//custom setRatio() for things like SpecialProps, external plugins, etc.
	pt.setRatio(v);}pt=pt._next;}//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
	}else{while(pt){if(pt.type!==2){pt.t[pt.p]=pt.b;}else{pt.setRatio(v);}pt=pt._next;}}};/**
			 * @private
			 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
			 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
			 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
			 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
			 * doesn't have any transform-related properties of its own. You can call this method as many times as you
			 * want and it won't create duplicate CSSPropTweens.
			 *
			 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
			 */p._enableTransforms=function(threeD){this._transform=this._transform||_getTransform(this._target,_cs,true);//ensures that the element has a _gsTransform property with the appropriate values.
	this._transformType=!(this._transform.svg&&_useSVGTransformAttr)&&(threeD||this._transformType===3)?3:2;};var lazySet=function lazySet(v){this.t[this.p]=this.e;this.data._linkCSSP(this,this._next,null,true);//we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
	};/** @private Gives us a way to set a value on the first render (and only the first render). **/p._addLazySet=function(t,p,v){var pt=this._firstPT=new CSSPropTween(t,p,0,0,this._firstPT,2);pt.e=v;pt.setRatio=lazySet;pt.data=this;};/** @private **/p._linkCSSP=function(pt,next,prev,remove){if(pt){if(next){next._prev=pt;}if(pt._next){pt._next._prev=pt._prev;}if(pt._prev){pt._prev._next=pt._next;}else if(this._firstPT===pt){this._firstPT=pt._next;remove=true;//just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
	}if(prev){prev._next=pt;}else if(!remove&&this._firstPT===null){this._firstPT=pt;}pt._next=next;pt._prev=prev;}return pt;};p._mod=function(lookup){var pt=this._firstPT;while(pt){if(typeof lookup[pt.p]==="function"&&lookup[pt.p]===Math.round){//only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally..
	pt.r=1;}pt=pt._next;}};//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
	p._kill=function(lookup){var copy=lookup,pt,p,xfirst;if(lookup.autoAlpha||lookup.alpha){copy={};for(p in lookup){//copy the lookup so that we're not changing the original which may be passed elsewhere.
	copy[p]=lookup[p];}copy.opacity=1;if(copy.autoAlpha){copy.visibility=1;}}if(lookup.className&&(pt=this._classNamePT)){//for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
	xfirst=pt.xfirst;if(xfirst&&xfirst._prev){this._linkCSSP(xfirst._prev,pt._next,xfirst._prev._prev);//break off the prev
	}else if(xfirst===this._firstPT){this._firstPT=pt._next;}if(pt._next){this._linkCSSP(pt._next,pt._next._next,xfirst._prev);}this._classNamePT=null;}pt=this._firstPT;while(pt){if(pt.plugin&&pt.plugin!==p&&pt.plugin._kill){//for plugins that are registered with CSSPlugin, we should notify them of the kill.
	pt.plugin._kill(lookup);p=pt.plugin;}pt=pt._next;}return TweenPlugin.prototype._kill.call(this,copy);};//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
	var _getChildStyles=function _getChildStyles(e,props,targets){var children,i,child,type;if(e.slice){i=e.length;while(--i>-1){_getChildStyles(e[i],props,targets);}return;}children=e.childNodes;i=children.length;while(--i>-1){child=children[i];type=child.type;if(child.style){props.push(_getAllStyles(child));if(targets){targets.push(child);}}if((type===1||type===9||type===11)&&child.childNodes.length){_getChildStyles(child,props,targets);}}};/**
			 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
			 * and then compares the style properties of all the target's child elements at the tween's start and end, and
			 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
			 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
			 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
			 * is because it creates entirely new tweens that may have completely different targets than the original tween,
			 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
			 * and it would create other problems. For example:
			 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
			 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
			 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
			 *
			 * @param {Object} target object to be tweened
			 * @param {number} Duration in seconds (or frames for frames-based tweens)
			 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
			 * @return {Array} An array of TweenLite instances
			 */CSSPlugin.cascadeTo=function(target,duration,vars){var tween=TweenLite.to(target,duration,vars),results=[tween],b=[],e=[],targets=[],_reservedProps=TweenLite._internals.reservedProps,i,difs,p,from;target=tween._targets||tween.target;_getChildStyles(target,b,targets);tween.render(duration,true,true);_getChildStyles(target,e);tween.render(0,true,true);tween._enabled(true);i=targets.length;while(--i>-1){difs=_cssDif(targets[i],b[i],e[i]);if(difs.firstMPT){difs=difs.difs;for(p in vars){if(_reservedProps[p]){difs[p]=vars[p];}}from={};for(p in difs){from[p]=b[i][p];}results.push(TweenLite.fromTo(targets[i],duration,from,difs));}}return results;};TweenPlugin.activate([CSSPlugin]);return CSSPlugin;},true);/*
	 * ----------------------------------------------------------------
	 * RoundPropsPlugin
	 * ----------------------------------------------------------------
	 */(function(){var RoundPropsPlugin=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init:function init(target,value,tween){this._tween=tween;return true;}}),_roundLinkedList=function _roundLinkedList(node){while(node){if(!node.f&&!node.blob){node.m=Math.round;}node=node._next;}},p=RoundPropsPlugin.prototype;p._onInitAllProps=function(){var tween=this._tween,rp=tween.vars.roundProps.join?tween.vars.roundProps:tween.vars.roundProps.split(","),i=rp.length,lookup={},rpt=tween._propLookup.roundProps,prop,pt,next;while(--i>-1){lookup[rp[i]]=Math.round;}i=rp.length;while(--i>-1){prop=rp[i];pt=tween._firstPT;while(pt){next=pt._next;//record here, because it may get removed
	if(pt.pg){pt.t._mod(lookup);}else if(pt.n===prop){if(pt.f===2&&pt.t){//a blob (text containing multiple numeric values)
	_roundLinkedList(pt.t._firstPT);}else{this._add(pt.t,prop,pt.s,pt.c);//remove from linked list
	if(next){next._prev=pt._prev;}if(pt._prev){pt._prev._next=next;}else if(tween._firstPT===pt){tween._firstPT=next;}pt._next=pt._prev=null;tween._propLookup[prop]=rpt;}}pt=next;}}return false;};p._add=function(target,p,s,c){this._addTween(target,p,s,s+c,p,Math.round);this._overwriteProps.push(p);};})();/*
	 * ----------------------------------------------------------------
	 * AttrPlugin
	 * ----------------------------------------------------------------
	 */(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init:function init(target,value,tween,index){var p,end;if(typeof target.setAttribute!=="function"){return false;}for(p in value){end=value[p];if(typeof end==="function"){end=end(index,target);}this._addTween(target,"setAttribute",target.getAttribute(p)+"",end+"",p,false,p);this._overwriteProps.push(p);}return true;}});})();/*
	 * ----------------------------------------------------------------
	 * DirectionalRotationPlugin
	 * ----------------------------------------------------------------
	 */_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init:function init(target,value,tween,index){if((typeof value==="undefined"?"undefined":_typeof(value))!=="object"){value={rotation:value};}this.finals={};var cap=value.useRadians===true?Math.PI*2:360,min=0.000001,p,v,start,end,dif,split;for(p in value){if(p!=="useRadians"){end=value[p];if(typeof end==="function"){end=end(index,target);}split=(end+"").split("_");v=split[0];start=parseFloat(typeof target[p]!=="function"?target[p]:target[p.indexOf("set")||typeof target["get"+p.substr(3)]!=="function"?p:"get"+p.substr(3)]());end=this.finals[p]=typeof v==="string"&&v.charAt(1)==="="?start+parseInt(v.charAt(0)+"1",10)*Number(v.substr(2)):Number(v)||0;dif=end-start;if(split.length){v=split.join("_");if(v.indexOf("short")!==-1){dif=dif%cap;if(dif!==dif%(cap/2)){dif=dif<0?dif+cap:dif-cap;}}if(v.indexOf("_cw")!==-1&&dif<0){dif=(dif+cap*9999999999)%cap-(dif/cap|0)*cap;}else if(v.indexOf("ccw")!==-1&&dif>0){dif=(dif-cap*9999999999)%cap-(dif/cap|0)*cap;}}if(dif>min||dif<-min){this._addTween(target,p,start,start+dif,p);this._overwriteProps.push(p);}}}return true;},//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
	set:function set(ratio){var pt;if(ratio!==1){this._super.setRatio.call(this,ratio);}else{pt=this._firstPT;while(pt){if(pt.f){pt.t[pt.p](this.finals[pt.p]);}else{pt.t[pt.p]=this.finals[pt.p];}pt=pt._next;}}}})._autoCSS=true;/*
	 * ----------------------------------------------------------------
	 * EasePack
	 * ----------------------------------------------------------------
	 */_gsScope._gsDefine("easing.Back",["easing.Ease"],function(Ease){var w=_gsScope.GreenSockGlobals||_gsScope,gs=w.com.greensock,_2PI=Math.PI*2,_HALF_PI=Math.PI/2,_class=gs._class,_create=function _create(n,f){var C=_class("easing."+n,function(){},true),p=C.prototype=new Ease();p.constructor=C;p.getRatio=f;return C;},_easeReg=Ease.register||function(){},//put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
	_wrap=function _wrap(name,EaseOut,EaseIn,EaseInOut,aliases){var C=_class("easing."+name,{easeOut:new EaseOut(),easeIn:new EaseIn(),easeInOut:new EaseInOut()},true);_easeReg(C,name);return C;},EasePoint=function EasePoint(time,value,next){this.t=time;this.v=value;if(next){this.next=next;next.prev=this;this.c=next.v-value;this.gap=next.t-time;}},//Back
	_createBack=function _createBack(n,f){var C=_class("easing."+n,function(overshoot){this._p1=overshoot||overshoot===0?overshoot:1.70158;this._p2=this._p1*1.525;},true),p=C.prototype=new Ease();p.constructor=C;p.getRatio=f;p.config=function(overshoot){return new C(overshoot);};return C;},Back=_wrap("Back",_createBack("BackOut",function(p){return(p=p-1)*p*((this._p1+1)*p+this._p1)+1;}),_createBack("BackIn",function(p){return p*p*((this._p1+1)*p-this._p1);}),_createBack("BackInOut",function(p){return(p*=2)<1?0.5*p*p*((this._p2+1)*p-this._p2):0.5*((p-=2)*p*((this._p2+1)*p+this._p2)+2);})),//SlowMo
	SlowMo=_class("easing.SlowMo",function(linearRatio,power,yoyoMode){power=power||power===0?power:0.7;if(linearRatio==null){linearRatio=0.7;}else if(linearRatio>1){linearRatio=1;}this._p=linearRatio!==1?power:0;this._p1=(1-linearRatio)/2;this._p2=linearRatio;this._p3=this._p1+this._p2;this._calcEnd=yoyoMode===true;},true),p=SlowMo.prototype=new Ease(),SteppedEase,RoughEase,_createElastic;p.constructor=SlowMo;p.getRatio=function(p){var r=p+(0.5-p)*this._p;if(p<this._p1){return this._calcEnd?1-(p=1-p/this._p1)*p:r-(p=1-p/this._p1)*p*p*p*r;}else if(p>this._p3){return this._calcEnd?1-(p=(p-this._p3)/this._p1)*p:r+(p-r)*(p=(p-this._p3)/this._p1)*p*p*p;}return this._calcEnd?1:r;};SlowMo.ease=new SlowMo(0.7,0.7);p.config=SlowMo.config=function(linearRatio,power,yoyoMode){return new SlowMo(linearRatio,power,yoyoMode);};//SteppedEase
	SteppedEase=_class("easing.SteppedEase",function(steps){steps=steps||1;this._p1=1/steps;this._p2=steps+1;},true);p=SteppedEase.prototype=new Ease();p.constructor=SteppedEase;p.getRatio=function(p){if(p<0){p=0;}else if(p>=1){p=0.999999999;}return(this._p2*p>>0)*this._p1;};p.config=SteppedEase.config=function(steps){return new SteppedEase(steps);};//RoughEase
	RoughEase=_class("easing.RoughEase",function(vars){vars=vars||{};var taper=vars.taper||"none",a=[],cnt=0,points=(vars.points||20)|0,i=points,randomize=vars.randomize!==false,clamp=vars.clamp===true,template=vars.template instanceof Ease?vars.template:null,strength=typeof vars.strength==="number"?vars.strength*0.4:0.4,x,y,bump,invX,obj,pnt;while(--i>-1){x=randomize?Math.random():1/points*i;y=template?template.getRatio(x):x;if(taper==="none"){bump=strength;}else if(taper==="out"){invX=1-x;bump=invX*invX*strength;}else if(taper==="in"){bump=x*x*strength;}else if(x<0.5){//"both" (start)
	invX=x*2;bump=invX*invX*0.5*strength;}else{//"both" (end)
	invX=(1-x)*2;bump=invX*invX*0.5*strength;}if(randomize){y+=Math.random()*bump-bump*0.5;}else if(i%2){y+=bump*0.5;}else{y-=bump*0.5;}if(clamp){if(y>1){y=1;}else if(y<0){y=0;}}a[cnt++]={x:x,y:y};}a.sort(function(a,b){return a.x-b.x;});pnt=new EasePoint(1,1,null);i=points;while(--i>-1){obj=a[i];pnt=new EasePoint(obj.x,obj.y,pnt);}this._prev=new EasePoint(0,0,pnt.t!==0?pnt:pnt.next);},true);p=RoughEase.prototype=new Ease();p.constructor=RoughEase;p.getRatio=function(p){var pnt=this._prev;if(p>pnt.t){while(pnt.next&&p>=pnt.t){pnt=pnt.next;}pnt=pnt.prev;}else{while(pnt.prev&&p<=pnt.t){pnt=pnt.prev;}}this._prev=pnt;return pnt.v+(p-pnt.t)/pnt.gap*pnt.c;};p.config=function(vars){return new RoughEase(vars);};RoughEase.ease=new RoughEase();//Bounce
	_wrap("Bounce",_create("BounceOut",function(p){if(p<1/2.75){return 7.5625*p*p;}else if(p<2/2.75){return 7.5625*(p-=1.5/2.75)*p+0.75;}else if(p<2.5/2.75){return 7.5625*(p-=2.25/2.75)*p+0.9375;}return 7.5625*(p-=2.625/2.75)*p+0.984375;}),_create("BounceIn",function(p){if((p=1-p)<1/2.75){return 1-7.5625*p*p;}else if(p<2/2.75){return 1-(7.5625*(p-=1.5/2.75)*p+0.75);}else if(p<2.5/2.75){return 1-(7.5625*(p-=2.25/2.75)*p+0.9375);}return 1-(7.5625*(p-=2.625/2.75)*p+0.984375);}),_create("BounceInOut",function(p){var invert=p<0.5;if(invert){p=1-p*2;}else{p=p*2-1;}if(p<1/2.75){p=7.5625*p*p;}else if(p<2/2.75){p=7.5625*(p-=1.5/2.75)*p+0.75;}else if(p<2.5/2.75){p=7.5625*(p-=2.25/2.75)*p+0.9375;}else{p=7.5625*(p-=2.625/2.75)*p+0.984375;}return invert?(1-p)*0.5:p*0.5+0.5;}));//CIRC
	_wrap("Circ",_create("CircOut",function(p){return Math.sqrt(1-(p=p-1)*p);}),_create("CircIn",function(p){return-(Math.sqrt(1-p*p)-1);}),_create("CircInOut",function(p){return(p*=2)<1?-0.5*(Math.sqrt(1-p*p)-1):0.5*(Math.sqrt(1-(p-=2)*p)+1);}));//Elastic
	_createElastic=function _createElastic(n,f,def){var C=_class("easing."+n,function(amplitude,period){this._p1=amplitude>=1?amplitude:1;//note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
	this._p2=(period||def)/(amplitude<1?amplitude:1);this._p3=this._p2/_2PI*(Math.asin(1/this._p1)||0);this._p2=_2PI/this._p2;//precalculate to optimize
	},true),p=C.prototype=new Ease();p.constructor=C;p.getRatio=f;p.config=function(amplitude,period){return new C(amplitude,period);};return C;};_wrap("Elastic",_createElastic("ElasticOut",function(p){return this._p1*Math.pow(2,-10*p)*Math.sin((p-this._p3)*this._p2)+1;},0.3),_createElastic("ElasticIn",function(p){return-(this._p1*Math.pow(2,10*(p-=1))*Math.sin((p-this._p3)*this._p2));},0.3),_createElastic("ElasticInOut",function(p){return(p*=2)<1?-0.5*(this._p1*Math.pow(2,10*(p-=1))*Math.sin((p-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(p-=1))*Math.sin((p-this._p3)*this._p2)*0.5+1;},0.45));//Expo
	_wrap("Expo",_create("ExpoOut",function(p){return 1-Math.pow(2,-10*p);}),_create("ExpoIn",function(p){return Math.pow(2,10*(p-1))-0.001;}),_create("ExpoInOut",function(p){return(p*=2)<1?0.5*Math.pow(2,10*(p-1)):0.5*(2-Math.pow(2,-10*(p-1)));}));//Sine
	_wrap("Sine",_create("SineOut",function(p){return Math.sin(p*_HALF_PI);}),_create("SineIn",function(p){return-Math.cos(p*_HALF_PI)+1;}),_create("SineInOut",function(p){return-0.5*(Math.cos(Math.PI*p)-1);}));_class("easing.EaseLookup",{find:function find(s){return Ease.map[s];}},true);//register the non-standard eases
	_easeReg(w.SlowMo,"SlowMo","ease,");_easeReg(RoughEase,"RoughEase","ease,");_easeReg(SteppedEase,"SteppedEase","ease,");return Back;},true);});if(_gsScope._gsDefine){_gsScope._gsQueue.pop()();}//necessary in case TweenLite was already loaded separately.
	/*
	 * ----------------------------------------------------------------
	 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
	 * ----------------------------------------------------------------
	 */(function(window,moduleName){"use strict";var _exports={},_globals=window.GreenSockGlobals=window.GreenSockGlobals||window;if(_globals.TweenLite){return;//in case the core set of classes is already loaded, don't instantiate twice.
	}var _namespace=function _namespace(ns){var a=ns.split("."),p=_globals,i;for(i=0;i<a.length;i++){p[a[i]]=p=p[a[i]]||{};}return p;},gs=_namespace("com.greensock"),_tinyNum=0.0000000001,_slice=function _slice(a){//don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
	var b=[],l=a.length,i;for(i=0;i!==l;b.push(a[i++])){}return b;},_emptyFunc=function _emptyFunc(){},_isArray=function(){//works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
	var toString=Object.prototype.toString,array=toString.call([]);return function(obj){return obj!=null&&(obj instanceof Array||(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"&&!!obj.push&&toString.call(obj)===array);};}(),a,i,p,_ticker,_tickerActive,_defLookup={},/**
				 * @constructor
				 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
				 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
				 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
				 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
				 *
				 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
				 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
				 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
				 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
				 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
				 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
				 * sandbox the banner one like:
				 *
				 * <script>
				 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
				 * </script>
				 * <script src="js/greensock/v1.7/TweenMax.js"></script>
				 * <script>
				 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
				 * </script>
				 * <script src="js/greensock/v1.6/TweenMax.js"></script>
				 * <script>
				 *     gs.TweenLite.to(...); //would use v1.7
				 *     TweenLite.to(...); //would use v1.6
				 * </script>
				 *
				 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
				 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
				 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
				 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
				 */Definition=function Definition(ns,dependencies,func,global){this.sc=_defLookup[ns]?_defLookup[ns].sc:[];//subclasses
	_defLookup[ns]=this;this.gsClass=null;this.func=func;var _classes=[];this.check=function(init){var i=dependencies.length,missing=i,cur,a,n,cl,hasModule;while(--i>-1){if((cur=_defLookup[dependencies[i]]||new Definition(dependencies[i],[])).gsClass){_classes[i]=cur.gsClass;missing--;}else if(init){cur.sc.push(this);}}if(missing===0&&func){a=("com.greensock."+ns).split(".");n=a.pop();cl=_namespace(a.join("."))[n]=this.gsClass=func.apply(func,_classes);//exports to multiple environments
	if(global){_globals[n]=_exports[n]=cl;//provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
	hasModule=typeof module!=="undefined"&&module.exports;if(!hasModule&&"function"==="function"&&__webpack_require__(43)){//AMD
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return cl;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(hasModule){//node
	if(ns===moduleName){module.exports=_exports[moduleName]=cl;for(i in _exports){cl[i]=_exports[i];}}else if(_exports[moduleName]){_exports[moduleName][n]=cl;}}}for(i=0;i<this.sc.length;i++){this.sc[i].check();}}};this.check(true);},//used to create Definition instances (which basically registers a class that has dependencies).
	_gsDefine=window._gsDefine=function(ns,dependencies,func,global){return new Definition(ns,dependencies,func,global);},//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
	_class=gs._class=function(ns,func,global){func=func||function(){};_gsDefine(ns,[],function(){return func;},global);return func;};_gsDefine.globals=_globals;/*
	 * ----------------------------------------------------------------
	 * Ease
	 * ----------------------------------------------------------------
	 */var _baseParams=[0,0,1,1],_blankArray=[],Ease=_class("easing.Ease",function(func,extraParams,type,power){this._func=func;this._type=type||0;this._power=power||0;this._params=extraParams?_baseParams.concat(extraParams):_baseParams;},true),_easeMap=Ease.map={},_easeReg=Ease.register=function(ease,names,types,create){var na=names.split(","),i=na.length,ta=(types||"easeIn,easeOut,easeInOut").split(","),e,name,j,type;while(--i>-1){name=na[i];e=create?_class("easing."+name,null,true):gs.easing[name]||{};j=ta.length;while(--j>-1){type=ta[j];_easeMap[name+"."+type]=_easeMap[type+name]=e[type]=ease.getRatio?ease:ease[type]||new ease();}}};p=Ease.prototype;p._calcEnd=false;p.getRatio=function(p){if(this._func){this._params[0]=p;return this._func.apply(null,this._params);}var t=this._type,pw=this._power,r=t===1?1-p:t===2?p:p<0.5?p*2:(1-p)*2;if(pw===1){r*=r;}else if(pw===2){r*=r*r;}else if(pw===3){r*=r*r*r;}else if(pw===4){r*=r*r*r*r;}return t===1?1-r:t===2?r:p<0.5?r/2:1-r/2;};//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
	a=["Linear","Quad","Cubic","Quart","Quint,Strong"];i=a.length;while(--i>-1){p=a[i]+",Power"+i;_easeReg(new Ease(null,null,1,i),p,"easeOut",true);_easeReg(new Ease(null,null,2,i),p,"easeIn"+(i===0?",easeNone":""));_easeReg(new Ease(null,null,3,i),p,"easeInOut");}_easeMap.linear=gs.easing.Linear.easeIn;_easeMap.swing=gs.easing.Quad.easeInOut;//for jQuery folks
	/*
	 * ----------------------------------------------------------------
	 * EventDispatcher
	 * ----------------------------------------------------------------
	 */var EventDispatcher=_class("events.EventDispatcher",function(target){this._listeners={};this._eventTarget=target||this;});p=EventDispatcher.prototype;p.addEventListener=function(type,callback,scope,useParam,priority){priority=priority||0;var list=this._listeners[type],index=0,listener,i;if(this===_ticker&&!_tickerActive){_ticker.wake();}if(list==null){this._listeners[type]=list=[];}i=list.length;while(--i>-1){listener=list[i];if(listener.c===callback&&listener.s===scope){list.splice(i,1);}else if(index===0&&listener.pr<priority){index=i+1;}}list.splice(index,0,{c:callback,s:scope,up:useParam,pr:priority});};p.removeEventListener=function(type,callback){var list=this._listeners[type],i;if(list){i=list.length;while(--i>-1){if(list[i].c===callback){list.splice(i,1);return;}}}};p.dispatchEvent=function(type){var list=this._listeners[type],i,t,listener;if(list){i=list.length;if(i>1){list=list.slice(0);//in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
	}t=this._eventTarget;while(--i>-1){listener=list[i];if(listener){if(listener.up){listener.c.call(listener.s||t,{type:type,target:t});}else{listener.c.call(listener.s||t);}}}}};/*
	 * ----------------------------------------------------------------
	 * Ticker
	 * ----------------------------------------------------------------
	 */var _reqAnimFrame=window.requestAnimationFrame,_cancelAnimFrame=window.cancelAnimationFrame,_getTime=Date.now||function(){return new Date().getTime();},_lastUpdate=_getTime();//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
	a=["ms","moz","webkit","o"];i=a.length;while(--i>-1&&!_reqAnimFrame){_reqAnimFrame=window[a[i]+"RequestAnimationFrame"];_cancelAnimFrame=window[a[i]+"CancelAnimationFrame"]||window[a[i]+"CancelRequestAnimationFrame"];}_class("Ticker",function(fps,useRAF){var _self=this,_startTime=_getTime(),_useRAF=useRAF!==false&&_reqAnimFrame?"auto":false,_lagThreshold=500,_adjustedLag=33,_tickWord="tick",//helps reduce gc burden
	_fps,_req,_id,_gap,_nextTime,_tick=function _tick(manual){var elapsed=_getTime()-_lastUpdate,overlap,dispatch;if(elapsed>_lagThreshold){_startTime+=elapsed-_adjustedLag;}_lastUpdate+=elapsed;_self.time=(_lastUpdate-_startTime)/1000;overlap=_self.time-_nextTime;if(!_fps||overlap>0||manual===true){_self.frame++;_nextTime+=overlap+(overlap>=_gap?0.004:_gap-overlap);dispatch=true;}if(manual!==true){//make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
	_id=_req(_tick);}if(dispatch){_self.dispatchEvent(_tickWord);}};EventDispatcher.call(_self);_self.time=_self.frame=0;_self.tick=function(){_tick(true);};_self.lagSmoothing=function(threshold,adjustedLag){_lagThreshold=threshold||1/_tinyNum;//zero should be interpreted as basically unlimited
	_adjustedLag=Math.min(adjustedLag,_lagThreshold,0);};_self.sleep=function(){if(_id==null){return;}if(!_useRAF||!_cancelAnimFrame){clearTimeout(_id);}else{_cancelAnimFrame(_id);}_req=_emptyFunc;_id=null;if(_self===_ticker){_tickerActive=false;}};_self.wake=function(seamless){if(_id!==null){_self.sleep();}else if(seamless){_startTime+=-_lastUpdate+(_lastUpdate=_getTime());}else if(_self.frame>10){//don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
	_lastUpdate=_getTime()-_lagThreshold+5;}_req=_fps===0?_emptyFunc:!_useRAF||!_reqAnimFrame?function(f){return setTimeout(f,(_nextTime-_self.time)*1000+1|0);}:_reqAnimFrame;if(_self===_ticker){_tickerActive=true;}_tick(2);};_self.fps=function(value){if(!arguments.length){return _fps;}_fps=value;_gap=1/(_fps||60);_nextTime=this.time+_gap;_self.wake();};_self.useRAF=function(value){if(!arguments.length){return _useRAF;}_self.sleep();_useRAF=value;_self.fps(_fps);};_self.fps(fps);//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
	setTimeout(function(){if(_useRAF==="auto"&&_self.frame<5&&document.visibilityState!=="hidden"){_self.useRAF(false);}},1500);});p=gs.Ticker.prototype=new gs.events.EventDispatcher();p.constructor=gs.Ticker;/*
	 * ----------------------------------------------------------------
	 * Animation
	 * ----------------------------------------------------------------
	 */var Animation=_class("core.Animation",function(duration,vars){this.vars=vars=vars||{};this._duration=this._totalDuration=duration||0;this._delay=Number(vars.delay)||0;this._timeScale=1;this._active=vars.immediateRender===true;this.data=vars.data;this._reversed=vars.reversed===true;if(!_rootTimeline){return;}if(!_tickerActive){//some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
	_ticker.wake();}var tl=this.vars.useFrames?_rootFramesTimeline:_rootTimeline;tl.add(this,tl._time);if(this.vars.paused){this.paused(true);}});_ticker=Animation.ticker=new gs.Ticker();p=Animation.prototype;p._dirty=p._gc=p._initted=p._paused=false;p._totalTime=p._time=0;p._rawPrevTime=-1;p._next=p._last=p._onUpdate=p._timeline=p.timeline=null;p._paused=false;//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
	var _checkTimeout=function _checkTimeout(){if(_tickerActive&&_getTime()-_lastUpdate>2000){_ticker.wake();}setTimeout(_checkTimeout,2000);};_checkTimeout();p.play=function(from,suppressEvents){if(from!=null){this.seek(from,suppressEvents);}return this.reversed(false).paused(false);};p.pause=function(atTime,suppressEvents){if(atTime!=null){this.seek(atTime,suppressEvents);}return this.paused(true);};p.resume=function(from,suppressEvents){if(from!=null){this.seek(from,suppressEvents);}return this.paused(false);};p.seek=function(time,suppressEvents){return this.totalTime(Number(time),suppressEvents!==false);};p.restart=function(includeDelay,suppressEvents){return this.reversed(false).paused(false).totalTime(includeDelay?-this._delay:0,suppressEvents!==false,true);};p.reverse=function(from,suppressEvents){if(from!=null){this.seek(from||this.totalDuration(),suppressEvents);}return this.reversed(true).paused(false);};p.render=function(time,suppressEvents,force){//stub - we override this method in subclasses.
	};p.invalidate=function(){this._time=this._totalTime=0;this._initted=this._gc=false;this._rawPrevTime=-1;if(this._gc||!this.timeline){this._enabled(true);}return this;};p.isActive=function(){var tl=this._timeline,//the 2 root timelines won't have a _timeline; they're always active.
	startTime=this._startTime,rawTime;return!tl||!this._gc&&!this._paused&&tl.isActive()&&(rawTime=tl.rawTime())>=startTime&&rawTime<startTime+this.totalDuration()/this._timeScale;};p._enabled=function(enabled,ignoreTimeline){if(!_tickerActive){_ticker.wake();}this._gc=!enabled;this._active=this.isActive();if(ignoreTimeline!==true){if(enabled&&!this.timeline){this._timeline.add(this,this._startTime-this._delay);}else if(!enabled&&this.timeline){this._timeline._remove(this,true);}}return false;};p._kill=function(vars,target){return this._enabled(false,false);};p.kill=function(vars,target){this._kill(vars,target);return this;};p._uncache=function(includeSelf){var tween=includeSelf?this:this.timeline;while(tween){tween._dirty=true;tween=tween.timeline;}return this;};p._swapSelfInParams=function(params){var i=params.length,copy=params.concat();while(--i>-1){if(params[i]==="{self}"){copy[i]=this;}}return copy;};p._callback=function(type){var v=this.vars,callback=v[type],params=v[type+"Params"],scope=v[type+"Scope"]||v.callbackScope||this,l=params?params.length:0;switch(l){//speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
	case 0:callback.call(scope);break;case 1:callback.call(scope,params[0]);break;case 2:callback.call(scope,params[0],params[1]);break;default:callback.apply(scope,params);}};//----Animation getters/setters --------------------------------------------------------
	p.eventCallback=function(type,callback,params,scope){if((type||"").substr(0,2)==="on"){var v=this.vars;if(arguments.length===1){return v[type];}if(callback==null){delete v[type];}else{v[type]=callback;v[type+"Params"]=_isArray(params)&&params.join("").indexOf("{self}")!==-1?this._swapSelfInParams(params):params;v[type+"Scope"]=scope;}if(type==="onUpdate"){this._onUpdate=callback;}}return this;};p.delay=function(value){if(!arguments.length){return this._delay;}if(this._timeline.smoothChildTiming){this.startTime(this._startTime+value-this._delay);}this._delay=value;return this;};p.duration=function(value){if(!arguments.length){this._dirty=false;return this._duration;}this._duration=this._totalDuration=value;this._uncache(true);//true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
	if(this._timeline.smoothChildTiming)if(this._time>0)if(this._time<this._duration)if(value!==0){this.totalTime(this._totalTime*(value/this._duration),true);}return this;};p.totalDuration=function(value){this._dirty=false;return!arguments.length?this._totalDuration:this.duration(value);};p.time=function(value,suppressEvents){if(!arguments.length){return this._time;}if(this._dirty){this.totalDuration();}return this.totalTime(value>this._duration?this._duration:value,suppressEvents);};p.totalTime=function(time,suppressEvents,uncapped){if(!_tickerActive){_ticker.wake();}if(!arguments.length){return this._totalTime;}if(this._timeline){if(time<0&&!uncapped){time+=this.totalDuration();}if(this._timeline.smoothChildTiming){if(this._dirty){this.totalDuration();}var totalDuration=this._totalDuration,tl=this._timeline;if(time>totalDuration&&!uncapped){time=totalDuration;}this._startTime=(this._paused?this._pauseTime:tl._time)-(!this._reversed?time:totalDuration-time)/this._timeScale;if(!tl._dirty){//for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
	this._uncache(false);}//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
	if(tl._timeline){while(tl._timeline){if(tl._timeline._time!==(tl._startTime+tl._totalTime)/tl._timeScale){tl.totalTime(tl._totalTime,true);}tl=tl._timeline;}}}if(this._gc){this._enabled(true,false);}if(this._totalTime!==time||this._duration===0){if(_lazyTweens.length){_lazyRender();}this.render(time,suppressEvents,false);if(_lazyTweens.length){//in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
	_lazyRender();}}}return this;};p.progress=p.totalProgress=function(value,suppressEvents){var duration=this.duration();return!arguments.length?duration?this._time/duration:this.ratio:this.totalTime(duration*value,suppressEvents);};p.startTime=function(value){if(!arguments.length){return this._startTime;}if(value!==this._startTime){this._startTime=value;if(this.timeline)if(this.timeline._sortChildren){this.timeline.add(this,value-this._delay);//ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
	}}return this;};p.endTime=function(includeRepeats){return this._startTime+(includeRepeats!=false?this.totalDuration():this.duration())/this._timeScale;};p.timeScale=function(value){if(!arguments.length){return this._timeScale;}value=value||_tinyNum;//can't allow zero because it'll throw the math off
	if(this._timeline&&this._timeline.smoothChildTiming){var pauseTime=this._pauseTime,t=pauseTime||pauseTime===0?pauseTime:this._timeline.totalTime();this._startTime=t-(t-this._startTime)*this._timeScale/value;}this._timeScale=value;return this._uncache(false);};p.reversed=function(value){if(!arguments.length){return this._reversed;}if(value!=this._reversed){this._reversed=value;this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,true);}return this;};p.paused=function(value){if(!arguments.length){return this._paused;}var tl=this._timeline,raw,elapsed;if(value!=this._paused)if(tl){if(!_tickerActive&&!value){_ticker.wake();}raw=tl.rawTime();elapsed=raw-this._pauseTime;if(!value&&tl.smoothChildTiming){this._startTime+=elapsed;this._uncache(false);}this._pauseTime=value?raw:null;this._paused=value;this._active=this.isActive();if(!value&&elapsed!==0&&this._initted&&this.duration()){raw=tl.smoothChildTiming?this._totalTime:(raw-this._startTime)/this._timeScale;this.render(raw,raw===this._totalTime,true);//in case the target's properties changed via some other tween or manual update by the user, we should force a render.
	}}if(this._gc&&!value){this._enabled(true,false);}return this;};/*
	 * ----------------------------------------------------------------
	 * SimpleTimeline
	 * ----------------------------------------------------------------
	 */var SimpleTimeline=_class("core.SimpleTimeline",function(vars){Animation.call(this,0,vars);this.autoRemoveChildren=this.smoothChildTiming=true;});p=SimpleTimeline.prototype=new Animation();p.constructor=SimpleTimeline;p.kill()._gc=false;p._first=p._last=p._recent=null;p._sortChildren=false;p.add=p.insert=function(child,position,align,stagger){var prevTween,st;child._startTime=Number(position||0)+child._delay;if(child._paused)if(this!==child._timeline){//we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
	child._pauseTime=child._startTime+(this.rawTime()-child._startTime)/child._timeScale;}if(child.timeline){child.timeline._remove(child,true);//removes from existing timeline so that it can be properly added to this one.
	}child.timeline=child._timeline=this;if(child._gc){child._enabled(true,true);}prevTween=this._last;if(this._sortChildren){st=child._startTime;while(prevTween&&prevTween._startTime>st){prevTween=prevTween._prev;}}if(prevTween){child._next=prevTween._next;prevTween._next=child;}else{child._next=this._first;this._first=child;}if(child._next){child._next._prev=child;}else{this._last=child;}child._prev=prevTween;this._recent=child;if(this._timeline){this._uncache(true);}return this;};p._remove=function(tween,skipDisable){if(tween.timeline===this){if(!skipDisable){tween._enabled(false,true);}if(tween._prev){tween._prev._next=tween._next;}else if(this._first===tween){this._first=tween._next;}if(tween._next){tween._next._prev=tween._prev;}else if(this._last===tween){this._last=tween._prev;}tween._next=tween._prev=tween.timeline=null;if(tween===this._recent){this._recent=this._last;}if(this._timeline){this._uncache(true);}}return this;};p.render=function(time,suppressEvents,force){var tween=this._first,next;this._totalTime=this._time=this._rawPrevTime=time;while(tween){next=tween._next;//record it here because the value could change after rendering...
	if(tween._active||time>=tween._startTime&&!tween._paused){if(!tween._reversed){tween.render((time-tween._startTime)*tween._timeScale,suppressEvents,force);}else{tween.render((!tween._dirty?tween._totalDuration:tween.totalDuration())-(time-tween._startTime)*tween._timeScale,suppressEvents,force);}}tween=next;}};p.rawTime=function(){if(!_tickerActive){_ticker.wake();}return this._totalTime;};/*
	 * ----------------------------------------------------------------
	 * TweenLite
	 * ----------------------------------------------------------------
	 */var TweenLite=_class("TweenLite",function(target,duration,vars){Animation.call(this,duration,vars);this.render=TweenLite.prototype.render;//speed optimization (avoid prototype lookup on this "hot" method)
	if(target==null){throw"Cannot tween a null target.";}this.target=target=typeof target!=="string"?target:TweenLite.selector(target)||target;var isSelector=target.jquery||target.length&&target!==window&&target[0]&&(target[0]===window||target[0].nodeType&&target[0].style&&!target.nodeType),overwrite=this.vars.overwrite,i,targ,targets;this._overwrite=overwrite=overwrite==null?_overwriteLookup[TweenLite.defaultOverwrite]:typeof overwrite==="number"?overwrite>>0:_overwriteLookup[overwrite];if((isSelector||target instanceof Array||target.push&&_isArray(target))&&typeof target[0]!=="number"){this._targets=targets=_slice(target);//don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
	this._propLookup=[];this._siblings=[];for(i=0;i<targets.length;i++){targ=targets[i];if(!targ){targets.splice(i--,1);continue;}else if(typeof targ==="string"){targ=targets[i--]=TweenLite.selector(targ);//in case it's an array of strings
	if(typeof targ==="string"){targets.splice(i+1,1);//to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
	}continue;}else if(targ.length&&targ!==window&&targ[0]&&(targ[0]===window||targ[0].nodeType&&targ[0].style&&!targ.nodeType)){//in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
	targets.splice(i--,1);this._targets=targets=targets.concat(_slice(targ));continue;}this._siblings[i]=_register(targ,this,false);if(overwrite===1)if(this._siblings[i].length>1){_applyOverwrite(targ,this,null,1,this._siblings[i]);}}}else{this._propLookup={};this._siblings=_register(target,this,false);if(overwrite===1)if(this._siblings.length>1){_applyOverwrite(target,this,null,1,this._siblings);}}if(this.vars.immediateRender||duration===0&&this._delay===0&&this.vars.immediateRender!==false){this._time=-_tinyNum;//forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
	this.render(Math.min(0,-this._delay));//in case delay is negative
	}},true),_isSelector=function _isSelector(v){return v&&v.length&&v!==window&&v[0]&&(v[0]===window||v[0].nodeType&&v[0].style&&!v.nodeType);//we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
	},_autoCSS=function _autoCSS(vars,target){var css={},p;for(p in vars){if(!_reservedProps[p]&&(!(p in target)||p==="transform"||p==="x"||p==="y"||p==="width"||p==="height"||p==="className"||p==="border")&&(!_plugins[p]||_plugins[p]&&_plugins[p]._autoCSS)){//note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
	css[p]=vars[p];delete vars[p];}}vars.css=css;};p=TweenLite.prototype=new Animation();p.constructor=TweenLite;p.kill()._gc=false;//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------
	p.ratio=0;p._firstPT=p._targets=p._overwrittenProps=p._startAt=null;p._notifyPluginsOfEnabled=p._lazy=false;TweenLite.version="1.19.0";TweenLite.defaultEase=p._ease=new Ease(null,null,1,1);TweenLite.defaultOverwrite="auto";TweenLite.ticker=_ticker;TweenLite.autoSleep=120;TweenLite.lagSmoothing=function(threshold,adjustedLag){_ticker.lagSmoothing(threshold,adjustedLag);};TweenLite.selector=window.$||window.jQuery||function(e){var selector=window.$||window.jQuery;if(selector){TweenLite.selector=selector;return selector(e);}return typeof document==="undefined"?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById(e.charAt(0)==="#"?e.substr(1):e);};var _lazyTweens=[],_lazyLookup={},_numbersExp=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
	_setRatio=function _setRatio(v){var pt=this._firstPT,min=0.000001,val;while(pt){val=!pt.blob?pt.c*v+pt.s:v?this.join(""):this.start;if(pt.m){val=pt.m(val,this._target||pt.t);}else if(val<min)if(val>-min){//prevents issues with converting very small numbers to strings in the browser
	val=0;}if(!pt.f){pt.t[pt.p]=val;}else if(pt.fp){pt.t[pt.p](pt.fp,val);}else{pt.t[pt.p](val);}pt=pt._next;}},//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
	_blobDif=function _blobDif(start,end,filter,pt){var a=[start,end],charIndex=0,s="",color=0,startNums,endNums,num,i,l,nonNumbers,currentNum;a.start=start;if(filter){filter(a);//pass an array with the starting and ending values and let the filter do whatever it needs to the values.
	start=a[0];end=a[1];}a.length=0;startNums=start.match(_numbersExp)||[];endNums=end.match(_numbersExp)||[];if(pt){pt._next=null;pt.blob=1;a._firstPT=a._applyPT=pt;//apply last in the linked list (which means inserting it first)
	}l=endNums.length;for(i=0;i<l;i++){currentNum=endNums[i];nonNumbers=end.substr(charIndex,end.indexOf(currentNum,charIndex)-charIndex);s+=nonNumbers||!i?nonNumbers:",";//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
	charIndex+=nonNumbers.length;if(color){//sense rgba() values and round them.
	color=(color+1)%5;}else if(nonNumbers.substr(-5)==="rgba("){color=1;}if(currentNum===startNums[i]||startNums.length<=i){s+=currentNum;}else{if(s){a.push(s);s="";}num=parseFloat(startNums[i]);a.push(num);a._firstPT={_next:a._firstPT,t:a,p:a.length-1,s:num,c:(currentNum.charAt(1)==="="?parseInt(currentNum.charAt(0)+"1",10)*parseFloat(currentNum.substr(2)):parseFloat(currentNum)-num)||0,f:0,m:color&&color<4?Math.round:0};//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
	}charIndex+=currentNum.length;}s+=end.substr(charIndex);if(s){a.push(s);}a.setRatio=_setRatio;return a;},//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
	_addPropTween=function _addPropTween(target,prop,start,end,overwriteProp,mod,funcParam,stringFilter,index){if(typeof end==="function"){end=end(index||0,target);}var s=start==="get"?target[prop]:start,type=_typeof(target[prop]),isRelative=typeof end==="string"&&end.charAt(1)==="=",pt={t:target,p:prop,s:s,f:type==="function",pg:0,n:overwriteProp||prop,m:!mod?0:typeof mod==="function"?mod:Math.round,pr:0,c:isRelative?parseInt(end.charAt(0)+"1",10)*parseFloat(end.substr(2)):parseFloat(end)-s||0},blob,getterName;if(type!=="number"){if(type==="function"&&start==="get"){getterName=prop.indexOf("set")||typeof target["get"+prop.substr(3)]!=="function"?prop:"get"+prop.substr(3);pt.s=s=funcParam?target[getterName](funcParam):target[getterName]();}if(typeof s==="string"&&(funcParam||isNaN(s))){//a blob (string that has multiple numbers in it)
	pt.fp=funcParam;blob=_blobDif(s,end,stringFilter||TweenLite.defaultStringFilter,pt);pt={t:blob,p:"setRatio",s:0,c:1,f:2,pg:0,n:overwriteProp||prop,pr:0,m:0};//"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
	}else if(!isRelative){pt.s=parseFloat(s);pt.c=parseFloat(end)-pt.s||0;}}if(pt.c){//only add it to the linked list if there's a change.
	if(pt._next=this._firstPT){pt._next._prev=pt;}this._firstPT=pt;return pt;}},_internals=TweenLite._internals={isArray:_isArray,isSelector:_isSelector,lazyTweens:_lazyTweens,blobDif:_blobDif},//gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
	_plugins=TweenLite._plugins={},_tweenLookup=_internals.tweenLookup={},_tweenLookupNum=0,_reservedProps=_internals.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},_overwriteLookup={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},_rootFramesTimeline=Animation._rootFramesTimeline=new SimpleTimeline(),_rootTimeline=Animation._rootTimeline=new SimpleTimeline(),_nextGCFrame=30,_lazyRender=_internals.lazyRender=function(){var i=_lazyTweens.length,tween;_lazyLookup={};while(--i>-1){tween=_lazyTweens[i];if(tween&&tween._lazy!==false){tween.render(tween._lazy[0],tween._lazy[1],true);tween._lazy=false;}}_lazyTweens.length=0;};_rootTimeline._startTime=_ticker.time;_rootFramesTimeline._startTime=_ticker.frame;_rootTimeline._active=_rootFramesTimeline._active=true;setTimeout(_lazyRender,1);//on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".
	Animation._updateRoot=TweenLite.render=function(){var i,a,p;if(_lazyTweens.length){//if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
	_lazyRender();}_rootTimeline.render((_ticker.time-_rootTimeline._startTime)*_rootTimeline._timeScale,false,false);_rootFramesTimeline.render((_ticker.frame-_rootFramesTimeline._startTime)*_rootFramesTimeline._timeScale,false,false);if(_lazyTweens.length){_lazyRender();}if(_ticker.frame>=_nextGCFrame){//dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
	_nextGCFrame=_ticker.frame+(parseInt(TweenLite.autoSleep,10)||120);for(p in _tweenLookup){a=_tweenLookup[p].tweens;i=a.length;while(--i>-1){if(a[i]._gc){a.splice(i,1);}}if(a.length===0){delete _tweenLookup[p];}}//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
	p=_rootTimeline._first;if(!p||p._paused)if(TweenLite.autoSleep&&!_rootFramesTimeline._first&&_ticker._listeners.tick.length===1){while(p&&p._paused){p=p._next;}if(!p){_ticker.sleep();}}}};_ticker.addEventListener("tick",Animation._updateRoot);var _register=function _register(target,tween,scrub){var id=target._gsTweenID,a,i;if(!_tweenLookup[id||(target._gsTweenID=id="t"+_tweenLookupNum++)]){_tweenLookup[id]={target:target,tweens:[]};}if(tween){a=_tweenLookup[id].tweens;a[i=a.length]=tween;if(scrub){while(--i>-1){if(a[i]===tween){a.splice(i,1);}}}}return _tweenLookup[id].tweens;},_onOverwrite=function _onOverwrite(overwrittenTween,overwritingTween,target,killedProps){var func=overwrittenTween.vars.onOverwrite,r1,r2;if(func){r1=func(overwrittenTween,overwritingTween,target,killedProps);}func=TweenLite.onOverwrite;if(func){r2=func(overwrittenTween,overwritingTween,target,killedProps);}return r1!==false&&r2!==false;},_applyOverwrite=function _applyOverwrite(target,tween,props,mode,siblings){var i,changed,curTween,l;if(mode===1||mode>=4){l=siblings.length;for(i=0;i<l;i++){if((curTween=siblings[i])!==tween){if(!curTween._gc){if(curTween._kill(null,target,tween)){changed=true;}}}else if(mode===5){break;}}return changed;}//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
	var startTime=tween._startTime+_tinyNum,overlaps=[],oCount=0,zeroDur=tween._duration===0,globalStart;i=siblings.length;while(--i>-1){if((curTween=siblings[i])===tween||curTween._gc||curTween._paused){//ignore
	}else if(curTween._timeline!==tween._timeline){globalStart=globalStart||_checkOverlap(tween,0,zeroDur);if(_checkOverlap(curTween,globalStart,zeroDur)===0){overlaps[oCount++]=curTween;}}else if(curTween._startTime<=startTime)if(curTween._startTime+curTween.totalDuration()/curTween._timeScale>startTime)if(!((zeroDur||!curTween._initted)&&startTime-curTween._startTime<=0.0000000002)){overlaps[oCount++]=curTween;}}i=oCount;while(--i>-1){curTween=overlaps[i];if(mode===2)if(curTween._kill(props,target,tween)){changed=true;}if(mode!==2||!curTween._firstPT&&curTween._initted){if(mode!==2&&!_onOverwrite(curTween,tween)){continue;}if(curTween._enabled(false,false)){//if all property tweens have been overwritten, kill the tween.
	changed=true;}}}return changed;},_checkOverlap=function _checkOverlap(tween,reference,zeroDur){var tl=tween._timeline,ts=tl._timeScale,t=tween._startTime;while(tl._timeline){t+=tl._startTime;ts*=tl._timeScale;if(tl._paused){return-100;}tl=tl._timeline;}t/=ts;return t>reference?t-reference:zeroDur&&t===reference||!tween._initted&&t-reference<2*_tinyNum?_tinyNum:(t+=tween.totalDuration()/tween._timeScale/ts)>reference+_tinyNum?0:t-reference-_tinyNum;};//---- TweenLite instance methods -----------------------------------------------------------------------------
	p._init=function(){var v=this.vars,op=this._overwrittenProps,dur=this._duration,immediate=!!v.immediateRender,ease=v.ease,i,initPlugins,pt,p,startVars,l;if(v.startAt){if(this._startAt){this._startAt.render(-1,true);//if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
	this._startAt.kill();}startVars={};for(p in v.startAt){//copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
	startVars[p]=v.startAt[p];}startVars.overwrite=false;startVars.immediateRender=true;startVars.lazy=immediate&&v.lazy!==false;startVars.startAt=startVars.delay=null;//no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
	this._startAt=TweenLite.to(this.target,0,startVars);if(immediate){if(this._time>0){this._startAt=null;//tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
	}else if(dur!==0){return;//we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
	}}}else if(v.runBackwards&&dur!==0){//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
	if(this._startAt){this._startAt.render(-1,true);this._startAt.kill();this._startAt=null;}else{if(this._time!==0){//in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
	immediate=false;}pt={};for(p in v){//copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
	if(!_reservedProps[p]||p==="autoCSS"){pt[p]=v[p];}}pt.overwrite=0;pt.data="isFromStart";//we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
	pt.lazy=immediate&&v.lazy!==false;pt.immediateRender=immediate;//zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
	this._startAt=TweenLite.to(this.target,0,pt);if(!immediate){this._startAt._init();//ensures that the initial values are recorded
	this._startAt._enabled(false);//no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
	if(this.vars.immediateRender){this._startAt=null;}}else if(this._time===0){return;}}}this._ease=ease=!ease?TweenLite.defaultEase:ease instanceof Ease?ease:typeof ease==="function"?new Ease(ease,v.easeParams):_easeMap[ease]||TweenLite.defaultEase;if(v.easeParams instanceof Array&&ease.config){this._ease=ease.config.apply(ease,v.easeParams);}this._easeType=this._ease._type;this._easePower=this._ease._power;this._firstPT=null;if(this._targets){l=this._targets.length;for(i=0;i<l;i++){if(this._initProps(this._targets[i],this._propLookup[i]={},this._siblings[i],op?op[i]:null,i)){initPlugins=true;}}}else{initPlugins=this._initProps(this.target,this._propLookup,this._siblings,op,0);}if(initPlugins){TweenLite._onPluginEvent("_onInitAllProps",this);//reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
	}if(op)if(!this._firstPT)if(typeof this.target!=="function"){//if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
	this._enabled(false,false);}if(v.runBackwards){pt=this._firstPT;while(pt){pt.s+=pt.c;pt.c=-pt.c;pt=pt._next;}}this._onUpdate=v.onUpdate;this._initted=true;};p._initProps=function(target,propLookup,siblings,overwrittenProps,index){var p,i,initPlugins,plugin,pt,v;if(target==null){return false;}if(_lazyLookup[target._gsTweenID]){_lazyRender();//if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
	}if(!this.vars.css)if(target.style)if(target!==window&&target.nodeType)if(_plugins.css)if(this.vars.autoCSS!==false){//it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
	_autoCSS(this.vars,target);}for(p in this.vars){v=this.vars[p];if(_reservedProps[p]){if(v)if(v instanceof Array||v.push&&_isArray(v))if(v.join("").indexOf("{self}")!==-1){this.vars[p]=v=this._swapSelfInParams(v,this);}}else if(_plugins[p]&&(plugin=new _plugins[p]())._onInitTween(target,this.vars[p],this,index)){//t - target 		[object]
	//p - property 		[string]
	//s - start			[number]
	//c - change		[number]
	//f - isFunction	[boolean]
	//n - name			[string]
	//pg - isPlugin 	[boolean]
	//pr - priority		[number]
	//m - mod           [function | 0]
	this._firstPT=pt={_next:this._firstPT,t:plugin,p:"setRatio",s:0,c:1,f:1,n:p,pg:1,pr:plugin._priority,m:0};i=plugin._overwriteProps.length;while(--i>-1){propLookup[plugin._overwriteProps[i]]=this._firstPT;}if(plugin._priority||plugin._onInitAllProps){initPlugins=true;}if(plugin._onDisable||plugin._onEnable){this._notifyPluginsOfEnabled=true;}if(pt._next){pt._next._prev=pt;}}else{propLookup[p]=_addPropTween.call(this,target,p,"get",v,p,0,null,this.vars.stringFilter,index);}}if(overwrittenProps)if(this._kill(overwrittenProps,target)){//another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
	return this._initProps(target,propLookup,siblings,overwrittenProps,index);}if(this._overwrite>1)if(this._firstPT)if(siblings.length>1)if(_applyOverwrite(target,this,propLookup,this._overwrite,siblings)){this._kill(propLookup,target);return this._initProps(target,propLookup,siblings,overwrittenProps,index);}if(this._firstPT)if(this.vars.lazy!==false&&this._duration||this.vars.lazy&&!this._duration){//zero duration tweens don't lazy render by default; everything else does.
	_lazyLookup[target._gsTweenID]=true;}return initPlugins;};p.render=function(time,suppressEvents,force){var prevTime=this._time,duration=this._duration,prevRawPrevTime=this._rawPrevTime,isComplete,callback,pt,rawPrevTime;if(time>=duration-0.0000001){//to work around occasional floating point math artifacts.
	this._totalTime=this._time=duration;this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1;if(!this._reversed){isComplete=true;callback="onComplete";force=force||this._timeline.autoRemoveChildren;//otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
	}if(duration===0)if(this._initted||!this.vars.lazy||force){//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
	if(this._startTime===this._timeline._duration){//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
	time=0;}if(prevRawPrevTime<0||time<=0&&time>=-0.0000001||prevRawPrevTime===_tinyNum&&this.data!=="isPause")if(prevRawPrevTime!==time){//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
	force=true;if(prevRawPrevTime>_tinyNum){callback="onReverseComplete";}}this._rawPrevTime=rawPrevTime=!suppressEvents||time||prevRawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	}}else if(time<0.0000001){//to work around occasional floating point math artifacts, round super small values to 0.
	this._totalTime=this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(prevTime!==0||duration===0&&prevRawPrevTime>0){callback="onReverseComplete";isComplete=this._reversed;}if(time<0){this._active=false;if(duration===0)if(this._initted||!this.vars.lazy||force){//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
	if(prevRawPrevTime>=0&&!(prevRawPrevTime===_tinyNum&&this.data==="isPause")){force=true;}this._rawPrevTime=rawPrevTime=!suppressEvents||time||prevRawPrevTime===time?time:_tinyNum;//when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
	}}if(!this._initted){//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
	force=true;}}else{this._totalTime=this._time=time;if(this._easeType){var r=time/duration,type=this._easeType,pow=this._easePower;if(type===1||type===3&&r>=0.5){r=1-r;}if(type===3){r*=2;}if(pow===1){r*=r;}else if(pow===2){r*=r*r;}else if(pow===3){r*=r*r*r;}else if(pow===4){r*=r*r*r*r;}if(type===1){this.ratio=1-r;}else if(type===2){this.ratio=r;}else if(time/duration<0.5){this.ratio=r/2;}else{this.ratio=1-r/2;}}else{this.ratio=this._ease.getRatio(time/duration);}}if(this._time===prevTime&&!force){return;}else if(!this._initted){this._init();if(!this._initted||this._gc){//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
	return;}else if(!force&&this._firstPT&&(this.vars.lazy!==false&&this._duration||this.vars.lazy&&!this._duration)){this._time=this._totalTime=prevTime;this._rawPrevTime=prevRawPrevTime;_lazyTweens.push(this);this._lazy=[time,suppressEvents];return;}//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
	if(this._time&&!isComplete){this.ratio=this._ease.getRatio(this._time/duration);}else if(isComplete&&this._ease._calcEnd){this.ratio=this._ease.getRatio(this._time===0?0:1);}}if(this._lazy!==false){//in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
	this._lazy=false;}if(!this._active)if(!this._paused&&this._time!==prevTime&&time>=0){this._active=true;//so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
	}if(prevTime===0){if(this._startAt){if(time>=0){this._startAt.render(time,suppressEvents,force);}else if(!callback){callback="_dummyGS";//if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
	}}if(this.vars.onStart)if(this._time!==0||duration===0)if(!suppressEvents){this._callback("onStart");}}pt=this._firstPT;while(pt){if(pt.f){pt.t[pt.p](pt.c*this.ratio+pt.s);}else{pt.t[pt.p]=pt.c*this.ratio+pt.s;}pt=pt._next;}if(this._onUpdate){if(time<0)if(this._startAt&&time!==-0.0001){//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
	this._startAt.render(time,suppressEvents,force);//note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
	}if(!suppressEvents)if(this._time!==prevTime||isComplete||force){this._callback("onUpdate");}}if(callback)if(!this._gc||force){//check _gc because there's a chance that kill() could be called in an onUpdate
	if(time<0&&this._startAt&&!this._onUpdate&&time!==-0.0001){//-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
	this._startAt.render(time,suppressEvents,force);}if(isComplete){if(this._timeline.autoRemoveChildren){this._enabled(false,false);}this._active=false;}if(!suppressEvents&&this.vars[callback]){this._callback(callback);}if(duration===0&&this._rawPrevTime===_tinyNum&&rawPrevTime!==_tinyNum){//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
	this._rawPrevTime=0;}}};p._kill=function(vars,target,overwritingTween){if(vars==="all"){vars=null;}if(vars==null)if(target==null||target===this.target){this._lazy=false;return this._enabled(false,false);}target=typeof target!=="string"?target||this._targets||this.target:TweenLite.selector(target)||target;var simultaneousOverwrite=overwritingTween&&this._time&&overwritingTween._startTime===this._startTime&&this._timeline===overwritingTween._timeline,i,overwrittenProps,p,pt,propLookup,changed,killProps,record,killed;if((_isArray(target)||_isSelector(target))&&typeof target[0]!=="number"){i=target.length;while(--i>-1){if(this._kill(vars,target[i],overwritingTween)){changed=true;}}}else{if(this._targets){i=this._targets.length;while(--i>-1){if(target===this._targets[i]){propLookup=this._propLookup[i]||{};this._overwrittenProps=this._overwrittenProps||[];overwrittenProps=this._overwrittenProps[i]=vars?this._overwrittenProps[i]||{}:"all";break;}}}else if(target!==this.target){return false;}else{propLookup=this._propLookup;overwrittenProps=this._overwrittenProps=vars?this._overwrittenProps||{}:"all";}if(propLookup){killProps=vars||propLookup;record=vars!==overwrittenProps&&overwrittenProps!=="all"&&vars!==propLookup&&((typeof vars==="undefined"?"undefined":_typeof(vars))!=="object"||!vars._tempKill);//_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
	if(overwritingTween&&(TweenLite.onOverwrite||this.vars.onOverwrite)){for(p in killProps){if(propLookup[p]){if(!killed){killed=[];}killed.push(p);}}if((killed||!vars)&&!_onOverwrite(this,overwritingTween,target,killed)){//if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
	return false;}}for(p in killProps){if(pt=propLookup[p]){if(simultaneousOverwrite){//if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
	if(pt.f){pt.t[pt.p](pt.s);}else{pt.t[pt.p]=pt.s;}changed=true;}if(pt.pg&&pt.t._kill(killProps)){changed=true;//some plugins need to be notified so they can perform cleanup tasks first
	}if(!pt.pg||pt.t._overwriteProps.length===0){if(pt._prev){pt._prev._next=pt._next;}else if(pt===this._firstPT){this._firstPT=pt._next;}if(pt._next){pt._next._prev=pt._prev;}pt._next=pt._prev=null;}delete propLookup[p];}if(record){overwrittenProps[p]=1;}}if(!this._firstPT&&this._initted){//if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
	this._enabled(false,false);}}}return changed;};p.invalidate=function(){if(this._notifyPluginsOfEnabled){TweenLite._onPluginEvent("_onDisable",this);}this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null;this._notifyPluginsOfEnabled=this._active=this._lazy=false;this._propLookup=this._targets?{}:[];Animation.prototype.invalidate.call(this);if(this.vars.immediateRender){this._time=-_tinyNum;//forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
	this.render(Math.min(0,-this._delay));//in case delay is negative.
	}return this;};p._enabled=function(enabled,ignoreTimeline){if(!_tickerActive){_ticker.wake();}if(enabled&&this._gc){var targets=this._targets,i;if(targets){i=targets.length;while(--i>-1){this._siblings[i]=_register(targets[i],this,true);}}else{this._siblings=_register(this.target,this,true);}}Animation.prototype._enabled.call(this,enabled,ignoreTimeline);if(this._notifyPluginsOfEnabled)if(this._firstPT){return TweenLite._onPluginEvent(enabled?"_onEnable":"_onDisable",this);}return false;};//----TweenLite static methods -----------------------------------------------------
	TweenLite.to=function(target,duration,vars){return new TweenLite(target,duration,vars);};TweenLite.from=function(target,duration,vars){vars.runBackwards=true;vars.immediateRender=vars.immediateRender!=false;return new TweenLite(target,duration,vars);};TweenLite.fromTo=function(target,duration,fromVars,toVars){toVars.startAt=fromVars;toVars.immediateRender=toVars.immediateRender!=false&&fromVars.immediateRender!=false;return new TweenLite(target,duration,toVars);};TweenLite.delayedCall=function(delay,callback,params,scope,useFrames){return new TweenLite(callback,0,{delay:delay,onComplete:callback,onCompleteParams:params,callbackScope:scope,onReverseComplete:callback,onReverseCompleteParams:params,immediateRender:false,lazy:false,useFrames:useFrames,overwrite:0});};TweenLite.set=function(target,vars){return new TweenLite(target,0,vars);};TweenLite.getTweensOf=function(target,onlyActive){if(target==null){return[];}target=typeof target!=="string"?target:TweenLite.selector(target)||target;var i,a,j,t;if((_isArray(target)||_isSelector(target))&&typeof target[0]!=="number"){i=target.length;a=[];while(--i>-1){a=a.concat(TweenLite.getTweensOf(target[i],onlyActive));}i=a.length;//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
	while(--i>-1){t=a[i];j=i;while(--j>-1){if(t===a[j]){a.splice(i,1);}}}}else{a=_register(target).concat();i=a.length;while(--i>-1){if(a[i]._gc||onlyActive&&!a[i].isActive()){a.splice(i,1);}}}return a;};TweenLite.killTweensOf=TweenLite.killDelayedCallsTo=function(target,onlyActive,vars){if((typeof onlyActive==="undefined"?"undefined":_typeof(onlyActive))==="object"){vars=onlyActive;//for backwards compatibility (before "onlyActive" parameter was inserted)
	onlyActive=false;}var a=TweenLite.getTweensOf(target,onlyActive),i=a.length;while(--i>-1){a[i]._kill(vars,target);}};/*
	 * ----------------------------------------------------------------
	 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
	 * ----------------------------------------------------------------
	 */var TweenPlugin=_class("plugins.TweenPlugin",function(props,priority){this._overwriteProps=(props||"").split(",");this._propName=this._overwriteProps[0];this._priority=priority||0;this._super=TweenPlugin.prototype;},true);p=TweenPlugin.prototype;TweenPlugin.version="1.19.0";TweenPlugin.API=2;p._firstPT=null;p._addTween=_addPropTween;p.setRatio=_setRatio;p._kill=function(lookup){var a=this._overwriteProps,pt=this._firstPT,i;if(lookup[this._propName]!=null){this._overwriteProps=[];}else{i=a.length;while(--i>-1){if(lookup[a[i]]!=null){a.splice(i,1);}}}while(pt){if(lookup[pt.n]!=null){if(pt._next){pt._next._prev=pt._prev;}if(pt._prev){pt._prev._next=pt._next;pt._prev=null;}else if(this._firstPT===pt){this._firstPT=pt._next;}}pt=pt._next;}return false;};p._mod=p._roundProps=function(lookup){var pt=this._firstPT,val;while(pt){val=lookup[this._propName]||pt.n!=null&&lookup[pt.n.split(this._propName+"_").join("")];if(val&&typeof val==="function"){//some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
	if(pt.f===2){pt.t._applyPT.m=val;}else{pt.m=val;}}pt=pt._next;}};TweenLite._onPluginEvent=function(type,tween){var pt=tween._firstPT,changed,pt2,first,last,next;if(type==="_onInitAllProps"){//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
	while(pt){next=pt._next;pt2=first;while(pt2&&pt2.pr>pt.pr){pt2=pt2._next;}if(pt._prev=pt2?pt2._prev:last){pt._prev._next=pt;}else{first=pt;}if(pt._next=pt2){pt2._prev=pt;}else{last=pt;}pt=next;}pt=tween._firstPT=first;}while(pt){if(pt.pg)if(typeof pt.t[type]==="function")if(pt.t[type]()){changed=true;}pt=pt._next;}return changed;};TweenPlugin.activate=function(plugins){var i=plugins.length;while(--i>-1){if(plugins[i].API===TweenPlugin.API){_plugins[new plugins[i]()._propName]=plugins[i];}}return true;};//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
	_gsDefine.plugin=function(config){if(!config||!config.propName||!config.init||!config.API){throw"illegal plugin definition.";}var propName=config.propName,priority=config.priority||0,overwriteProps=config.overwriteProps,map={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},Plugin=_class("plugins."+propName.charAt(0).toUpperCase()+propName.substr(1)+"Plugin",function(){TweenPlugin.call(this,propName,priority);this._overwriteProps=overwriteProps||[];},config.global===true),p=Plugin.prototype=new TweenPlugin(propName),prop;p.constructor=Plugin;Plugin.API=config.API;for(prop in map){if(typeof config[prop]==="function"){p[map[prop]]=config[prop];}}Plugin.version=config.version;TweenPlugin.activate([Plugin]);return Plugin;};//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
	a=window._gsQueue;if(a){for(i=0;i<a.length;i++){a[i]();}for(p in _defLookup){if(!_defLookup[p].func){window.console.log("GSAP encountered missing dependency: "+p);}}}_tickerActive=false;//ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
	})(typeof module!=="undefined"&&module.exports&&typeof global!=="undefined"?global:undefined||window,"TweenMax");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ecdd509cadbf1ea78b8d2e31ec52328c.eot";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a990f611f2305dc12965f186c2ef2690.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4d9f3f9e5195e7b074bb63ba4ce42208.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "30799efa5bf74129468ad4e257551dc3.eot";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dfe56a876d0282555d1e2458e278060f.eot";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return `<!-- <div class="container"> -->
	  <div class="alt-intro page" data-animate-in="landingToInfo" data-animate-out="outOfInfo">
	    <!-- <div class="row">
	      <div class="col s12"> -->
	        <a name="info"></a>
	        <img id="mountain1" src="./newSVG/blueMountains/mountainFront2.svg" alt="" />
	        <img id="mountain2" src="./newSVG/blueMountains/mountainMiddle.svg" alt="" />
	        <img id="mountain4" src="./newSVG/blueMountains/mountainBack.svg" alt="" />
	      <!-- </div>
	    </div> -->
	    <!-- <div class="row">
	      <div class="col s12"> -->
	        <div class="alt-info-box">
	          <span>Hello, What is your name?</span>
	          <input id="input-focus" type="text" name="name" value="" autocomplete="off">
	          <button class="waves-effect waves-light btn-flat" id="name-question-button" type="button" name="button">Submit</button>
	        </div>
	      <!-- </div>
	    </div> -->
	    <!-- <div class="row">
	      <div class="col s12"> -->
	        <div class="breathing-information">
	          <span class="name">Hi</span><br>
	          <span>When I feel worried or upset, I take slow, deep breaths to make my belly move up and down.  This helps me to feel more calm and relaxed. <br><br>
	          Whenever you're feeling anxious, find a place you can stand, sit or lie down comfortably. Place your hands on your belly and breathe with me. </span>
	          <a href="#breathe"><button class="breathing-start waves-effect waves-light btn-flat" id="start-breathing-cat-button" type="button">Start</button></a>
	        </div>
	      <!-- </div>
	    </div> -->
	  </div>
	<!-- </div> -->
	`;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return `<div class="breathing page" data-animate-in="infoToCatView" data-animate-out="outOfBreathing">
	  <a name="breathe"></a>
	  <a href="#info"><i id="exit-breathing" class="material-icons">keyboard_backspace</i><br></a>
	  <!-- //change to 550 and ID -->
	  <img id="mountain3" src="./newSVG/breathingPage/breathing-background.svg" />
	  <div class="cat">
	    <div class="sync-breath-text">
	      <p>If you like, you can sync your breath with mine!</p>
	      <p id="extra-breathing-instructions">Keep repeating this for 2-5 minutes or until you feel better and then press the button below.</p>
	    </div>
	        <svg id="head" width="169px" height="170px" viewBox="0 0 169 170" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                <g id="Group">
	                  <g>
	                    <polygon id="Triangle-1" fill="#808FBE" points="3.90847892 0.0158737429 55.3799591 35.667552 15.3915727 61.7572705 3.90847892 0.0158737429"></polygon>
	                    <polygon id="Triangle-1" fill="#808FBE" points="168.313734 2.91907193 116.842254 38.5707502 156.83064 64.6604687 168.313734 2.91907193"></polygon>
	                    <polygon id="Triangle-1" fill="#494A97" points="17.1525424 20.2649167 50.2598097 41.2827139 24.5386493 56.6634321 17.1525424 20.2649167"></polygon>
	                    <polygon id="Triangle-1" fill="#494A97" transform="translate(141.265498, 38.464174) scale(-1, 1) translate(-141.265498, -38.464174) " points="124.711864 20.2649167 157.819132 41.2827139 132.097971 56.6634321 124.711864 20.2649167"></polygon>
	                    <path d="M81.6351107,155.740721 C126.720937,155.740721 163.270221,127.144986 163.270221,91.8703601 C163.270221,56.5957342 126.720937,28 81.6351107,28 C36.549284,28 0,56.5957342 0,91.8703601 C0,116.697117 18.1048119,138.215462 44.5481746,148.784387 C55.6763618,153.232118 68.2812959,155.740721 81.6351107,155.740721 Z" id="Oval-2" fill="#297C97"></path>
	                    <path d="M86,155.740721 C133.074907,155.740721 165.457182,127.144986 165.457182,91.8703601 C165.457182,56.5957342 133.074907,28 86,28" id="Oval-2" fill="#1B6C86"></path>
	                    <path d="M87,28 L87,105.660552" id="Path-2" stroke="#091A3E"></path>
	                    <g id="Line-+-Line-+-Line" transform="translate(21.925755, 78.421757)" stroke="#808FBE">
	                      <path d="M78.300503,9.43539412 L123.091449,0.725799547" id="Line"></path>
	                      <path d="M78.300503,10.8869932 L128.148491,9.43539412" id="Line"></path>
	                      <path d="M78.300503,12.3385923 L125.258753,17.4191891" id="Line"></path>
	                      <g id="Line" transform="translate(26.070422, 9.000000) scale(-1, 1) translate(-26.070422, -9.000000) translate(0.570422, 0.000000)">
	                        <path d="M0.722434608,9.43539412 L45.5133803,0.725799547" id="Shape"></path>
	                        <path d="M0.722434608,10.8869932 L50.5704225,9.43539412" id="Shape"></path>
	                        <path d="M0.722434608,12.3385923 L47.6806841,17.4191891" id="Shape"></path>
	                      </g>
	                    </g>
	                    <path d="M86.5,84.2281539 C79.3181869,84.2281539 73.4961771,84.8322956 73.4961771,88.800691 C73.4961771,92.7690864 79.3181869,97.2925457 86.5,97.2925457 C93.6818131,97.2925457 99.5038229,92.7690864 99.5038229,88.800691 C99.5038229,84.8322956 93.6818131,84.2281539 86.5,84.2281539 L86.5,84.2281539 L86.5,84.2281539 Z" id="Oval-4" stroke="#091A3E" fill="#081839"></path>
	                    <path d="M86.5,104.550541 C86.5,111.765806 91.3516749,117.614933 97.3365191,117.614933 L97.3365191,117.614933 C103.321363,117.614933 108.173038,111.765806 108.173038,104.550541" id="Oval-5" stroke="#091A3E" transform="translate(97.336519, 111.082737) scale(-1, 1) translate(-97.336519, -111.082737) "></path>
	                    <path d="M64.826962,104.550541 C64.826962,111.765806 69.6786368,117.614933 75.6634811,117.614933 L75.6634811,117.614933 C81.6483253,117.614933 86.5000002,111.765806 86.5000002,104.550541" id="Oval-5" stroke="#091A3E" transform="translate(75.663481, 111.082737) scale(-1, 1) translate(-75.663481, -111.082737) "></path>
	                    <path d="M100.000001,63 C100.000001,67.3127721 106.145456,70.8089647 113.726259,70.8089647 C121.307061,70.8089647 127.452516,67.3127721 127.452516,63" id="Oval-5" stroke="#091A3E" transform="translate(113.726259, 66.904482) scale(-1, 1) translate(-113.726259, -66.904482) "></path>
	                    <path d="M46.0000009,62.7572705 C46.0000009,67.0700426 52.1454557,70.5662352 59.7262584,70.5662352 C67.3070612,70.5662352 73.452516,67.0700426 73.452516,62.7572705" id="Oval-5" stroke="#091A3E" transform="translate(59.726258, 66.661753) scale(-1, 1) translate(-59.726258, -66.661753) "></path>
	                  </g>
	                </g>
	                <path d="M44.8972051,146.395942 C47.6654807,143.862437 51.3167038,141.841719 51.3167038,141.841719 L44.8633742,153.721719 L40.7728397,151.491384 C40.7728397,151.491384 42.1289296,148.929447 44.8972051,146.395942 Z" id="Triangle-1" fill="#FFFFFF" transform="translate(46.044772, 147.781719) rotate(-118.000000) translate(-46.044772, -147.781719) "></path>
	                <path d="M121.127627,146.32392 C123.894888,143.790415 127.544773,141.769697 127.544773,141.769697 L121.093809,153.649697 L117.004773,151.419362 C117.004773,151.419362 118.360366,148.857425 121.127627,146.32392 Z" id="Triangle-1-Copy" fill="#FFFFFF" transform="translate(122.274773, 147.709697) scale(-1, 1) rotate(-118.000000) translate(-122.274773, -147.709697) "></path>
	                <g id="colar" transform="translate(47.000000, 146.000000)">
	                  <g id="Page-1">
	                    <g id="Line-+-Oval-12">
	                      <path d="M1.03063265,2.25 L73.1749208,2.25" id="Line" stroke="#FFFFFF" stroke-width="4.5"></path>
	                      <ellipse id="Oval-12" fill="#E4CF83" cx="37.5078427" cy="11.372061" rx="6.66408311" ry="6.76832354"></ellipse>
	                    </g>
	                  </g>
	                </g>
	              </g>
	            </svg>
	            <svg id="hands" width="122px" height="72px" viewBox="0 0 122 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
	                <g id="Group" sketch:type="MSLayerGroup" transform="translate(-23.000000, -165.000000)">
	                  <g transform="translate(84.727665, 197.406637) rotate(-1.000000) translate(-84.727665, -197.406637) translate(21.227665, 158.906637)" sketch:type="MSShapeGroup">
	                    <g transform="translate(0.000457, 0.947643)">
	                      <path d="M2.60797675,0.418290741 L42.0685111,62.5961597 C42.0685111,62.5961597 1.57440595,8.35432842 0.488464369,6.6990186" id="Line" stroke="#287D98" stroke-width="5" stroke-linecap="square"></path>
	                      <path d="M39.7736832,68.2780062 C41.7686313,64.8065605 41.9852984,61.1800189 40.2576226,60.1778989 C38.5299469,59.1757788 35.5121641,61.1775628 33.517216,64.6490085 C31.5222679,68.1204542 31.3056008,71.7469958 33.0332766,72.7491158 C34.7609523,73.7512359 37.7787351,71.7494519 39.7736832,68.2780062 L39.7736832,68.2780062 Z" id="Oval-16" fill="#287D98"></path>
	                      <path d="M47.5249584,62.0635282 C51.1976772,60.4972902 53.5431039,57.7320061 52.7636156,55.8870934 C51.9841273,54.0421806 48.3749003,53.8162701 44.7021815,55.3825081 C41.0294627,56.9487461 38.684036,59.7140302 39.4635243,61.5589429 C40.2430127,63.4038556 43.8522396,63.6297662 47.5249584,62.0635282 L47.5249584,62.0635282 Z" id="Oval-16" fill="#287D98"></path>
	                      <path d="M48.6298666,72.8980127 C50.3029709,71.8064253 49.8976822,68.1962461 47.724629,64.8344517 C45.5515758,61.4726573 42.4336491,59.632291 40.7605449,60.7238784 C39.0874406,61.8154657 39.4927294,65.425645 41.6657825,68.7874394 C43.8388357,72.1492337 46.9567624,73.9896001 48.6298666,72.8980127 Z" id="Oval-16" fill="#287D98"></path>
	                    </g>
	                    <g transform="translate(100.489186, 39.239121) scale(-1, 1) translate(-100.489186, -39.239121) translate(73.989186, 2.239121)">
	                      <path d="M2.60797675,0.418290741 L42.0685111,62.5961597 C42.0685111,62.5961597 1.57440595,8.35432842 0.488464369,6.6990186" id="Line" stroke="#1C6C86" stroke-width="5" stroke-linecap="square"></path>
	                      <path d="M40.2576226,60.1778989 C38.5299469,59.1757788 35.5121641,61.1775628 33.517216,64.6490085 C31.5222679,68.1204542 31.3056008,71.7469958 33.0332766,72.7491158 C34.7609523,73.7512359 37.7787351,71.7494519 39.7736832,68.2780062 C41.7686313,64.8065605 41.9852984,61.1800189 40.2576226,60.1778989 Z" id="Oval-16" fill="#1C6C86"></path>
	                      <path d="M47.5249584,62.0635282 C51.1976772,60.4972902 53.5431039,57.7320061 52.7636156,55.8870934 C51.9841273,54.0421806 48.3749003,53.8162701 44.7021815,55.3825081 C41.0294627,56.9487461 38.684036,59.7140302 39.4635243,61.5589429 C40.2430127,63.4038556 43.8522396,63.6297662 47.5249584,62.0635282 L47.5249584,62.0635282 Z" id="Oval-16" fill="#1C6C86"></path>
	                      <path d="M48.6298666,72.8980127 C50.3029709,71.8064253 49.8976822,68.1962461 47.724629,64.8344517 C45.5515758,61.4726573 42.4336491,59.632291 40.7605449,60.7238784 C39.0874406,61.8154657 39.4927294,65.425645 41.6657825,68.7874394 C43.8388357,72.1492337 46.9567624,73.9896001 48.6298666,72.8980127 Z" id="Oval-16" fill="#1C6C86"></path>
	                    </g>
	                  </g>
	                </g>
	              </g>
	            </svg>
	            <a href="#fractal"><svg id="belly" width="154px" height="201px" viewBox="0 0 154 201" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                <g id="belliSVG">
	                  <g id="Page-1">
	                    <g id="Group">
	                      <path d="M76.2224346,199.226014 C118.116344,199.226014 152.078068,154.707655 152.078068,99.791476 C152.078068,44.875297 118.116344,0.356938 76.2224346,0.356938 C55.3609521,0.356938 36.4663657,11.395886 22.7527008,29.260712 C8.9266622,47.271928 0.3668008,72.221346 0.3668008,99.791476 C0.3668008,154.707655 34.3285249,199.226014 76.2224346,199.226014 L76.2224346,199.226014 Z" id="Oval-3" fill="#287D98"></path>
	                      <path d="M75.5,199.226014 C121.72518,199.226014 153.522938,156.149407 153.522938,103.011719 C153.522938,78.1373 146.944919,54.957085 135.192372,37.377199 C131.557099,31.939426 125.583909,24.250521 121,20 C117.374745,16.638411 113.644871,12.692215 110,11 C107.492049,9.835626 107.33645,9.34260992 104.295355,7.2356177 C99.0837841,3.62483317 90.2743564,1.39295014 83.1147685,0.951771142 C81.5184211,0.853403142 77.13313,0.951771141 75.5,0.951771141" id="Oval-2" fill="#1C6C86"></path>
	                      <path d="M77.6673038,191.968018 C111.581421,191.968018 139.074245,160.44772 139.074245,121.565462 C139.074245,82.683204 111.581421,51.162906 77.6673038,51.162906 C60.779437,51.162906 45.4838195,58.978804 34.3822812,71.627622 C23.1897738,84.380089 16.2603622,102.045005 16.2603622,121.565462 C16.2603622,160.44772 43.7531864,191.968018 77.6673038,191.968018 L77.6673038,191.968018 Z" id="Oval-3" fill="#FDF1DB"></path>
	                      <path d="M75.5,191.968018 C113.164961,191.968018 139.074245,160.44772 139.074245,121.565462 C139.074245,82.683204 113.164961,51.162906 75.5,51.162906" id="Oval-2" fill="#E4CF83" opacity="0.580573694"></path>
	                    </g>
	                  </g>
	                </g>
	              </g>
	            </svg></a>
	            <svg id="legs" width="105px" height="49px" viewBox="0 0 105 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
	                <g id="Group" sketch:type="MSLayerGroup" transform="translate(-34.000000, -283.000000)">
	                  <ellipse id="Oval-14" fill="#287D98" sketch:type="MSShapeGroup" cx="48.1007042" cy="307.048615" rx="13.7262575" ry="23.9513851"></ellipse>
	                  <ellipse id="Oval-14" fill="#1C6C86" sketch:type="MSShapeGroup" cx="124.678773" cy="307.048615" rx="13.7262575" ry="23.9513851"></ellipse>
	                </g>
	              </g>
	        </svg>
	    <a href="#welldone" id="feel-good-button" class="feel-good-button waves-effect waves-teal">I'M FEELING BETTER</a>
	  </div>
	</div>
	`;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return `<div class="fractal page">
	  <a href="#breathing"><i id="exit-fractal" class="material-icons md-light">clear</i></a>
	  <img id="fractal-background" src="./newSVG/GIFpage/cat-GIF.svg" alt="fractalBG" />
	  <div class="wrapper-gif">
	    <img src="./assets/ezgif.com-gif-maker.gif" alt="Breathing cat gif" />
	  </div>
	</div>
	`;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return `<div class="container">
	  <div class="landing page" data-animate-in="landingAnimation" data-animate-out="outOfLanding">
	    <div class="landing-cat-round">
	      <div class="row">
	        <div class="col s12">
	          <svg id="landing-stars" width="250px" height="149px" viewBox="0 0 250 149" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
	            <g id="Group" sketch:type="MSLayerGroup" fill="#F2F3F6">
	            <path d="M57.6397022,65.5996066 C57.6397022,63.8459437 56.0289287,60.0512958 56.0289287,60.0512958 C56.0289287,60.0512958 59.4680698,61.942838 60.9756608,61.942838 C62.60721,61.942838 65.2403945,60.3814199 65.2403945,60.3814199 C65.2403945,60.3814199 63.9751088,63.2273645 63.9751088,64.760006 C63.9751088,66.3665047 65.9213075,69.9010444 65.9213075,69.9010444 C65.9213075,69.9010444 62.0803204,68.3276001 60.5651168,68.3276001 C58.9411802,68.3276001 56.0289287,69.5555578 56.0289287,69.5555578 C56.0289287,69.5555578 57.6397022,66.9850839 57.6397022,65.5996066 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(60.975118, 64.976170) rotate(-47.000000) translate(-60.975118, -64.976170) "></path>
	            <path d="M2.36586222,144.939861 C2.36586222,143.799953 1.31883478,141.333374 1.31883478,141.333374 C1.31883478,141.333374 3.55432923,142.562905 4.53428647,142.562905 C5.59481848,142.562905 7.30642885,141.547959 7.30642885,141.547959 C7.30642885,141.547959 6.48397372,143.397867 6.48397372,144.394108 C6.48397372,145.438356 7.74903272,147.735861 7.74903272,147.735861 C7.74903272,147.735861 5.25233217,146.713098 4.26742663,146.713098 C3.21184293,146.713098 1.31883478,147.51129 1.31883478,147.51129 C1.31883478,147.51129 2.36586222,145.840442 2.36586222,144.939861 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(4.533934, 144.534618) rotate(-47.000000) translate(-4.533934, -144.534618) "></path>
	            <path d="M244.695734,121.54065 C244.695734,120.72362 243.945276,118.955697 243.945276,118.955697 C243.945276,118.955697 245.547569,119.836965 246.249954,119.836965 C247.010092,119.836965 248.23689,119.109502 248.23689,119.109502 C248.23689,119.109502 247.647395,120.435425 247.647395,121.149481 C247.647395,121.897947 248.554127,123.544687 248.554127,123.544687 C248.554127,123.544687 246.764614,122.81162 246.058682,122.81162 C245.302092,122.81162 243.945276,123.383725 243.945276,123.383725 C243.945276,123.383725 244.695734,122.186143 244.695734,121.54065 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(246.249702, 121.250192) rotate(-47.000000) translate(-246.249702, -121.250192) "></path>
	            <path d="M221.695734,14.5406503 C221.695734,13.7236203 220.945276,11.955697 220.945276,11.955697 C220.945276,11.955697 222.547569,12.8369649 223.249954,12.8369649 C224.010092,12.8369649 225.23689,12.1095015 225.23689,12.1095015 C225.23689,12.1095015 224.647395,13.4354247 224.647395,14.1494811 C224.647395,14.8979475 225.554127,16.5446866 225.554127,16.5446866 C225.554127,16.5446866 223.764614,15.8116202 223.058682,15.8116202 C222.302092,15.8116202 220.945276,16.3837246 220.945276,16.3837246 C220.945276,16.3837246 221.695734,15.186143 221.695734,14.5406503 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(223.249702, 14.250192) rotate(-47.000000) translate(-223.249702, -14.250192) "></path>
	            <path d="M123.726387,1.51667873 C123.726387,1.16669441 123.40492,0.409383921 123.40492,0.409383921 C123.40492,0.409383921 124.091281,0.786885281 124.392156,0.786885281 C124.717769,0.786885281 125.243283,0.475267881 125.243283,0.475267881 C125.243283,0.475267881 124.990766,1.0432425 124.990766,1.34911686 C124.990766,1.66973113 125.379175,2.37513097 125.379175,2.37513097 C125.379175,2.37513097 124.612616,2.06111345 124.310222,2.06111345 C123.986128,2.06111345 123.40492,2.30618105 123.40492,2.30618105 C123.40492,2.30618105 123.726387,1.79318304 123.726387,1.51667873 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(124.392047, 1.392257) rotate(-47.000000) translate(-124.392047, -1.392257) "></path>
	            <path d="M15.6957342,32.5406503 C15.6957342,31.7236203 14.9452762,29.955697 14.9452762,29.955697 C14.9452762,29.955697 16.5475691,30.8369649 17.2499545,30.8369649 C18.0100919,30.8369649 19.2368904,30.1095015 19.2368904,30.1095015 C19.2368904,30.1095015 18.6473948,31.4354247 18.6473948,32.1494811 C18.6473948,32.8979475 19.5541271,34.5446866 19.5541271,34.5446866 C19.5541271,34.5446866 17.7646145,33.8116202 17.0586824,33.8116202 C16.3020917,33.8116202 14.9452762,34.3837246 14.9452762,34.3837246 C14.9452762,34.3837246 15.6957342,33.186143 15.6957342,32.5406503 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(17.249702, 32.250192) rotate(-47.000000) translate(-17.249702, -32.250192) "></path>
	            </g>
	            </g>
	          </svg>
	          <img src="./newSVG/landing/catLanding2.svg" alt="Landing page cat says hello" />
	        </div>
	      </div>
	      <div class="row">
	        <div class="col s12">
	          <a href="#info"><button id="landing-button" class="btn-floating btn-large waves-effect waves-light"><i id="landing-material-icon" class="material-icons">add</i></button></a>
	        </div>
	      </div>
	      <div class="row">
	        <div class="col s12">
	          <h6 id="landing-text">BREATHE WITH ME!</h6>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	`;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (scope) {
	  return `<div class="welldone page" data-animate-in="breathingToWelldone" data-animate-out="welldoneToIntro">
	  <a name="welldone"></a>
	  <span class="welldone-user">Hi</span><br>
	  <div class="welldone-svg-wrapper">
	    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
	    <svg id="welldone-stars" width="250px" height="149px" viewBox="0 0 250 149" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
	        <g id="Group" sketch:type="MSLayerGroup" fill="#F2F3F6">
	          <path d="M57.6397022,65.5996066 C57.6397022,63.8459437 56.0289287,60.0512958 56.0289287,60.0512958 C56.0289287,60.0512958 59.4680698,61.942838 60.9756608,61.942838 C62.60721,61.942838 65.2403945,60.3814199 65.2403945,60.3814199 C65.2403945,60.3814199 63.9751088,63.2273645 63.9751088,64.760006 C63.9751088,66.3665047 65.9213075,69.9010444 65.9213075,69.9010444 C65.9213075,69.9010444 62.0803204,68.3276001 60.5651168,68.3276001 C58.9411802,68.3276001 56.0289287,69.5555578 56.0289287,69.5555578 C56.0289287,69.5555578 57.6397022,66.9850839 57.6397022,65.5996066 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(60.975118, 64.976170) rotate(-47.000000) translate(-60.975118, -64.976170) "></path>
	          <path d="M2.36586222,144.939861 C2.36586222,143.799953 1.31883478,141.333374 1.31883478,141.333374 C1.31883478,141.333374 3.55432923,142.562905 4.53428647,142.562905 C5.59481848,142.562905 7.30642885,141.547959 7.30642885,141.547959 C7.30642885,141.547959 6.48397372,143.397867 6.48397372,144.394108 C6.48397372,145.438356 7.74903272,147.735861 7.74903272,147.735861 C7.74903272,147.735861 5.25233217,146.713098 4.26742663,146.713098 C3.21184293,146.713098 1.31883478,147.51129 1.31883478,147.51129 C1.31883478,147.51129 2.36586222,145.840442 2.36586222,144.939861 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(4.533934, 144.534618) rotate(-47.000000) translate(-4.533934, -144.534618) "></path>
	          <path d="M244.695734,121.54065 C244.695734,120.72362 243.945276,118.955697 243.945276,118.955697 C243.945276,118.955697 245.547569,119.836965 246.249954,119.836965 C247.010092,119.836965 248.23689,119.109502 248.23689,119.109502 C248.23689,119.109502 247.647395,120.435425 247.647395,121.149481 C247.647395,121.897947 248.554127,123.544687 248.554127,123.544687 C248.554127,123.544687 246.764614,122.81162 246.058682,122.81162 C245.302092,122.81162 243.945276,123.383725 243.945276,123.383725 C243.945276,123.383725 244.695734,122.186143 244.695734,121.54065 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(246.249702, 121.250192) rotate(-47.000000) translate(-246.249702, -121.250192) "></path>
	          <path d="M221.695734,14.5406503 C221.695734,13.7236203 220.945276,11.955697 220.945276,11.955697 C220.945276,11.955697 222.547569,12.8369649 223.249954,12.8369649 C224.010092,12.8369649 225.23689,12.1095015 225.23689,12.1095015 C225.23689,12.1095015 224.647395,13.4354247 224.647395,14.1494811 C224.647395,14.8979475 225.554127,16.5446866 225.554127,16.5446866 C225.554127,16.5446866 223.764614,15.8116202 223.058682,15.8116202 C222.302092,15.8116202 220.945276,16.3837246 220.945276,16.3837246 C220.945276,16.3837246 221.695734,15.186143 221.695734,14.5406503 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(223.249702, 14.250192) rotate(-47.000000) translate(-223.249702, -14.250192) "></path>
	          <path d="M123.726387,1.51667873 C123.726387,1.16669441 123.40492,0.409383921 123.40492,0.409383921 C123.40492,0.409383921 124.091281,0.786885281 124.392156,0.786885281 C124.717769,0.786885281 125.243283,0.475267881 125.243283,0.475267881 C125.243283,0.475267881 124.990766,1.0432425 124.990766,1.34911686 C124.990766,1.66973113 125.379175,2.37513097 125.379175,2.37513097 C125.379175,2.37513097 124.612616,2.06111345 124.310222,2.06111345 C123.986128,2.06111345 123.40492,2.30618105 123.40492,2.30618105 C123.40492,2.30618105 123.726387,1.79318304 123.726387,1.51667873 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(124.392047, 1.392257) rotate(-47.000000) translate(-124.392047, -1.392257) "></path>
	          <path d="M15.6957342,32.5406503 C15.6957342,31.7236203 14.9452762,29.955697 14.9452762,29.955697 C14.9452762,29.955697 16.5475691,30.8369649 17.2499545,30.8369649 C18.0100919,30.8369649 19.2368904,30.1095015 19.2368904,30.1095015 C19.2368904,30.1095015 18.6473948,31.4354247 18.6473948,32.1494811 C18.6473948,32.8979475 19.5541271,34.5446866 19.5541271,34.5446866 C19.5541271,34.5446866 17.7646145,33.8116202 17.0586824,33.8116202 C16.3020917,33.8116202 14.9452762,34.3837246 14.9452762,34.3837246 C14.9452762,34.3837246 15.6957342,33.186143 15.6957342,32.5406503 Z" id="Rectangle-25" sketch:type="MSShapeGroup" transform="translate(17.249702, 32.250192) rotate(-47.000000) translate(-17.249702, -32.250192) "></path>
	        </g>
	      </g>
	    </svg>
	    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
	    <svg id="welldone-banner" width="203px" height="43px" viewBox="0 0 203 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
	        <g id="Rectangle-24-+-Path-272-+-Path-272" sketch:type="MSLayerGroup">
	          <path d="M26.1935484,9.12121212 L1.30967742,1.3030303 L11.7870968,19.5454545 L0,33.8787879 L35.3612903,43 L20.9548387,29.969697" id="Path-272" fill="#A5E2DA" sketch:type="MSShapeGroup"></path>
	          <path d="M20,29.8235294 L35.3,43 L37,29 L20,29.8235294 Z" id="Path-276" fill="#12214B" sketch:type="MSShapeGroup"></path>
	          <path d="M193.832258,9.12121212 L168.948387,1.3030303 L179.425806,19.5454545 L167.63871,33.8787879 L203,43 L188.593548,29.969697" id="Path-272" fill="#A5E2DA" sketch:type="MSShapeGroup" transform="translate(185.319355, 22.151515) scale(-1, 1) translate(-185.319355, -22.151515) "></path>
	          <path d="M166,29.8235294 L181.3,43 L183,29 L166,29.8235294 Z" id="Path-276" fill="#12214B" sketch:type="MSShapeGroup" transform="translate(174.500000, 36.000000) scale(-1, 1) translate(-174.500000, -36.000000) "></path>
	          <path d="M27.5032258,0 C27.5032258,0 74.9149007,7.81818182 100.845161,7.81818182 C127.738557,7.81818182 175.496774,0 175.496774,0 L183.354839,29.969697 C183.354839,29.969697 170.401725,33.6017797 154.541935,36.4848485 C138.154443,39.4638458 118.627138,41.6969697 104.774194,41.6969697 C91.8167314,41.6969697 70.9560694,41.8656915 53.6967742,39.0909091 C34.579122,36.017358 19.6451613,29.969697 19.6451613,29.969697 L27.5032258,0 Z" id="Rectangle-24" fill="#808FBE" sketch:type="MSShapeGroup"></path>
	          <text id="Well-Done!" sketch:type="MSTextLayer" font-family="Lato" font-size="20" font-weight="normal" sketch:alignment="middle" letter-spacing="1.74999988">
	            <tspan x="47.119616" y="32" fill="#FFFFFF">Well </tspan>
	            <tspan x="100.509615" y="32" letter-spacing="1.34615374" fill="#FFFFFE">Done</tspan>
	            <tspan x="153.67423" y="32" letter-spacing="1.34615374" fill="#FFFFFF">!</tspan>
	          </text>
	        </g>
	      </g>
	    </svg>
	  </div>
	  <a href="#info" id="start-again" class="feel-good-button waves-effect waves-teal">START AGAIN</a>
	  <img class="welldone-mountain1" src="./newSVG/redMountains/mountainWelldoneFront.svg" alt="" />
	  <img class="welldone-mountain2" src="./newSVG/redMountains/mountainWelldoneMiddle.svg" alt="" />
	  <img class="welldone-mountain3" src="./newSVG/redMountains/mountainWelldoneBack.svg" alt="" />
	</div>
	`;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animations = __webpack_require__(1);
	
	var infoCtrl = function infoCtrl() {
	  var nameSubmitButton = document.getElementById('name-question-button');
	  var startBreathingCatButton = document.getElementById('start-breathing-cat-button');
	  nameSubmitButton.addEventListener('click', _animations.nameToInfoSwitch);
	  startBreathingCatButton.addEventListener('click', _animations.outOfInfo);
	
	  var nameButton = document.getElementById('name-question-button');
	  var name = document.getElementById('input-focus');
	
	  (0, _animations.landingToInfo)();
	
	  function storeName() {
	    var array = name.value.split(' ');
	    var lastNameEntered = array[array.length - 1];
	    document.cookie = lastNameEntered;
	  }
	  nameButton.addEventListener('click', storeName);
	};
	
	exports.default = infoCtrl;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animations = __webpack_require__(1);
	
	var breatheCtrl = function breatheCtrl() {
	  var belly = document.getElementById('belly');
	  var hands = document.getElementById('hands');
	  var exitBreathing = document.getElementById('exit-breathing');
	  var FeelingBetterBtn = document.getElementById('feel-good-button');
	
	  hands.addEventListener('click', _animations.changeToFractalView);
	  belly.addEventListener('click', _animations.changeToFractalView);
	  exitBreathing.addEventListener('click', _animations.fromBreathingToIntro);
	  FeelingBetterBtn.addEventListener('click', _animations.outOfBreathing);
	
	  (0, _animations.breathe)();
	  (0, _animations.headMovement)();
	};
	
	exports.default = breatheCtrl;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gsap = __webpack_require__(2);
	
	var fractalCtrl = function fractalCtrl() {
	  var exitFractal = document.getElementById('exit-fractal');
	  exitFractal.addEventListener('click', exitFractalView);
	  _gsap.TweenMax.fromTo('.fractal', 0.5, { scale: 0.8, css: { '-webkit-filter': 'blur(10px)', opacity: 0 } }, { scale: 1, css: { '-webkit-filter': 'blur(0px)', display: 'block', opacity: 1 } });
	};
	
	module.exports = fractalCtrl;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animations = __webpack_require__(1);
	
	var landingCtrl = function landingCtrl() {
	  var landingButton = document.getElementById('landing-button');
	  landingButton.addEventListener('click', _animations.outOfLanding);
	
	  (0, _animations.landingAnimation)();
	};
	
	exports.default = landingCtrl;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animations = __webpack_require__(1);
	
	var welldoneCtrl = function welldoneCtrl() {
	  var startAgain = document.getElementById('start-again');
	  startAgain.addEventListener('click', _animations.welldoneToIntro);
	};
	
	exports.default = welldoneCtrl;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gsap = __webpack_require__(2);
	
	var _transitions = __webpack_require__(19);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _landing = __webpack_require__(16);
	
	var _landing2 = _interopRequireDefault(_landing);
	
	var _altIntro = __webpack_require__(13);
	
	var _altIntro2 = _interopRequireDefault(_altIntro);
	
	var _breathing = __webpack_require__(14);
	
	var _breathing2 = _interopRequireDefault(_breathing);
	
	var _fractal = __webpack_require__(15);
	
	var _fractal2 = _interopRequireDefault(_fractal);
	
	var _welldone = __webpack_require__(17);
	
	var _welldone2 = _interopRequireDefault(_welldone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(21);
	
	var landingTmpl = __webpack_require__(11);
	var infoTmpl = __webpack_require__(8);
	var breatheTmpl = __webpack_require__(9);
	var fractalTmpl = __webpack_require__(10);
	var welldoneTmpl = __webpack_require__(12);
	
	var views = {
	  landingTmpl: landingTmpl,
	  infoTmpl: infoTmpl,
	  breatheTmpl: breatheTmpl,
	  fractalTmpl: fractalTmpl,
	  welldoneTmpl: welldoneTmpl,
	  default: landingTmpl
	};
	
	var controllers = {
	  landingCtrl: _landing2.default,
	  infoCtrl: _altIntro2.default,
	  breatheCtrl: _breathing2.default,
	  fractalCtrl: _fractal2.default,
	  welldoneCtrl: _welldone2.default,
	  default: function _default() {
	    return controllers.landingCtrl();
	  }
	};
	
	var getTemplate = function getTemplate(name) {
	  var tmplName = name + 'Tmpl';
	
	  if (views[tmplName]) {
	    return views[tmplName]();
	  }
	
	  return views.default();
	};
	
	var bindListeners = function bindListeners(name) {
	  var ctrlName = name + 'Ctrl';
	
	  if (controllers[ctrlName]) {
	    return controllers[ctrlName]();
	  }
	
	  return controllers.default();
	};
	
	var changeView = function changeView() {
	  var _location = location;
	  var hash = _location.hash;
	
	  var viewName = hash.replace('#', '');
	  var template = getTemplate(viewName);
	
	  (0, _transitions2.default)(template).then(function () {
	    bindListeners(viewName);
	  });
	};
	
	window.addEventListener('hashchange', changeView);
	window.addEventListener('load', changeView);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animations = __webpack_require__(1);
	
	var animations = {
	  outOfLanding: _animations.outOfLanding,
	  landingAnimation: _animations.landingAnimation,
	  landingToInfo: _animations.landingToInfo,
	  outOfInfo: _animations.outOfInfo,
	  infoToCatView: _animations.infoToCatView,
	  fromBreathingToIntro: _animations.fromBreathingToIntro,
	  changeToFractalView: _animations.changeToFractalView,
	  exitFractalView: _animations.exitFractalView,
	  outOfBreathing: _animations.outOfBreathing,
	  breathingToWelldone: _animations.breathingToWelldone,
	  welldoneToIntro: _animations.welldoneToIntro
	};
	
	var App = $('#app');
	
	var viewTransition = function viewTransition(view) {
	  var animateout = $(App).find('.page').data('animate-out');
	  var animatein = $(view).data('animate-in');
	  var transition = Promise.resolve();
	
	  debugger;
	  return transition
	  // Before add new page
	  .then(function () {
	    if (animateout && typeof animations[animateout] === 'function') {
	      return animations[animateout]().then(function () {
	        $(App).append(view);
	      });
	    } else {
	      $(App).append(view);
	      return Promise.resolve();
	    }
	  })
	  // Before remove the old view
	  .then(function () {
	    if (animatein && typeof animations[animatein] === 'function') {
	      return animations[animatein]().then(function () {
	        $(App).find('.page').length > 1 ? $(App).find('.page').first().remove() : null;
	      });
	    } else {
	      $(App).find('.page').length > 1 ? $(App).find('.page').first().remove() : null;
	      return Promise.resolve();
	    }
	  });
	};
	
	exports.default = viewTransition;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */(function(global,factory){"use strict";if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	var version="3.1.1",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){// Return all the elements in a clean array
	if(num==null){return _slice.call(this);}// Return just the one element from the set
	return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
	// Use toString instead of jQuery.type to catch host objects
	if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
	if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
	Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
	var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
	if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
	return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
	return"\\"+ch;},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
	if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
	el=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function(elem){// Only certain elements can match :enabled or :disabled
	// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
	// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
	if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
	// * listed form-associated elements in a disabled fieldset
	//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
	//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
	// * option elements in a disabled optgroup
	//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
	// All such elements have a "form" property.
	if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
	if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
	// Use the isDisabled shortcut property to check for disabled fieldset ancestors
	return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
	/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
	// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
	// even exist on them, let alone have a boolean value.
	}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
	return false;};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
	if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
	if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
	// getElementById is not reliable as a find shortcut
	Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
	node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
	elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(el){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// https://bugs.jquery.com/ticket/12359
	docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibling-combinator selector` fails
	if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
	// IE's :disabled selector does not pick up the children of disabled fieldsets
	docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
	jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
	if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
	if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Simple selector that can be filtered directly, removing non-Elements
	if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}// Complex selector, compare the two sets, removing non-Elements
	qualifier=jQuery.filter(qualifier,elements);return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
	this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
	if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject){var method;try{// Check for promise aspect first to privilege synchronous behavior
	if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
	}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
	}else{// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	resolve.call(undefined,value);}// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	}catch(value){// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	reject.call(undefined,value);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
	// ... .then handlers, argument index, [final state]
	["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
	pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
	var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
	// deferred.done(function() { bind to newDefer or newDefer.resolve })
	// deferred.fail(function() { bind to newDefer or newDefer.reject })
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
	// https://promisesaplus.com/#point-59
	// Ignore double-resolution attempts
	if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
	// https://promisesaplus.com/#point-48
	if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
	// https://promisesaplus.com/#point-54
	// https://promisesaplus.com/#point-75
	// Retrieve `then` only once
	then=returned&&(// Support: Promises/A+ section 2.3.4
	// https://promisesaplus.com/#point-64
	// Only check objects and functions for thenability
	(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
	if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
	if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
	}else{// ...and disregard older resolution values
	maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
	}else{// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
	// Default process is resolve
	(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
	process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
	// https://promisesaplus.com/#point-61
	// Ignore post-resolution exceptions
	if(depth+1>=maxDepth){// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
	// https://promisesaplus.com/#point-57
	// Re-resolve promises immediately to dodge false rejection from
	// subsequent errors
	if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
	// since it's otherwise lost when execution goes async
	if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
	tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
	tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
	tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
	// promise.done = list.add
	// promise.fail = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
	// state = "rejected"
	_state=stateString;},// rejected_callbacks.disable
	// fulfilled_callbacks.disable
	tuples[3-i][2].disable,// progress_callbacks.lock
	tuples[0][2].lock);}// progress_handlers.fire
	// fulfilled_handlers.fire
	// rejected_handlers.fire
	list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
	// deferred.resolve = function() { deferred.resolveWith(...) }
	// deferred.reject = function() { deferred.rejectWith(...) }
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
	// deferred.resolveWith = list.fireWith
	// deferred.rejectWith = list.fireWith
	deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(singleValue){var// count of uncompleted subordinates
	remaining=arguments.length,// count of unprocessed arguments
	i=remaining,// subordinate fulfillment data
	resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
	master=jQuery.Deferred(),// subordinate callback factory
	updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
	if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject);// Use .then() to unwrap secondary thenables (cf. gh-3000)
	if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
	while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
	var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
	// happens at the time of error handling instead of callback
	// registration.
	.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
	function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
	if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	// Always use camelCase key (gh-2257)
	if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
	owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If key is an array of keys...
	// We always set camelCase keys, so remove that.
	key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
	if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// The key will always be camelCased in Data
	data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	this.each(function(){// We always store the camelCased key
	dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;// Inline style trumps all
	return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
	// Support: Firefox <=43 - 45
	// Disconnected elements can have computed display: none, so first confirm that elem is
	// in the document.
	jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
	for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
	// check is required in this first loop unless we have a nonempty display value (either
	// inline or about-to-be-restored)
	if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
	dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
	for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE <=9 only
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&jQuery.nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
	// Evaluate against documentElement in case elem is a non-element node (e.g., document)
	if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
	var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
	if(delegateCount&&// Support: IE <=9
	// Black-hole SVG <use> instance trees (trac-13180)
	cur.nodeType&&// Support: Firefox <=42
	// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
	// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
	// Support: IE 11 only
	// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
	!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
	cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
	src.returnValue===false?returnTrue:returnFalse;// Create target properties
	// Support: Safari <=6 - 7 only
	// Target should not be a text node (#504, #13143)
	this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
	if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
	if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
	// .get() because push.apply(_, arraylike) throws on ancient WebKit
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){// This is a singleton, we need to execute it only once
	if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
	reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
	// it will also be a sign that checks already performed
	div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// https://drafts.csswg.org/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i,val=0;// If we already have the right measurement, avoid augmentation
	if(extra===(isBorderBox?"border":"content")){i=4;// Otherwise initialize for horizontal or vertical properties
	}else{i=name==="width"?1:0;}for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var val,valueIsBorderBox=true,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=elem.getBoundingClientRect()[name];}// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
	// Table columns in Safari have non-zero offsetWidth & zero
	// getBoundingClientRect().width unless display is changed.
	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function raf(){if(timerId){window.requestAnimationFrame(raf);jQuery.fx.tick();}}// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
	for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
	// there is still data from a stopped show/hide
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
	}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
	propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
	if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
	// Record all 3 overflow attributes because IE does not infer the shorthand
	// from identically-valued overflowX and overflowY
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
	restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
	showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
	if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
	if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
	propTween=false;for(prop in orig){// General show/hide setup for this element animation
	if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
	if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
	if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
	if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
	propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off or if document is hidden
	if(jQuery.fx.off||document.hidden){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){if(window.cancelAnimationFrame){window.cancelAnimationFrame(timerId);}else{window.clearInterval(timerId);}timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
	// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
	attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
	// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnothtmlwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
	if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
	return ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
	for(;i<max;i++){option=options[i];// Support: IE <=9 only
	// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
	!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
	var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(jQuery.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":JSON.parse,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// Request state (becomes false upon send and true upon completion)
	completed,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// uncached part of the url
	uncached,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
	for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
	// IE throws exception on accessing the href property if url is malformed,
	// e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(completed){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	// Remove hash to simplify url manipulation
	cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
	if(!s.hasContent){// Remember the hash so we can put it back
	uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
	if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add or update anti-cache param if needed
	if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
	s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
	}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(completed){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
	if(completed){throw e;}// Propagate others as results
	done(-1,e);}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
	if(completed){return;}completed=true;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE <=9 only
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
	// so any parsed elements with URLs
	// are based on the document's URL (gh-2965)
	base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
	if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,rect,doc,elem=this[0];if(!elem){return;}// Support: IE <=11 only
	// Running getBoundingClientRect on a
	// disconnected node in IE throws an error
	if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();// Make sure element is not hidden (display: none)
	if(rect.width||rect.height){doc=elem.ownerDocument;win=getWindow(doc);docElem=doc.documentElement;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};}// Return zeros for disconnected and hidden elements (gh-2310)
	return rect;},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
	return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.parseJSON=JSON.parse;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(32);

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e31fcf1885e371e19f5786c2bdfeae1b.ttf";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "46e48ce0628835f68a7369d0254e4283.ttf";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "894a2ede85a483bf9bedefd4db45cdb9.ttf";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df7b648ce5356ea1ebce435b3459fd60.ttf";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94998475f6aea65f558494802416c1cf.ttf";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".materialize-red{background-color:#e51c23!important}.materialize-red-text{color:#e51c23!important}.materialize-red.lighten-5{background-color:#fdeaeb!important}.materialize-red-text.text-lighten-5{color:#fdeaeb!important}.materialize-red.lighten-4{background-color:#f8c1c3!important}.materialize-red-text.text-lighten-4{color:#f8c1c3!important}.materialize-red.lighten-3{background-color:#f3989b!important}.materialize-red-text.text-lighten-3{color:#f3989b!important}.materialize-red.lighten-2{background-color:#ee6e73!important}.materialize-red-text.text-lighten-2{color:#ee6e73!important}.materialize-red.lighten-1{background-color:#ea454b!important}.materialize-red-text.text-lighten-1{color:#ea454b!important}.materialize-red.darken-1{background-color:#d0181e!important}.materialize-red-text.text-darken-1{color:#d0181e!important}.materialize-red.darken-2{background-color:#b9151b!important}.materialize-red-text.text-darken-2{color:#b9151b!important}.materialize-red.darken-3{background-color:#a21318!important}.materialize-red-text.text-darken-3{color:#a21318!important}.materialize-red.darken-4{background-color:#8b1014!important}.materialize-red-text.text-darken-4{color:#8b1014!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.red.lighten-5{background-color:#ffebee!important}.red-text.text-lighten-5{color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red-text.text-lighten-4{color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red-text.text-lighten-3{color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red-text.text-lighten-2{color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red-text.text-lighten-1{color:#ef5350!important}.red.darken-1{background-color:#e53935!important}.red-text.text-darken-1{color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red-text.text-darken-2{color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red-text.text-darken-3{color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red-text.text-darken-4{color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red-text.text-accent-1{color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red-text.text-accent-2{color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red-text.text-accent-3{color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.red-text.text-accent-4{color:#d50000!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.pink.lighten-5{background-color:#fce4ec!important}.pink-text.text-lighten-5{color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink-text.text-lighten-4{color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink-text.text-lighten-3{color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink-text.text-lighten-2{color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink-text.text-lighten-1{color:#ec407a!important}.pink.darken-1{background-color:#d81b60!important}.pink-text.text-darken-1{color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink-text.text-darken-2{color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink-text.text-darken-3{color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink-text.text-darken-4{color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink-text.text-accent-1{color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink-text.text-accent-2{color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink-text.text-accent-3{color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.pink-text.text-accent-4{color:#c51162!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple-text.text-lighten-5{color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple-text.text-lighten-4{color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple-text.text-lighten-3{color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple-text.text-lighten-2{color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple-text.text-lighten-1{color:#ab47bc!important}.purple.darken-1{background-color:#8e24aa!important}.purple-text.text-darken-1{color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple-text.text-darken-2{color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple-text.text-darken-3{color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple-text.text-darken-4{color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple-text.text-accent-1{color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple-text.text-accent-2{color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple-text.text-accent-3{color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.purple-text.text-accent-4{color:#a0f!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple-text.text-lighten-5{color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple-text.text-lighten-4{color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple-text.text-lighten-3{color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple-text.text-lighten-2{color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple-text.text-lighten-1{color:#7e57c2!important}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple-text.text-darken-1{color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple-text.text-darken-2{color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple-text.text-darken-3{color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple-text.text-darken-4{color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple-text.text-accent-1{color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple-text.text-accent-2{color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple-text.text-accent-3{color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.deep-purple-text.text-accent-4{color:#6200ea!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo-text.text-lighten-5{color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo-text.text-lighten-4{color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo-text.text-lighten-3{color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo-text.text-lighten-2{color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo-text.text-lighten-1{color:#5c6bc0!important}.indigo.darken-1{background-color:#3949ab!important}.indigo-text.text-darken-1{color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo-text.text-darken-2{color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo-text.text-darken-3{color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo-text.text-darken-4{color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo-text.text-accent-1{color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo-text.text-accent-2{color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo-text.text-accent-3{color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.indigo-text.text-accent-4{color:#304ffe!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue-text.text-lighten-5{color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue-text.text-lighten-4{color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue-text.text-lighten-3{color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue-text.text-lighten-2{color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue-text.text-lighten-1{color:#42a5f5!important}.blue.darken-1{background-color:#1e88e5!important}.blue-text.text-darken-1{color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue-text.text-darken-2{color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue-text.text-darken-3{color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue-text.text-darken-4{color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue-text.text-accent-1{color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue-text.text-accent-2{color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue-text.text-accent-3{color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.blue-text.text-accent-4{color:#2962ff!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue-text.text-lighten-5{color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue-text.text-lighten-4{color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue-text.text-lighten-3{color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue-text.text-lighten-2{color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue-text.text-lighten-1{color:#29b6f6!important}.light-blue.darken-1{background-color:#039be5!important}.light-blue-text.text-darken-1{color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue-text.text-darken-2{color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue-text.text-darken-3{color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue-text.text-darken-4{color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue-text.text-accent-1{color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue-text.text-accent-2{color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue-text.text-accent-3{color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.light-blue-text.text-accent-4{color:#0091ea!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan-text.text-lighten-5{color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan-text.text-lighten-4{color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan-text.text-lighten-3{color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan-text.text-lighten-2{color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan-text.text-lighten-1{color:#26c6da!important}.cyan.darken-1{background-color:#00acc1!important}.cyan-text.text-darken-1{color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan-text.text-darken-2{color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan-text.text-darken-3{color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan-text.text-darken-4{color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan-text.text-accent-1{color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan-text.text-accent-2{color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan-text.text-accent-3{color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.cyan-text.text-accent-4{color:#00b8d4!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal-text.text-lighten-5{color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal-text.text-lighten-4{color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal-text.text-lighten-3{color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal-text.text-lighten-2{color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal-text.text-lighten-1{color:#26a69a!important}.teal.darken-1{background-color:#00897b!important}.teal-text.text-darken-1{color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal-text.text-darken-2{color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal-text.text-darken-3{color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal-text.text-darken-4{color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal-text.text-accent-1{color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal-text.text-accent-2{color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal-text.text-accent-3{color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.teal-text.text-accent-4{color:#00bfa5!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.green.lighten-5{background-color:#e8f5e9!important}.green-text.text-lighten-5{color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green-text.text-lighten-4{color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green-text.text-lighten-3{color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green-text.text-lighten-2{color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green-text.text-lighten-1{color:#66bb6a!important}.green.darken-1{background-color:#43a047!important}.green-text.text-darken-1{color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green-text.text-darken-2{color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green-text.text-darken-3{color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green-text.text-darken-4{color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green-text.text-accent-1{color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green-text.text-accent-2{color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green-text.text-accent-3{color:#00e676!important}.green.accent-4{background-color:#00c853!important}.green-text.text-accent-4{color:#00c853!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green-text.text-lighten-5{color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green-text.text-lighten-4{color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green-text.text-lighten-3{color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green-text.text-lighten-2{color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green-text.text-lighten-1{color:#9ccc65!important}.light-green.darken-1{background-color:#7cb342!important}.light-green-text.text-darken-1{color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green-text.text-darken-2{color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green-text.text-darken-3{color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green-text.text-darken-4{color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green-text.text-accent-1{color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green-text.text-accent-2{color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green-text.text-accent-3{color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.light-green-text.text-accent-4{color:#64dd17!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime-text.text-lighten-5{color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime-text.text-lighten-4{color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime-text.text-lighten-3{color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime-text.text-lighten-2{color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime-text.text-lighten-1{color:#d4e157!important}.lime.darken-1{background-color:#c0ca33!important}.lime-text.text-darken-1{color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime-text.text-darken-2{color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime-text.text-darken-3{color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime-text.text-darken-4{color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime-text.text-accent-1{color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime-text.text-accent-2{color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime-text.text-accent-3{color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.lime-text.text-accent-4{color:#aeea00!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow-text.text-lighten-5{color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow-text.text-lighten-4{color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow-text.text-lighten-3{color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow-text.text-lighten-2{color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow-text.text-lighten-1{color:#ffee58!important}.yellow.darken-1{background-color:#fdd835!important}.yellow-text.text-darken-1{color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow-text.text-darken-2{color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow-text.text-darken-3{color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow-text.text-darken-4{color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow-text.text-accent-1{color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow-text.text-accent-2{color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow-text.text-accent-3{color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.yellow-text.text-accent-4{color:#ffd600!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.amber.lighten-5{background-color:#fff8e1!important}.amber-text.text-lighten-5{color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber-text.text-lighten-4{color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber-text.text-lighten-3{color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber-text.text-lighten-2{color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber-text.text-lighten-1{color:#ffca28!important}.amber.darken-1{background-color:#ffb300!important}.amber-text.text-darken-1{color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber-text.text-darken-2{color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber-text.text-darken-3{color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber-text.text-darken-4{color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber-text.text-accent-1{color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber-text.text-accent-2{color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber-text.text-accent-3{color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.amber-text.text-accent-4{color:#ffab00!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.orange.lighten-5{background-color:#fff3e0!important}.orange-text.text-lighten-5{color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange-text.text-lighten-4{color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange-text.text-lighten-3{color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange-text.text-lighten-2{color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange-text.text-lighten-1{color:#ffa726!important}.orange.darken-1{background-color:#fb8c00!important}.orange-text.text-darken-1{color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange-text.text-darken-2{color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange-text.text-darken-3{color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange-text.text-darken-4{color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange-text.text-accent-1{color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange-text.text-accent-2{color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange-text.text-accent-3{color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.orange-text.text-accent-4{color:#ff6d00!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange-text.text-lighten-5{color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange-text.text-lighten-4{color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange-text.text-lighten-3{color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange-text.text-lighten-2{color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange-text.text-lighten-1{color:#ff7043!important}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange-text.text-darken-1{color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange-text.text-darken-2{color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange-text.text-darken-3{color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange-text.text-darken-4{color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange-text.text-accent-1{color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange-text.text-accent-2{color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange-text.text-accent-3{color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.deep-orange-text.text-accent-4{color:#dd2c00!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.brown.lighten-5{background-color:#efebe9!important}.brown-text.text-lighten-5{color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown-text.text-lighten-4{color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown-text.text-lighten-3{color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown-text.text-lighten-2{color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown-text.text-lighten-1{color:#8d6e63!important}.brown.darken-1{background-color:#6d4c41!important}.brown-text.text-darken-1{color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown-text.text-darken-2{color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown-text.text-darken-3{color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.brown-text.text-darken-4{color:#3e2723!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey-text.text-lighten-5{color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey-text.text-lighten-4{color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey-text.text-lighten-3{color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey-text.text-lighten-2{color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey-text.text-lighten-1{color:#78909c!important}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey-text.text-darken-1{color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey-text.text-darken-2{color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey-text.text-darken-3{color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.blue-grey-text.text-darken-4{color:#263238!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.grey.lighten-5{background-color:#fafafa!important}.grey-text.text-lighten-5{color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey-text.text-lighten-4{color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey-text.text-lighten-3{color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey-text.text-lighten-2{color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey-text.text-lighten-1{color:#bdbdbd!important}.grey.darken-1{background-color:#757575!important}.grey-text.text-darken-1{color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey-text.text-darken-2{color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey-text.text-darken-3{color:#424242!important}.grey.darken-4{background-color:#212121!important}.grey-text.text-darken-4{color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.white{background-color:#fff!important}.white-text{color:#fff!important}.transparent{background-color:transparent!important}.transparent-text{color:transparent!important}/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}ul{padding:0;list-style-type:none}ul.browser-default,ul.browser-default li{list-style-type:disc}ul li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:flex;align-items:center}.valign-wrapper .valign{display:block}.clearfix{clear:both}.z-depth-0{box-shadow:none!important}.btn,.btn-floating,.btn-large,.card,.card-panel,.collapsible,.dropdown-content,.side-nav,.toast,.z-depth-1,nav{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.btn-floating:hover,.btn-large:hover,.btn:hover,.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.modal,.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)}.hoverable{transition:box-shadow .25s;box-shadow:0}.hoverable:hover{transition:box-shadow .25s;box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width:992px){.pagination{width:100%}.pagination li.next,.pagination li.prev{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:hsla(0,0%,100%,.7)}.breadcrumb [class*=mdi-],.breadcrumb [class^=mdi-],.breadcrumb i,.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:hsla(0,0%,100%,.7);vertical-align:top;display:inline-block;font-family:Material Icons;font-weight:400;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax{top:0;left:0;right:0;z-index:-1}.parallax,.parallax img{position:absolute;bottom:0}.parallax img{display:none;left:50%;min-width:100%;min-height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);transform:translateX(-50%)}.pin-bottom,.pin-top{position:relative}.pinned{position:fixed!important}.fade-in,ul.staggered-list li{opacity:0}.fade-in{transform-origin:0 50%}@media only screen and (max-width:600px){.hide-on-small-and-down,.hide-on-small-only{display:none!important}}@media only screen and (max-width:992px){.hide-on-med-and-down{display:none!important}}@media only screen and (min-width:601px){.hide-on-med-and-up{display:none!important}}@media only screen and (min-width:600px) and (max-width:992px){.hide-on-med-only{display:none!important}}@media only screen and (min-width:993px){.hide-on-large-only{display:none!important}}@media only screen and (min-width:993px){.show-on-large{display:block!important}}@media only screen and (min-width:600px) and (max-width:992px){.show-on-medium{display:block!important}}@media only screen and (max-width:600px){.show-on-small{display:block!important}}@media only screen and (min-width:601px){.show-on-medium-and-up{display:block!important}}@media only screen and (max-width:992px){.show-on-medium-and-down{display:block!important}}@media only screen and (max-width:600px){.center-on-small-only{text-align:center}}footer.page-footer{margin-top:20px;padding-top:20px;background-color:#ee6e73}footer.page-footer .footer-copyright{overflow:hidden;height:50px;line-height:50px;color:hsla(0,0%,100%,.8);background-color:rgba(51,51,51,.08)}table,td,th{border:none}table{width:100%;display:table}table.bordered>tbody>tr,table.bordered>thead>tr{border-bottom:1px solid #d0d0d0}table.striped>tbody>tr:nth-child(odd){background-color:#f2f2f2}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:#f2f2f2}table.centered tbody tr td,table.centered thead tr th{text-align:center}thead{border-bottom:1px solid #d0d0d0}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width:992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\A0'}table.responsive-table td,table.responsive-table th{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th:before{content:\"\\A0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid #d0d0d0}table.responsive-table.bordered th{border-bottom:0;border-left:0}table.responsive-table.bordered td{border-left:0;border-right:0;border-bottom:0}table.responsive-table.bordered tr{border:0}table.responsive-table.bordered tbody tr{border-right:1px solid #d0d0d0}}.collection{margin:.5rem 0 1rem;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar .circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}span.badge{min-width:3rem;padding:0 6px;text-align:center;font-size:1rem;line-height:inherit;color:#757575;position:absolute;right:15px;box-sizing:border-box}span.badge.new{font-weight:300;font-size:.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}span.badge[data-badge-caption]:after{content:\" \" attr(data-badge-caption)}nav ul a span.badge{position:static;margin-left:4px;line-height:0}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container embed,.video-container iframe,.video-container object{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;transition:width .3s linear}.progress .determinate,.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{animation:indeterminate 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.progress .indeterminate:after,.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right}.progress .indeterminate:after{animation:indeterminate-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}.hide{display:none!important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left!important}.right{float:right!important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0!important}.material-icons{text-rendering:optimizeLegibility;font-feature-settings:'liga'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width:601px){.container{width:85%}}@media only screen and (min-width:993px){.container{width:70%}}.container .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*=pull-],.row .col[class*=push-]{position:relative}.row .col.s1{width:8.33333%}.row .col.s1,.row .col.s2{margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.66667%}.row .col.s3{width:25%}.row .col.s3,.row .col.s4{margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.33333%}.row .col.s5{width:41.66667%}.row .col.s5,.row .col.s6{margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%}.row .col.s7{width:58.33333%}.row .col.s7,.row .col.s8{margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.66667%}.row .col.s9{width:75%}.row .col.s9,.row .col.s10{margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.33333%}.row .col.s11{width:91.66667%}.row .col.s11,.row .col.s12{margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%}.row .col.offset-s1{margin-left:8.33333%}.row .col.pull-s1{right:8.33333%}.row .col.push-s1{left:8.33333%}.row .col.offset-s2{margin-left:16.66667%}.row .col.pull-s2{right:16.66667%}.row .col.push-s2{left:16.66667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.33333%}.row .col.pull-s4{right:33.33333%}.row .col.push-s4{left:33.33333%}.row .col.offset-s5{margin-left:41.66667%}.row .col.pull-s5{right:41.66667%}.row .col.push-s5{left:41.66667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.33333%}.row .col.pull-s7{right:58.33333%}.row .col.push-s7{left:58.33333%}.row .col.offset-s8{margin-left:66.66667%}.row .col.pull-s8{right:66.66667%}.row .col.push-s8{left:66.66667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.33333%}.row .col.pull-s10{right:83.33333%}.row .col.push-s10{left:83.33333%}.row .col.offset-s11{margin-left:91.66667%}.row .col.pull-s11{right:91.66667%}.row .col.push-s11{left:91.66667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width:601px){.row .col.m1{width:8.33333%}.row .col.m1,.row .col.m2{margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.66667%}.row .col.m3{width:25%}.row .col.m3,.row .col.m4{margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.33333%}.row .col.m5{width:41.66667%}.row .col.m5,.row .col.m6{margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%}.row .col.m7{width:58.33333%}.row .col.m7,.row .col.m8{margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.66667%}.row .col.m9{width:75%}.row .col.m9,.row .col.m10{margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.33333%}.row .col.m11{width:91.66667%}.row .col.m11,.row .col.m12{margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%}.row .col.offset-m1{margin-left:8.33333%}.row .col.pull-m1{right:8.33333%}.row .col.push-m1{left:8.33333%}.row .col.offset-m2{margin-left:16.66667%}.row .col.pull-m2{right:16.66667%}.row .col.push-m2{left:16.66667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.33333%}.row .col.pull-m4{right:33.33333%}.row .col.push-m4{left:33.33333%}.row .col.offset-m5{margin-left:41.66667%}.row .col.pull-m5{right:41.66667%}.row .col.push-m5{left:41.66667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.33333%}.row .col.pull-m7{right:58.33333%}.row .col.push-m7{left:58.33333%}.row .col.offset-m8{margin-left:66.66667%}.row .col.pull-m8{right:66.66667%}.row .col.push-m8{left:66.66667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.33333%}.row .col.pull-m10{right:83.33333%}.row .col.push-m10{left:83.33333%}.row .col.offset-m11{margin-left:91.66667%}.row .col.pull-m11{right:91.66667%}.row .col.push-m11{left:91.66667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width:993px){.row .col.l1{width:8.33333%}.row .col.l1,.row .col.l2{margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.66667%}.row .col.l3{width:25%}.row .col.l3,.row .col.l4{margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.33333%}.row .col.l5{width:41.66667%}.row .col.l5,.row .col.l6{margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%}.row .col.l7{width:58.33333%}.row .col.l7,.row .col.l8{margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.66667%}.row .col.l9{width:75%}.row .col.l9,.row .col.l10{margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.33333%}.row .col.l11{width:91.66667%}.row .col.l11,.row .col.l12{margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%}.row .col.offset-l1{margin-left:8.33333%}.row .col.pull-l1{right:8.33333%}.row .col.push-l1{left:8.33333%}.row .col.offset-l2{margin-left:16.66667%}.row .col.pull-l2{right:16.66667%}.row .col.push-l2{left:16.66667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.33333%}.row .col.pull-l4{right:33.33333%}.row .col.push-l4{left:33.33333%}.row .col.offset-l5{margin-left:41.66667%}.row .col.pull-l5{right:41.66667%}.row .col.push-l5{left:41.66667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.33333%}.row .col.pull-l7{right:58.33333%}.row .col.push-l7{left:58.33333%}.row .col.offset-l8{margin-left:66.66667%}.row .col.pull-l8{right:66.66667%}.row .col.push-l8{left:66.66667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.33333%}.row .col.pull-l10{right:83.33333%}.row .col.push-l10{left:83.33333%}.row .col.offset-l11{margin-left:91.66667%}.row .col.pull-l11{right:91.66667%}.row .col.push-l11{left:91.66667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}nav{background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav,nav a{color:#fff}nav [class*=mdi-],nav [class^=mdi-],nav i,nav i.material-icons{display:block;font-size:2rem;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width:993px){nav a.button-collapse{display:none}}nav .button-collapse{float:left;position:relative;z-index:1;height:56px}nav .button-collapse i{font-size:2.7rem;height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0;white-space:nowrap}nav .brand-logo.center{left:50%;transform:translateX(-50%)}@media only screen and (max-width:992px){nav .brand-logo{left:50%;transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;transform:none}nav .brand-logo.left{left:.5rem}nav .brand-logo.right{right:.5rem;left:auto}}nav .brand-logo.right{right:.5rem;padding:0}nav .brand-logo [class*=mdi-],nav .brand-logo [class^=mdi-],nav .brand-logo i,nav .brand-logo i.material-icons{float:left;margin-right:15px}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-flat,nav ul a.btn-floating,nav ul a.btn-large{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a:hover{background-color:rgba(0,0,0,.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=date]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=text]:valid,nav .input-field input[type=url]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:hsla(0,0%,100%,.7);transition:color .3s}nav .input-field label.active i{color:#fff}nav .input-field label.active{transform:translateY(0)}.navbar-fixed{position:relative;height:56px;z-index:998}.navbar-fixed nav{position:fixed}@media only screen and (min-width:601px){nav,nav .nav-wrapper i,nav a.button-collapse,nav a.button-collapse i{height:64px;line-height:64px}.navbar-fixed{height:64px}}@font-face{font-family:Roboto;src:local(Roboto Thin),url(" + __webpack_require__(7) + ");src:url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(42) + ") format(\"woff2\"),url(" + __webpack_require__(41) + ") format(\"woff\"),url(" + __webpack_require__(29) + ") format(\"truetype\");font-weight:200}@font-face{font-family:Roboto;src:local(Roboto Light),url(" + __webpack_require__(4) + ");src:url(" + __webpack_require__(4) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(36) + ") format(\"woff2\"),url(" + __webpack_require__(35) + ") format(\"woff\"),url(" + __webpack_require__(26) + ") format(\"truetype\");font-weight:300}@font-face{font-family:Roboto;src:local(Roboto Regular),url(" + __webpack_require__(6) + ");src:url(" + __webpack_require__(6) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(40) + ") format(\"woff2\"),url(" + __webpack_require__(39) + ") format(\"woff\"),url(" + __webpack_require__(28) + ") format(\"truetype\");font-weight:400}@font-face{font-family:Roboto;src:url(" + __webpack_require__(5) + ");src:url(" + __webpack_require__(5) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(38) + ") format(\"woff2\"),url(" + __webpack_require__(37) + ") format(\"woff\"),url(" + __webpack_require__(27) + ") format(\"truetype\");font-weight:500}@font-face{font-family:Roboto;src:url(" + __webpack_require__(3) + ");src:url(" + __webpack_require__(3) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(34) + ") format(\"woff2\"),url(" + __webpack_require__(33) + ") format(\"woff\"),url(" + __webpack_require__(25) + ") format(\"truetype\");font-weight:700}a{text-decoration:none}html{line-height:1.5;font-family:Roboto,sans-serif;font-weight:400;color:rgba(0,0,0,.87)}@media only screen and (min-width:0){html{font-size:14px}}@media only screen and (min-width:992px){html{font-size:14.5px}}@media only screen and (min-width:1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.1}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;margin:2.1rem 0 1.68rem}h1,h2{line-height:110%}h2{font-size:3.56rem;margin:1.78rem 0 1.424rem}h3{font-size:2.92rem;margin:1.46rem 0 1.168rem}h3,h4{line-height:110%}h4{font-size:2.28rem;margin:1.14rem 0 .912rem}h5{font-size:1.64rem;margin:.82rem 0 .656rem}h5,h6{line-height:110%}h6{font-size:1rem;margin:.5rem 0 .4rem}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light,footer.page-footer .footer-copyright{font-weight:300}.thin{font-weight:200}.flow-text{font-weight:300}@media only screen and (min-width:360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width:390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width:420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width:450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width:480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width:510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width:540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width:570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width:600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width:630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width:660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width:690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width:720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width:750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width:780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width:810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width:840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width:870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width:900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width:930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width:960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width:360px){.flow-text{font-size:1.2rem}}.card-panel{padding:20px}.card,.card-panel{transition:box-shadow .25s;margin:.5rem 0 1rem;border-radius:2px;background-color:#fff}.card{position:relative}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.large,.card.medium,.card.small{position:relative}.card.large .card-image,.card.medium .card-image,.card.small .card-image{max-height:60%;overflow:hidden}.card.large .card-image+.card-content,.card.medium .card-image+.card-content,.card.small .card-image+.card-content{max-height:40%}.card.large .card-content,.card.medium .card-content,.card.small .card-content{max-height:100%;overflow:hidden}.card.large .card-action,.card.medium .card-action,.card.small .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:flex}.card.horizontal.large .card-image,.card.horizontal.medium .card-image,.card.horizontal.small .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.large .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.small .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{max-width:100%;width:auto}.card.horizontal .card-stacked{display:flex;flex-direction:column;flex:1;position:relative}.card.horizontal .card-stacked .card-content{flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;padding:20px}.card .card-content{padding:20px;border-radius:0 0 2px 2px}.card .card-content p{margin:0;color:inherit}.card .card-content .card-title{line-height:48px}.card .card-action{position:relative;background-color:inherit;border-top:1px solid hsla(0,0%,63%,.2);padding:20px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:20px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:20px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width:600px){#toast-container{min-width:100%;bottom:0}}@media only screen and (min-width:601px) and (max-width:992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width:993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:0;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;word-break:break-all;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:flex;align-items:center;justify-content:space-between}.toast .btn,.toast .btn-flat,.toast .btn-large{margin:0;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width:600px){.toast{width:100%;border-radius:0}}@media only screen and (min-width:601px) and (max-width:992px){.toast{float:left}}@media only screen and (min-width:993px){.toast{float:right}}.tabs{display:flex;position:relative;overflow-x:auto;overflow-y:hidden;height:48px;background-color:#fff;margin:0 auto;width:100%;white-space:nowrap}.tabs .tab{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;float:left;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase;letter-spacing:.8px;width:15%;min-width:80px}.tabs .tab,.tabs .tab a{display:block;text-overflow:ellipsis;overflow:hidden}.tabs .tab a{color:#ee6e73;width:100%;height:100%;transition:color .28s ease}.tabs .tab a:hover{color:#f9c9cb}.tabs .tab.disabled a{color:#f9c9cb;cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left,right}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none}.backdrop,.material-tooltip{opacity:0;display:none;position:absolute}.backdrop{height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;transform-origin:50% 0;transform:translateZ(0)}.btn,.btn-flat,.btn-large{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;outline:0;padding:0 2rem;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn-floating.disabled,.btn-floating:disabled,.btn-floating[disabled],.btn-large.disabled,.btn-large:disabled,.btn-large[disabled],.btn.disabled,.btn:disabled,.btn[disabled],.disabled.btn-large,[disabled].btn-large{background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.btn-floating.disabled *,.btn-floating:disabled *,.btn-floating[disabled] *,.btn-large.disabled *,.btn-large:disabled *,.btn-large[disabled] *,.btn.disabled *,.btn:disabled *,.btn[disabled] *,.disabled.btn-large *,[disabled].btn-large *{pointer-events:none}.btn-floating.disabled:hover,.btn-floating:disabled:hover,.btn-floating[disabled]:hover,.btn-large.disabled:hover,.btn-large:disabled:hover,.btn-large[disabled]:hover,.btn.disabled:hover,.btn:disabled:hover,.btn[disabled]:hover,.disabled.btn-large:hover,[disabled].btn-large:hover{background-color:#dfdfdf!important;color:#9f9f9f!important}.btn-flat i,.btn-floating i,.btn-large i,.btn i{font-size:1.3rem;line-height:inherit}.btn,.btn-large{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:.2s ease-out;cursor:pointer}.btn-large:hover,.btn:hover{background-color:#2bbbad}.btn-floating{position:relative;overflow:hidden;z-index:1;width:37px;height:37px;padding:0;background-color:#26a69a;border-radius:50%;transition:.3s;cursor:pointer;vertical-align:middle}.btn-floating,.btn-floating i{display:inline-block;color:#fff;line-height:37px}.btn-floating i{width:inherit;text-align:center;font-size:1.6rem}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:55.5px;height:55.5px}.btn-floating.btn-large i{line-height:55.5px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:998}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.horizontal{padding:0 0 0 15px}.fixed-action-btn.horizontal ul{text-align:right;right:64px;top:50%;transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.horizontal ul li{display:inline-block;margin:15px 15px 0 0}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.btn-flat{box-shadow:none;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat,.btn-flat:active,.btn-flat:focus{background-color:transparent}.btn-flat:hover{background-color:rgba(0,0,0,.1);box-shadow:none}.btn-flat.disabled{color:#b3b3b3;cursor:default}.btn-large{height:54px;line-height:54px}.btn-large i{font-size:1.6rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;max-height:650px;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width,height}.dropdown-content li{clear:both;color:rgba(0,0,0,.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left;text-transform:none}.dropdown-content li.active,.dropdown-content li.selected,.dropdown-content li:hover{background-color:#eee}.dropdown-content li.active.selected{background-color:#e1e1e1}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:3px;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit}/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;will-change:opacity,transform;transition:all .3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,.2);transition:all .7s ease-out;transition-property:transform,opacity;transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:hsla(0,0%,100%,.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,.7)}.waves-effect input[type=button],.waves-effect input[type=reset],.waves-effect input[type=submit]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{transition:none!important}.waves-circle{transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle,#fff 100%,#000 0)}.waves-input-wrapper{border-radius:.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top,opacity}@media only screen and (max-width:992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%}.modal .modal-footer .btn,.modal .modal-footer .btn-flat,.modal .modal-footer .btn-large{float:right;margin:6px 0}.lean-overlay{position:fixed;z-index:999;top:-100px;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom,opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem}.collapsible-header{display:block;cursor:pointer;min-height:3rem;line-height:3rem;padding:0 1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header i{width:2rem;font-size:1.6rem;line-height:3rem;display:block;float:left;text-align:center;margin-right:1rem}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box}.collapsible-body p{margin:0;padding:2rem}.side-nav .collapsible,.side-nav.fixed .collapsible{border:none;box-shadow:none}.side-nav .collapsible li,.side-nav.fixed .collapsible li{padding:0}.side-nav .collapsible-header,.side-nav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.side-nav .collapsible-header:hover,.side-nav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,.05)}.side-nav .collapsible-header i,.side-nav.fixed .collapsible-header i{line-height:inherit}.side-nav .collapsible-body,.side-nav.fixed .collapsible-body{border:0;background-color:#fff}.side-nav .collapsible-body li a,.side-nav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin:0 24px;transition:margin .35s cubic-bezier(.25,.46,.45,.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;box-shadow:none;margin-bottom:30px;min-height:45px;outline:none;padding-bottom:5px;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .chip.selected{background-color:#26a69a;color:#fff}.chips .input{background:none;border:0;color:rgba(0,0,0,.6);display:inline-block;font-size:13px;font-weight:500;height:32px;margin-right:20px;line-height:32px;outline:0;padding:0!important;width:120px!important}.chips .input:focus{border:0!important;box-shadow:none!important}.materialboxed{display:block;cursor:zoom-in;position:relative;transition:opacity .4s}.materialboxed:hover{will-change:left,top,width,height}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;width:100%;text-align:center;padding:0 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}:-moz-placeholder,::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}input:not([type]),input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:1rem;margin:0 0 20px;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}input:not([type]):disabled,input:not([type])[readonly=readonly],input[type=date]:disabled,input[type=date][readonly=readonly],input[type=datetime-local]:disabled,input[type=datetime-local][readonly=readonly],input[type=datetime]:disabled,input[type=datetime][readonly=readonly],input[type=email]:disabled,input[type=email][readonly=readonly],input[type=number]:disabled,input[type=number][readonly=readonly],input[type=password]:disabled,input[type=password][readonly=readonly],input[type=search]:disabled,input[type=search][readonly=readonly],input[type=tel]:disabled,input[type=tel][readonly=readonly],input[type=text]:disabled,input[type=text][readonly=readonly],input[type=time]:disabled,input[type=time][readonly=readonly],input[type=url]:disabled,input[type=url][readonly=readonly],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=readonly]{color:rgba(0,0,0,.26);border-bottom:1px dotted rgba(0,0,0,.26)}input:not([type]):disabled+label,input:not([type])[readonly=readonly]+label,input[type=date]:disabled+label,input[type=date][readonly=readonly]+label,input[type=datetime-local]:disabled+label,input[type=datetime-local][readonly=readonly]+label,input[type=datetime]:disabled+label,input[type=datetime][readonly=readonly]+label,input[type=email]:disabled+label,input[type=email][readonly=readonly]+label,input[type=number]:disabled+label,input[type=number][readonly=readonly]+label,input[type=password]:disabled+label,input[type=password][readonly=readonly]+label,input[type=search]:disabled+label,input[type=search][readonly=readonly]+label,input[type=tel]:disabled+label,input[type=tel][readonly=readonly]+label,input[type=text]:disabled+label,input[type=text][readonly=readonly]+label,input[type=time]:disabled+label,input[type=time][readonly=readonly]+label,input[type=url]:disabled+label,input[type=url][readonly=readonly]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=readonly]+label{color:rgba(0,0,0,.26)}input:not([type]):focus:not([readonly]),input[type=date]:focus:not([readonly]),input[type=datetime-local]:focus:not([readonly]),input[type=datetime]:focus:not([readonly]),input[type=email]:focus:not([readonly]),input[type=number]:focus:not([readonly]),input[type=password]:focus:not([readonly]),input[type=search]:focus:not([readonly]),input[type=tel]:focus:not([readonly]),input[type=text]:focus:not([readonly]),input[type=time]:focus:not([readonly]),input[type=url]:focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=date]:focus:not([readonly])+label,input[type=datetime-local]:focus:not([readonly])+label,input[type=datetime]:focus:not([readonly])+label,input[type=email]:focus:not([readonly])+label,input[type=number]:focus:not([readonly])+label,input[type=password]:focus:not([readonly])+label,input[type=search]:focus:not([readonly])+label,input[type=tel]:focus:not([readonly])+label,input[type=text]:focus:not([readonly])+label,input[type=time]:focus:not([readonly])+label,input[type=url]:focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]).valid,input:not([type]):focus.valid,input[type=date].valid,input[type=date]:focus.valid,input[type=datetime-local].valid,input[type=datetime-local]:focus.valid,input[type=datetime].valid,input[type=datetime]:focus.valid,input[type=email].valid,input[type=email]:focus.valid,input[type=number].valid,input[type=number]:focus.valid,input[type=password].valid,input[type=password]:focus.valid,input[type=search].valid,input[type=search]:focus.valid,input[type=tel].valid,input[type=tel]:focus.valid,input[type=text].valid,input[type=text]:focus.valid,input[type=time].valid,input[type=time]:focus.valid,input[type=url].valid,input[type=url]:focus.valid,textarea.materialize-textarea.valid,textarea.materialize-textarea:focus.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}input:not([type]).valid+label:after,input:not([type]):focus.valid+label:after,input[type=date].valid+label:after,input[type=date]:focus.valid+label:after,input[type=datetime-local].valid+label:after,input[type=datetime-local]:focus.valid+label:after,input[type=datetime].valid+label:after,input[type=datetime]:focus.valid+label:after,input[type=email].valid+label:after,input[type=email]:focus.valid+label:after,input[type=number].valid+label:after,input[type=number]:focus.valid+label:after,input[type=password].valid+label:after,input[type=password]:focus.valid+label:after,input[type=search].valid+label:after,input[type=search]:focus.valid+label:after,input[type=tel].valid+label:after,input[type=tel]:focus.valid+label:after,input[type=text].valid+label:after,input[type=text]:focus.valid+label:after,input[type=time].valid+label:after,input[type=time]:focus.valid+label:after,input[type=url].valid+label:after,input[type=url]:focus.valid+label:after,textarea.materialize-textarea.valid+label:after,textarea.materialize-textarea:focus.valid+label:after{content:attr(data-success);color:#4caf50;opacity:1}input:not([type]).invalid,input:not([type]):focus.invalid,input[type=date].invalid,input[type=date]:focus.invalid,input[type=datetime-local].invalid,input[type=datetime-local]:focus.invalid,input[type=datetime].invalid,input[type=datetime]:focus.invalid,input[type=email].invalid,input[type=email]:focus.invalid,input[type=number].invalid,input[type=number]:focus.invalid,input[type=password].invalid,input[type=password]:focus.invalid,input[type=search].invalid,input[type=search]:focus.invalid,input[type=tel].invalid,input[type=tel]:focus.invalid,input[type=text].invalid,input[type=text]:focus.invalid,input[type=time].invalid,input[type=time]:focus.invalid,input[type=url].invalid,input[type=url]:focus.invalid,textarea.materialize-textarea.invalid,textarea.materialize-textarea:focus.invalid{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}input:not([type]).invalid+label:after,input:not([type]):focus.invalid+label:after,input[type=date].invalid+label:after,input[type=date]:focus.invalid+label:after,input[type=datetime-local].invalid+label:after,input[type=datetime-local]:focus.invalid+label:after,input[type=datetime].invalid+label:after,input[type=datetime]:focus.invalid+label:after,input[type=email].invalid+label:after,input[type=email]:focus.invalid+label:after,input[type=number].invalid+label:after,input[type=number]:focus.invalid+label:after,input[type=password].invalid+label:after,input[type=password]:focus.invalid+label:after,input[type=search].invalid+label:after,input[type=search]:focus.invalid+label:after,input[type=tel].invalid+label:after,input[type=tel]:focus.invalid+label:after,input[type=text].invalid+label:after,input[type=text]:focus.invalid+label:after,input[type=time].invalid+label:after,input[type=time]:focus.invalid+label:after,input[type=url].invalid+label:after,input[type=url]:focus.invalid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea:focus.invalid+label:after{content:attr(data-error);color:#f44336;opacity:1}input:not([type]).validate+label,input[type=date].validate+label,input[type=datetime-local].validate+label,input[type=datetime].validate+label,input[type=email].validate+label,input[type=number].validate+label,input[type=password].validate+label,input[type=search].validate+label,input[type=tel].validate+label,input[type=text].validate+label,input[type=time].validate+label,input[type=url].validate+label,textarea.materialize-textarea.validate+label{width:100%;pointer-events:none}input:not([type])+label:after,input[type=date]+label:after,input[type=datetime-local]+label:after,input[type=datetime]+label:after,input[type=email]+label:after,input[type=number]+label:after,input[type=password]+label:after,input[type=search]+label:after,input[type=tel]+label:after,input[type=text]+label:after,input[type=time]+label:after,input[type=url]+label:after,textarea.materialize-textarea+label:after{display:block;content:\"\";position:absolute;top:60px;opacity:0;transition:opacity .2s ease-out,color .2s ease-out}.input-field{position:relative;margin-top:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix~.validate~label,.input-field.col .prefix~label{width:calc(100% - 3rem - 1.5rem)}.input-field label{color:#9e9e9e;position:absolute;top:.8rem;font-size:1rem;cursor:text;transition:.2s ease-out}.input-field label.active{font-size:.8rem;transform:translateY(-140%)}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s}.input-field .prefix.active{color:#26a69a}.input-field .prefix~.autocomplete-content,.input-field .prefix~.validate~label,.input-field .prefix~input,.input-field .prefix~label,.input-field .prefix~textarea{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix~label{margin-left:3rem}@media only screen and (max-width:992px){.input-field .prefix~input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width:600px){.input-field .prefix~input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;padding-left:4rem;width:calc(100% - 4rem)}.input-field input[type=search]:focus{background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus+label i,.input-field input[type=search]:focus~.material-icons,.input-field input[type=search]:focus~.mdi-navigation-close{color:#444}.input-field input[type=search]+label{left:1rem}.input-field input[type=search]~.material-icons,.input-field input[type=search]~.mdi-navigation-close{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:color .3s}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{overflow-y:hidden;padding:.8rem 0 1.6rem;resize:none;min-height:3rem}.hiddendiv{display:none;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem}.autocomplete-content{margin-top:-15px;display:block;opacity:1;position:static}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}[type=radio]:checked,[type=radio]:not(:checked){position:absolute;left:-9999px;opacity:0}[type=radio]:checked+label,[type=radio]:not(:checked)+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;user-select:none}[type=radio]+label:after,[type=radio]+label:before{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type=radio].with-gap:checked+label:after,[type=radio].with-gap:checked+label:before,[type=radio]:checked+label:after,[type=radio]:checked+label:before,[type=radio]:not(:checked)+label:after,[type=radio]:not(:checked)+label:before{border-radius:50%}[type=radio]:not(:checked)+label:after,[type=radio]:not(:checked)+label:before{border:2px solid #5a5a5a}[type=radio]:not(:checked)+label:after{z-index:-1;transform:scale(0)}[type=radio]:checked+label:before{border:2px solid transparent}[type=radio].with-gap:checked+label:after,[type=radio].with-gap:checked+label:before,[type=radio]:checked+label:after{border:2px solid #26a69a}[type=radio].with-gap:checked+label:after,[type=radio]:checked+label:after{background-color:#26a69a;z-index:0}[type=radio]:checked+label:after{transform:scale(1.02)}[type=radio].with-gap:checked+label:after{transform:scale(.5)}[type=radio].tabbed:focus+label:before{box-shadow:0 0 0 10px rgba(0,0,0,.1)}[type=radio].with-gap:disabled:checked+label:before{border:2px solid rgba(0,0,0,.26)}[type=radio].with-gap:disabled:checked+label:after{border:none;background-color:rgba(0,0,0,.26)}[type=radio]:disabled:checked+label:before,[type=radio]:disabled:not(:checked)+label:before{background-color:transparent;border-color:rgba(0,0,0,.26)}[type=radio]:disabled+label{color:rgba(0,0,0,.26)}[type=radio]:disabled:not(:checked)+label:before{border-color:rgba(0,0,0,.26)}[type=radio]:disabled:checked+label:after{background-color:rgba(0,0,0,.26);border-color:#bdbdbd}form p{margin-bottom:10px;text-align:left}form p:last-child{margin-bottom:0}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;left:-9999px;opacity:0}[type=checkbox]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}[type=checkbox]+label:before,[type=checkbox]:not(.filled-in)+label:after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:2px;transition:.2s}[type=checkbox]:not(.filled-in)+label:after{border:0;transform:scale(0)}[type=checkbox]:not(:checked):disabled+label:before{border:none;background-color:rgba(0,0,0,.26)}[type=checkbox].tabbed:focus+label:after{transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}[type=checkbox]:checked+label:before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;transform:rotate(40deg);backface-visibility:hidden;transform-origin:100% 100%}[type=checkbox]:checked:disabled+label:before{border-right:2px solid rgba(0,0,0,.26);border-bottom:2px solid rgba(0,0,0,.26)}[type=checkbox]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;transform:rotate(90deg);backface-visibility:hidden;transform-origin:100% 100%}[type=checkbox]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,.26);background-color:transparent}[type=checkbox].filled-in+label:after{border-radius:2px}[type=checkbox].filled-in+label:after,[type=checkbox].filled-in+label:before{content:'';left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}[type=checkbox].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotate(37deg);transform:rotate(37deg);-webkit-transform-origin:20% 40%;transform-origin:100% 100%}[type=checkbox].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0;z-index:0}[type=checkbox].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotate(37deg);transform:rotate(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=checkbox].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=checkbox].filled-in.tabbed:focus+label:after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,.1)}[type=checkbox].filled-in.tabbed:checked:focus+label:after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type=checkbox].filled-in:disabled:not(:checked)+label:before{background-color:transparent;border:2px solid transparent}[type=checkbox].filled-in:disabled:not(:checked)+label:after{border-color:transparent;background-color:#bdbdbd}[type=checkbox].filled-in:disabled:checked+label:before{background-color:transparent}[type=checkbox].filled-in:disabled:checked+label:after{background-color:#bdbdbd;border-color:#bdbdbd}.switch,.switch *{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a;left:24px}.switch label .lever{content:\"\";display:inline-block;position:relative;width:40px;height:15px;background-color:#818181;border-radius:15px;margin-right:10px;transition:background .3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:21px;height:21px;background-color:#f1f1f1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,.4);left:-5px;top:-3px;transition:left .3s ease,background .3s ease,box-shadow .1s ease}input[type=checkbox]:checked:not(:disabled).tabbed:focus~.lever:after,input[type=checkbox]:checked:not(:disabled)~.lever:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,.4),0 0 0 15px rgba(38,166,154,.1)}input[type=checkbox]:not(:disabled).tabbed:focus~.lever:after,input[type=checkbox]:not(:disabled)~.lever:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,.4),0 0 0 15px rgba(0,0,0,.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#bdbdbd}select{display:none}select.browser-default{display:block}select{background-color:hsla(0,0%,100%,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:1rem;margin:0 0 20px;padding:0;display:block}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:16px;font-size:10px}.select-wrapper span.caret.disabled{color:rgba(0,0,0,.26)}.select-wrapper+label{position:absolute;top:-14px;font-size:.8rem}select:disabled{color:rgba(0,0,0,.3)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,.3);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;border-bottom:1px solid rgba(0,0,0,.3)}.select-wrapper i{color:rgba(0,0,0,.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,.3);background-color:transparent}.prefix~.select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix~label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,.4)}.select-dropdown li.optgroup~li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;top:10px;margin-left:-6px;transform-origin:50% 50%;transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#26a69a;transform-origin:50% 50%;margin:-5px 0 0;transition:.3s}input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}input[type=range]{border:1px solid #fff}input[type=range]::-moz-range-track{height:3px;background:#ddd;border:none}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input[type=range]:focus::-moz-range-track{background:#ccc}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a}input[type=range]:focus::-ms-fill-lower{background:#888}input[type=range]:focus::-ms-fill-upper{background:#ccc}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{font-weight:300;color:#757575;padding-left:20px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:19px;border-left:1px solid #ea4a4f}.table-of-contents a.active{font-weight:500;padding-left:18px;border-left:2px solid #ea4a4f}.side-nav{position:fixed;width:300px;left:0;top:0;margin:0;transform:translateX(-100%);height:calc(100% + 60px);height:100%;padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;backface-visibility:hidden;transform:translateX(-105%)}.side-nav.right-aligned{right:0;transform:translateX(105%);left:auto;transform:translateX(100%)}.side-nav .collapsible{margin:0}.side-nav li{float:none;line-height:48px}.side-nav li.active{background-color:rgba(0,0,0,.05)}.side-nav a{color:rgba(0,0,0,.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.side-nav a:hover{background-color:rgba(0,0,0,.05)}.side-nav a.btn,.side-nav a.btn-flat,.side-nav a.btn-floating,.side-nav a.btn-large{margin:10px 15px}.side-nav a.btn,.side-nav a.btn-floating,.side-nav a.btn-large{color:#fff}.side-nav a.btn-flat{color:#343434}.side-nav a.btn-large:hover,.side-nav a.btn:hover{background-color:#2bbbad}.side-nav a.btn-floating:hover{background-color:#26a69a}.side-nav li>a>[class*=mdi-],.side-nav li>a>[class^=mdi-],.side-nav li>a>i,.side-nav li>a>i.material-icons{float:left;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,.54)}.side-nav .divider{margin:8px 0 0}.side-nav .subheader{cursor:auto;pointer-events:none;color:rgba(0,0,0,.54);font-size:14px;font-weight:500;line-height:48px}.side-nav .subheader:hover{background-color:transparent}.side-nav .userView{overflow:hidden;position:relative;padding:32px 32px 0;margin-bottom:8px}.side-nav .userView a{height:auto;padding:0}.side-nav .userView a:hover{background-color:transparent}.side-nav .userView .background{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.side-nav .userView .circle,.side-nav .userView .email,.side-nav .userView .name{display:block}.side-nav .userView .circle{height:64px;width:64px}.side-nav .userView .email,.side-nav .userView .name{font-weight:14px;line-height:24px}.side-nav .userView .name{margin-top:16px;font-weight:500}.side-nav .userView .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.side-nav.fixed a{display:block;padding:0 16px;color:rgba(0,0,0,.87)}.side-nav.fixed{left:0;transform:translateX(0);position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width:992px){.side-nav.fixed{transform:translateX(-105%)}.side-nav.fixed.right-aligned{transform:translateX(105%)}.side-nav a{padding:0 16px}.side-nav .userView{padding:16px 16px 0}}.side-nav .collapsible-body li.active,.side-nav.fixed .collapsible-body li.active{background-color:#ee6e73}.side-nav .collapsible-body li.active a,.side-nav.fixed .collapsible-body li.active a{color:#fff}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,.5);z-index:997;will-change:opacity}.preloader-wrapper{display:inline-block;position:relative;width:48px;height:48px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(1turn)}}@keyframes container-rotate{to{transform:rotate(1turn)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,blue-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,blue-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,red-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,red-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,green-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,green-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-green-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(3turn)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes blue-fade-in-out{0%{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}to{opacity:1}}@keyframes blue-fade-in-out{0%{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}to{opacity:1}}@-webkit-keyframes red-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}to{opacity:0}}@keyframes green-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}to{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent!important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent!important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out .4s cubic-bezier(.4,0,.2,1);animation:container-rotate 1568ms linear infinite,fade-out .4s cubic-bezier(.4,0,.2,1)}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:50%}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4caf50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;perspective:500px;transform-style:preserve-3d;transform-origin:0 50%}.carousel.carousel-slider{top:0;left:0;height:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{display:none;width:200px;height:400px;position:absolute;top:0;left:0}.carousel .carousel-item img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:hsla(0,0%,100%,.5);transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.picker{font-size:16px;text-align:left;line-height:1.2;color:#000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker__holder{width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */.picker__frame,.picker__holder{bottom:0;left:0;right:0;top:100%}.picker__holder{position:fixed;-webkit-transition:background .15s ease-out,top 0s .15s;transition:background .15s ease-out,top 0s .15s;-webkit-backface-visibility:hidden}.picker__frame{position:absolute;margin:0 auto;min-width:256px;width:300px;max-height:350px;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-moz-opacity:0;opacity:0;-webkit-transition:all .15s ease-out;transition:all .15s ease-out}@media (min-height:28.875em){.picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}}@media (min-height:40.125em){.picker__frame{margin-bottom:7.5%}}.picker__wrap{display:table;width:100%;height:100%}@media (min-height:28.875em){.picker__wrap{display:block}}.picker__box{background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.picker__box{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 12px 36px 16px rgba(0,0,0,.24)}}.picker--opened .picker__holder{top:0;background:transparent;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";zoom:1;background:rgba(0,0,0,.32);-webkit-transition:background .15s ease-out;transition:background .15s ease-out}.picker--opened .picker__frame{top:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-moz-opacity:1;opacity:1}@media (min-height:35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__input.picker__input--active{border-color:#e3f2fd}.picker__frame{margin:0 auto;max-width:325px}@media (min-height:38.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__box{padding:0 1em}.picker__header{text-align:center;position:relative;margin-top:.75em}.picker__month,.picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__select--month,.picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker__select--month.browser-default{display:inline;background-color:#fff;width:40%}.picker__select--year.browser-default{display:inline;background-color:#fff;width:26%}.picker__select--month:focus,.picker__select--year:focus{border-color:rgba(0,0,0,.05)}.picker__nav--next,.picker__nav--prev{position:absolute;padding:.5em 1.25em;width:1em;height:1em;box-sizing:content-box;top:-.25em}.picker__nav--prev{left:-1em;padding-right:1.25em}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__nav--disabled,.picker__nav--disabled:before,.picker__nav--disabled:before:hover,.picker__nav--disabled:hover{cursor:default;background:none;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__table{border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__table,.picker__table td,.picker__table th{text-align:center}.picker__table td{margin:0;padding:0}.picker__weekday{width:14.285714286%;font-size:.75em;padding-bottom:.25em;color:#999;font-weight:500}@media (min-height:33.875em){.picker__weekday{padding-bottom:.5em}}.picker__day--today{position:relative;color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day--disabled:before{border-top-color:#aaa}.picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__day--outfocus:hover{cursor:pointer;color:#ddd;font-weight:500}.picker--focused .picker__day--highlighted,.picker__day--highlighted:hover{cursor:pointer}.picker--focused .picker__day--selected,.picker__day--selected,.picker__day--selected:hover{border-radius:50%;transform:scale(.75);background:#0089ec;color:#fff}.picker--focused .picker__day--disabled,.picker__day--disabled,.picker__day--disabled:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__day--highlighted.picker__day--disabled,.picker__day--highlighted.picker__day--disabled:hover{background:#bbb}.picker__footer{text-align:center;display:flex;align-items:center;justify-content:space-between}.picker__button--clear,.picker__button--close,.picker__button--today{border:1px solid #fff;background:#fff;font-size:.8em;padding:.66em 0;font-weight:700;width:33%;display:inline-block;vertical-align:bottom}.picker__button--clear:hover,.picker__button--close:hover,.picker__button--today:hover{cursor:pointer;color:#000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__button--clear:focus,.picker__button--close:focus,.picker__button--today:focus{background:#b1dcfb;border-color:rgba(0,0,0,.05);outline:none}.picker__button--clear:before,.picker__button--close:before,.picker__button--today:before{position:relative;display:inline-block;height:0}.picker__button--clear:before,.picker__button--today:before{content:\" \";margin-right:.45em}.picker__button--today:before{top:-.05em;width:0;border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker__button--clear:before{top:-.25em;width:.66em;border-top:3px solid #e20}.picker__button--close:before{content:\"\\D7\";top:-.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777}.picker__button--today[disabled],.picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__button--today[disabled]:before{border-top-color:#aaa}.picker__box{border-radius:2px;overflow:hidden}.picker__date-display{text-align:center;background-color:#26a69a;color:#fff;padding-bottom:15px;font-weight:300}.picker__nav--next:hover,.picker__nav--prev:hover{cursor:pointer;color:#000;background:#a1ded8}.picker__weekday-display{background-color:#1f897f;padding:10px;font-weight:200;letter-spacing:.5;font-size:1rem;margin-bottom:15px}.picker__month-display{text-transform:uppercase;font-size:2rem}.picker__day-display{font-size:4.5rem;font-weight:400}.picker__year-display{font-size:1.8rem;color:hsla(0,0%,100%,.4)}.picker__box{padding:0}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__table{margin-top:0;margin-bottom:.5em}.picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day.picker__day--today{color:#26a69a}.picker__day.picker__day--today.picker__day--selected{color:#fff}.picker__weekday{font-size:.9rem}.picker--focused .picker__day--selected,.picker__day--selected,.picker__day--selected:hover{border-radius:50%;transform:scale(.9);background-color:#26a69a;color:#fff}.picker--focused .picker__day--selected.picker__day--outfocus,.picker__day--selected.picker__day--outfocus,.picker__day--selected:hover.picker__day--outfocus{background-color:#a1ded8}.picker__footer{text-align:right;padding:5px 10px}.picker__close,.picker__today{font-size:1.1rem;padding:0 1rem;color:#26a69a}.picker__nav--next:before,.picker__nav--prev:before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:.75em solid #676767;width:0;height:0;display:block;margin:0 auto}.picker__nav--next:before{border-right:0;border-left:.75em solid #676767}button.picker__clear:focus,button.picker__close:focus,button.picker__today:focus{background-color:#a1ded8}.picker__list{list-style:none;padding:.75em 0 4.2em;margin:0}.picker__list-item{border-bottom:1px solid #ddd;border-top:1px solid #ddd;margin-bottom:-1px;position:relative;background:#fff;padding:.75em 1.25em}@media (min-height:46.75em){.picker__list-item{padding:.5em 1em}}.picker__list-item:hover{cursor:pointer;color:#000;background:#b1dcfb}.picker__list-item--highlighted,.picker__list-item:hover{border-color:#0089ec;z-index:10}.picker--focused .picker__list-item--highlighted,.picker__list-item--highlighted:hover{cursor:pointer;color:#000;background:#b1dcfb}.picker--focused .picker__list-item--selected,.picker__list-item--selected,.picker__list-item--selected:hover{background:#0089ec;color:#fff;z-index:10}.picker--focused .picker__list-item--disabled,.picker__list-item--disabled,.picker__list-item--disabled:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default;border-color:#ddd;z-index:auto}.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:none;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:#666}.picker--time .picker__button--clear:focus,.picker--time .picker__button--clear:hover{color:#000;background:#b1dcfb;background:#e20;border-color:#e20;cursor:pointer;color:#fff;outline:none}.picker--time .picker__button--clear:before{top:-.25em;color:#666;font-size:1.25em;font-weight:700}.picker--time .picker__button--clear:focus:before,.picker--time .picker__button--clear:hover:before{color:#fff}.picker--time .picker__frame{min-width:256px;max-width:320px}.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}@media (min-height:40.125em){.picker--time .picker__box{margin-bottom:5em}}", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./../sass-loader/index.js!./materialize-styles.loader.js!./../babel-loader/index.js?{\"presets\":[\"es2015\"]}!./materialize.config.js", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./../sass-loader/index.js!./materialize-styles.loader.js!./../babel-loader/index.js?{\"presets\":[\"es2015\"]}!./materialize.config.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dc81817def276b4f21395f7ea5e88dcd.woff";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "39b2c3031be6b4ea96e2e3e95d307814.woff2";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b813c2ae0d04909a33a18d792912ee7.woff";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "69f8a0617ac472f78e45841323a3df9e.woff2";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc78759e93a6cac50458610e3d9d63a0.woff";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "574fd0b50367f886d359e8264938fc37.woff2";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ba3dcd8903e3d0af5de7792777f8ae0d.woff";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2751ee43015f9884c3642f103b7f70c9.woff2";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7500519de3d82e33d1587f8042e2afcb.woff";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "954bbdeb86483e4ffea00c4591530ece.woff2";

/***/ },
/* 43 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
/******/ ]);