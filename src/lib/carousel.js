import { TweenLite, TweenMax, Power2 } from 'gsap';
import CSSPlugin from 'gsap/src/uncompressed/plugins/CSSPlugin';
import Draggable from 'gsap/src/uncompressed/utils/Draggable';

const carousel = function () {

  let activeID;
  const itemW = $('.carousel_item').width();
  const carousel_count = $('.carousel_item').length;
  const	$carouselItems = $('.carousel_items');
  const	$carouselItem = $('.carousel_item');
  const $navDots = $('.nav_dots');
  const	slideSpeed = 0.45;
  const slideMeth = Power2.EaseInOut;
  let swipeDir;
  let $navDot;

  function init() {
    $carouselItems.css({'width': (itemW * carousel_count) + 'px'});
    $navDots.css({ 'width': (25 * carousel_count) + 'px' });

    setupDraggable();
    setupDots();
    setupItems();
    showSlide(1, true);
  }

// ----- SETUP

  function setupDraggable() {
    Draggable.create($carouselItems, {
      type: 'x',
      edgeResistance: 0.90,
      dragResistance: 0.0,
      bounds: '.carousel_container',
      onDrag: updateDirections,
      onThrowUpdate: updateDirections,
      throwProps: true,
      onDragStart(evt) {},
      onDragEnd() {
        let slideId = activeID;
        if (swipeDir === 'left') {
          slideId++
        } else if (swipeDir === 'right'){
           slideId--
          };
        showSlide(slideId);
      }
    });
  }

  function setupDots() {
    for (var i = 0; i < carousel_count; i++) {
      $navDots.append('<div class="nav_dot" id="dot_' + i + '"></div>');
    }
    $navDot = $('.nav_dot');

    $navDot.hover(
      function() {
        TweenMax.to($(this), .35, {scale: 1.5});
      }, function() {
        if($(this).attr('id').split('_')[1] == activeID) return;
        TweenMax.to($(this), .35, {scale: 1.0});
      }
    );

    $navDot.click(function() {
      var dotID = $(this).attr('id').split('_')[1];
      showSlide(dotID);
    });
  }

  function setupItems() {
    $carouselItem.mousedown(function() {
      activeID = $(this).attr('id').split('_')[1];

      $(this).removeClass('grab');
      $(this).addClass('grabbing');
    });

    $carouselItem.mouseenter(function() {
      $(this).removeClass('grabbing');
      $(this).addClass('grab');
    });

    $carouselItem.mouseup(function() {
      $(this).removeClass('grabbing');
      $(this).addClass('grab');
    });
  }

// ----- RUN
  function showSlide(id, skipAnimation = false) {
    activeID = id;
    if (activeID >= carousel_count-1) activeID = carousel_count-1;
    if (activeID <= 0) activeID = 0;

    const xTarget = ((activeID * itemW) * -1);
    let speed = skipAnimation ? 0 : slideSpeed;

    TweenMax.to($carouselItems, speed, {x: xTarget, ease: slideMeth, onComplete: slideDone});
  }

  function slideDone() {
    $navDot.css({ backgroundColor: '#fff' });

    TweenMax.to($navDot, .35, {scale: 1, color: 0xFFFFFF});
    TweenMax.to($('#dot_' + activeID), 0.35, { scale: 1.5, backgroundColor: 'transparent',color: '#fff' });
  }

  function updateDirections() {
    swipeDir = this.getDirection("start");
  }

  return {
    'init': init,
  }
};

export default carousel;
