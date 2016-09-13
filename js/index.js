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
