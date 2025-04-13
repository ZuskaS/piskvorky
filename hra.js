console.log('JS je připojený');
let currentPlayer = 'circle';
const boardFields = document.querySelectorAll('.tabulka .policko');
const imgCurrentPlayer = document.querySelector('.leftSide img');

boardFields.forEach((policko) => {
  policko.addEventListener('click', (event) => {
    event.target.disabled = true;
    if (currentPlayer === 'circle') {
      imgCurrentPlayer.src = 'public/circle.svg';
      event.target.classList.add('board__field--circle');

      currentPlayer = 'cross';
    } else {
      imgCurrentPlayer.src = 'public/cross.svg';
      event.target.classList.add('board__field--cross');

      currentPlayer = 'circle';
    }
  });
});
