const digitLetterMapping = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

const letterCombinations = (digits) => {
  const digitsArray = digits.split('');
  const totalDigits = digitsArray.length;

  const allCombinations = [];

  if (digitsArray.length === 0) return allCombinations;

  const solve = (currentCombination, digitIndex) => {
    if (currentCombination.length === totalDigits) {
      allCombinations.push(currentCombination);
    } else {
      const currentDigits = digitLetterMapping[digitsArray[digitIndex]];

      for (let i = 0; i < currentDigits.length; i++) {
        const currentLetter = currentDigits[i];
        solve(currentCombination.concat(currentLetter), digitIndex + 1);
      }
    }
  };

  solve('', 0);

  return allCombinations;
};

let digits = '2345';

letterCombinations(digits);
