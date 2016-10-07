import { outOfBreathing,
   breathe,
   headMovement,
   fromBreathingToIntro,
   changeToFractalView,
  } from '../animations';

const breatheCtrl = () => {
  const belly = document.getElementById('belly');
  const hands = document.getElementById('hands');
  const exitBreathing = document.getElementById('exit-breathing');
  const FeelingBetterBtn = document.getElementById('feel-good-button');

  // hands.addEventListener('click', changeToFractalView);
  // belly.addEventListener('click', changeToFractalView);
  exitBreathing.addEventListener('click', fromBreathingToIntro);
  FeelingBetterBtn.addEventListener('click', outOfBreathing);

  breathe();
  headMovement();
};

export default breatheCtrl;
