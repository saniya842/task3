const cells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset-btn');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameState[index] === '') {
      gameState[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

resetBtn.addEventListener('click', () => {
  gameState = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
});

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] !== '' &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      alert(`Player ${gameState[a]} wins!`);
      resetBtn.click();
      return;
    }
  }
}

