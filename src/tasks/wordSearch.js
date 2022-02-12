export default class WordSearch {
  constructor(letterGrid) {
    const grid = [];
    for (const row of letterGrid) {
      grid.push(row);
    }

    this.letterGrid = grid;
  }

  find(words) {
    const finalResult = {};
    // horizontal search
    for (const word of words) {
      for (let i = 0; i < this.letterGrid.length; i++) {
        const row = this.letterGrid[i];
        const result = findWordInString(word, row, i);
        if (result !== -1) finalResult[word] = result;
      }
    }
    // vertical search

    const columns = [];
    for (let i = 0; i < this.letterGrid.length; i++) {
      const temporaryColumn = [];
      for (let j = 0; j < this.letterGrid[i].length; j++) {
        temporaryColumn[j] = this.letterGrid[j][i];
        if (temporaryColumn.length === this.letterGrid[i].length) {
          columns.push(temporaryColumn.join(''));
        }
      }
    }

    for (const word of words) {
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];

        const result = findWordInString(word, column, i);
        if (result !== -1) finalResult[word] = result;
      }
    }

    return finalResult;
  }
}

const findWordInString = (word, row, rowIndex) => {
  let startCoordinate = row.indexOf(word);
  if (startCoordinate === -1) {
    startCoordinate = row.split('').reverse().join('').indexOf(word);
  }

  const result =
    startCoordinate === -1 ? -1 : [rowIndex + 1, startCoordinate + 1];
  return result;
};

// const verticalSearch = () => {};
