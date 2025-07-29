module.exports = function toReadable(number) {
  const singleNum = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const doubleNum = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let result = '';
  const remain = number % 10;

  if (number === 0) return 'zero';

  if (number < 10) {
    result = `${singleNum[number]}`;
  } else if (number < 20) {
    result = `${doubleNum[remain]}`;
  } else if (number < 100) {
    result = `${tens[(number - remain) / 10]} ${singleNum[remain]}`;
  } else if (number < 1000) {
    result = `${singleNum[Math.floor(number / 100)]} hundred`;
    if (number % 100 !== 0) {
      result += ` ${toReadable(number % 100)}`;
    }
  }
  return result.trimEnd();
};
