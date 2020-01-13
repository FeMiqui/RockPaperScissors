//where you can make your choice
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
  {
    return userInput;                               
  }else{
    console.log('Invalid Input!');
  }
};

//This will generate the computer response
function getComputerChoice(){
  const num = Math.floor(Math.random() * 3);
  switch(num){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissor';
  }
}

//simple comparisson between rock, paper, and scissors
function determineWinner(userChoice, computerChoice){
  //cheat
  if (userChoice === 'bomb'){
    return 'You are the winner!'
  }
  
  if (userChoice === computerChoice){
    return 'Tie!';
  }
  
  if(userChoice === 'rock')
  {
    if (computerChoice === 'paper'){
      return 'Computer is the winner!';
    }else{
      return 'You are the winner!';
    }     
  }
  
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer is the winner!';
    }else{
      return 'You are the winner!';
    }
  }
}

function playGame(){
  const userChoice = getUserChoice('rock');
  console.log('User Choice is: ' + userChoice);
  
  const computerChoice = getComputerChoice();
  
console.log('Computer Choice is: ' + computerChoice);
  
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
