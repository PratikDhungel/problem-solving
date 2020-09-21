// A coloured triangle is created from a row of colours, each of which is red, green or blue.
// Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the
// previous row. If these colours are identical, the same colour is used in the new row.
// If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour,
// is generated.

// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G

function getNewCombinedColor(color1, color2) {
  let colorCombination = `${color1}${color2}`;
  let possibleCombinations = {
    'GG': 'G',
    'BG': 'R',
    'GB': 'R',
    'RG': 'B',
    'GR': 'B',
    'BR': 'G',
    'RB': 'G',
  };
  return possibleCombinations[colorCombination];
}

function triangle(row) {
  // Return the answer
  let updatedRow;
  while (row.length > 1) {
    // console.log(`Row length`, row.length);
    let i = 0;
    updatedRow = [];
    while (i < row.length - 1) {
      // console.log(row[i], row[i + 1]);
      if (row[i] === row[i + 1]) {
        // console.log('Same element');
        updatedRow.push(row[i]);
      } else {
        // console.log('Different element');
        updatedRow.push(getNewCombinedColor(row[i], row[i + 1]));
        // console.log(
        // 'Combined color is:',
        // getNewCombinedColor(row[i], row[i + 1])
        // );
      }
      i++;
    }
    // console.log('Updated row', updatedRow);
    row = updatedRow;
    return row[0];
  }
  // console.log(row);
}

triangle('RRGBRGBB');