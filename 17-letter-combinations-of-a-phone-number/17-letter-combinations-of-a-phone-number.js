var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let result = [];

  // Recursive function to all repeatitive logic (Map num to letter list, loop, push to the leaf, backtracking)
  function engineRec(digitNo, leaf) {
    // base case
    if (leaf.length == digits.length) {
      result.push(leaf.join(''));
      return;
    }

    // recursive case
    let chars = map[+digits[digitNo]];

    for (let char of chars) {
      leaf.push(char);
      engineRec(digitNo + 1, leaf);
      leaf.pop();
    }

  }

  engineRec(0, []);
  return result;

};