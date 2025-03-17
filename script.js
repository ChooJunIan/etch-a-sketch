function createBoard(defaultRowCol = 16) {
  let container = document.querySelector('.container');

  for (let row = 0; row < defaultRowCol; row++) {
    let newDivRow = document.createElement('div');
    newDivRow.setAttribute("class", "divRow");

    for (let col = 0; col < defaultRowCol; col++) {
      let box = document.createElement('div');
      box.setAttribute("class", "box"); 

      newDivRow.appendChild(box);
    }
    container.appendChild(newDivRow);
  }
}

function resetBoard() {
  let container = document.querySelector('.container');
  let newBoardNum = 0;
  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  do {
    newBoardNum = +prompt("How many rows do you need?") 
    if (newBoardNum > 100 || newBoardNum < 1) {
      alert(`You entered ${newBoardNum}. Number cannot be greater than 100 or smaller than 1.`)
    }
  } while (newBoardNum > 100 || newBoardNum < 1);
  createBoard(newBoardNum);
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