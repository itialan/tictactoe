const X_CLASS = 'x';
const O_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');

let circleTurn;

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? O_CLASS : X_CLASS;
  
  placeMark(cell, currentClass);

  // Switch turns
  switchTurn();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurn() {
  circleTurn = !circleTurn;
}
