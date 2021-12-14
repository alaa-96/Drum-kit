let btns = document.querySelectorAll('.drum');
let crashAudio = new Audio('sounds/crash.mp3');
let kickAudio = new Audio('sounds/kick-bass.mp3');
let snareAudio = new Audio('sounds/snare.mp3');
let tom1Audio = new Audio('sounds/tom-1.mp3');
let tom2Audio = new Audio('sounds/tom-2.mp3');
let tom3Audio = new Audio('sounds/tom-3.mp3');
let tom4Audio = new Audio('sounds/tom-4.mp3');

// Detecting button press
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let btnInnerHtml = this.innerHTML;
    soundHandler(btnInnerHtml);
    btnAnimation(btnInnerHtml);
  });
}

// Detecting keyboard press
document.addEventListener('keydown', function (e) {
  let key = e.key;
  soundHandler(key);
  btnAnimation(key);
});

// Sound handler function
function soundHandler(value) {
  switch (value) {
    case `w`:
      crashAudio.play();
      break;
    case `a`:
      kickAudio.play();
      break;
    case `s`:
      snareAudio.play();
      break;
    case `d`:
      tom1Audio.play();
      break;
    case `j`:
      tom2Audio.play();
      break;
    case `k`:
      tom3Audio.play();
      break;
    case `l`:
      tom4Audio.play();
      break;
    default:
      break;
  }
}

function btnAnimation(currentKey) {
  let activeBtn = document.querySelector('.' + currentKey);
  activeBtn.classList.add('pressed');
  setTimeout(function () {
    activeBtn.classList.remove('pressed');
  }, 100);
}
