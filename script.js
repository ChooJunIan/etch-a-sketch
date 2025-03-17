function createBoard() {
  let container = document.querySelector('.container');

  for (let row = 0; row < 16; row++) {
    let newDivRow = document.createElement('div');
    newDivRow.setAttribute("class", "divRow");

    for (let col = 0; col < 16; col++) {
      let box = document.createElement('div');
      box.setAttribute("class", "box"); 
      box.textContent = 'text';
      newDivRow.appendChild(box);
    }
    container.appendChild(newDivRow);
  }
}

function resetBoard() {
  let container = document.querySelector('.container');
  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  createBoard();
}

createBoard();

let resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetBoard)

let container = document.querySelector('.container');
container.addEventListener('mouseover', (event) => {
  var target = event.target;
  if (target.className === 'box' ) {
    target.classList.add('colouredBox');
  }
})