/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  let keys = Object.keys(romanMap);

  let roman = '';

  let i = keys.length - 1;
  let mulitple = 0;

  while (num) {
    mulitple = parseInt(num / keys[i]);

    if (mulitple) {
      roman += romanMap[keys[i]];
      num -= keys[i];
    } else {
      i--;
    }

  }

  return roman;

};