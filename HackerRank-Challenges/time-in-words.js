'use strict';

const main = (h, m) => {
  const hourMinuteMappings = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'quarter',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '21': 'twenty one',
    '22': 'twenty two',
    '23': 'twenty three',
    '24': 'twenty four',
    '25': 'twenty five',
    '26': 'twenty six',
    '27': 'twenty seven',
    '28': 'twenty one',
    '29': 'twenty nine',
    '30': 'half',
  };

  let timeInWords = '';

  m = parseInt(m, 10);
  h = parseInt(h, 10);

  if (m === 30) {
    timeInWords = `half past ${hourMinuteMappings[h]}`;
  }
  if (m < 30) {
    if (m === 15) {
      timeInWords = `quarter past ${hourMinuteMappings[h]}`;
    } else if (m === 0) {
      timeInWords = `${hourMinuteMappings[h]} o' clock`;
    } else {
      timeInWords = `${hourMinuteMappings[m]} minute${m > 1 ? 's' : ''} past ${hourMinuteMappings[h]}`;
    }
  }
  if (m > 30 && m <= 59) {
    if (m === 45) {
      let hourMappingValue = h === 12 ? 1 : h + 1;
      timeInWords = `quarter to ${hourMinuteMappings[hourMappingValue]}`;
    } else {
      let hourMappingValue = h === 12 ? 1 : h + 1;
      let minuteMappingValue = 60 - m;
      timeInWords = `${hourMinuteMappings[minuteMappingValue]} minute${minuteMappingValue > 1 ? 's' : ''} to ${
        hourMinuteMappings[hourMappingValue]
      }`;
    }
  }
  console.log(timeInWords);
};

main(3, 0);
