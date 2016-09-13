const landingButton = document.getElementById('landing-button');
const breatheOut = {
                     visible: true,
                     scale: 0.8,
                     delay: 2
                   };
const breatheIn =  {
                     scale: 1,
                     delay: 2,
                     ease: Power1.easeInOut,
                     yoyo: true,
                     repeat: -1
                   };

const breathe = TweenMax.fromTo('.demo', 5, breatheOut, breatheIn);
const start = function() {
  TweenMax.fromTo('#landing-button', 0.2, {scale: 1}, {scale: 15, ease: Power1.easeIn});
}

landingButton.addEventListener('click', start);
