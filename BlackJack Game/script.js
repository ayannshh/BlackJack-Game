let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector(".h2 p");
let cardsEl = document.querySelector(".h3 p:nth-child(1)");
let sumEl = document.querySelector(".h3 p:nth-child(2)");
const startBtn = document.querySelector(".button");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11; // Ace
    } else if (randomNumber > 10) {
        return 10; // Jack, Queen, King
    } else {
        return randomNumber;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [getRandomCard(), getRandomCard()];
    sum = cards[0] + cards[1];
    renderGame();
    // Show New Card button if not present
    if (!document.querySelector('.new-card')) {
        const newCardBtn = document.createElement('button');
        newCardBtn.textContent = 'New Card';
        newCardBtn.className = 'button new-card';
        newCardBtn.onclick = newCard;
        startBtn.parentNode.appendChild(newCardBtn);
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

startBtn.onclick = startGame;