let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

let playerBoard = document.getElementById('player-choice');
let computerBoard = document.getElementById('comp-choice');
let msg = document.getElementById('msg');

const emojiMap = {
  rock: "🪨",
  paper: "📃",
  scissors: "✂️",
};


const computerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice].id;
}
// console.log(computerChoice());


choices.forEach(choice => {
  // console.log(choice);
  choice.addEventListener('click', () => {
    // console.log(choice.id);
    const playerChoice = choice.id;
    const compChoice = computerChoice();

    playerBoard.textContent = emojiMap[playerChoice];
    computerBoard.textContent = emojiMap[compChoice];

    console.log(playerChoice, compChoice);
    playGame(playerChoice, compChoice);
  });
})

const playGame = (playerChoice, compChoice) => {
  if (playerChoice === compChoice) {
    console.log('Tie');
    msg.textContent = `😐 It's a tie! You both picked  ${emojiMap[playerChoice]}`;
    msg.style.backgroundColor = 'rgba(255, 255, 0, 0.47)';
  }
  else if (
    playerChoice === 'rock' && compChoice === 'scissors' ||
    playerChoice === 'paper' && compChoice === 'rock' ||
    playerChoice === 'scissors' && compChoice === 'paper'
  ) {
    console.log('Player wins');
    msg.textContent = `🎉 You win! ${emojiMap[playerChoice]} beats ${emojiMap[compChoice]}`;
    msg.style.backgroundColor = 'green';
    playerScore++;
  }
  else {
    console.log('Computer wins');
    msg.textContent = `🤖 Computer wins! ${emojiMap[compChoice]} beats ${emojiMap[playerChoice]}`;
    msg.style.backgroundColor = 'red';
    computerScore++;
  }
  console.log(playerScore, computerScore);
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}