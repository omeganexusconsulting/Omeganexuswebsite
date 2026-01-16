let score = 0;
let spawnInterval;

function fishPop() {
    if (spawnInterval) return; // prevent multiple starts

    score = 0;

    let scoreEl = document.getElementById('score');
    if (!scoreEl) {
        scoreEl = document.createElement('div');
        scoreEl.id = 'score';
        scoreEl.textContent = 'Score: 0';
        document.body.appendChild(scoreEl);
    }

    spawnInterval = setInterval(createFish, 900);
}

function createFish() {
    const fish = document.createElement('div');
    fish.className = 'fish';

    const size = Math.random() * 30 + 40;
    fish.style.width = size + 'px';
    fish.style.height = size / 2 + 'px';
    fish.style.top = Math.random() * 80 + 'vh';

    const colors = ['orange', '#ff8c00', '#ffa500', '#ff6f00'];
    fish.style.background = colors[Math.floor(Math.random() * colors.length)];

    const duration = Math.random() * 5 + 5;
    fish.style.animationDuration = duration + 's';

    fish.addEventListener('click', () => {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        fish.classList.add('pop');
        setTimeout(() => fish.remove(), 300);
    });

    document.body.appendChild(fish);

    setTimeout(() => {
        if (fish.parentNode) fish.remove();
    }, duration * 1000);
}
