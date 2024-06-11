let deck, dealerHand, playerHand;

function createDeck() {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
    return deck;
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function dealCard(hand) {
    hand.push(deck.pop());
    return hand;
}

function calculateScore(hand) {
    let score = 0;
    let aceCount = 0;

    for (let card of hand) {
        if (card.value === 'A') {
            aceCount++;
            score += 11;
        } else if (['K', 'Q', 'J'].includes(card.value)) {
            score += 10;
        } else {
            score += parseInt(card.value);
        }
    }

    while (score > 21 && aceCount > 0) {
        score -= 10;
        aceCount--;
    }

    return score;
}

function updateUI() {
    document.getElementById('dealer-cards').innerHTML = dealerHand.map(card => `<div class="card">${card.value}${card.suit}</div>`).join('');
    document.getElementById('player-cards').innerHTML = playerHand.map(card => `<div class="card">${card.value}${card.suit}</div>`).join('');

    document.getElementById('dealer-score').innerText = `Puntuación: ${calculateScore(dealerHand)}`;
    document.getElementById('player-score').innerText = `Puntuación: ${calculateScore(playerHand)}`;
}

function hit() {
    dealCard(playerHand);
    updateUI();

    if (calculateScore(playerHand) > 21) {
        document.getElementById('result').innerText = '¡Te has pasado! El dealer gana.';
        endGame();
    }
}

function stand() {
    while (calculateScore(dealerHand) < 17) {
        dealCard(dealerHand);
    }
    updateUI();

    const dealerScore = calculateScore(dealerHand);
    const playerScore = calculateScore(playerHand);

    if (dealerScore > 21 || playerScore > dealerScore) {
        document.getElementById('result').innerText = '¡Has ganado!';
    } else if (dealerScore === playerScore) {
        document.getElementById('result').innerText = '¡Empate!';
    } else {
        document.getElementById('result').innerText = 'El dealer gana.';
    }
    endGame();
}

function endGame() {
    document.querySelector('button[onclick="hit()"]').disabled = true;
    document.querySelector('button[onclick="stand()"]').disabled = true;
}

function restart() {
    deck = shuffle(createDeck());
    dealerHand = [];
    playerHand = [];

    dealCard(dealerHand);
    dealCard(playerHand);
    dealCard(playerHand);

    updateUI();

    document.getElementById('result').innerText = '';

    document.querySelector('button[onclick="hit()"]').disabled = false;
    document.querySelector('button[onclick="stand()"]').disabled = false;
}

restart();
