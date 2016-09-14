const landingButton = document.getElementById('landing-button');

<<<<<<< Updated upstream
const landingCatReveal = TweenMax.to('.landing-cat-round', 2.5, {y:420, ease: Elastic.easeInOut.config(0.5, 0.2), onComplete: function() {
=======
//landingButton.addEventListener('click', start);

const landingCatReveal = TweenMax.to('.landing-cat-round', 2.5, {css:{'margin-top':'15%', opacity: 1}, ease: Elastic.easeInOut.config(0.5, 0.2), onComplete: function() {
>>>>>>> Stashed changes
TweenMax.to('#landing-button', 0.5, {css:{opacity:1}})
} });

const start = function() {
  const tl = new TimelineMax();
  tl.add( TweenMax.fromTo('#landing-button', 0.4, {scale: 1}, {scale: 30, backgroundColor: '#5CA1C2', ease: Power1.easeIn}) );
  tl.add( TweenMax.to('.landing', 0.2, {display: 'none'}) );
  tl.add( TweenMax.to('.welcome', 0.2, {display: 'flex'}) );
}

const breatheOut = {
                     visible: true,
                     scale: 1,
                     delay: 2
                   };
const breatheIn =  {
                     scale: 1.2,
                     delay: 2,
                     ease: Power1.easeInOut,
                     yoyo: true,
                     repeat: -1
                   };

<<<<<<< Updated upstream
const breathe = TweenMax.fromTo('.demo', 5, breatheOut, breatheIn);

landingButton.addEventListener('click', start);
=======
const breathe = TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);
const headMovement = TweenMax.fromTo('#head', 5, {y:-0, delay: 2}, {y:-19, delay: 2, ease: Power1.easeInOut, repeat: -1, yoyo: true});
const collar = TweenMax.fromTo('#collar', 5, {y:-0, delay: 2}, {y:-19, delay: 2, ease: Power1.easeInOut, repeat: -1, yoyo: true});
>>>>>>> Stashed changes
