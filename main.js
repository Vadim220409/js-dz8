//  ex 1

const btn = document.querySelector('.new-game');
const spn = document.querySelector('.key');
const title = document.querySelector('.game-status');
const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let keyI = 0;

function startGame() {
    keyI = Math.floor(Math.random() * keys.length);
    spn.textContent = keys[keyI];
    title.textContent = 'Гра розпочата';
}

function checkKey(event) {
    if (event.key === keys[keyI]) {
        keyI = (keyI + 1) % keys.length;
        spn.textContent = keys[keyI];
        new PNotify({
            title: 'Успіх',
            text: 'Ви натиснули правильну клавішу',
            type: 'success'
        });
    } else {
        new PNotify({
            title: 'Помилка',
            text: 'Ви натиснули неправильну клавішу',
            type: 'error'
        });
    }
}

function newGame() {
    startGame();
    new PNotify({
        title: 'Нова гра',
        text: 'Гра оновлена, натисніть наступну клавішу',
        type: 'info'
    });
}

btn.addEventListener('click', newGame);
document.addEventListener('keydown', checkKey);
document.addEventListener('keypress', event => event.preventDefault());


//  ex 2

document.addEventListener('DOMContentLoaded', function () {
    const chartData = {
      labels: Array.from({ length: 31 }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Продажі за останній місяць',
          data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          borderColor: 'rgba(33, 150, 243, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const salesChart = new Chart(document.querySelector('.myChart'), {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
    });
});