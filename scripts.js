/*The codes below were largely influenced by tutorials from personal research and adapted to achieve my desired outcome, please refer to references in the README.md, thank you. */

/*------ For card flips and storage when clicked---- Credits to Marina-Ferreira */
const cards = document.querySelectorAll('.card');

let cardIsFlipped = false;
let cardOne, cardTwo;

function cardFlip() {
  this.classList.add('flip');
  
    if (!cardIsFlipped) {
    //Indicates first card is clicked
    cardIsFlipped = true;
    cardOne = this;
}   else {
    //Indicates second card is clicked
    cardIsFlipped = false;
    cardTwo = this;
    console.log({cardOne, cardTwo});
  }
}

cards.forEach(card => card.addEventListener('click', cardFlip));

/*------ For Overlay Contents---- Credits to  */


