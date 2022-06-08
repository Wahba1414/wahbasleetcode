var removePalindromeSub = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] == s[end]) {
      start++;
      end--;
    } else {
      break;
    }
  }

  let counter = (start >= end) ? 1 : 2;

  return counter;

};