/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;

  while (i < haystack.length) {
    while (i < haystack.length && needle[0] != haystack[i]) i++;

    let j = 0;
    while (i < haystack.length) {
      if (haystack[i + j] != needle[j]) {
        break;
      }

      j++;

      if (j == needle.length) {
        return (i);
      }
    }

    i++;
  }

  return -1;



};