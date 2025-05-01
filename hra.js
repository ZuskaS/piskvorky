import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const boardFields = document.querySelectorAll('.tabulka .policko');
const imgCurrentPlayer = document.querySelector('.leftSide img');

boardFields.forEach((policko) => {
  policko.addEventListener('click', (event) => {
    event.target.disabled = true;
    if (currentPlayer === 'circle') {
      event.target.classList.add('board__field--circle');
      currentPlayer = 'cross';
    } else {
      event.target.classList.add('board__field--cross');
      currentPlayer = 'circle';
    }
    if (currentPlayer === 'circle') {
      imgCurrentPlayer.src = 'public/circle.svg';
    } else {
      imgCurrentPlayer.src = 'public/cross.svg';
    }

    const playBoard = Array.from(boardFields).map((policko) => {
      if (policko.classList.contains('board__field--cross')) return 'x';
      if (policko.classList.contains('board__field--circle')) return 'o';
      return '_';
    });

    const winner = findWinner(playBoard);

    if (winner === 'x' || winner === 'o') {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      window.location.reload();
    }

    if (winner === 'tie') {
      alert(`Hra skončila remízou.`);
      window.location.reload();
    }
  });
});
