/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function (n) {
  let results = { counter: 0 };

  solver(n, 1, results, []);

  // results = prepareRes(results);
  return results.counter;
};

function solver(n, rowIndex, results, solution) {
  // base case
  if (rowIndex == n + 1) {
    // console.log('solution: ', solution);
    results.counter++;
    return;
  }

  // Iterate on all possible solutions.
  for (let i = 1; i <= n; i++) {
    solution.push([rowIndex, i]);

    // console.log('solution #1: ', solution);

    if (isValid(solution)) { //Validate and decide
      // console.log('solution is valid');
      solver(n, rowIndex + 1, results, solution);
    }

    // back-tracking.
    solution.pop();
    // console.log('solution #2: ', solution);
  }

}

function isValid(solution) {
  let len = solution.length;
  let lastPos = solution[len - 1];

  for (let i = 0; i < len - 1; i++) {
    if (solution[i][0] == lastPos[0]) return false;
    if (solution[i][1] == lastPos[1]) return false;

    if (Math.abs((solution[i][0] - lastPos[0]) / (solution[i][1] - lastPos[1])) == 1) return false;
  }

  return true;

}

