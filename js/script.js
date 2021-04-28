function playGame(playerInput) {
  console.log('Wywołano funkcję playGame z argumentem playerInput')

  clearMessages()
    console.log('Wywołano funkcję clearMessages');


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

  const displayResult = function(argComputerMove, argPlayerMove) {
    console.log('wykonano ruchy. Komputer:', argComputerMove, '. Gracz:', argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Wygrywa gracz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Przegrywa gracz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Przegrywa gracz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Wygrywa gracz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Przegrywa gracz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Przegrywa gracz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    }
  }

  const computerMove = getMoveName(randomNumber);
  printMessage('Komputer: ' + computerMove);
  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Gracz: ' + playerMove);
  displayResult(playerMove, computerMove); 


}
document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame('3');
});


