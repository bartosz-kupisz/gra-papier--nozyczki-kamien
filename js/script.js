const let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

const let computerMove = getMoveName(randomNumber);

if(playerInput == '1'){
  playerMove = 'kamień';
} else 
  if (playerInput == '2'){
  playerMove = 'papier';
} else 
  if (playerInput == '3'){
  playerMove = 'nożyczki';
}
const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

const getMoveName = function(argMoveId) { 
    console.log('Wywołano funkcję getMoveName z argumentem argMoveId: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie ma takiego ruchu jak "' + argMoveId + '"!');
    }
  }
}
const displayResult = function(argComputerMove, argPlayerMove) { 
  console.log('wykonano ruchy. Komputer:', argComputerMove, '. Gracz:', argPlayerMove);
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz!');
  }
}

const let computerMove = 'kamień';

printMessage('Twój ruch to: ' + playerMove);
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
if( computerMove == 'kamień' && playerMove == 'nożyczki'){
    printMessage('Przegrana!');
}