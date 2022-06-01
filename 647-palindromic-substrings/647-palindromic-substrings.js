/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let counter = s.length;

  for (let i = 0; i < s.length; i++) {

    let left = i - 1;
    let right = i + 1;

    // while (s[left] == s[i]) {
    //   console.log('left equals the current item');
    //   counter++;
    //   left--;
    // }

    while (s[right] == s[i]) {
      console.log('right equals the current item');
      counter++;
      right++;
    }

    while (left >= 0 && right < s.length) {

      if (s[left] == s[right]) {
        console.log('right equals to the left')
        counter++;
        left--;
        right++;
      } else {
        break;
      }

    }

  }

  return counter;

};