function spin() {
    const symbols = ['🍒', '🍋', '🔔', '🍉', '⭐', '7️⃣'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    reel1.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    const result = document.getElementById('result');
    if (reel1.innerHTML === reel2.innerHTML && reel2.innerHTML === reel3.innerHTML) {
        result.innerHTML = '¡Ganaste!';
    } else {
        result.innerHTML = 'Inténtalo de nuevo.';
    }
}


