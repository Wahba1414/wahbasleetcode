/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let cache = {};

  function LCS(word1, word2, n1, n2) {

    if (n1 == 0 || n2 == 0) {
      return 0;
    }

    if (cache[n1 + '-' + n2] != undefined) {
      return cache[n1 + '-' + n2];
    }

    if (word1[n1 - 1] == word2[n2 - 1]) {
      cache[n1 + '-' + n2] = 1 + LCS(word1, word2, n1 - 1, n2 - 1);
      return cache[n1 + '-' + n2];
    } else {
      cache[n1 + '-' + n2] = Math.max(LCS(word1, word2, n1 - 1, n2),
        LCS(word1, word2, n1, n2 - 1));
      return cache[n1 + '-' + n2];
    }


  }

  return (word1.length + word2.length - 2 * LCS(word1, word2, word1.length, word2.length));
};