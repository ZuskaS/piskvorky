import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

document.addEventListener('DOMContentLoaded', () => {
  //nastavení hráče, který je na začátku na tahu - kolečko
  let currentPlayer = 'circle';

  //výběr všech políček herní plochy
  const boardFields = document.querySelectorAll('.tabulka .policko');

  //Element, kde se zobrazuje obrázek hráče, který je na tahu
  const imgCurrentPlayer = document.querySelector('.leftSide img');

  //pomocná funkce pro kontrolu, zda hra skončila pro kontrolu před přidáním AI hráče
  // převod DOM políček do pole se znaky 'x', 'o', nebo '_' (prázdné)
  const getPlayBoard = () => {
    return Array.from(boardFields).map((policko) => {
      if (policko.classList.contains('board__field--cross')) return 'x';
      if (policko.classList.contains('board__field--circle')) return 'o';
      return '_';
    });
  };

  //zjišťění, zda někdo vyhrál a kdo, nebo je remíza
  const checkGameState = () => {
    const winner = findWinner(getPlayBoard());

    if (winner === 'x' || winner === 'o') {
      setTimeout(() => {
        alert(`Vyhrál hráč se symbolem ${winner}.`);
        window.location.reload();
      }, 300);
      return true;
    }

    if (winner === 'tie') {
      alert(`Hra skončila nerozhodně.`);
      window.location.reload();
      return true;
    }

    return false; //hra ještě neskončila
  };

  //pomocná funkce - kontrola, zda hra skončila, zda je na tahu křížek a zavolá API a odehraje AI tah tedy křížek
  const aiMove = async () => {
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: getPlayBoard(),
          player: 'x',
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const index = x + y * 10;
    const targetField = boardFields[index]; // Najde políčko

    if (!targetField) {
      console.error('Neexistující políčko na indexu:', index, data);
      return;
    }
    targetField.click(); // Klikne na políčko, aby se provedl tah
  };

  //zaznamenání tahu hráče, střídání hráčů a aktualizace ikony hráče na tahu
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

      // změna obrázku hráče na tahu
      imgCurrentPlayer.src =
        currentPlayer === 'circle' ? 'public/circle.svg' : 'public/cross.svg';
      if (!checkGameState() && currentPlayer === 'cross') {
        setTimeout(aiMove, 5000);
      }
    });
  });
});
