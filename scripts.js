//The codes below were largely influenced by tutorials from personal research and adapted to achieve my desired outcome, please see references//

const cards = document.querySelectorAll('.card');

function cardFlip() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', cardFlip));