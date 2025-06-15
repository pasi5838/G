const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.dataset.index;
        if (board[index] === '' && gameActive) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                document.getElementById('result').textContent = currentPlayer + ' Wins!';
                gameActive = false;
                startConfetti();
                setTimeout(() => {
                    stopConfetti();
                    fadeCanvas();
                }, 3000);
            } else if (board.every(cell => cell !== '')) {
                document.getElementById('result').textContent = 'Draw!';
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    document.getElementById('result').textContent = '';
    currentPlayer = 'X';
    gameActive = true;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function fadeCanvas() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.style.transition = 'opacity 1s ease';
    canvas.style.opacity = 0;
}