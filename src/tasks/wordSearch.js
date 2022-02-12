export default class WordSearch {
  constructor(letterGrid) {
    const grid = [];
    for (let row of letterGrid) {
      grid.push(row);
    }

    this.letterGrid = grid;
  }

  find(words) {
    //horizontal search
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < this.letterGrid.length; j++) {
        const row = this.letterGrid[j];
        let result = findWordHorizontal(words[i], row, j);
        if (!(result !== -1)) return result;
      }
    }
    //vertical search
    // const rows = [];
    // for (let i = 0; i < this.letterGrid.length; i++) {
    //   for (let j = 0; j < this.letterGrid[i].length; j++) {
    //     rows[i] = this.letterGrid[i][j];
    //   }
    // }
    // console.log('rows');
    // console.log(rows);
  }
}

const findWordHorizontal = (word, row, rowIndex) => {
  let startCoordinate = row.indexOf(word);
  if (startCoordinate === -1) {
    startCoordinate = row.split('').reverse().join('').indexOf(word);
  }
  let result = -1;
  if (startCoordinate !== -1) result = [rowIndex + 1, startCoordinate + 1];
  return result;
};

const verticalSearch = () => {};
