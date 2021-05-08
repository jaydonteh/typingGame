var started = false;
var timer = 20;
var score = 0;
var words = [
  "reflection",
  "node",
  "disturbance",
  "assault",
  "virtue",
  "disco",
  "gene",
  "flood",
  "achieve",
  "hut",
  "deputy",
  "tidy",
  "feather",
  "conviction",
  "pop",
  "meaning",
  "bottle",
  "back",
  "irony",
  "organize",
  "mirror",
  "fog",
  "rubbish",
  "environmental",
  "abstract",
  "empirical",
  "arrow",
  "tasty",
  "as",
  "familiar",
  "identification",
  "mosaic",
  "hang",
  "remunerate",
  "stumble",
  "reconcile",
  "crown",
  "essay",
  "fling",
  "ranch",
  "language",
  "glance",
  "sight",
  "black",
  "fork",
  "prince",
  "aisle",
  "abbey",
  "youth",
  "qualify",
];

var activeWord = "";
var curTypeWord = "";

var counterTxt = $("#timer");
var scoreTxt = $("#score");
var startBtn = $("#startBtn");
var wordTxt = $("#word");

//Init wordTxt
wordTxt.text("");
function start() {
  if (started === false) {
    playSound("start");
    playSound("ding");
    started = true;
    startBtn.addClass("disabled");
    setWord();
  }
}

// Countdown Timer
setInterval(() => {
  if (started & (timer > 0)) {
    timer--;
  }

  if (timer === 0) {
    gameover();
  }

  counterTxt.text(timer);
}, 1000);

function setWord() {
  activeWord = words[Math.floor(Math.random() * words.length)];
  wordTxt.text(activeWord);
  // Reset
  curTypeWord = "";
}

// Type words
document.addEventListener("keydown", (e) => {
  if (e.key === activeWord.charAt(curTypeWord.length)) {
    curTypeWord = curTypeWord + e.key;
    playSound("ding");
    wordTxt.html(
      "<span class='curText'>" +
        curTypeWord +
        "</span>" +
        activeWord.slice(curTypeWord.length, activeWord.length)
    );

    // Word typed correctly
    if (curTypeWord === activeWord) {
      setWord();
      score++;
      scoreTxt.text(score);
    }
  }
});

// Game over
function gameover() {
  alert("Awesome! Your score is: " + score);

  timer = 20;
  started = false;
  score = 0;
  wordTxt.text("");
  scoreTxt.text(0);

  startBtn.removeClass("disabled");
}

function playSound(sound) {
  switch (sound) {
    case "start":
      var bgMusic = new Audio("sounds/music.mp3");
      bgMusic.play();
      break;

    case "ding":
      var dingSound = new Audio("sounds/start.wav");
      dingSound.play();
      break;

    default:
      break;
  }
}
