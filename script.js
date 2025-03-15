let container = document.querySelector('.container');

for (let row = 0; row < 16; row++) {
  let newDivRow = document.createElement('div');
  newDivRow.setAttribute("class", "divRow");

  for (let col = 0; col < 16; col++) {
    let box = document.createElement('div');
    box.textContent = 'box';
    newDivRow.appendChild(box);
  }
  container.appendChild(newDivRow);
}