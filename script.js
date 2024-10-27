const startGameButton = document.getElementById('startGame');
const gameSection = document.getElementById('game');
const playerTurn = document.getElementById('playerTurn');
const resultText = document.getElementById('result');
const resetGameButton = document.getElementById('resetGame');
const player1Input = document.getElementById('player1Name');
const player2Input = document.getElementById('player2Name');

let player1Choice = '';
let player2Choice = '';
let currentPlayer = 1;

startGameButton.addEventListener('click', () => {
    const player1Name = player1Input.value.trim();
    const player2Name = player2Input.value.trim();

    if (!player1Name || !player2Name) {
        alert('Masukkan nama kedua pemain!');
        return;
    }

    playerTurn.textContent = `Giliran ${player1Name}`;
    gameSection.style.display = 'block';
});

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.getAttribute('data-choice');

        if (currentPlayer === 1) {
            player1Choice = choice;
            currentPlayer = 2;
            playerTurn.textContent = `Giliran ${player2Input.value}`;
        } else {
            player2Choice = choice;
            determineWinner();
            currentPlayer = 1;
        }
    });
});

function determineWinner() {
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;

    if (player1Choice === player2Choice) {
        resultText.textContent = 'Seri!';
    } else if (
        (player1Choice === 'batu' && player2Choice === 'gunting') ||
        (player1Choice === 'gunting' && player2Choice === 'kertas') ||
        (player1Choice === 'kertas' && player2Choice === 'batu')
    ) {
        resultText.textContent = `${player1Name} Menang!`;
    } else {
        resultText.textContent = `${player2Name} Menang!`;
    }
    playerTurn.textContent = 'Permainan selesai';
}

resetGameButton.addEventListener('click', () => {
    player1Choice = '';
    player2Choice = '';
    resultText.textContent = '';
    playerTurn.textContent = `Giliran ${player1Input.value}`;
});
