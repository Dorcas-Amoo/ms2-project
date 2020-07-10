/*The codes below were largely influenced by tutorials from personal research and adapted to achieve my desired outcome, please refer to references in the README.md, thank you. */

/*------ For card flips and storage when clicked---- Credits to Marina-Ferreira */
const cards = document.querySelectorAll('.card');

let cardIsFlipped = false;
let boardLock = false;
let cardOne, cardTwo;

function cardFlip() {
    if (boardLock) return;
    if (this === cardOne) return;

  this.classList.add('flip');
  
    if (!cardIsFlipped) {
        //Indicates first card is clicked
        cardIsFlipped = true;
        cardOne = this;
        return;
    }
    //Indicates second card is clicked
    cardIsFlipped = false;
    cardTwo = this;

    checkForCardMatch();  
}

//To check for card match
function checkForCardMatch(){
    if (cardOne.dataset.name === cardTwo.dataset.name) {
    freezeCards();
    }else
    unflipCards();
}

//For matched cards
function freezeCards() {
    cardOne.removeEventListener('click', cardFlip);
    cardTwo.removeEventListener('click', cardFlip);

    resetBoard();
}    

//Check if cards are not a match and remove flip
function unflipCards() {
    boardLock = true;

    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
    
        resetBoard();
    }, 1500);
}

//To stop a card being double clicked
function resetBoard() {
  [cardIsFlipped, boardLock] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

//To shuffle cards before game starts
(function shuffle() {
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * 12);
    card.style.order = randomCard;
  });
})();

cards.forEach(card => card.addEventListener('click', cardFlip));

/*------ For Overlay Contents---- Credits to  */


