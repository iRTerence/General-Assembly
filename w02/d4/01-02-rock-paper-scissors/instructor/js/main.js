/*----- constants -----*/
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const lookupRPS = [ROCK, PAPER, SCISSORS];

const rps = {};
rps[ROCK] = {
  beats: SCISSORS,
  imgUrl: 'imgs/rock.png'
};
rps[PAPER] = {
  beats: ROCK,
  imgUrl: 'imgs/paper.png'
};
rps[SCISSORS] = {
  beats: PAPER,
  imgUrl: 'imgs/scissors.png'
};

const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const goAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let scores, results, winner, playerChoice;

/*----- cached element references -----*/
const pScoreEl = document.querySelector('#player h2');
const cScoreEl = document.querySelector('#computer h2');
const tScoreEl = document.querySelector('#middle h2');

const pResultEl = document.querySelector('#player div div');
const cResultEl = document.querySelector('#computer div div');

const countdownEl = document.querySelector('#middle div');

const startBtnEl = document.getElementById('start-btn');
const choicesEl = document.getElementById('player-choices');

const rockBtnEl = document.querySelector('#player-choices button:first-child');
const paperBtnEl = document.querySelector('#player-choices button:nth-child(2)');
const scissorsBtnEl = document.querySelector('#player-choices button:last-child');

/*----- event listeners -----*/
document.getElementById('start-btn').addEventListener('click', playHand);

rockBtnEl.addEventListener('click', selectChoice(ROCK));
paperBtnEl.addEventListener('click', selectChoice(PAPER));
scissorsBtnEl.addEventListener('click', selectChoice(SCISSORS));

/*----- functions -----*/
initialize();

function initialize() {
  scores = {
    player: 0,
    computer: 0,
    tie: 0
  };
  // display rocks at start
  results = {
    player: ROCK,
    computer: ROCK
  };
  winner = null;
  playerChoice = null;
  count = 0;
  render();
}

function selectChoice(choice) {
  return function() {
    if (playerChoice === choice) {
      playerChoice = null;
    } else {
      playerChoice = choice;
    }
    renderSelected();
  };
}

function playHand() {
  // go is a callback (see below) to be run after the countdown finishes
  doCountdown(go);
}

function doCountdown(cb) {
  let count = 3;
  beepAudio.play();
  renderCountdown(count);
  let timerId = setInterval(function() {
    count--;
    if (count) {
      beepAudio.play();
      countdownEl.textContent = count;
    } else {
      clearInterval(timerId);
      goAudio.play();
      renderCountdown(count);
      cb();
    }
  }, 1000);
}

function go() {
  results.player = playerChoice || lookupRPS[getRandomIdx()];
  results.computer = lookupRPS[getRandomIdx()];
  winner = getWinner();
  playerChoice = null;
  scores[winner]++;
  render();
}

function getWinner() {
  return results.player === results.computer
    ? 'tie'
    : rps[results.player].beats === results.computer
    ? 'player'
    : 'computer';
}

function render() {
  // render scores
  pScoreEl.textContent = scores.player;
  cScoreEl.textContent = scores.computer;
  tScoreEl.textContent = scores.tie;
  // render images
  pResultEl.style.backgroundImage = `url(${rps[results.player].imgUrl})`;
  cResultEl.style.backgroundImage = `url(${rps[results.computer].imgUrl})`;
  // color border if winner, otherwise "hide" the border
  pResultEl.parentElement.style.border =
    winner === 'player' ? '10px solid darkgrey' : '10px solid white';
  cResultEl.parentElement.style.border =
    winner === 'computer' ? '10px solid darkgrey' : '10px solid white';
  renderSelected();
}

function renderSelected() {
  rockBtnEl.classList.remove('selected');
  paperBtnEl.classList.remove('selected');
  scissorsBtnEl.classList.remove('selected');
  if (playerChoice === ROCK) {
    rockBtnEl.classList.add('selected');
  } else if (playerChoice === PAPER) {
    paperBtnEl.classList.add('selected');
  } else if (playerChoice === SCISSORS) {
    scissorsBtnEl.classList.add('selected');
  }
}

function renderCountdown(count) {
  if (count) {
    countdownEl.textContent = count;
    countdownEl.style.border = '4px solid black';
    startBtnEl.style.display = 'none';
    choicesEl.style.display = 'flex';
  } else {
    startBtnEl.style.display = '';
    choicesEl.style.display = 'none';
    countdownEl.textContent = '';
    countdownEl.style.border = '4px solid white';
  }
}

function getRandomIdx() {
  return Math.floor(Math.random() * 3);
}
