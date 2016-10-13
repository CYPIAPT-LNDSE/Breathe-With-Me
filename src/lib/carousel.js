/* global $ */
/* eslint-disable no-plusplus, func-names, import/no-extraneous-dependencies, no-tabs  */
import { TweenMax, Power2 } from 'gsap';
import Draggable from 'gsap/src/uncompressed/utils/Draggable';

const carousel = function () {
  let activeID;
  const itemW = $('.carousel_item').width();
  const carouselCount = $('.carousel_item').length;
  const	$carouselItems = $('.carousel_items');
  const $navDots = $('.nav_dots');
  const slideSpeed = 0.45;
  const slideMeth = Power2.EaseInOut;
  let swipeDir;
  let $navDot;

  function slideDone(id) {
    activeID = id;

    $carouselItems.find('.active').removeClass('active');
    $carouselItems.find('.carousel_item').eq(activeID).addClass('active').attr('id', `carousel_${id}`);

    $navDot.css({ backgroundColor: '#1C6C89' });
    TweenMax.to($navDot, 0.35, { scale: 1, color: '#1C6C89' });
    TweenMax.to($(`#dot_${activeID}`), 0.35, { scale: 1.5, backgroundColor: 'transparent', color: '#1C6C89' });
  }

  function showSlide(id, skipAnimation = false) {
    activeID = id;
    if (activeID >= carouselCount - 1) activeID = carouselCount - 1;
    if (activeID <= 0) activeID = 0;

    const xTarget = ((activeID * itemW) * -1);
    const speed = skipAnimation ? 0 : slideSpeed;

    TweenMax.to($carouselItems, speed, { x: xTarget, ease: slideMeth, onComplete: slideDone(activeID) });
  }

  function updateDirections() {
    swipeDir = this.getDirection('start');
  }

  const setupDraggable = () => {
    Draggable.create($carouselItems, {
      type: 'x',
      edgeResistance: 0.90,
      dragResistance: 0.0,
      bounds: '.carousel_container',
      onDrag: updateDirections,
      onThrowUpdate: updateDirections,
      throwProps: true,
      onDragStart() {
        $(this.target).removeClass('active');
      },
      onDragEnd() {
        let slideId = activeID;
        $(this.target).addClass('active');
        if (swipeDir === 'left') {
          slideId++;
        } else if (swipeDir === 'right') {
          slideId--;
        }
        showSlide(slideId, false);
      },
    });
  };

  function setupDots() {
    for (let i = 0; i < carouselCount; i++) {
      $navDots.append(`<div class="nav_dot" id="dot_${i}"></div>`);
    }
    $navDot = $('.nav_dot');

    $navDot.hover(
      function () {
        TweenMax.to($(this), 0.35, { scale: 1.5 });
      }, function () {
      if ($(this).attr('id').split('_')[1] === activeID) return;
      TweenMax.to($(this), 0.35, { scale: 1.0 });
    });

    $navDot.click(function () {
      const dotID = $(this).attr('id').split('_')[1];
      showSlide(dotID);
    });
  }

  function init() {
    $carouselItems.css({ width: (itemW * carouselCount) + 'px' });
    $navDots.css({ width: (25 * carouselCount) + 'px' });

    setupDraggable();
    setupDots();
    showSlide(1, true);
  }

  return {
    init,
  };
};

export default carousel;
