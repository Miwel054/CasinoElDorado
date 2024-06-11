function stop() {
    const userNumber = document.getElementById('user-number').value;
    const result = document.getElementById('result');
    const roulette = document.getElementById('roulette');

    if (userNumber === '') {
        result.innerText = 'Por favor, introduce un número.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * 37);
    const angle = randomNumber * (360 / 37);

    roulette.style.animation = 'none';  // Stop the animation
    roulette.style.transform = `rotate(${angle}deg)`;

    if (parseInt(userNumber) === randomNumber) {
        result.innerText = `¡Felicidades! El número es ${randomNumber}. ¡Has ganado!`;
    } else {
        result.innerText = `El número es ${randomNumber}. No has ganado.`;
    }
}

function restart() {
    const roulette = document.getElementById('roulette');
    const result = document.getElementById('result');

    roulette.style.animation = 'spin 2s linear infinite';  // Restart the animation
    result.innerText = '';  // Clear the result message
    document.getElementById('user-number').value = '';  // Clear the input field
}
