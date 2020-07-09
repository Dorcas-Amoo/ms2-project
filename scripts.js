/*The codes below were largely influenced by tutorials from personal research and adapted to achieve my desired outcome, please refer to references in the README.md, thank you. */

/*------ For card flips when clicked---- Credits to Marina-Ferreira */
const cards = document.querySelectorAll('.card');

function cardFlip() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', cardFlip));

/*------ For Overlay Contents---- Credits to  */
