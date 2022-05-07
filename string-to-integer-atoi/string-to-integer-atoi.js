/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function(str) {
  var i = 0;
  var sign = 1;
  var res = 0;
  var INT_MAX = 2147483647;
  var INT_MIN = - INT_MAX - 1;

  while (str[i] === ' ') i++;

  if (str[i] === '+' || str[i] === '-') {
    sign = str[i] === '+' ? 1 : -1;
    i++;
  }

  while (str[i] >= '0' && str[i] <= '9') {
    res = (res * 10) + (str[i] - 0);
    if (sign === 1 && res > INT_MAX) return INT_MAX;
    if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }

  return res * sign;
};
// var myAtoi = function (s) {
//   let len = s.length;
//   let newS = '';
//   let number;

//   for (let i = 0; i < len; i++) {
//     if (/[0-9-+]/.test(s[i])) {
//       newS += s[i];
//     } else if (!newS && s[i] == ' ') {
//       //skip
//     } else {
//       break;
//     }
//   }

//   console.log('newS: ', newS);

//   number = +newS;

//   if (isNaN(number)) {
//     console.log('Is not a number');
//     return 0;
//   }

//   if (number < Math.pow(-2, 31)) {
//     number = Math.pow(-2, 31);
//   } else if (number > (Math.pow(2, 31) - 1)) {
//     number = Math.pow(2, 31) - 1;
//   }

//   return number;
// };