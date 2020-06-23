const board = document.querySelector('#hex_board');

const fragment = new DocumentFragment();

for (let i = 0; i < 10; i++) {
  const row = document.createElement('div');
  row.className = 'hex_row';
  for (let j = 0; j < 10; j++) {
    const hex = document.createElement('div');
    hex.className = 'hex_container';
    hex.dataset.x = j;
    hex.dataset.y = i;
    hex.title = `x: ${j}, y: ${i}`;
    for (let k = 0; k < 3; k++) {
      const baseRectangle = document.createElement('div');
      const random = Math.floor(Math.random() * 10)
      const threshold = 5;
      switch (k) {
        case 0:
          baseRectangle.className = random > threshold ? 'rectangle both_border' : 'rectangle';
          baseRectangle.dataset.rotation = 0;
          if (j === 9) {
            baseRectangle.className = 'rectangle right_border';
          } else if (j === 0) {
            baseRectangle.className = 'rectangle left_border';
          }
          break;
        case 1:
          baseRectangle.className = random > threshold ? 'rectangle both_border rectangle_1' : 'rectangle no_border rectangle_1';
          baseRectangle.dataset.rotation = 60;
          if (j === 9  && i % 2 !== 0) {
            baseRectangle.className = 'rectangle right_border rectangle_1';
          } else if (j === 0 && i % 2 === 0) {
            baseRectangle.className = 'rectangle left_border rectangle_1';
          }

          if (i === 0) {
            baseRectangle.className = 'rectangle left_border rectangle_1';
          } else if (i === 9) {
            baseRectangle.className = 'rectangle right_border rectangle_1';
          }
          
          // if (j === 9 && i ===9) {
          //   baseRectangle.className = 'rectangle both_border rectangle_1';
          // }
          break;
        case 2:
          baseRectangle.className = random > threshold ? 'rectangle both_border rectangle_2' : 'rectangle no_border rectangle_2';
          baseRectangle.dataset.rotation = 120;
          if (j === 9 && i % 2 !== 0) {
            baseRectangle.className = 'rectangle right_border rectangle_2';
          } else if (j === 0 && i % 2 === 0) {
            baseRectangle.className = 'rectangle left_border rectangle_2';
          }

          if (i === 0 && i % 2 === 0) {
            baseRectangle.className = 'rectangle right_border rectangle_2';
          } else if (i === 9) {
            baseRectangle.className = 'rectangle left_border rectangle_2';
          }

          if ((i === 0 && j === 0) || (i === 9 && j ===9)) {
            baseRectangle.className = 'rectangle both_border rectangle_2';
          }
          break;
      }
      
      hex.appendChild(baseRectangle);
    }
    row.appendChild(hex);
  }
  fragment.appendChild(row);
}
const targetHexIndex = Math.floor(Math.random() * 100);
const targetHex = fragment.querySelectorAll('.hex_container')[targetHexIndex];

const targetRect = Math.floor(Math.random() * 3);
const hexRect = targetHex.childNodes[targetRect];



board.appendChild(fragment);

